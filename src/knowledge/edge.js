import path from "node:path";
import { EDGE_ROOT, readJson, writeJson } from "./storage.js";
import { readEdgeSources } from "./sources.js";
import { writeMarkdown } from "./markdown.js";
import { fetchJson, fetchText } from "./net.js";
import { rebuildArticleIndex, findRelatedArticles } from "./articleIndex.js";
import { excerpt, slugify } from "./text.js";

export async function runEdgeSync() {
  const sources = readEdgeSources();
  if (!sources) return { status: "missing_sources", added: 0 };
  await rebuildArticleIndex();

  const ignored = readJson(path.join(EDGE_ROOT, "ignored.json"), { ignored: [] });
  const ignoredIds = new Set((ignored.ignored || []).map((item) => item.id || item.url));
  const index = readJson(path.join(EDGE_ROOT, "index.json"), { candidates: [] });
  const existingIds = new Set((index.candidates || []).map((item) => item.id));
  const activeStack = readJson(path.join(EDGE_ROOT, "active_stack.json"), { tools: [], skills: [], models: [], methods: [] });
  const feedback = readJson(path.join(EDGE_ROOT, "feedback.json"), { source_weights: {}, topic_weights: {} });

  const collected = [];
  for (const category of sources.categories.filter((item) => item.active)) {
    for (const source of category.sources.filter((item) => item.active)) {
      try {
        collected.push(...await collectEdgeSource(category, source));
      } catch {
        // A source going dark should not block the daily scout.
      }
    }
  }

  const scored = [];
  const shortlist = dedupeCandidates(collected)
    .sort((a, b) => (new Date(b.pushed_at || 0) - new Date(a.pushed_at || 0)) || ((b.stars || 0) - (a.stars || 0)))
    .slice(0, sources.settings?.inspection_cap ?? 24);
  for (const candidate of shortlist) {
    if (ignoredIds.has(candidate.id) || existingIds.has(candidate.id)) continue;
    const enriched = await enrichCandidate(candidate);
    const scorecard = await scoreCandidate(enriched, activeStack, feedback);
    const threshold = sources.settings?.score_threshold ?? 65;
    if (scorecard.composite < threshold) continue;
    scored.push(scorecard);
  }

  scored.sort((a, b) => b.composite - a.composite);
  const selected = scored.slice(0, sources.settings?.max_cards ?? 3);
  const saved = [];
  for (let i = 0; i < selected.length; i++) saved.push(await saveCandidate(selected[i], i + 1));

  writeJson(path.join(EDGE_ROOT, "index.json"), {
    last_checked_at: new Date().toISOString(),
    settings: sources.settings,
    candidates: [...saved, ...(index.candidates || [])].slice(0, 300),
  });

  return { status: "ok", added: saved.length };
}

async function collectEdgeSource(category, source) {
  if (/github/i.test(source.name) || /github/i.test(source.access)) return collectGithub(category, source);
  return [];
}

async function collectGithub(category, source) {
  const queries = githubQueries(source, category);
  const candidates = [];
  for (const query of queries) {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=6`;
    const json = await fetchJson(url, githubHeaders());
    for (const repo of json.items || []) {
      if (!isRelevantRepo(repo)) continue;
      candidates.push({
        id: repo.full_name.toLowerCase(),
        name: repo.full_name,
        url: repo.html_url,
        source: source.name,
        source_key: sourceKey(source.name),
        category: category.name,
        topics: [...new Set([...(source.topics || []), ...(repo.topics || [])])],
        kind: classifyRepo(repo, source),
        description: repo.description || "",
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        open_issues: repo.open_issues_count || 0,
        pushed_at: repo.pushed_at,
        created_at: repo.created_at,
        default_branch: repo.default_branch || "main",
        license: repo.license?.spdx_id || "unknown",
        text: `${repo.full_name}\n${repo.description || ""}\n${(repo.topics || []).join(" ")}`,
      });
    }
  }
  return candidates;
}

function githubQueries(source, category) {
  const topics = source.topics?.length ? source.topics : ["agents", "llm", "mcp"];
  return topics.slice(0, 4).map((topic) => `${topic} in:name,description,readme pushed:>${recentDate(21)}`);
}

async function enrichCandidate(candidate) {
  const [owner, repo] = candidate.id.split("/");
  if (!owner || !repo) return candidate;
  const enriched = {
    ...candidate,
    dependency_files: [],
    install_commands: [],
    risk_flags: [],
    readme: "",
    readme_excerpt: "",
    has_ci: false,
    has_tests: false,
    readme_quality: 0,
    setup_steps_count: 0,
  };

  try {
    const repoInfo = await fetchJson(`https://api.github.com/repos/${owner}/${repo}`, githubHeaders());
    enriched.default_branch = repoInfo.default_branch || enriched.default_branch;
    enriched.license = repoInfo.license?.spdx_id || enriched.license;
    enriched.stars = repoInfo.stargazers_count ?? enriched.stars;
    enriched.forks = repoInfo.forks_count ?? enriched.forks;
    enriched.open_issues = repoInfo.open_issues_count ?? enriched.open_issues;
    enriched.pushed_at = repoInfo.pushed_at || enriched.pushed_at;
    enriched.description = repoInfo.description || enriched.description;
    enriched.topics = [...new Set([...(enriched.topics || []), ...(repoInfo.topics || [])])];
  } catch {
    // Search metadata is enough to continue.
  }

  enriched.readme = await fetchReadme(owner, repo);
  enriched.readme_excerpt = excerpt(enriched.readme || enriched.description, 1200);
  enriched.install_commands = extractInstallCommands(enriched.readme);
  enriched.has_tests = detectsTests(enriched.readme);
  enriched.risk_flags = detectRiskFlags(enriched.readme);

  const dependencyFiles = await fetchDependencyFiles(owner, repo);
  enriched.dependency_files = dependencyFiles.map((file) => ({ name: file.name, summary: summarizeDependencyFile(file.name, file.text) }));
  enriched.has_ci = await hasCi(owner, repo);
  enriched.setup_steps_count = estimateSetupSteps(enriched.readme, enriched.dependency_files);
  enriched.readme_quality = readmeQuality(enriched);
  enriched.text = [
    enriched.text,
    enriched.readme_excerpt,
    enriched.dependency_files.map((file) => `${file.name} ${file.summary}`).join("\n"),
  ].join("\n");
  enriched.kind = classifyText(enriched.text, enriched.kind);
  return enriched;
}

async function fetchReadme(owner, repo) {
  try {
    return await fetchText(`https://api.github.com/repos/${owner}/${repo}/readme`, {
      ...githubHeaders(),
      headers: { ...githubHeaders().headers, accept: "application/vnd.github.raw" },
      timeoutMs: 10000,
    });
  } catch {
    return "";
  }
}

async function fetchDependencyFiles(owner, repo) {
  const names = ["package.json", "pyproject.toml", "requirements.txt", "Cargo.toml", "go.mod", "deno.json"];
  const found = [];
  for (const name of names) {
    try {
      const text = await fetchText(`https://api.github.com/repos/${owner}/${repo}/contents/${name}`, {
        ...githubHeaders(),
        headers: { ...githubHeaders().headers, accept: "application/vnd.github.raw" },
        timeoutMs: 7000,
      });
      found.push({ name, text: text.slice(0, 5000) });
    } catch {
      // Optional file.
    }
  }
  return found;
}

async function hasCi(owner, repo) {
  try {
    const workflows = await fetchJson(`https://api.github.com/repos/${owner}/${repo}/contents/.github/workflows`, githubHeaders());
    return Array.isArray(workflows) && workflows.some((file) => /\.ya?ml$/i.test(file.name || ""));
  } catch {
    return false;
  }
}

function extractInstallCommands(readme) {
  const commands = [];
  const fenced = [...String(readme || "").matchAll(/```(?:bash|sh|shell|powershell|ps1|zsh|cmd)?\s*([\s\S]*?)```/gi)];
  for (const block of fenced) {
    for (const line of block[1].split(/\r?\n/)) {
      const clean = line.trim().replace(/^\$\s*/, "");
      if (/^(npm|pnpm|yarn|npx|pipx?|uv|cargo|go|ollama|claude|codex|docker|git)\b/i.test(clean)) commands.push(clean);
    }
  }
  const inline = [...String(readme || "").matchAll(/`((?:npm|pnpm|yarn|npx|pipx?|uv|cargo|go|ollama|claude|codex|docker|git)\s+[^`]+)`/gi)];
  for (const match of inline) commands.push(match[1].trim());
  return [...new Set(commands)].slice(0, 6);
}

function detectsTests(readme) {
  return /\b(test|tests|tested|ci|pytest|vitest|jest|cargo test|npm test)\b/i.test(readme || "");
}

function detectRiskFlags(readme) {
  const flags = [];
  const text = String(readme || "").toLowerCase();
  if (/(curl|wget).{0,80}(\|\s*)?(bash|sh|powershell|pwsh)/.test(text)) flags.push("README includes remote script execution pattern");
  if (/\b(api[_ -]?key|token|secret|credential)\b/.test(text)) flags.push("README mentions credentials or API tokens");
  if (/\btelemetry|analytics|phone home|tracking\b/.test(text)) flags.push("README mentions telemetry/analytics");
  if (/\bsudo\b|run as administrator|admin privileges/.test(text)) flags.push("May require elevated privileges");
  if (/\bdocker\b/.test(text) && /\bprivileged\b/.test(text)) flags.push("Docker privileged mode mentioned");
  return flags;
}

function summarizeDependencyFile(name, text) {
  if (name === "package.json") {
    try {
      const json = JSON.parse(text);
      const deps = Object.keys({ ...(json.dependencies || {}), ...(json.devDependencies || {}) }).slice(0, 8);
      const scripts = Object.keys(json.scripts || {}).slice(0, 8);
      return `deps ${deps.join(", ") || "none"}; scripts ${scripts.join(", ") || "none"}`;
    } catch {
      return "package metadata could not be parsed";
    }
  }
  if (name === "requirements.txt") {
    const deps = text.split(/\r?\n/).map((line) => line.trim()).filter((line) => line && !line.startsWith("#")).slice(0, 8);
    return `deps ${deps.join(", ") || "none"}`;
  }
  if (name === "pyproject.toml") {
    const deps = [...text.matchAll(/^\s*["']?([A-Za-z0-9_.-]+)["']?\s*[<>=~]/gm)].map((match) => match[1]).slice(0, 8);
    return `python project; deps ${deps.join(", ") || "not obvious"}`;
  }
  if (name === "Cargo.toml") return "Rust project metadata detected";
  if (name === "go.mod") return text.split(/\r?\n/).find((line) => line.startsWith("module ")) || "Go module detected";
  return "dependency metadata detected";
}

function estimateSetupSteps(readme, dependencyFiles) {
  const headingSteps = (String(readme || "").match(/^\s*#{1,3}\s+(install|installation|setup|usage|configuration|quickstart)/gim) || []).length;
  const commands = extractInstallCommands(readme).length;
  const files = dependencyFiles.length;
  return Math.min(10, headingSteps + Math.ceil(commands / 2) + Math.max(0, files - 1));
}

function readmeQuality(candidate) {
  const readme = candidate.readme || "";
  if (!readme) return 0;
  let score = 20;
  if (readme.length > 1200) score += 20;
  if (/install|setup|quickstart/i.test(readme)) score += 15;
  if (/usage|example/i.test(readme)) score += 15;
  if ((candidate.install_commands || []).length) score += 15;
  if (/license/i.test(readme) || candidate.license !== "unknown") score += 8;
  if (candidate.has_ci || candidate.has_tests) score += 7;
  return clamp(score);
}

async function scoreCandidate(candidate, activeStack, feedback) {
  const related = await findRelatedArticles(`${candidate.name}\n${candidate.description}\n${candidate.topics.join(" ")}`);
  const overlap = findReplacementTarget(candidate, activeStack);
  const compatibility = compatibilityScore(candidate, activeStack);
  const momentum = momentumScore(candidate);
  const risk = riskScore(candidate);
  const integration_effort = integrationScore(candidate);
  const expected_gain = expectedGainScore(candidate, related, overlap);
  const sourceWeight = feedback.source_weights?.[candidate.source_key] ?? 1;
  const topicWeight = candidate.topics.reduce((best, topic) => Math.max(best, feedback.topic_weights?.[topic] ?? 1), 1);
  const composite = Math.round(((compatibility * 0.25) + (momentum * 0.2) + ((100 - risk) * 0.18) + ((100 - integration_effort) * 0.12) + (expected_gain * 0.25)) * sourceWeight * topicWeight);
  const pros = buildPros(candidate, related);
  const cons = buildCons(candidate, risk, integration_effort);

  return {
    ...candidate,
    compatibility,
    momentum,
    risk,
    integration_effort,
    expected_gain,
    composite: clamp(composite),
    related_articles: related.map((item) => ({
      title: item.title,
      date: item.date,
      topic: item.topic,
      similarity: Number(item.similarity.toFixed(3)),
      file: item.file,
    })),
    replacement_target: overlap,
    pros,
    cons,
    why_it_matters: whyItMatters(candidate, related, overlap),
  };
}

async function saveCandidate(candidate, ordinal) {
  const date = new Date().toISOString().slice(0, 10);
  const slug = slugify(candidate.name);
  const filePath = path.join(EDGE_ROOT, "candidates", date, `${String(ordinal).padStart(2, "0")}-${slug}.md`);
  writeMarkdown(filePath, {
    id: candidate.id,
    name: candidate.name,
    url: candidate.url,
    date,
    source: candidate.source,
    category: candidate.category,
    kind: candidate.kind,
    compatibility: candidate.compatibility,
    momentum: candidate.momentum,
    risk: candidate.risk,
    integration_effort: candidate.integration_effort,
    expected_gain: candidate.expected_gain,
    composite: candidate.composite,
    replacement_target: candidate.replacement_target || "",
    related_articles: candidate.related_articles,
    pros: candidate.pros,
    cons: candidate.cons,
    readme_quality: candidate.readme_quality || 0,
    has_ci: !!candidate.has_ci,
    has_tests: !!candidate.has_tests,
    setup_steps_count: candidate.setup_steps_count || 0,
    dependency_files: candidate.dependency_files || [],
    install_commands: candidate.install_commands || [],
    risk_flags: candidate.risk_flags || [],
    status: "new",
  }, candidateBody(candidate));
  return {
    id: candidate.id,
    name: candidate.name,
    url: candidate.url,
    date,
    source: candidate.source,
    category: candidate.category,
    kind: candidate.kind,
    compatibility: candidate.compatibility,
    momentum: candidate.momentum,
    risk: candidate.risk,
    integration_effort: candidate.integration_effort,
    expected_gain: candidate.expected_gain,
    composite: candidate.composite,
    replacement_target: candidate.replacement_target || null,
    related_articles: candidate.related_articles,
    pros: candidate.pros,
    cons: candidate.cons,
    readme_quality: candidate.readme_quality || 0,
    has_ci: !!candidate.has_ci,
    has_tests: !!candidate.has_tests,
    setup_steps_count: candidate.setup_steps_count || 0,
    dependency_files: candidate.dependency_files || [],
    install_commands: candidate.install_commands || [],
    risk_flags: candidate.risk_flags || [],
    why_it_matters: candidate.why_it_matters,
    file: filePath,
  };
}

function candidateBody(candidate) {
  return [
    `# ${candidate.name}`,
    "",
    candidate.description || "",
    "",
    `URL: ${candidate.url}`,
    "",
    "## Why it matters",
    candidate.why_it_matters,
    "",
    "## Pros",
    ...candidate.pros.map((item) => `+ ${item}`),
    "",
    "## Cons",
    ...candidate.cons.map((item) => `- ${item}`),
    "",
    "## Repository Inspection",
    `README quality: ${candidate.readme_quality || 0}/100`,
    `CI detected: ${candidate.has_ci ? "yes" : "no"}`,
    `Tests mentioned: ${candidate.has_tests ? "yes" : "no"}`,
    `Setup steps estimate: ${candidate.setup_steps_count || 0}`,
    "",
    "Dependency files:",
    ...((candidate.dependency_files || []).length ? candidate.dependency_files.map((file) => `- ${file.name}: ${file.summary}`) : ["- none detected"]),
    "",
    "Install commands found:",
    ...((candidate.install_commands || []).length ? candidate.install_commands.map((command) => `- ${command}`) : ["- none detected"]),
    "",
    "Risk flags:",
    ...((candidate.risk_flags || []).length ? candidate.risk_flags.map((flag) => `- ${flag}`) : ["- none detected"]),
    "",
    "## Install",
    "Nothing runs automatically. Review the upstream README before running any install command.",
    "",
    "## README",
    candidate.readme || "README was not available from the GitHub API.",
  ].join("\n");
}

function dedupeCandidates(candidates) {
  const seen = new Map();
  for (const candidate of candidates) if (!seen.has(candidate.id)) seen.set(candidate.id, candidate);
  return [...seen.values()];
}

function classifyRepo(repo, source) {
  const text = `${repo.full_name} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
  return classifyText(text, "ai_dev_tool");
}

function classifyText(text, fallback = "ai_dev_tool") {
  text = String(text || "").toLowerCase();
  if (text.includes("mcp")) return "mcp_server";
  if (text.includes("claude") && text.includes("skill")) return "claude_skill";
  if (text.includes("ollama") || text.includes("quant")) return "local_model_tool";
  if (text.includes("agent")) return "agent_framework";
  return fallback;
}

function isRelevantRepo(repo) {
  const text = `${repo.full_name} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
  return /\b(ai|agent|agents|llm|mcp|claude|codex|ollama|qwen|prompt|rag|embedding|devtool|developer|copilot)\b/.test(text);
}

function compatibilityScore(candidate, activeStack) {
  const text = `${candidate.text} ${JSON.stringify(activeStack)}`.toLowerCase();
  let score = 55;
  if (text.includes("windows")) score += 10;
  if (text.includes("node") || text.includes("python")) score += 8;
  if (text.includes("ollama") || text.includes("codex") || text.includes("claude")) score += 12;
  if (candidate.license !== "unknown") score += 8;
  if (candidate.dependency_files?.some((file) => /package\.json|pyproject|requirements/i.test(file.name))) score += 5;
  if (candidate.has_ci) score += 4;
  return clamp(score);
}

function momentumScore(candidate) {
  const daysSincePush = ageDays(candidate.pushed_at);
  const recency = daysSincePush < 2 ? 35 : daysSincePush < 7 ? 25 : daysSincePush < 21 ? 15 : 5;
  const stars = Math.min(35, Math.log10((candidate.stars || 0) + 1) * 14);
  const forks = Math.min(20, Math.log10((candidate.forks || 0) + 1) * 10);
  return clamp(Math.round(recency + stars + forks + 10));
}

function riskScore(candidate) {
  let risk = 35;
  if (candidate.license === "unknown" || candidate.license === "NOASSERTION") risk += 18;
  if (ageDays(candidate.pushed_at) > 90) risk += 18;
  if ((candidate.open_issues || 0) > 50) risk += 8;
  if ((candidate.stars || 0) > 500) risk -= 10;
  if (candidate.has_ci) risk -= 6;
  if (candidate.has_tests) risk -= 5;
  if ((candidate.risk_flags || []).length) risk += Math.min(24, candidate.risk_flags.length * 8);
  if (candidate.readme_quality < 35) risk += 10;
  return clamp(risk);
}

function integrationScore(candidate) {
  let effort = 45;
  const text = `${candidate.name} ${candidate.description} ${candidate.readme_excerpt || ""}`.toLowerCase();
  if (text.includes("plugin") || text.includes("extension") || text.includes("skill")) effort -= 12;
  if (text.includes("framework")) effort += 10;
  if (candidate.kind === "mcp_server") effort += 8;
  if (candidate.license !== "unknown") effort -= 5;
  effort += Math.min(20, (candidate.setup_steps_count || 0) * 4);
  if ((candidate.install_commands || []).length === 1) effort -= 8;
  if ((candidate.dependency_files || []).length > 2) effort += 8;
  return clamp(effort);
}

function expectedGainScore(candidate, related, replacementTarget) {
  let score = 45;
  if (related.length) score += 18;
  if (candidate.kind === "mcp_server" || candidate.kind === "claude_skill") score += 10;
  if (replacementTarget) score += 5;
  if ((candidate.stars || 0) > 1000) score += 8;
  if (candidate.readme_quality > 70) score += 6;
  if (/codex|claude code|ollama|mcp|agent/i.test(candidate.readme_excerpt || candidate.description)) score += 8;
  return clamp(score);
}

function findReplacementTarget(candidate, activeStack) {
  const stacks = [...(activeStack.tools || []), ...(activeStack.skills || []), ...(activeStack.models || []), ...(activeStack.methods || [])];
  const text = `${candidate.name} ${candidate.kind} ${candidate.description}`.toLowerCase();
  const hit = stacks.find((item) => {
    const name = typeof item === "string" ? item : item.name;
    return name && text.includes(String(name).toLowerCase());
  });
  return typeof hit === "string" ? hit : hit?.name || null;
}

function buildPros(candidate, related) {
  const pros = [];
  if (candidate.pushed_at) pros.push(`Recently updated (${candidate.pushed_at.slice(0, 10)})`);
  if (candidate.license !== "unknown" && candidate.license !== "NOASSERTION") pros.push(`${candidate.license} license`);
  if (candidate.stars) pros.push(`${candidate.stars} GitHub stars`);
  if (candidate.has_ci) pros.push("GitHub Actions/CI detected");
  if (candidate.has_tests) pros.push("README mentions tests or validation");
  if ((candidate.install_commands || []).length) pros.push("README includes install commands");
  if (related.length) pros.push(`Matches ${related.length} saved Feed article(s)`);
  return pros.slice(0, 4);
}

function buildCons(candidate, risk, integration) {
  const cons = [];
  if (candidate.license === "unknown" || candidate.license === "NOASSERTION") cons.push("License was not clearly detected by GitHub");
  if (risk > 60) cons.push("Risk score is elevated; inspect install scripts carefully");
  if (integration > 55) cons.push("Integration may take more than a quick install");
  if (!(candidate.install_commands || []).length) cons.push("No clear install command found in README");
  for (const flag of candidate.risk_flags || []) cons.push(flag);
  if (!candidate.description) cons.push("Repository description is sparse");
  return cons.length ? cons.slice(0, 4) : ["No obvious v1 warning, still review upstream code before use"];
}

function whyItMatters(candidate, related, replacementTarget) {
  if (related.length) {
    const article = related[0];
    return `You saved an article on ${article.date} about ${article.topic}; this candidate overlaps with "${article.title}" and may turn that reading into a practical workflow improvement.`;
  }
  if (replacementTarget) return `This overlaps with ${replacementTarget}, so it should be treated as a replacement candidate instead of a simple addition.`;
  return `${candidate.name} matches your AI development source filters and scored strongly enough to review before it disappears into the daily noise.`;
}

function ageDays(date) {
  const parsed = new Date(date || 0);
  if (Number.isNaN(parsed.getTime())) return 999;
  return Math.floor((Date.now() - parsed.getTime()) / 86400000);
}

function recentDate(days) {
  const date = new Date(Date.now() - days * 86400000);
  return date.toISOString().slice(0, 10);
}

function sourceKey(name) {
  return String(name || "source").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}

function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function githubHeaders() {
  const headers = process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
  return { headers, timeoutMs: 12000 };
}
