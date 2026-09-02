---
title: "Which one will you choose and why, between R9700 32GB vs W7800 48GB?"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1w53qvh/which_one_will_you_choose_and_why_between_r9700/"
date: "2026-09-02"
topic: "Local LLMs"
type: "article"
read: false
summary: "I'm planning to upgrade my workstation (linux with 5700X/64GB DDR4) for local inference and pytorch training. I'm trying to decide between: 2× AMD Radeon AI PRO R9700 32GB 2× AMD Radeon PRO W7800 48GB I already have an RTX 3090 24GB , so the final system would have 3 GPUs . My motherboard has two PCIe 4.0 x8/x8 slots available for the two AMD GPUs. The RT... (Local summary fallback used.)"
---

I'm planning to upgrade my workstation (linux with 5700X/64GB DDR4) for local inference and pytorch training. I'm trying to decide between: 2× AMD Radeon AI PRO R9700 32GB 2× AMD Radeon PRO W7800 48GB I already have an RTX 3090 24GB , so the final system would have 3 GPUs . My motherboard has two PCIe 4.0 x8/x8 slots available for the two AMD GPUs. The RTX 3090 would have to move to a PCIe 3.0 x4 slot. My workload looks like: 1. Local GGUF inference : Mainly coding/reasoning models and multimodal models. I'd like to run better quants (than 3090) and split models across the two AMD GPUs for multiple KV cache(n parallel). I prefer llama router. 2. PyTorch trainin g: This is probably the more important part for me. I'm working with medical imaging (2D ultrasound/3D CT/MRI) + clinical text . For anyone actually using these cards with ROCm, how different is the practical experience between R9700/gfx1201 and W7800/gfx1100 ? I'm particularly interested in if any know issues have surfaced till date that block the PyTorch training on either of these cards? From this sub I have seen RDNA4/R9700 is improving rapidly but it's still a "newer-software". I'd really like to hear from people who are actually using R9700 for AI workloads especially PyTorch/MONAI training. I'm not planning to treat the 3090 + 2 AMD GPUs as one giant homogeneous GPU pool. (Although if someone has done it please let me know) My thinking is to use the two AMD GPUs as the main ROCm pair , while keeping the 3090 available separately for CUDA workloads or local models that fit/work better on NVIDIA. submitted by /u/0xkbose [link] [comments]
