---
title: "StepFun 3.7 Flash"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1tqloii/stepfun_37_flash/"
date: "2026-05-29"
topic: "Local LLMs"
type: "article"
read: false
summary: "StepFun dropped Step 3.7 Flash, 196B total / 11B active MoE, runs locally on 128GB RAM It's a multimodal MoE (196B total params, only 11B active) with a built-in 1.8B ViT for vision. Benchmark highlights vs. other flash-tier models: - SWE-Bench Pro: 56.26% (beats DeepSeek V4 Flash at 55.6%, matches Gemini 3.5 Flash at 55.1%) - DeepSearchQA F1: 92.82%, com... (Local summary fallback used.)"
---

StepFun dropped Step 3.7 Flash, 196B total / 11B active MoE, runs locally on 128GB RAM It's a multimodal MoE (196B total params, only 11B active) with a built-in 1.8B ViT for vision. Benchmark highlights vs. other flash-tier models: - SWE-Bench Pro: 56.26% (beats DeepSeek V4 Flash at 55.6%, matches Gemini 3.5 Flash at 55.1%) - DeepSearchQA F1: 92.82%, competitive with GPT 5.5 (93.98%) - HLE w/ tools: 47.2%, solid for a flash-class model Essentially punches well above its active parameter weight on agentic and coding tasks. If you've got the RAM for it, looks like a genuinely interesting local option, especially for agent workflows. Available on OpenRouter and NVIDIA NIM if you don't want to self-host. submitted by /u/Everlier [link] [comments]
