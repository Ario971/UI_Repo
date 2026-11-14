---
title: "Show HN: Log every LLM call with tokens, cost, latency, and time to first token"
source: "Hacker News Top + Show HN"
url: "https://github.com/garritfra/llmtee"
date: "2026-11-11"
topic: "AI agents"
type: "article"
read: false
summary: "Hi HN, Llmtee is a lightweight llm proxy. I built this project because I needed a simple way to log llm calls across my agents. Existing options require running Postgres, ClickHouse and Redis, or have me use an SDK. llmtree is just a single binary. You point your provider base url to llmtee, it will pass the traffic through chunk by chunk and log the usag... (Local summary fallback used.)"
---

Hi HN, Llmtee is a lightweight llm proxy. I built this project because I needed a simple way to log llm calls across my agents. Existing options require running Postgres, ClickHouse and Redis, or have me use an SDK. llmtree is just a single binary. You point your provider base url to llmtee, it will pass the traffic through chunk by chunk and log the usage to an SQLite database (or optionally Postgres). The container image is ~25 MB. Memory footprint is around ~40 MB and added latency is ~0.2 ms.
