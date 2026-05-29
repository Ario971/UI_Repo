---
title: "Show HN: Multiplayer, a debugging agent to run locally next to your coding agent"
source: "Hacker News Top + Show HN"
url: "https://www.multiplayer.app/"
date: "2026-05-28"
topic: "AI agents"
type: "article"
read: false
summary: "We built Multiplayer because we kept running into the same problem: coding agents connected to existing observability stacks inherit all the limitations those stacks were built with. Sampled traces, aggregated metrics, context that stops at service boundaries, missing request/response content from deep within the system. The PRs they produce look plausibl... (Local summary fallback used.)"
---

We built Multiplayer because we kept running into the same problem: coding agents connected to existing observability stacks inherit all the limitations those stacks were built with. Sampled traces, aggregated metrics, context that stops at service boundaries, missing request/response content from deep within the system. The PRs they produce look plausible and fail in production (i.e. “PR slop”). Multiplayer runs locally alongside Claude Code (Codex, Copilot, and Cursor coming soon) and captures full-stack, unsampled session data across your entire system. We collect everything from frontend user actions to backend traces and logs, including request/response content and headers. It’s all the things most observability tools either sample out or don't capture at all. We only save data when something goes wrong, so you're not paying to store everything your system produces around the clock. When an issue is identified, Multiplayer deduplicates it locally before anything reaches your coding agent. The same bug appearing across a hundred sessions becomes one issue, one prompt, one PR. Your agent works from a complete, correlated picture of what actually broke rather than a partial signal from a sampled trace. We tried to make it as easy as possible to get started, so it’s just one command line to install: `npm install -g @multiplayer-app/cli && multiplayer` Happy to get into the architecture, the data model, or how we handle the local-first approach to data privacy.
