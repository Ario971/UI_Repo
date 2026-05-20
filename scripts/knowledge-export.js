#!/usr/bin/env node
import { ensureKnowledgeLayout } from "../src/knowledge/storage.js";
import { exportKnowledgeToRepo } from "../src/knowledge/gitSync.js";

ensureKnowledgeLayout();
const result = exportKnowledgeToRepo();
console.log(`Exported ${result.copied} Knowledge file(s).`);
console.log(`From: ${result.source}`);
console.log(`To:   ${result.target}`);
