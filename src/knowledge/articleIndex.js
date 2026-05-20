import fs from "node:fs";
import path from "node:path";
import { EDGE_ROOT, FEED_ROOT, readJson, writeJson } from "./storage.js";
import { readMarkdown } from "./markdown.js";
import { embedTexts } from "./openai.js";
import { tokenize } from "./text.js";

const INDEX_FILE = path.join(EDGE_ROOT, "article_index", "index.json");

export async function rebuildArticleIndex() {
  const feedIndex = readJson(path.join(FEED_ROOT, "index.json"), { articles: [] });
  const articles = (feedIndex.articles || []).filter((article) => article.file && fs.existsSync(article.file));
  const texts = articles.map((article) => {
    const parsed = readMarkdown(article.file);
    return `${article.title}\n${article.topic}\n${article.summary}\n${parsed.body}`.slice(0, 8000);
  });

  let provider = "local";
  let model = "tf-lite";
  let vectors = texts.map(localVector);
  try {
    const embedded = await embedTexts(texts);
    if (embedded) {
      provider = embedded.provider;
      model = embedded.model;
      vectors = embedded.vectors;
    }
  } catch {
    provider = "local";
    model = "tf-lite";
    vectors = texts.map(localVector);
  }

  const entries = articles.map((article, index) => ({
    id: article.url || article.file,
    title: article.title,
    topic: article.topic,
    date: article.date,
    file: article.file,
    summary: article.summary,
    vector: vectors[index],
  }));
  writeJson(INDEX_FILE, { updated_at: new Date().toISOString(), provider, model, entries });
  return { provider, model, count: entries.length };
}

export async function findRelatedArticles(text, limit = 3) {
  let index = readJson(INDEX_FILE, null);
  if (!index) {
    await rebuildArticleIndex();
    index = readJson(INDEX_FILE, { provider: "local", entries: [] });
  }
  if (!index.entries?.length) return [];

  let vector = localVector(text);
  if (index.provider === "openai") {
    try {
      const embedded = await embedTexts([text]);
      if (embedded) vector = embedded.vectors[0];
    } catch {
      vector = localVector(text);
    }
  }

  return index.entries
    .map((entry) => ({ ...entry, similarity: cosine(vector, entry.vector) }))
    .filter((entry) => entry.similarity > 0.18)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit);
}

function localVector(text) {
  const counts = new Map();
  for (const token of tokenize(text)) counts.set(token, (counts.get(token) || 0) + 1);
  return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b));
}

function cosine(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) return 0;
  if (typeof a[0] === "number" && typeof b[0] === "number") return numericCosine(a, b);
  return sparseCosine(a, b);
}

function numericCosine(a, b) {
  let dot = 0;
  let aa = 0;
  let bb = 0;
  const length = Math.min(a.length, b.length);
  for (let i = 0; i < length; i++) {
    dot += a[i] * b[i];
    aa += a[i] * a[i];
    bb += b[i] * b[i];
  }
  return dot / (Math.sqrt(aa) * Math.sqrt(bb) || 1);
}

function sparseCosine(a, b) {
  const left = new Map(a);
  const right = new Map(b);
  let dot = 0;
  let aa = 0;
  let bb = 0;
  for (const value of left.values()) aa += value * value;
  for (const value of right.values()) bb += value * value;
  for (const [key, value] of left) dot += value * (right.get(key) || 0);
  return dot / (Math.sqrt(aa) * Math.sqrt(bb) || 1);
}
