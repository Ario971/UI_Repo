---
title: "Show HN: Open Envelope – an open schema for defining AI agent teams"
source: "Hacker News Top + Show HN"
url: "https://openenvelope.org/docs/schema/"
date: "2026-05-28"
topic: "AI agents"
type: "article"
read: false
summary: "Built an open JSON Schema for defining AI agent teams. Multi-agent systems are becoming a real deployment pattern — not single assistants, but teams with roles, handoffs, and human checkpoints. But there's no shared way to define one that travels across frameworks. Every implementation is scattered, locked to whichever tool you picked first. Built the sch... (Local summary fallback used.)"
---

Built an open JSON Schema for defining AI agent teams. Multi-agent systems are becoming a real deployment pattern — not single assistants, but teams with roles, handoffs, and human checkpoints. But there's no shared way to define one that travels across frameworks. Every implementation is scattered, locked to whichever tool you picked first. Built the schema to fix that. The schema lives at schema.openenvelope.org and is registered in SchemaStore, so if you drop a .envelope.json file in VS Code you get autocomplete and validation without installing anything. It's also on npm as @openenvelope/schema if you want to validate programmatically. The spec covers: agent definitions (role, prompt, model, access policy), supervisor/sub-agent hierarchy, human-in-the-loop gates, pipelines, schedules, and secrets/variables that get injected at deploy time. Access policies let you declare exactly which hosts each agent can call — the runtime enforces this at the network level, not in the prompt. The goal is a portable definition format — define a team once, any compatible runtime can execute it. Similar to how Dockerfiles describe a container without being tied to a specific host. There's a managed runtime at openenvelope.org but the schema is Apache 2.0 and anyone can implement it. Happy to answer questions on any part of the spec — especially interested in feedback from people who've built multi-agent systems and have opinions on what's missing.
