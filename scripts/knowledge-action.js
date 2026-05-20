#!/usr/bin/env node
import { approveCandidate, ignoreCandidate, saveCandidateForLater } from "../src/knowledge/actions.js";

const [action, id] = process.argv.slice(2);
if (!action || !id) {
  console.log("Usage: node scripts/knowledge-action.js <approve|save|ignore> <candidate-id>");
  process.exit(1);
}

const handlers = {
  approve: approveCandidate,
  save: saveCandidateForLater,
  ignore: ignoreCandidate,
};

if (!handlers[action]) {
  console.log(`Unknown action: ${action}`);
  process.exit(1);
}

const candidate = handlers[action](id);
console.log(`${action}: ${candidate.name}`);
