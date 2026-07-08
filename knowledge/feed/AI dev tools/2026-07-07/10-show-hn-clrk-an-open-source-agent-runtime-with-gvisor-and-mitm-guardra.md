---
title: "Show HN: CLRK, an open-source agent runtime with gVisor and MitM guardrails"
source: "Hacker News Show HN"
url: "https://github.com/apoxy-dev/clrk"
date: "2026-07-07"
topic: "AI dev tools"
type: "article"
read: false
summary: "TL;DR: we built a framework-agnostic agent runtime that uses gVisor for isolation and runs on k8s. It’s open-source under AGPLv3 Recently we’ve been working on a customer support “AI assistant” - essentially an interactive knowledge base/L1 support but with an option to touch resources that belong to a customer it’s talking to. We found existing tools to... (Local summary fallback used.)"
---

TL;DR: we built a framework-agnostic agent runtime that uses gVisor for isolation and runs on k8s. It’s open-source under AGPLv3 Recently we’ve been working on a customer support “AI assistant” - essentially an interactive knowledge base/L1 support but with an option to touch resources that belong to a customer it’s talking to. We found existing tools to be lacking in these aspects: 1. Fully intercepted i/o. We wanted to trace out LLM calls as well as any other networking calls attempted by the harness so that guardrails and audit trails apply to all current and future systems uniformly. Nobody’s agent can accidentally make raw database calls or send PII data to an overseas LLM provider. 2. Coherent API and framework agnostic. There’re a lot of frameworks out there that do similar things in slightly different way and most we found had telemetry, guardrails and other tooling tightly bound into the framework. We wanted something with an infrastructure-first approach because we think it’s a more flexible way to compose such systems. 3. k8s compatible runtime. We run part of our stack on k8s and know it well so we wanted to take advantage of this if we could. We searched for an existing solution, but especially with Daytona going closed sourced recently, there were no options we could find that were open-source and met our needs, so we built one. A more in-depth design writeup can be found here: https://apoxy.dev/blog/enter-clrk Questions, FRs, hot takes or funny insults are welcome!
