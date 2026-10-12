---
title: "I made an open-source AI leaderboard that shows the best models your machine can run"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1x3wp8c/i_made_an_opensource_ai_leaderboard_that_shows/"
date: "2026-10-12"
topic: "Local LLMs"
type: "article"
read: false
summary: "Hey everyone, I made whatmodel.sh To use it, Enter your RAM and GPU See what models you can run locally with its rank and the command to run it Compare them with API models on the same score Building it made me realise a 32GB Mac can now run a model that scores on-par with GPT-5, completely locally and for free (e.g. Qwen3.8 27B at 4-bit). Each model gets... (Local summary fallback used.)"
---

Hey everyone, I made whatmodel.sh To use it, Enter your RAM and GPU See what models you can run locally with its rank and the command to run it Compare them with API models on the same score Building it made me realise a 32GB Mac can now run a model that scores on-par with GPT-5, completely locally and for free (e.g. Qwen3.8 27B at 4-bit). Each model gets one score fitted across 19,731 published benchmark results, and every result links to its source. The method is at whatmodel.sh/method , and the data, scoring code and bench script are open source: github.com/jakemanger/whatmodel It works from the terminal too: curl whatmodel.sh If you'd like to contribute, there's a bench script to collect real-world tok/s and you can also submit any new models and benchmark scores along with their source on the github. submitted by /u/jakecoolguy [link] [comments]
