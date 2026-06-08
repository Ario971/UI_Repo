---
title: "Qwen 3.6 27B on DeepSWE"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1tzmq5y/qwen_36_27b_on_deepswe/"
date: "2026-06-07"
topic: "Local LLMs"
type: "article"
read: false
summary: "Overview: It scored 2% (1.79% rounded up) It is 18/20th place scoring above Haiku 4.5 and Minimax M2.7 Full benchmark took 70 hours Average time per task 32m Average output tokens per task: 44k Perspectives: It scored suspiciously similar to 3.6 Plus and it really gets me wondering how the architecture of 3.6 Plus differs from 27B. Qwen 3.6 27B has a bad... (Local summary fallback used.)"
---

Overview: It scored 2% (1.79% rounded up) It is 18/20th place scoring above Haiku 4.5 and Minimax M2.7 Full benchmark took 70 hours Average time per task 32m Average output tokens per task: 44k Perspectives: It scored suspiciously similar to 3.6 Plus and it really gets me wondering how the architecture of 3.6 Plus differs from 27B. Qwen 3.6 27B has a bad reputation in the community for being verbose. But surprisingly. The output tokens were on par or less to similar models. Methodology: Qwen 3.6 27B FP8 with BF16 KV cache, reasoning on and 262k context window on VLLM. Model ran on 1x RTX6000 pro Blackwell on RunPod. Ran with mini-swe agent harness on modal sandboxes. Ran 1 rollout per task instead of the official 4 to save time which is why images do not show a score range. Costs calculated by tasks completed within RunPod hourly rate. Codex 5.5xhigh was used to orchestrate and monitor the full benchmark run. src The best OS model Kimi-k2.6 is so far from the perf of the leading edge. Most cant even do Kimi locally and something like Qwen 3.6 27B is the local poor man's SOTA. It appears to take great size to perform at the leading edge. Models that start to be competitive tends to get closed source real quick. It doesn't feel like local will win. Feels more like a game of "how badly will local lose". submitted by /u/SteppenAxolotl [link] [comments]
