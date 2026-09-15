---
title: "Show HN: Rebuno - An open-source runtime for production agents"
source: "Hacker News Top + Show HN"
url: "https://github.com/rebuno/rebuno"
date: "2026-09-14"
topic: "AI agents"
type: "article"
read: false
summary: "I have been building Rebuno, an open-source execution runtime for operating AI agents in production. It manages execution state and guardrails across agents built with different frameworks. Agents run as HTTP services. Rebuno dispatches work through signed webhooks and keeps execution state in Postgres. Agents submit tool and model calls to Rebuno as step... (Local summary fallback used.)"
---

I have been building Rebuno, an open-source execution runtime for operating AI agents in production. It manages execution state and guardrails across agents built with different frameworks. Agents run as HTTP services. Rebuno dispatches work through signed webhooks and keeps execution state in Postgres. Agents submit tool and model calls to Rebuno as steps before executing them. For each new step, Rebuno evaluates per-agent YAML policies, independently of the model's prompt. It can allow the call, deny it, or hold it for human approval. The agent executes permitted calls and reports their outcomes. Policy decisions and step outcomes are both recorded in one append-only event log. After an interruption, the agent starts its handler from the top. Steps with recorded outcomes return those outcomes instead of executing again. A crash can also leave a tool with no recorded outcome. Tools marked safe_to_retry run again, and tools marked at_most_once fail as indeterminate. How the agent handles an indeterminate step is up to its implementation. There are Python and TypeScript SDKs, and the repo includes examples using LangChain, CrewAI, Pydantic AI, Vercel AI SDK, and Mastra. Rebuno is free to self-host and released under the MIT licensed. I'd be interested in hearing how others are running or operating agents in production. Blog post with diagrams: https://rebuno.io/blog/introducing-rebuno Getting started: https://docs.rebuno.io/getting-started
