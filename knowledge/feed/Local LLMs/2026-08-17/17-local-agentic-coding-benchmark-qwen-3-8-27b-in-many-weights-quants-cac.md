---
title: "Local agentic coding Benchmark : Qwen 3.8 27B (in many weights quants / cache quants / engine / reasoning effort) vs others."
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1vr4bs4/local_agentic_coding_benchmark_qwen_38_27b_in/"
date: "2026-08-17"
topic: "Local LLMs"
type: "article"
read: false
summary: "In medium reasoning mode, it both scores higher than the 3.6 version, AND is very much more efficient (almost half requests needed, and a third less tokens generated) - at DeepSeek v4 Flash 3107 MXFP4 level The xhigh mode is advertised to be the best one for hard tasks. In this benchmark, however the gain is clearly not visible. The score are comparable w... (Local summary fallback used.)"
---

In medium reasoning mode, it both scores higher than the 3.6 version, AND is very much more efficient (almost half requests needed, and a third less tokens generated) - at DeepSeek v4 Flash 3107 MXFP4 level The xhigh mode is advertised to be the best one for hard tasks. In this benchmark, however the gain is clearly not visible. The score are comparable with the medium version, while using more requests (still a little fewer than 3.6) and generating almost 4 times the tokens... N.B. strangely, the NINFER version, configured properly to use medium, behaves like it's xhigh... user error is not to exclude, but I triple checked... For me, the real gain for agentic coding is in medium mode. (xhigh is probably more useful when testing single prompts tasks like we se pop everywhere fast when a model is released.) Many more data and graphs in the public pages for you to dig here : https://wonderrico.github.io/local_llm_benchmark/benchmark-main.html?filter=27b and even more details here : https://wonderrico.github.io/local_llm_benchmark/benchmark-detail.html?filter=27b submitted by /u/WonderRico [link] [comments]
