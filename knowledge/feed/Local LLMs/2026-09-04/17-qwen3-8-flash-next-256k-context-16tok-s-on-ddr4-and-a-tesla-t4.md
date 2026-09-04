---
title: "Qwen3.8-Flash-Next: 256k context, 16tok/s on DDR4 and a Tesla T4"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1w6y38l/qwen38flashnext_256k_context_16toks_on_ddr4_and_a/"
date: "2026-09-04"
topic: "Local LLMs"
type: "article"
read: false
summary: "I've got an refurb Dell R740 running Proxmox that I put a Tesla T4 in, mainly to run some CTC local transcription work, but thought it would be fun to try DS4 when it came out, and it was appalling at around 2 tok/s. However pulled it out again when Qwen3.8 dropped, and it was much improved, particularly with ik_llama. Hardware: Dell R740, 2x Xeon Gold 62... (Local summary fallback used.)"
---

I've got an refurb Dell R740 running Proxmox that I put a Tesla T4 in, mainly to run some CTC local transcription work, but thought it would be fun to try DS4 when it came out, and it was appalling at around 2 tok/s. However pulled it out again when Qwen3.8 dropped, and it was much improved, particularly with ik_llama. Hardware: Dell R740, 2x Xeon Gold 6230, 384GB DDR4-2666, one Tesla T4 16GB. Guest VM pinned to one NUMA node: 20 cores, 168GB RAM. Model: Unsloth Qwen3.8-Flash-Next UD-Q4_K_XL, 111GB, 180B total / 6B active. All 512 experts in host RAM (-cmoe), Non-expert weights on the T4: 4606 MiB. Full 256K context fits in 13.0GB. Build/Flags: ik_llama.cpp main, plus unmerged PR #2375. llama-server -t 20 -c 262144 -ngl 99 -cmoe -fa on -ctk q8_0 -ctv q8_0 -ictk q8_0 -b 2048 -ub 1024 --jinja -ctv and -ictk both default to f16 and are most of the KV growth; quantising makes 256K fit. -ub 1024 rather than 2048 for the same reason. Performance: At 256K with the flags above: prompt processing 159.6 t/s on a cold 12.5K prompt, generation 17.6 t/s short and 16.1 t/s at 12.5K context. Going from -ub 2048 to -ub 1024 costs some prompt processing (down from 193.7t/s) and nothing on generation. Doubling 128K to 256K costs about 2.5% generation. Results: Promising, has already done a solid refactor and blew through a few slightly obscure Nim coding questions and tests. Way less verbose and waffly than Opus too, which is a massive plus. submitted by /u/BusTiny207 [link] [comments]
