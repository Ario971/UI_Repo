import fs from "node:fs";
import path from "node:path";
import { FEED_ROOT, readJson, writeJson } from "./storage.js";
import { readMarkdown, writeMarkdown } from "./markdown.js";

export function toggleArticleRead(articleUrl) {
  const indexPath = path.join(FEED_ROOT, "index.json");
  const index = readJson(indexPath, { articles: [] });
  const article = (index.articles || []).find((item) => item.url === articleUrl || item.file === articleUrl);
  if (!article) throw new Error("Article not found");
  article.read = !article.read;
  updateArticleMarkdown(article, { read: article.read });
  writeJson(indexPath, index);
  return article;
}

export function readArticleDetail(articleUrl) {
  const index = readJson(path.join(FEED_ROOT, "index.json"), { articles: [] });
  const article = (index.articles || []).find((item) => item.url === articleUrl || item.file === articleUrl);
  if (!article) return null;
  let body = "";
  let frontmatter = {};
  if (article.file && fs.existsSync(article.file)) {
    const parsed = readMarkdown(article.file);
    body = parsed.body;
    frontmatter = parsed.frontmatter;
  }
  return {
    ...article,
    ...frontmatter,
    body,
  };
}

export function markArticleRead(articleUrl, read = true) {
  const indexPath = path.join(FEED_ROOT, "index.json");
  const index = readJson(indexPath, { articles: [] });
  const article = (index.articles || []).find((item) => item.url === articleUrl || item.file === articleUrl);
  if (!article) throw new Error("Article not found");
  article.read = read;
  updateArticleMarkdown(article, { read });
  writeJson(indexPath, index);
  return article;
}

function updateArticleMarkdown(article, patch) {
  if (!article.file || !fs.existsSync(article.file)) return;
  const parsed = readMarkdown(article.file);
  writeMarkdown(article.file, { ...parsed.frontmatter, ...patch }, parsed.body);
}
