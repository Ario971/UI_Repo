---
title: "Show HN: Spindle – a full-featured, type-safe web framework for OCaml 5"
source: "Hacker News Top + Show HN"
url: "https://github.com/hyphatech/spindle"
date: "2026-11-05"
topic: "AI agents"
type: "article"
read: false
summary: "Spindle is a multicore-by-design, eio-native web framework for modern OCaml. Its central idea is to provide an expressive, type-driven API and derive the rest: codecs, request validation, OpenAPI spec and frontend schemas (Zod and Melange). This keeps contracts in sync between server and client without maintaining separate definitions. The framework inclu... (Local summary fallback used.)"
---

Spindle is a multicore-by-design, eio-native web framework for modern OCaml. Its central idea is to provide an expressive, type-driven API and derive the rest: codecs, request validation, OpenAPI spec and frontend schemas (Zod and Melange). This keeps contracts in sync between server and client without maintaining separate definitions. The framework includes an RFC-strict HTTP server, composable dependencies, WebSockets, SSE and high-level primitives for building MCP servers. It also provides production-ready essentials like distributed tracing, OT-compatible metrics, logging and other features you would expect. Speed was never the goal but the benchmarks show it running x2 faster than NestJS and x5 faster than FastAPI on a single core. Give it a try. Documentation: https://hyphatech.github.io/spindle/
