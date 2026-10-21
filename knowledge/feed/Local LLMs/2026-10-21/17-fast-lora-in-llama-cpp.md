---
title: "Fast LoRA in llama.cpp"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1xbekzx/fast_lora_in_llamacpp/"
date: "2026-10-21"
topic: "Local LLMs"
type: "article"
read: false
summary: "I'd like to share a few changes that encourage people to create and use LoRA on LLMs. For example, the LoRA https://huggingface.co/chenrm/qwen3.8-flash-next-abliterated-lora can turn the Qwen3.8-Flash-Next model into the uncensored version, whether you're using Q8_0, IQ4_NL, or GSQ-RCO-Q2_0 model, so you don't need to download the whole model again. You c... (Local summary fallback used.)"
---

I'd like to share a few changes that encourage people to create and use LoRA on LLMs. For example, the LoRA https://huggingface.co/chenrm/qwen3.8-flash-next-abliterated-lora can turn the Qwen3.8-Flash-Next model into the uncensored version, whether you're using Q8_0, IQ4_NL, or GSQ-RCO-Q2_0 model, so you don't need to download the whole model again. You can also tune the LoRA scale for a balance between uncensoring and brain damage. However, currently llama.cpp does not have fast LoRA kernels. When we run the model with the LoRA on Strix Halo, PP drops from like 1500 to 300 t/s, even though the LoRA is as small as 35 MB and only touches a few modules in the model. I've made a few LoRA kernels. With a general LoRA kernel it's improved to 1000 t/s, and with a fused LoRA kernel it's further improved to 1400 t/s. You can see my changes at https://github.com/woct0rdho/llama.cpp . Currently it's optimized for Strix Halo, and it should not be too hard to port to other GPUs. I'll find some time to upstream it to the mainline llama.cpp or strix-llama.cpp , but it involves a few architectural changes so it would take some time. If you want to upstream it earlier than me, feel free to reuse or modify my code. This is also discussed in https://github.com/ggml-org/llama.cpp/issues/27093 submitted by /u/woct0rdho [link] [comments]
