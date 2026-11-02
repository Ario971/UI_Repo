---
title: "llama2.c on a 2006 iPod @ 80 MHz w/ 64 MB ram and no FPU"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1xlboqi/llama2c_on_a_2006_ipod_80_mhz_w_64_mb_ram_and_no/"
date: "2026-11-01"
topic: "Local LLMs"
type: "article"
read: false
summary: "hardware: PortalPlayer PP5022, ARM7TDMI @ 80 MHz, 64 MB ram wrote a fun rockbox plugin that runs Karpathy's llama2.c TinyStories models on an ipod video 5.5G. since there's no FPU, I ported llama2.c's int8 runq.c to use only integer math. it uses lookup tables -> exp/softmax + an integer square root for RMSNorm the 15M model is 17 MB, so it loads directly... (Local summary fallback used.)"
---

hardware: PortalPlayer PP5022, ARM7TDMI @ 80 MHz, 64 MB ram wrote a fun rockbox plugin that runs Karpathy's llama2.c TinyStories models on an ipod video 5.5G. since there's no FPU, I ported llama2.c's int8 runq.c to use only integer math. it uses lookup tables -> exp/softmax + an integer square root for RMSNorm the 15M model is 17 MB, so it loads directly off the hard drive into the music buffer. Unfortunately you can't listen to music while it works lol want to eventually run this on both cores, and set up a more ipod themed model that does local music recommendation submitted by /u/r0tlier0 [link] [comments]
