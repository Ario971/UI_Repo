import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { OpenAIProvider } from "./openai.js";
import { CodexProvider } from "./codex.js";
import { OllamaProvider } from "./ollama.js";
import { ClaudeProvider } from "./claude.js";

export const PROVIDERS = {
  codex: {
    id: "codex",
    label: "GPT Codex CLI",
    models: ["gpt-5.5", "gpt-5-codex", "gpt-5.4", "gpt-5.4-mini"],
    create: (options) => new CodexProvider(options),
  },
  openai: {
    id: "openai",
    label: "OpenAI API",
    models: ["gpt-5.5", "gpt-5.4", "gpt-5.4-mini", "gpt-4o-mini"],
    create: (options) => new OpenAIProvider(options),
  },
  ollama: {
    id: "ollama",
    label: "Ollama",
    models: ["qwen3.5:9b"],
    create: (options) => new OllamaProvider(options),
  },
  claude: {
    id: "claude",
    label: "Claude Code",
    models: ["default"],
    create: (options) => new ClaudeProvider(options),
  },
};

export function providerIds() {
  return Object.keys(PROVIDERS);
}

export function modelList(providerId) {
  return PROVIDERS[providerId]?.models || [];
}

export function providerLabel(providerId) {
  return PROVIDERS[providerId]?.label || providerId;
}

export function createProvider(providerId, options = {}) {
  const provider = PROVIDERS[providerId] || PROVIDERS.codex;
  return provider.create(options);
}

export function findCommand(command, candidates = []) {
  const all = [...whereAll(command), ...candidates].filter(Boolean);
  for (const candidate of all.map(normalizeWindowsCandidate)) {
    if (candidate === command || fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function whereAll(command) {
  try {
    if (process.platform === "win32") {
      return execFileSync("where.exe", [command], { encoding: "utf8", timeout: 3000 })
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);
    }
    const found = execFileSync("sh", ["-lc", `command -v ${command}`], { encoding: "utf8", timeout: 3000 }).trim();
    return found ? [found] : [];
  } catch {
    return [];
  }
}

export async function commandExists(command) {
  return Boolean(findCommand(command));
}

export function windowsNpmShim(name) {
  return path.join(process.env.APPDATA || "", "npm", `${name}.cmd`);
}

function normalizeWindowsCandidate(candidate) {
  if (process.platform !== "win32" || !candidate) return candidate;
  if (path.extname(candidate)) return candidate;
  for (const suffix of [".cmd", ".exe", ".bat"]) {
    if (fs.existsSync(candidate + suffix)) return candidate + suffix;
  }
  return candidate;
}
