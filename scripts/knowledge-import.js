#!/usr/bin/env node
import { ensureKnowledgeLayout } from "../src/knowledge/storage.js";
import { importKnowledgeFromRepo } from "../src/knowledge/gitSync.js";

ensureKnowledgeLayout();
const result = importKnowledgeFromRepo();
console.log(`Imported ${result.copied} Knowledge file(s).`);
console.log(`From: ${result.source}`);
console.log(`To:   ${result.target}`);
if (result.skipped) console.log(result.skipped);
