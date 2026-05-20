import fs from "node:fs";
import path from "node:path";
import { FEED_ROOT, readJson, writeJson } from "./storage.js";
import { readFeedSources } from "./sources.js";
import { writeMarkdown } from "./markdown.js";
import { fetchJson, fetchText, parseFeedXml } from "./net.js";
import { summarizeWithOpenAI } from "./openai.js";
import { excerpt, keywordScore, slugify, stripHtml } from "./text.js";

export async function runFeedSync() {
  const sources = readFeedSources();
  if (!sources) return { status: "missing_sources", added: 0 };

  const index = readJson(path.join(FEED_ROOT, "index.json"), { topics: [], articles: [], updated_at: null });
  const seen = new Set((index.articles || []).map((article) => article.url));
  const added = [];

  for (const topic of sources.topics.filter((item) => item.active)) {
    const items = await collectTopicItems(topic);
    let count = 0;
    for (const item of items) {
      if (!item.url || seen.has(item.url) || count >= (topic.max_articles_per_run || 4)) continue;
      const saved = await saveArticle(topic.name, item, index.articles.length + added.length + 1);
      added.push(saved);
      seen.add(item.url);
      count += 1;
    }
  }

  const nextArticles = [...added, ...(index.articles || [])].slice(0, 400);
  writeJson(path.join(FEED_ROOT, "index.json"), {
    updated_at: new Date().toISOString(),
    topics: sources.topics.map((topic) => ({ name: topic.name, active: topic.active })),
    articles: nextArticles,
  });
  return { status: "ok", added: added.length };
}

async function collectTopicItems(topic) {
  const results = [];
  for (const source of topic.sources.filter((item) => item.active)) {
    try {
      const items = await collectSourceItems(topic.name, source);
      results.push(...items);
    } catch (error) {
      console.warn(`Feed source skipped (${topic.name} / ${source.name}): ${error.message}`);
    }
  }
  const topicWords = topic.name.split(/\s+/).filter(Boolean);
  return results
    .sort((a, b) => keywordScore(b.title + b.summary, topicWords) - keywordScore(a.title + a.summary, topicWords))
    .slice(0, 12);
}

async function collectSourceItems(topicName, source) {
  if (/hacker news/i.test(source.name)) return collectHn(topicName, source);
  if (/reddit_rss|\.rss/i.test(source.type || source.url)) return collectRss(source.url, source);
  if (/arxiv/i.test(source.name)) return collectArxiv(topicName, source);
  if (/github search/i.test(source.name)) return collectGithubRepos(topicName, source);
  if (/github trending/i.test(source.name)) return collectGithubRepos(topicName, source);
  if (/github_releases/i.test(source.type)) return collectGithubReleases(source);
  return collectGenericSource(source);
}

async function collectHn(topicName, source) {
  const ids = await fetchJson("https://hacker-news.firebaseio.com/v0/showstories.json", { timeoutMs: 10000 });
  const topicWords = topicName.toLowerCase().split(/\s+/);
  const items = [];
  for (const id of ids.slice(0, 30)) {
    const item = await fetchJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, { timeoutMs: 7000 });
    const text = `${item.title || ""} ${item.text || ""}`.toLowerCase();
    if (keywordScore(text, topicWords) === 0 && !/(agent|llm|model|codex|claude|openai|ollama|developer|tool)/i.test(text)) continue;
    items.push({
      title: item.title,
      url: item.url || `https://news.ycombinator.com/item?id=${id}`,
      date: new Date((item.time || Date.now() / 1000) * 1000).toISOString(),
      source: source.name,
      type: "article",
      summary: stripHtml(item.text || ""),
      text: stripHtml(item.text || item.title || ""),
    });
  }
  return items;
}

async function collectRss(url, source) {
  const xml = await fetchText(url, { timeoutMs: 10000 });
  return parseFeedXml(xml, source.name).map((item) => ({ ...item, type: "article", text: item.summary }));
}

async function collectArxiv(topicName, source) {
  const query = encodeURIComponent(`all:${topicName.replace(/\s+/g, "+")}`);
  const xml = await fetchText(`https://export.arxiv.org/api/query?search_query=${query}&sortBy=submittedDate&sortOrder=descending&max_results=5`, { timeoutMs: 12000 });
  return parseFeedXml(xml, source.name).map((item) => ({ ...item, type: "paper", text: item.summary }));
}

async function collectGithubRepos(topicName, source) {
  const q = encodeURIComponent(`${topicName} in:name,description,readme created:>${recentDate(30)}`);
  const json = await fetchJson(`https://api.github.com/search/repositories?q=${q}&sort=updated&order=desc&per_page=5`, githubHeaders());
  return (json.items || []).map((repo) => ({
    title: repo.full_name,
    url: repo.html_url,
    date: repo.updated_at || repo.created_at,
    source: source.name,
    type: "release_notes",
    summary: repo.description || "",
    text: `${repo.full_name}\n${repo.description || ""}\nStars: ${repo.stargazers_count}`,
  }));
}

async function collectGithubReleases(source) {
  const match = source.url.match(/github\.com\/([^/]+)\/([^/]+)/i);
  if (!match) return [];
  const json = await fetchJson(`https://api.github.com/repos/${match[1]}/${match[2]}/releases?per_page=5`, githubHeaders());
  return (json || []).map((release) => ({
    title: release.name || release.tag_name,
    url: release.html_url,
    date: release.published_at,
    source: source.name,
    type: "release_notes",
    summary: stripHtml(release.body || ""),
    text: stripHtml(release.body || ""),
  }));
}

async function collectGenericSource(source) {
  const candidates = source.url.endsWith("/") ? [`${source.url}feed`, `${source.url}rss.xml`, source.url] : [source.url];
  for (const url of candidates) {
    try {
      const text = await fetchText(url, { timeoutMs: 10000 });
      if (/<(rss|feed|entry|item)\b/i.test(text)) return parseFeedXml(text, source.name).map((item) => ({ ...item, type: "article", text: item.summary })).slice(0, 5);
      const links = extractArticleLinks(text, source.url, source.name);
      if (links.length) return links;
    } catch {
      continue;
    }
  }
  return [];
}

function extractArticleLinks(html, baseUrl, sourceName) {
  const anchors = [...String(html || "").matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  const items = [];
  const seen = new Set();
  for (const [, href, labelHtml] of anchors) {
    const title = stripHtml(labelHtml);
    if (title.length < 18 || title.length > 140) continue;
    const url = absolutize(href, baseUrl);
    if (!url || seen.has(url)) continue;
    if (!/(blog|news|post|research|changelog|release|article|updates?)/i.test(url)) continue;
    const inferredDate = dateFromLabel(title);
    if (inferredDate && ageDays(inferredDate) > 30) continue;
    seen.add(url);
    items.push({
      title,
      url,
      date: inferredDate || new Date().toISOString(),
      source: sourceName,
      type: /paper|research/i.test(url + title) ? "paper" : "article",
      summary: title,
      text: title,
    });
  }
  return items.slice(0, 5);
}

function dateFromLabel(label) {
  const monthMatch = String(label || "").match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{1,2}),\s+(20\d{2})\b/i);
  if (!monthMatch) return null;
  const parsed = new Date(`${monthMatch[1]} ${monthMatch[2]}, ${monthMatch[3]}`);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

function ageDays(date) {
  const parsed = new Date(date || 0);
  if (Number.isNaN(parsed.getTime())) return 999;
  return Math.floor((Date.now() - parsed.getTime()) / 86400000);
}

function absolutize(href, baseUrl) {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return "";
  }
}

async function saveArticle(topicName, item, ordinal) {
  const date = normalizeDate(item.date);
  const slug = slugify(item.title || item.url);
  const folder = path.join(FEED_ROOT, topicName, date);
  const filePath = path.join(folder, `${String((ordinal % 99) + 1).padStart(2, "0")}-${slug}.md`);
  const text = item.text || item.summary || "";
  let summary = excerpt(item.summary || text || item.title, 360);
  try {
    summary = await summarizeWithOpenAI({ ...item, text }) || summary;
  } catch {
    summary = `${summary} (Local summary fallback used.)`;
  }
  writeMarkdown(filePath, {
    title: item.title || "Untitled",
    source: item.source || "unknown",
    url: item.url,
    date,
    topic: topicName,
    type: item.type || "article",
    read: false,
    summary,
  }, text || item.summary || item.title || "");
  return {
    title: item.title || "Untitled",
    source: item.source || "unknown",
    url: item.url,
    date,
    topic: topicName,
    type: item.type || "article",
    read: false,
    summary,
    file: filePath,
  };
}

function normalizeDate(date) {
  const parsed = date ? new Date(date) : new Date();
  if (Number.isNaN(parsed.getTime())) return new Date().toISOString().slice(0, 10);
  return parsed.toISOString().slice(0, 10);
}

function recentDate(days) {
  const date = new Date(Date.now() - days * 86400000);
  return date.toISOString().slice(0, 10);
}

function githubHeaders() {
  const headers = process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
  return { headers, timeoutMs: 12000 };
}
