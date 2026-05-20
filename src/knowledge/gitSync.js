import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { KNOWLEDGE_ROOT } from "./storage.js";

const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
export const APP_ROOT = path.resolve(MODULE_DIR, "..", "..");
export const REPO_KNOWLEDGE_ROOT = process.env.UI_DESK_REPO_KNOWLEDGE_ROOT || path.join(APP_ROOT, "knowledge");

export function exportKnowledgeToRepo() {
  if (!fs.existsSync(KNOWLEDGE_ROOT)) return { copied: 0, source: KNOWLEDGE_ROOT, target: REPO_KNOWLEDGE_ROOT };
  const copied = copyNewerRecursive(KNOWLEDGE_ROOT, REPO_KNOWLEDGE_ROOT);
  return { copied, source: KNOWLEDGE_ROOT, target: REPO_KNOWLEDGE_ROOT };
}

export function importKnowledgeFromRepo() {
  if (!fs.existsSync(REPO_KNOWLEDGE_ROOT)) return { copied: 0, source: REPO_KNOWLEDGE_ROOT, target: KNOWLEDGE_ROOT, skipped: "repo knowledge folder missing" };
  const copied = copyNewerRecursive(REPO_KNOWLEDGE_ROOT, KNOWLEDGE_ROOT);
  return { copied, source: REPO_KNOWLEDGE_ROOT, target: KNOWLEDGE_ROOT };
}

export function pullAndImportKnowledge() {
  const result = {
    repo: APP_ROOT,
    git: isGitRepo(APP_ROOT),
    pulled: false,
    imported: false,
    message: "",
    copied: 0,
  };
  if (!result.git) {
    result.message = "Knowledge cloud sync skipped: app folder is not a git repo yet.";
    return result;
  }
  try {
    execFileSync("git", ["-C", APP_ROOT, "pull", "--ff-only"], { encoding: "utf8", timeout: 30000 });
    result.pulled = true;
  } catch (error) {
    result.message = `git pull skipped/failed: ${String(error.message || error).split(/\r?\n/)[0]}`;
  }
  const imported = importKnowledgeFromRepo();
  result.imported = true;
  result.copied = imported.copied;
  if (!result.message) result.message = `Knowledge sync imported ${result.copied} file(s).`;
  return result;
}

export function isGitRepo(directory) {
  try {
    return execFileSync("git", ["-C", directory, "rev-parse", "--is-inside-work-tree"], { encoding: "utf8", timeout: 5000 }).trim() === "true";
  } catch {
    return false;
  }
}

function copyNewerRecursive(source, target) {
  let copied = 0;
  if (!fs.existsSync(source)) return copied;
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copied += copyNewerRecursive(path.join(source, entry), path.join(target, entry));
    }
    return copied;
  }
  if (shouldCopy(source, target)) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
    fs.utimesSync(target, stat.atime, stat.mtime);
    copied += 1;
  }
  return copied;
}

function shouldCopy(source, target) {
  if (!fs.existsSync(target)) return true;
  const sourceStat = fs.statSync(source);
  const targetStat = fs.statSync(target);
  return sourceStat.mtimeMs > targetStat.mtimeMs + 1000 || sourceStat.size !== targetStat.size;
}
