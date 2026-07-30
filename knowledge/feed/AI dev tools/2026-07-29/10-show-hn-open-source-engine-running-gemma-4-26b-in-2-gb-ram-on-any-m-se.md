---
title: "Show HN: Open-source engine running Gemma 4 26B in 2 GB RAM on any M-series Mac"
source: "Hacker News Show HN"
url: "https://github.com/drumih/turbo-fieldfare"
date: "2026-07-29"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN, I built a specialized inference engine for running 4-bit Gemma 4 26B-A4B-IT on any M-series Mac using about 2 GB of RAM. It is called TurboFieldfare and is written in Swift and Metal. I have always adored on-device AI. It feels like magic that you can run a powerful NN on your Mac or iPhone. So I wanted to push the limits a bit and run a model whos... (Local summary fallback used.)"
---

Hi HN, I built a specialized inference engine for running 4-bit Gemma 4 26B-A4B-IT on any M-series Mac using about 2 GB of RAM. It is called TurboFieldfare and is written in Swift and Metal. I have always adored on-device AI. It feels like magic that you can run a powerful NN on your Mac or iPhone. So I wanted to push the limits a bit and run a model whose weights don’t fit in memory. The model’s 4-bit quantized weights occupy roughly 14 GB, which makes running it with conventional inference tools almost impossible on an 8 GB or even 16 GB Mac once the OS, applications, and KV cache are included. The trick is to keep the shared part of the model and the KV cache in RAM, then stream only the routed experts needed for each token from SSD. An SSD is way slower than RAM, so the runtime uses a small expert cache and bounded parallel `pread`. While those reads are in flight, the GPU runs the shared part of the layer. I ran more than 100 experiments. Most didn’t work. A few got me here. The experiments are described in the GitHub repo. It currently generates 5–6 tok/s on an 8 GB M2 MacBook Air and 31–35 tok/s on an M5 MacBook Pro. I also added an experimental OpenAI-compatible local server. It supports streaming and tool calls, and reuses one prompt prefix from the KV cache. Try it! The Mac app is easy to install. On the first run, it will download 15 GB of weights from Hugging Face. The model is surprisingly capable. I would love any kind of feedback!
