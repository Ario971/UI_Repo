---
title: "New Model: Spark-X2.5-4B, Spark-X2.5-1.7B"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1w4dsrw/new_model_sparkx254b_sparkx2517b/"
date: "2026-09-01"
topic: "Local LLMs"
type: "article"
read: false
summary: "I was browsing HF for small LLMs and run into this model. It does not seem to be a fine tune - the model has its own architecture. https://huggingface.co/XHToken/Spark-X2.5-1.7B https://huggingface.co/XHToken/Spark-X2.5-4B There are 4B/1.7B versions - the benchmark is quite interesting (4B is neck and neck with Qwen 3.5 9B). The HF page claims both models... (Local summary fallback used.)"
---

I was browsing HF for small LLMs and run into this model. It does not seem to be a fine tune - the model has its own architecture. https://huggingface.co/XHToken/Spark-X2.5-1.7B https://huggingface.co/XHToken/Spark-X2.5-4B There are 4B/1.7B versions - the benchmark is quite interesting (4B is neck and neck with Qwen 3.5 9B). The HF page claims both models support native 1M context size . Currently does not run out of the box on llama.cpp - pending this PR: https://github.com/ggml-org/llama.cpp/pull/27868 They have a custom fork of llama.cpp that works. Anyone has tried this? Update: GGUFs (require custom fork for now): https://huggingface.co/XHToken/Spark-X2.5-1.7B-GGUF https://huggingface.co/XHToken/Spark-X2.5-4B-GGUF submitted by /u/insraq [link] [comments]
