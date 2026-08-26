---
title: "Qwen3.8-Flash-Next. This architecture could be surprisingly local-friendly once the weights drop. 👀"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1vy6smx/qwen38flashnext_this_architecture_could_be/"
date: "2026-08-25"
topic: "Local LLMs"
type: "article"
read: false
summary: "Qwen3.8-Flash-Next (~125B-A6B + 51B n-gram) memory estimate: Ideal 4-bit quant ≈ 82 GB (58 GB main weights + 24 GB n-gram tables) Real-world quants likely land in the 80–90 GB range. The big n-gram table is sparsely accessed → excellent candidate for system RAM offload. This architecture could be surprisingly local-friendly once the weights drop. submitte... (Local summary fallback used.)"
---

Qwen3.8-Flash-Next (~125B-A6B + 51B n-gram) memory estimate: Ideal 4-bit quant ≈ 82 GB (58 GB main weights + 24 GB n-gram tables) Real-world quants likely land in the 80–90 GB range. The big n-gram table is sparsely accessed → excellent candidate for system RAM offload. This architecture could be surprisingly local-friendly once the weights drop. submitted by /u/pmv143 [link] [comments]
