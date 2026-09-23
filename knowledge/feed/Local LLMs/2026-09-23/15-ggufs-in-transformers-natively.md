---
title: "GGUFs in transformers natively!"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wnxm0r/ggufs_in_transformers_natively/"
date: "2026-09-23"
topic: "Local LLMs"
type: "article"
read: false
summary: "Hey there folks! Aritra here from Hugging Face. I wanted to update you all about the latest changes in `transformers`. We now natively support GGUFs (llama cpp quants). You can use it like so: from transformers import AutoModelForCausalLM, AutoTokenizer model_id = \"unsloth/Qwen3.5-4B-GGUF\" filename = \"Qwen3.5-4B-Q4_K_M.gguf\" model = AutoModelForCausalLM.f... (Local summary fallback used.)"
---

Hey there folks! Aritra here from Hugging Face. I wanted to update you all about the latest changes in `transformers`. We now natively support GGUFs (llama cpp quants). You can use it like so: from transformers import AutoModelForCausalLM, AutoTokenizer model_id = "unsloth/Qwen3.5-4B-GGUF" filename = "Qwen3.5-4B-Q4_K_M.gguf" model = AutoModelForCausalLM.from_pretrained( model_id, gguf_file=filename, ) After loading, you're using the normal Transformers APIs. Why did we want to do this? Quantized models are smaller (so fits in a laptop) PyTorch tooling at hand (useful for debugging) Debugging, evaluation, custom generation becomes much easier On supported Apple Silicon setups, we're also reusing ggml kernels so the model can run directly from its packed quantized weights. On the Qwen checkpoints we tested on an M2 Max, Transformers reached: Qwen3.5-4B Q4_K_M: 70.4 tok/s vs 71.8 tok/s with llama.cpp Qwen3.8-27B UD-Q4_K_M: 15.9 tok/s vs 13.4 tok/s Qwen3.5-35B-A3B UD-IQ4_XS: 60.2 tok/s vs 61.3 tok/s This isn't meant to replace llama.cpp. If you only care about maximum local inference performance, llama.cpp is still probably the better choice. The point is more that you can now use the same GGUF models in a more flexible environment. Read more: https://huggingface.co/blog/transformers-llama-cpp-quants submitted by /u/Disastrous-Work-1632 [link] [comments]
