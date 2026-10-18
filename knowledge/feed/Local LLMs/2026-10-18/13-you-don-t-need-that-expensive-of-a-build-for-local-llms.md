---
title: "You don’t need that expensive of a build for local llms."
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1x8s73i/you_dont_need_that_expensive_of_a_build_for_local/"
date: "2026-10-18"
topic: "Local LLMs"
type: "article"
read: false
summary: "Been seeing a lot of people with their 64gb of ddr5 4x3090 or whatever strata builds and it’s been sorta depressing knowing i cant afford that but i finally finished my setup today so here we go, Qwen 3.8 27b at 262k context, unsloth iq4XS ascii condensed with kv cache streaming My only gpu is a 9060 xt 16gb and i have 24gb ddr5 for my whole homelab only... (Local summary fallback used.)"
---

Been seeing a lot of people with their 64gb of ddr5 4x3090 or whatever strata builds and it’s been sorta depressing knowing i cant afford that but i finally finished my setup today so here we go, Qwen 3.8 27b at 262k context, unsloth iq4XS ascii condensed with kv cache streaming My only gpu is a 9060 xt 16gb and i have 24gb ddr5 for my whole homelab only needing 16 for this MTP+ ngram prediction q4 kv cache values with q8 keys 42.7 tps generation 658 tps prefill at 20k, 35/500tps at 200k Using this fork: https://github.com/achyudh/llama.cpp I got grok bot to ssh in and fix the bugs i had with missing pcie atomics submitted by /u/Maglcite [link] [comments]
