import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export const CONFIG_DIR = path.join(os.homedir(), ".ui_desk");
export const CONFIG_PATH = path.join(CONFIG_DIR, "config.json");

export const DEFAULT_CONFIG = {
  selectedProvider: "codex",
  selectedModels: {
    codex: "gpt-5.5",
    openai: "gpt-5.4-mini",
    ollama: "qwen3.5:9b",
    claude: "default",
  },
  theme: "graphite",
  recentProjects: ["C:\\Projects\\UI"],
  activeProject: "C:\\Projects\\UI",
  edgeCardCap: 3,
};

export function loadConfig() {
  try {
    if (!fs.existsSync(CONFIG_PATH)) {
      saveConfig(DEFAULT_CONFIG);
      return structuredClone(DEFAULT_CONFIG);
    }
    const parsed = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
    return mergeConfig(DEFAULT_CONFIG, parsed);
  } catch (error) {
    return {
      ...structuredClone(DEFAULT_CONFIG),
      loadError: `Could not load ${CONFIG_PATH}: ${error.message}`,
    };
  }
}

export function saveConfig(config) {
  fs.mkdirSync(CONFIG_DIR, { recursive: true });
  fs.writeFileSync(CONFIG_PATH, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}

export function rememberProject(config, projectPath) {
  const resolved = path.resolve(projectPath);
  config.activeProject = resolved;
  config.recentProjects = [resolved, ...config.recentProjects.filter((item) => item !== resolved)].slice(0, 10);
  saveConfig(config);
}

function mergeConfig(base, patch) {
  const merged = structuredClone(base);
  for (const [key, value] of Object.entries(patch || {})) {
    if (value && typeof value === "object" && !Array.isArray(value) && typeof merged[key] === "object") {
      merged[key] = { ...merged[key], ...value };
    } else {
      merged[key] = value;
    }
  }
  return merged;
}
