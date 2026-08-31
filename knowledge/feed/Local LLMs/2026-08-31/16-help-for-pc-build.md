---
title: "Help for PC build"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1w39b76/help_for_pc_build/"
date: "2026-08-31"
topic: "Local LLMs"
type: "article"
read: false
summary: "I am in the process of buying a new PC, the excuse is that mine is really old now, even though in the years I changed so many bits and pieces that maybe just the psu is the same. Anyway. I use llama.cpp (open to vLLM in time) and comfyUI. What it needs to do: run comfyUI (but with distorch finally working again for me I don't envision size problems there)... (Local summary fallback used.)"
---

I am in the process of buying a new PC, the excuse is that mine is really old now, even though in the years I changed so many bits and pieces that maybe just the psu is the same. Anyway. I use llama.cpp (open to vLLM in time) and comfyUI. What it needs to do: run comfyUI (but with distorch finally working again for me I don't envision size problems there) and llms like Qwen 3.8 Next at a decent quant q5/q6 is at all possible or I'd love of course GLM 3 Flash (Q4 would proably be my max, if that). Both with shariding the model between the two PCs and offloading to ram. I'd use Darwin 31b and Qwen 27b for speed. I value concurrency, but of course if one of the big models is up I expect I'd use GPUs from both PCs to shard them so I?d give it up for that, otherwise I always have several thigns going at the same time. What I am envisioning: 3 internal Gpus (two running at 8x, the third only 4x), plus two 2 external with thunderbolt 5 to be added later because I'm not made of money. GPUs: RTX5060ti 16gb because at the moment they are the only ones that can give me a total 80gb VRAM in the second PC. RAM 128GB. The first pc is windows. Should I have linux on the second one? Is there something glaringly, obviously wrong in the plan? ... Help? (sorry if it's a weird post, but I'm at work and it's a busy day, so this is taking forever to write. I'd really appreciate some help for the truly ignorant.) submitted by /u/OpenEvidence9680 [link] [comments]
