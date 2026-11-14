---
title: "Can open-weight LLMs can predict the effects of weight edits without running the model (9B–30B)"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1xvxyhj/can_openweight_llms_can_predict_the_effects_of/"
date: "2026-11-14"
topic: "Local LLMs"
type: "article"
read: false
summary: "I’ve been experimenting with weight-space reading using Qwen and Muse models (9B–30B). The goal: can an LLM inspect raw model weights and predict the behavioral effects of weight edits without running the target model? A few findings: 🔹Qwen 27B reached 73.0% balanced accuracy on subtle edits with weight access, vs. 57.8% from text descriptions. 🔹We coul... (Local summary fallback used.)"
---

I’ve been experimenting with weight-space reading using Qwen and Muse models (9B–30B). The goal: can an LLM inspect raw model weights and predict the behavioral effects of weight edits without running the target model? A few findings: 🔹Qwen 27B reached 73.0% balanced accuracy on subtle edits with weight access, vs. 57.8% from text descriptions. 🔹We couldn’t establish a conclusive advantage for models reading their own weights. 🔹On Muse-30B, 34 standard edits and 6 no-op controls produced no detectable behavioral changes, but weight-reading agents frequently predicted changes. I’ve released the paper’s evaluation harness and experimental code, plus an open-source toolkit for LLM-based weight-space programming and reading. Code: https://github.com/suayptalha/wsr Paper: https://www.alphaxiv.org/abs/2611.weight-space-reading-language-models I’d be interested in feedback on the evaluation design, especially from people experimenting with open-weight models. submitted by /u/suayptalha [link] [comments]
