---
title: "My first run of Kimi K3 locally."
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1vj0hil/my_first_run_of_kimi_k3_locally/"
date: "2026-08-08"
topic: "Local LLMs"
type: "article"
read: false
summary: "Running across 2 clusters using llama.cpp over RPC too. Both clusters are not enough to hold everything in memory, so main cluster still partially offloads to run. Goal will be to get all the GPUs in one system and without RPC, I should probably see 2-3x faster speed. Running the IQ1_M, goal is to get to Q2_K_XL. My hope is that Qwen3.8 is as good, faster... (Local summary fallback used.)"
---

Running across 2 clusters using llama.cpp over RPC too. Both clusters are not enough to hold everything in memory, so main cluster still partially offloads to run. Goal will be to get all the GPUs in one system and without RPC, I should probably see 2-3x faster speed. Running the IQ1_M, goal is to get to Q2_K_XL. My hope is that Qwen3.8 is as good, faster and smaller, and that DeepSeekV4Pro/GLM5.3 will all be the same size and just as good. I'm going to give this a hard coding problem to see the quality of result, but the idea is to probably just PLAN with it and farm out the work to DeepSeekV4Flash and Qwen3.7-27B. Where there's a will, we will find a way. Never give up local llama! "Budget" builds all day for the win. https://www.reddit.com/r/LocalLLaMA/comments/1uyghw0/how_do_you_plan_to_run_kimi_k3_locally/ https://preview.redd.it/uah37umch6ih1.png?width=1504&format=png&auto=webp&s=59130a4ec670dc553157623d09cac9ef6f31e73b submitted by /u/segmond [link] [comments]
