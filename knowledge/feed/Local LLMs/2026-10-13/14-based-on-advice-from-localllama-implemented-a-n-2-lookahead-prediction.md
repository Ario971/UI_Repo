---
title: "Based on advice from LocalLLama implemented a n+2 lookahead prediction for ssd streaming Qwen Flash Next - and it worked!"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1x4sit6/based_on_advice_from_localllama_implemented_a_n2/"
date: "2026-10-13"
topic: "Local LLMs"
type: "article"
read: false
summary: "My project is optimising qwen flash next on Mac Mini m5 64gb through SSD streaming. I recently asked LocalLLama for guidance on how to optimise token output. Today a popular method to do this is a lookahead guesser which fetches experts one layer ahead of the current layer. One popular suggestion was building a prediction model to start loading experts tw... (Local summary fallback used.)"
---

My project is optimising qwen flash next on Mac Mini m5 64gb through SSD streaming. I recently asked LocalLLama for guidance on how to optimise token output. Today a popular method to do this is a lookahead guesser which fetches experts one layer ahead of the current layer. One popular suggestion was building a prediction model to start loading experts two layers ahead. This netted me +8% on chat and +4.2% on code. The way the various optimisations stack on top of each other this may actually net alot more on a base vanilla setup. https://github.com/skeggsguy/Flash-next-ssd Pretty cool! Thanks reddit LocalLLama! I’ll go find the og post to link now. Edit: Kudos to sdroege_ for og suggestion! submitted by /u/turtleninja99 [link] [comments]
