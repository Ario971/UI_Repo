---
title: "Jev Based Adaptive Thinking for LLMs"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1xa9ffa/jev_based_adaptive_thinking_for_llms/"
date: "2026-10-19"
topic: "Local LLMs"
type: "article"
read: false
summary: "Hi, I experimented with the following idea, using JEV logic to make the thinking process of LLMs adaptive. For every single word we measure the entropy and when the model is unsure we use a JEV like gate where we ask the model if it should trigger a thinking process. We have the opening thought that happens anyway, but then we may have additional thinking... (Local summary fallback used.)"
---

Hi, I experimented with the following idea, using JEV logic to make the thinking process of LLMs adaptive. For every single word we measure the entropy and when the model is unsure we use a JEV like gate where we ask the model if it should trigger a thinking process. We have the opening thought that happens anyway, but then we may have additional thinking blocks, based on the logic above. For the thinking blocks we have some tree of parallel conversations where again we use JEV logic to define the best line. I hope it can inspire people, especially if you run local models and you have the ability to run multiple streams, anyway bottlenecked by RAM speed for decode. Github repo (open source): https://github.com/dimknaf/adaptive-thinking submitted by /u/dimknaf [link] [comments]
