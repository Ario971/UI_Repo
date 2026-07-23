---
title: "Show HN: Millwright – Rust-based, self-hosted LLM router"
source: "Hacker News Top + Show HN"
url: "https://github.com/Northwood-Systems/millwright"
date: "2026-07-22"
topic: "AI agents"
type: "article"
read: false
summary: "Hey HN, With the news of OpenRouter possibly being acquired and proliferation of hosted LLM routers (i.e. Ramp Router, Vercel’s AI Gateway), I saw the need for a self hosted solution focused on cost savings, transparency, and performance. So, I built an open sourced router with a simple CLI interface that can easily sit between coding agents and GenAI wor... (Local summary fallback used.)"
---

Hey HN, With the news of OpenRouter possibly being acquired and proliferation of hosted LLM routers (i.e. Ramp Router, Vercel’s AI Gateway), I saw the need for a self hosted solution focused on cost savings, transparency, and performance. So, I built an open sourced router with a simple CLI interface that can easily sit between coding agents and GenAI workloads. For the curious and lazy, at the moment, Millwright has the tools for, - Providers: OpenAI-compatible APIs, Anthropic, Amazon Bedrock - Routing: policy-controlled model roles (cheap, mid, frontier), cheapest healthy route selection - Protocols: OpenAI Chat Completions, Anthropic Messages, text and tool translation - Cache Affinity: role-scoped session lanes without serializing concurrent agent traffic - Spend Tracking: per-team costs, cache usage, model/provider mix, request traces - Cost Analysis: measured usage and modeled candidate economics (HTML, Markdown, JSON) - Reliability: bounded failover, circuit breakers, timeouts, concurrency limits - Setup: interactive provider, model, and pricing configuration without storing provider secrets - Deployment: one Rust binary, Docker, SQLite or PostgreSQL Full disclosure: parts of the codebase were built with AI coding agents. All feedback is welcome, I’d especially value feedback on the routing policy, provider coverage, and anything that would block you from self-hosting it. Feel free to open feature/request and/or contribute as well.
