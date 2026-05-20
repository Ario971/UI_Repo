import fs from "node:fs";
import path from "node:path";
import { EDGE_ROOT, FEED_ROOT, readJson, writeJson } from "./storage.js";
import { REPO_KNOWLEDGE_ROOT } from "./gitSync.js";

const FEED_SOURCES = path.join(FEED_ROOT, "sources.json");
const EDGE_SOURCES = path.join(EDGE_ROOT, "sources.json");

export function readKnowledgeSettings() {
  return {
    feed: readJson(FEED_SOURCES, { topics: [] }),
    edge: readJson(EDGE_SOURCES, { categories: [], settings: { max_cards: 3, score_threshold: 65 } }),
  };
}

export function settingsRows() {
  const { feed, edge } = readKnowledgeSettings();
  const rows = [];
  rows.push({ kind: "section", label: "Feed Topics" });
  for (let i = 0; i < (feed.topics || []).length; i++) {
    const topic = feed.topics[i];
    rows.push({
      kind: "feed-topic",
      index: i,
      label: topic.name,
      active: topic.active !== false,
      value: topic.max_articles_per_run || 4,
    });
  }
  rows.push({ kind: "section", label: "Edge Scout" });
  rows.push({ kind: "edge-max-cards", label: "Daily card cap", value: edge.settings?.max_cards ?? 3 });
  rows.push({ kind: "edge-threshold", label: "Score threshold", value: edge.settings?.score_threshold ?? 65 });
  rows.push({ kind: "section", label: "Edge Categories" });
  for (let i = 0; i < (edge.categories || []).length; i++) {
    const category = edge.categories[i];
    rows.push({
      kind: "edge-category",
      index: i,
      label: category.name,
      active: category.active !== false,
      value: (category.sources || []).filter((source) => source.active !== false).length,
    });
  }
  return rows;
}

export function toggleSetting(row) {
  if (row?.kind === "feed-topic") return updateFeedSources((feed) => {
    feed.topics[row.index].active = feed.topics[row.index].active === false;
  });
  if (row?.kind === "edge-category") return updateEdgeSources((edge) => {
    edge.categories[row.index].active = edge.categories[row.index].active === false;
  });
  return null;
}

export function adjustSetting(row, delta) {
  if (row?.kind === "feed-topic") return updateFeedSources((feed) => {
    const topic = feed.topics[row.index];
    topic.max_articles_per_run = clamp((topic.max_articles_per_run || 4) + delta, 1, 10);
  });
  if (row?.kind === "edge-max-cards") return updateEdgeSources((edge) => {
    edge.settings = edge.settings || {};
    edge.settings.max_cards = nextCardCap(edge.settings.max_cards ?? 3, delta);
  });
  if (row?.kind === "edge-threshold") return updateEdgeSources((edge) => {
    edge.settings = edge.settings || {};
    edge.settings.score_threshold = clamp((edge.settings.score_threshold ?? 65) + delta * 5, 40, 95);
  });
  return null;
}

function updateFeedSources(mutator) {
  const feed = readJson(FEED_SOURCES, { status: "approved", topics: [] });
  mutator(feed);
  writeJson(FEED_SOURCES, feed);
  mirror("feed", "sources.json", feed);
  return feed;
}

function updateEdgeSources(mutator) {
  const edge = readJson(EDGE_SOURCES, { status: "approved", categories: [], settings: {} });
  mutator(edge);
  writeJson(EDGE_SOURCES, edge);
  mirror("edge", "sources.json", edge);
  return edge;
}

function mirror(area, fileName, data) {
  const target = path.join(REPO_KNOWLEDGE_ROOT, area, fileName);
  try {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  } catch {
    // The repo mirror is optional until git/cloud sync is configured.
  }
}

function nextCardCap(value, delta) {
  const caps = [1, 3, 5, 10];
  const current = caps.includes(value) ? caps.indexOf(value) : 1;
  return caps[clamp(current + delta, 0, caps.length - 1)];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
