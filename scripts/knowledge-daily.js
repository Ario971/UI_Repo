#!/usr/bin/env node
import path from "node:path";
import { EDGE_ROOT, FEED_ROOT, ensureKnowledgeLayout, readJson } from "../src/knowledge/storage.js";
import { runFeedSync } from "../src/knowledge/feed.js";
import { runEdgeSync } from "../src/knowledge/edge.js";

ensureKnowledgeLayout();

const feedSources = readJson(path.join(FEED_ROOT, "sources.json"), null);
const edgeSources = readJson(path.join(EDGE_ROOT, "sources.json"), null);

if (!feedSources || !edgeSources) {
  console.log("Knowledge daily sync skipped: approved sources.json files are not present yet.");
  console.log("Approve source_proposals.json first, then save sources.json for Feed and Edge.");
  process.exit(0);
}

console.log("Running Feed sync...");
const feed = await runFeedSync();
console.log(`Feed sync: ${feed.status}, added ${feed.added || 0} article(s).`);

console.log("Running Edge sync...");
const edge = await runEdgeSync();
console.log(`Edge sync: ${edge.status}, added ${edge.added || 0} candidate(s).`);
