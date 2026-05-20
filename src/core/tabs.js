import path from "node:path";
import { modelList } from "../providers/registry.js";

let nextId = 1;

export function createTab(config, overrides = {}) {
  const provider = overrides.provider || config.selectedProvider || "codex";
  const model = overrides.model || config.selectedModels?.[provider] || modelList(provider)[0] || "default";
  const root = path.resolve(overrides.root || config.activeProject || process.cwd());
  return {
    id: nextId++,
    title: path.basename(root) || root,
    provider,
    model,
    root,
    selectedPath: root,
    fileCursor: 0,
    chatScroll: 0,
    fileSearch: "",
    expanded: new Set([root]),
    messages: [],
    preview: "",
    usage: { input: 0, output: 0, total: 0, reasoning: 0 },
  };
}

export function ensureModelForProvider(tab) {
  const models = modelList(tab.provider);
  if (!models.includes(tab.model)) tab.model = models[0] || "default";
}
