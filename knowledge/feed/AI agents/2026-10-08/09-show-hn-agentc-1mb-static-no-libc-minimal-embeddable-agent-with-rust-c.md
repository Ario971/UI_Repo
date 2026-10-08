---
title: "Show HN: agentc: <1mb static/no-libc, minimal, embeddable agent with Rust/C API"
source: "Hacker News Top + Show HN"
url: "https://github.com/abird-ai/agentc"
date: "2026-10-08"
topic: "AI agents"
type: "article"
read: false
summary: "Sharing an agent that I built since most of the agents that's nice to work with, take hefty deps like node or is provider dependent. It's heavily inspired by the wonderful pi agent - and builds on it as something that you can run on tiny hardware or embed easily in your own binaries without needing it's hefty dependency chain. An agent doesn't really need... (Local summary fallback used.)"
---

Sharing an agent that I built since most of the agents that's nice to work with, take hefty deps like node or is provider dependent. It's heavily inspired by the wonderful pi agent - and builds on it as something that you can run on tiny hardware or embed easily in your own binaries without needing it's hefty dependency chain. An agent doesn't really need much - a minimal networking stack, a TUI and an agent loop. Then comes tools, mcp, skills and prompts. agentc does exactly that - a minimal, static, embeddable coding agent in C - no libc, less than 1MB, starts up using <1MB of RAM, and RSS comfortably sits under a few MBs during usage. It's extensible and everything including status, mcp, tools is architected as an extension. The embeddable part is by design, but exposing it as an API is still a pending plan and should be done in a few days. Also: would love some human testing on a Mac! CI builds for: linux - x64, arm64, risv64; win - x64, arm64 and darwin - arm64.
