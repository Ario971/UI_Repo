---
title: "SlopTV: an infinite livestream of AI slop generated from youtube chat comments, Minimax H3 on 2x5090"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1w3i7ze/sloptv_an_infinite_livestream_of_ai_slop/"
date: "2026-08-31"
topic: "Local LLMs"
type: "article"
read: false
summary: "SlopTV: a YouTube live stream where the chat writes the programming. You type \"capybara dj underwater rave\", an LLM inflates it into a 400-word structured video prompt, one of my 5090s renders 15 seconds of it with MiniMax H3, and it airs on the same stream you typed into. Then people comment on that clip, and the ouroboros keeps eating. Inspired by infin... (Local summary fallback used.)"
---

SlopTV: a YouTube live stream where the chat writes the programming. You type "capybara dj underwater rave", an LLM inflates it into a 400-word structured video prompt, one of my 5090s renders 15 seconds of it with MiniMax H3, and it airs on the same stream you typed into. Then people comment on that clip, and the ouroboros keeps eating. Inspired by infiniteslop from @levelsio, but running fully locally. Numbers: H3 open weights, 66GB on disk, the int8 pruned diffusion model (19.5GB) and the nvfp4 text encoder (14.6GB), which don't fit a 32GB card together so ComfyUI's VRAM offload eats the overflow. ~90s per clip per GPU, so fresh slop every 45 seconds. Forever. When nobody's chatting, the LLM is instructed to invent concepts on its own, so at 4 AM the GPUs are generating brainrot for an audience of nobody. I pay real electricity for this. Things I learned: H3 follows prompts best at 352p, and I do mean 352p. I render 352x608 and upscale to 1080p, it looks like garbage, garbage is the brand. ComfyUI runs embedded in your own process if you stub three things and lie to it about being a server. YouTube has a gRPC streaming API for live chat that nobody uses, because you have to compile the proto yourself and their published proto doesn't compile. The REST alternative burns the entire daily quota in 30 minutes of active chat. Small models copy examples. My system prompt had one worked example and the model smeared its imagery into every output. Now it's rules and placeholders only, like training a dog. The codebase (actually also a slop): https://github.com/shuttie/SlopTV submitted by /u/InvadersMustLive [link] [comments]
