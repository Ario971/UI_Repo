---
title: "Update: Converting dense models into Mixture-of-Experts"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1x4uint/update_converting_dense_models_into/"
date: "2026-10-13"
topic: "Local LLMs"
type: "article"
read: false
summary: "This is an update to my previous post which can be found here: https://www.reddit.com/r/LocalLLaMA/s/n7sgRZZc4z Since my last post I have continued working on the conversion process and also converting new models. My latest model is the Qwen2.5-1.5B-MoE-A0.9B . I have also released GGUF versions for both the 0.5B and the 1.5B models which can be found her... (Local summary fallback used.)"
---

This is an update to my previous post which can be found here: https://www.reddit.com/r/LocalLLaMA/s/n7sgRZZc4z Since my last post I have continued working on the conversion process and also converting new models. My latest model is the Qwen2.5-1.5B-MoE-A0.9B . I have also released GGUF versions for both the 0.5B and the 1.5B models which can be found here bayliner1980/Qwen2.5-0.5B-MoE-A0.3B-GGUF and here bayliner1980/Qwen2.5-1.5B-MoE-A0.9B-GGUF . Evaluation - Dense MoE WikiText-2 test perplexity (1024-token windows) 10.41 14.63 (+41%) C4 validation perplexity (64 × 1024 tokens) 15.76 22.88 (+45%) Zero-shot tasks, mean acc_norm 0.565 0.462 Task Dense MoE HellaSwag 0.592 0.510 ARC-Easy 0.723 0.572 ARC-Challenge 0.452 0.311 WinoGrande 0.646 0.588 OpenBookQA 0.410 0.328 Perplexity is about 40% higher, and the benchmarks drop the most on ARC. llama-bench, Q4_K_M for both, RTX 4060 8 GB / Ryzen 5 7500F - Dense MoE Change GPU, text generation tokens/s 191 253 +32% CPU, text generation tokens/s 54.9 77.5 +41% This is the first conversion that's clearly faster than the dense model on GPU too. The 0.5B only gained 6% there. Honest caveats At this size, quality is roughly in the range of Qwen2.5-0.5B, which is even faster. So this release is more a proof of concept. The approach should pay off more on larger models, where the MLP is a bigger share of the compute. The GGUF is larger than the dense one (1.1 GB vs 0.9 GB at Q4_K_M), because llama.cpp's MoE architecture needs an untied output head. Support If you find my stuff interesting consider supporting me on Ko-fi . submitted by /u/Bayliner1980 [link] [comments]
