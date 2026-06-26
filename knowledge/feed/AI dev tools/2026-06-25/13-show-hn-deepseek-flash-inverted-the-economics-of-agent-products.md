---
title: "Show HN: DeepSeek Flash inverted the economics of agent products"
source: "Hacker News Show HN"
url: "https://www.rtrvr.ai/blog/code-as-plan-deepseek-flash-text-only-browser-agent"
date: "2026-06-25"
topic: "AI dev tools"
type: "article"
read: false
summary: "There is an adversarial relationship between developers and big model labs. Model labs charged developers higher API prices to subsidize their own agent harness offerings. Think Anthropic charging 5x higher Claude API prices to subsidize consumer subscriptions. So Cursor in a way was subsidizing their own direct competitor. DeepSeek V4 Flash totally inver... (Local summary fallback used.)"
---

There is an adversarial relationship between developers and big model labs. Model labs charged developers higher API prices to subsidize their own agent harness offerings. Think Anthropic charging 5x higher Claude API prices to subsidize consumer subscriptions. So Cursor in a way was subsidizing their own direct competitor. DeepSeek V4 Flash totally inverted this relationship. Now you have a model that beats even Sonnet in some benchmarks and is totally opensourced. Now inference providers are racing to the bottom to optimize and give cheaper hosting. Every player with a non-SOTA is now racing to swap over to stop paying the big model lab tax, even Microsoft is switching Copilot to use DeepSeek. On switching over to Deepseek: - we noticed over a 100x cost decrease while similar or better performance then Gemini 3 Flash - insane saving from the cached input tokens: $0.002/1 Million tokens - both DeepSeek Flash and GLM 5.2 are text-only models, so clearly multimodal training is not worth the additional cost. Language is just a much more efficient sparse representation of the world/reasoning than vision - we had a early bet on a text-only web agent harness, and now with DeepSeek this results in unique cost advantages. - we rewrote our harness as a callable DSL library that a model can generate code to execute on. DeepSeek has proven phenomenal on code generation to drive an agent harness. - I would highly recommend everyone to rewrite their harness to be text-only and callable via executable code leveraging DeepSeek V4 Flash.
