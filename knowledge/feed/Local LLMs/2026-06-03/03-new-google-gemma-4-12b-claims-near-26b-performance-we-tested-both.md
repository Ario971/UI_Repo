---
title: "New Google Gemma 4 12B Claims Near-26B Performance - We Tested Both!"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1tw4tmf/new_google_gemma_4_12b_claims_near26b_performance/"
date: "2026-06-03"
topic: "Local LLMs"
type: "article"
read: false
summary: "We ran both models locally on one RTX 4090 and gave each the same task: write a self-contained HTML5 canvas animation with real physics in one file without libraries. Three scenes - a Galton board, two blocks colliding off a wall, and a chaotic triple pendulum Outputs: Gemma 4 26B-A4B: 15 GB VRAM usage, 6.9k tokens, 138 tok/s Gemma 4 12B: 9 GB VRAM usage,... (Local summary fallback used.)"
---

We ran both models locally on one RTX 4090 and gave each the same task: write a self-contained HTML5 canvas animation with real physics in one file without libraries. Three scenes - a Galton board, two blocks colliding off a wall, and a chaotic triple pendulum Outputs: Gemma 4 26B-A4B: 15 GB VRAM usage, 6.9k tokens, 138 tok/s Gemma 4 12B: 9 GB VRAM usage, 8.9k tokens, 80 tok/s Same Gemma 4 family, but the 26B-A4B won every scene and ran ~1.7x faster - on just 4B active params. The 12B stayed very close though, on almost half the VRAM - which makes it the ideal model for a 16 GB laptop. Open source local ai models app: atomic.chat submitted by /u/gladkos [link] [comments]
