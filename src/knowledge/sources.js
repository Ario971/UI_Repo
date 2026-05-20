import path from "node:path";
import { EDGE_ROOT, FEED_ROOT, readJson, writeJson } from "./storage.js";
import { edgeSourceProposals, feedSourceProposals } from "./proposals.js";

export function approveSourceProposals() {
  const feedProposal = readJson(path.join(FEED_ROOT, "source_proposals.json"), feedSourceProposals);
  const edgeProposal = readJson(path.join(EDGE_ROOT, "source_proposals.json"), edgeSourceProposals);

  const feedSources = {
    status: "approved",
    approved_at: new Date().toISOString(),
    topics: Object.entries(feedProposal.topics || {}).map(([name, sources]) => ({
      name,
      active: true,
      max_articles_per_run: 4,
      sources: sources.map((source) => ({ ...source, active: true })),
    })),
  };

  const edgeSources = {
    status: "approved",
    approved_at: new Date().toISOString(),
    categories: Object.entries(edgeProposal.categories || {}).map(([name, sources]) => ({
      name,
      active: true,
      sources: sources.map((source) => ({ ...source, active: true })),
    })),
    settings: {
      max_cards: 3,
      score_threshold: 65,
    },
  };

  writeJson(path.join(FEED_ROOT, "sources.json"), feedSources);
  writeJson(path.join(EDGE_ROOT, "sources.json"), edgeSources);
  writeJson(path.join(FEED_ROOT, "source_proposals.json"), { ...feedProposal, status: "approved" });
  writeJson(path.join(EDGE_ROOT, "source_proposals.json"), { ...edgeProposal, status: "approved" });
  return { feedSources, edgeSources };
}

export function readFeedSources() {
  return readJson(path.join(FEED_ROOT, "sources.json"), null);
}

export function readEdgeSources() {
  return readJson(path.join(EDGE_ROOT, "sources.json"), null);
}
