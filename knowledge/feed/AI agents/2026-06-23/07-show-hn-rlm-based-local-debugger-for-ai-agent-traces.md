---
title: "Show HN: RLM-based local debugger for AI agent traces"
source: "Hacker News Top + Show HN"
url: "https://github.com/context-labs/halo"
date: "2026-06-23"
topic: "AI agents"
type: "article"
read: false
summary: "We built HALO (Hierarchal Agent Loop Optimizer), an open-source tool for debugging and optimizing AI agents using their execution traces. It’s a loop. Run your agent, feed the traces to HALO, get the report, apply the fixes, then re-run your agent. HALO takes in OTEL compliant traces from AI agents using tracing frameworks such as Langfuse, Arize/OpenInfe... (Local summary fallback used.)"
---

We built HALO (Hierarchal Agent Loop Optimizer), an open-source tool for debugging and optimizing AI agents using their execution traces. It’s a loop. Run your agent, feed the traces to HALO, get the report, apply the fixes, then re-run your agent. HALO takes in OTEL compliant traces from AI agents using tracing frameworks such as Langfuse, Arize/OpenInference, or even just plain JSONL. It uses an RLM (Recursive Language Model) to more efficiently break trace analysis into smaller subproblems in order to find recurring patterns across large amounts of data and fix systemic issues that regular LLMs might typically miss. You can also optionally provide a path to where your agent code lives to give the engine more context so it can more concretely provide useful insights. The repo also includes a desktop app that you can run locally without having to sign up for anything or configure anything complex. Check out the readme in the repo for more in depth information on what HALO is and how you can use it to your benefit :)
