---
title: "How well do multiple GPUs scale for LLM inference? (Trying to understand the basics)"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1vd2wf1/how_well_do_multiple_gpus_scale_for_llm_inference/"
date: "2026-08-02"
topic: "Local LLMs"
type: "article"
read: false
summary: "Hi everyone, I’m fairly new to the multi-GPU side of local LLMs and I’m trying to understand how inference actually scales across multiple GPUs. Suppose I have a model running on a single GPU and then move to two or more GPUs using llama.cpp (or similar backends). My questions are: - Is the performance gain anywhere close to 1:1 (e.g. 2× GPUs ≈ 2× speed),... (Local summary fallback used.)"
---

Hi everyone, I’m fairly new to the multi-GPU side of local LLMs and I’m trying to understand how inference actually scales across multiple GPUs. Suppose I have a model running on a single GPU and then move to two or more GPUs using llama.cpp (or similar backends). My questions are: - Is the performance gain anywhere close to 1:1 (e.g. 2× GPUs ≈ 2× speed), or is that unrealistic? - What are the main bottlenecks that prevent linear scaling? - How much do PCIe bandwidth and latency matter? - Does it make a difference if the model is dense or MoE? - Is the scaling different for prompt processing versus token generation? - At what point do additional GPUs start giving diminishing returns? For context, I’m currently running a single RTX 4090 (24 GB VRAM) with 128 GB RAM and I’m considering whether adding another GPU in the future would mainly let me run larger models or whether it would also provide a significant speedup. Moreover: is there a way to run one large llm on two different GPU on two different PCs simultaneously combining them? submitted by /u/HomoAgens1 [link] [comments]
