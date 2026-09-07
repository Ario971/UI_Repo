---
title: "Show HN: I stopped using an LLM gateway and put rate-limits/fallback in-process"
source: "Hacker News Show HN"
url: "https://github.com/LakBud/vernLLM"
date: "2026-09-06"
topic: "AI dev tools"
type: "article"
read: false
summary: "Sup HN. I built VernLLM cuz every LLM gateaway I looked at, meant adding a network hop just to get rate limiting, multi provider fallback, circuit breaking and other features. Needing to take a whole seperate service just to deploy, monitor and trust with my API keys is just annoying since my whole tech stack was just TypeScript and Node. VernLLM does the... (Local summary fallback used.)"
---

Sup HN. I built VernLLM cuz every LLM gateaway I looked at, meant adding a network hop just to get rate limiting, multi provider fallback, circuit breaking and other features. Needing to take a whole seperate service just to deploy, monitor and trust with my API keys is just annoying since my whole tech stack was just TypeScript and Node. VernLLM does the same job within your LLM calls, but its in process instead. Its supports OpenAI-compatible APIs, Anthropic, Gemini and Bedrock providers. I would also argue that the features VernLLM provides is more developed then any other gateaway out there when it comes to resilience and customization. The tradeoff vs a gateaway is that it has no centralized policy across multiple apps or languages so if you want that then its better to use a gateaway instead. Here is the docs for more info: https://vernllm.dev
