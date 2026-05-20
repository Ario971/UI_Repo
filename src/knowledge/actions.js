import fs from "node:fs";
import path from "node:path";
import { EDGE_ROOT, readJson, writeJson } from "./storage.js";

export function approveCandidate(id) {
  const candidate = findCandidate(id);
  if (!candidate) throw new Error(`Candidate not found: ${id}`);
  const activeStack = readJson(path.join(EDGE_ROOT, "active_stack.json"), { tools: [], skills: [], models: [], methods: [] });
  const bucket = bucketForKind(candidate.kind);
  if (!activeStack[bucket].some((item) => item.id === candidate.id || item.name === candidate.name)) {
    activeStack[bucket].push({
      id: candidate.id,
      name: candidate.name,
      url: candidate.url,
      kind: candidate.kind,
      approved_at: new Date().toISOString(),
      replacement_target: candidate.replacement_target || null,
    });
  }
  writeJson(path.join(EDGE_ROOT, "active_stack.json"), activeStack);
  adjustFeedback(candidate, "approved", 0.05);
  markCandidateStatus(candidate.id, "approved");
  return candidate;
}

export function readCandidateDetail(id) {
  return findCandidate(id) || null;
}

export function saveCandidateForLater(id) {
  const candidate = findCandidate(id);
  if (!candidate) throw new Error(`Candidate not found: ${id}`);
  const watchPath = path.join(EDGE_ROOT, "watchlist", path.basename(candidate.file));
  if (candidate.file && fs.existsSync(candidate.file)) fs.copyFileSync(candidate.file, watchPath);
  markCandidateStatus(candidate.id, "watchlist");
  return candidate;
}

export function ignoreCandidate(id) {
  const candidate = findCandidate(id);
  if (!candidate) throw new Error(`Candidate not found: ${id}`);
  const ignored = readJson(path.join(EDGE_ROOT, "ignored.json"), { ignored: [] });
  if (!ignored.ignored.some((item) => item.id === candidate.id)) {
    ignored.ignored.push({ id: candidate.id, url: candidate.url, date: new Date().toISOString(), score: candidate.composite });
  }
  writeJson(path.join(EDGE_ROOT, "ignored.json"), ignored);
  adjustFeedback(candidate, "ignored", -0.05);
  markCandidateStatus(candidate.id, "ignored");
  return candidate;
}

function findCandidate(id) {
  const index = readJson(path.join(EDGE_ROOT, "index.json"), { candidates: [] });
  return (index.candidates || []).find((candidate) => candidate.id === id || candidate.name === id);
}

function markCandidateStatus(id, status) {
  const indexPath = path.join(EDGE_ROOT, "index.json");
  const index = readJson(indexPath, { candidates: [] });
  for (const candidate of index.candidates || []) {
    if (candidate.id === id) candidate.status = status;
  }
  writeJson(indexPath, index);
}

function adjustFeedback(candidate, listName, delta) {
  const feedbackPath = path.join(EDGE_ROOT, "feedback.json");
  const feedback = readJson(feedbackPath, { source_weights: {}, topic_weights: {}, approved: [], ignored: [] });
  const sourceKey = String(candidate.source || "source").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  feedback.source_weights[sourceKey] = clamp((feedback.source_weights[sourceKey] || 1) + delta);
  for (const topic of candidate.topics || []) feedback.topic_weights[topic] = clamp((feedback.topic_weights[topic] || 1) + delta);
  feedback[listName] = feedback[listName] || [];
  feedback[listName].push({ id: candidate.id, date: new Date().toISOString(), score: candidate.composite });
  writeJson(feedbackPath, feedback);
}

function bucketForKind(kind) {
  if (kind === "claude_skill") return "skills";
  if (kind === "local_model_tool") return "models";
  if (kind === "agent_framework") return "methods";
  return "tools";
}

function clamp(value) {
  return Math.max(0.3, Math.min(1.5, Number(value.toFixed(2))));
}
