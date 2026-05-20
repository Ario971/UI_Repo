#!/usr/bin/env node
import { ensureKnowledgeLayout } from "../src/knowledge/storage.js";
import { approveSourceProposals } from "../src/knowledge/sources.js";

ensureKnowledgeLayout();
const { feedSources, edgeSources } = approveSourceProposals();
console.log(`Approved ${feedSources.topics.length} Feed topic groups.`);
console.log(`Approved ${edgeSources.categories.length} Edge source categories.`);
