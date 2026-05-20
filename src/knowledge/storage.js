import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

export const KNOWLEDGE_ROOT = process.env.UI_DESK_KNOWLEDGE_ROOT || "C:\\Projects\\UI_Desk\\knowledge";
export const FEED_ROOT = path.join(KNOWLEDGE_ROOT, "feed");
export const EDGE_ROOT = path.join(KNOWLEDGE_ROOT, "edge");

export function ensureKnowledgeLayout() {
  const directories = [
    FEED_ROOT,
    EDGE_ROOT,
    path.join(EDGE_ROOT, "candidates"),
    path.join(EDGE_ROOT, "watchlist"),
    path.join(EDGE_ROOT, "article_index"),
  ];
  for (const directory of directories) fs.mkdirSync(directory, { recursive: true });

  ensureJson(path.join(FEED_ROOT, "index.json"), { topics: [], articles: [], updated_at: null });
  ensureJson(path.join(FEED_ROOT, "source_proposals.json"), { status: "pending_approval", topics: {} });
  ensureJson(path.join(EDGE_ROOT, "index.json"), { candidates: [], last_checked_at: null });
  ensureJson(path.join(EDGE_ROOT, "source_proposals.json"), { status: "pending_approval", categories: {} });
  ensureJson(path.join(EDGE_ROOT, "active_stack.json"), { tools: [], skills: [], models: [], methods: [] });
  ensureJson(path.join(EDGE_ROOT, "ignored.json"), { ignored: [] });
  ensureJson(path.join(EDGE_ROOT, "feedback.json"), {
    source_weights: { github_trending: 1.0, hn: 1.0, reddit_localllama: 1.0 },
    topic_weights: { claude_skills: 1.0, mcp: 1.0, agent_frameworks: 1.0 },
    approved: [],
    ignored: [],
  });
  ensureJson(path.join(EDGE_ROOT, "system_profile.json"), buildSystemProfile());
}

export function readJson(filePath, fallback) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

export function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

export function knowledgeSummary() {
  ensureKnowledgeLayout();
  const feed = readJson(path.join(FEED_ROOT, "index.json"), { articles: [], topics: [] });
  const edge = readJson(path.join(EDGE_ROOT, "index.json"), { candidates: [] });
  const feedProposals = readJson(path.join(FEED_ROOT, "source_proposals.json"), { topics: {} });
  const edgeProposals = readJson(path.join(EDGE_ROOT, "source_proposals.json"), { categories: {} });
  const feedSources = readJson(path.join(FEED_ROOT, "sources.json"), null);
  const edgeSources = readJson(path.join(EDGE_ROOT, "sources.json"), null);
  return {
    feedCount: feed.articles?.length || 0,
    feedArticles: feed.articles || [],
    feedLastSync: feed.updated_at || null,
    topicCount: feed.topics?.length || feedSources?.topics?.length || Object.keys(feedProposals.topics || {}).length,
    edgeCount: edge.candidates?.length || 0,
    edgeCandidates: edge.candidates || [],
    edgeLastSync: edge.last_checked_at || null,
    edgeCategoryCount: edgeSources?.categories?.length || Object.keys(edgeProposals.categories || {}).length,
    feedPendingApproval: !feedSources && feedProposals.status === "pending_approval",
    edgePendingApproval: !edgeSources && edgeProposals.status === "pending_approval",
    feedSourcePath: path.join(FEED_ROOT, "sources.json"),
    edgeSourcePath: path.join(EDGE_ROOT, "sources.json"),
  };
}

export function buildSystemProfile() {
  return {
    updated_at: new Date().toISOString(),
    os: {
      platform: os.platform(),
      release: os.release(),
      arch: os.arch(),
    },
    hardware: {
      cpu: os.cpus()?.[0]?.model || "unknown",
      ram_gb: Math.round(os.totalmem() / 1024 / 1024 / 1024),
      gpu: "RTX 5080 16GB (user-provided)",
    },
    installed_clis: {
      git: versionOf("git", ["--version"]),
      node: versionOf("node", ["--version"]),
      python: versionOf("python", ["--version"]),
      codex: versionOf("codex", ["--version"]),
      claude: versionOf("claude", ["--version"]),
      ollama: versionOf("ollama", ["--version"]),
    },
    ollama_models: listOllamaModels(),
    preferences: "Edit this section manually. Example: prefer Python over Node, use VS Code, avoid tools that require heavy setup.",
  };
}

function ensureJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) writeJson(filePath, fallback);
}

function versionOf(command, args) {
  try {
    return execFileSync(command, args, { encoding: "utf8", timeout: 3000 }).trim();
  } catch {
    return null;
  }
}

function listOllamaModels() {
  try {
    const output = execFileSync("ollama", ["list"], { encoding: "utf8", timeout: 3000 });
    return output.split(/\r?\n/).slice(1).map((line) => line.trim().split(/\s+/)[0]).filter(Boolean);
  } catch {
    return [];
  }
}
