#!/usr/bin/env node
import { ensureKnowledgeLayout } from "../src/knowledge/storage.js";
import { writeSourceProposals } from "../src/knowledge/proposals.js";

ensureKnowledgeLayout();
writeSourceProposals();
console.log("Knowledge layout initialized at C:\\Projects\\UI_Desk\\knowledge");
console.log("Source proposals written. Review and approve before first sync.");
