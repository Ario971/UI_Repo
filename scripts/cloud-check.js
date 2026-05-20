#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { APP_ROOT, REPO_KNOWLEDGE_ROOT, isGitRepo } from "../src/knowledge/gitSync.js";
import { KNOWLEDGE_ROOT } from "../src/knowledge/storage.js";

const checks = [
  ["App git repo", isGitRepo(APP_ROOT) ? "ok" : "missing"],
  ["Git installed", commandOk("git", ["--version"]) ? "ok" : "missing"],
  ["GitHub CLI installed", commandOk("gh", ["--version"]) ? "ok" : "optional missing"],
  ["Workflow file", fs.existsSync(path.join(APP_ROOT, ".github", "workflows", "knowledge-daily.yml")) ? "ok" : "missing"],
  ["Local Knowledge root", fs.existsSync(KNOWLEDGE_ROOT) ? "ok" : "missing"],
  ["Repo Knowledge mirror", fs.existsSync(REPO_KNOWLEDGE_ROOT) ? "ok" : "missing"],
  ["OPENAI_API_KEY", process.env.OPENAI_API_KEY ? "set locally" : "not set locally"],
];

for (const [name, status] of checks) console.log(`${name}: ${status}`);
console.log(`App root:             ${APP_ROOT}`);
console.log(`Local Knowledge root: ${KNOWLEDGE_ROOT}`);
console.log(`Repo Knowledge root:  ${REPO_KNOWLEDGE_ROOT}`);

function commandOk(command, args) {
  try {
    execFileSync(command, args, { encoding: "utf8", timeout: 5000, stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}
