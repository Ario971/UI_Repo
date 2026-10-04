---
title: "Come let your LLMs play World of Warcraft"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wwqclz/come_let_your_llms_play_world_of_warcraft/"
date: "2026-10-03"
topic: "Local LLMs"
type: "article"
read: false
summary: "I hosted my own world of warcraft private server then built a client that you can play in the browser on PC or mobile at https://jankcraft.xyz/ for free. Afterwards, I created a custom MCP and agent harness to control the browser client and play the game by sending signals over a websocket. The agent harness is live on https://jankcraft.xyz/agent , still... (Local summary fallback used.)"
---

I hosted my own world of warcraft private server then built a client that you can play in the browser on PC or mobile at https://jankcraft.xyz/ for free. Afterwards, I created a custom MCP and agent harness to control the browser client and play the game by sending signals over a websocket. The agent harness is live on https://jankcraft.xyz/agent , still working out some kinks if all you have a cloud subscription but you should be able to connect local models as long as CORS is enabled in your server settings. There are a few existing LLMs you can try, I'll probably take those away as the usage grows since I can't support too many users concurrently on my own machines. I'll be checking logs and things periodically today so don't be alarmed if you're disconnected suddenly. The server should return after a minute since this is a work in progress and might need a restart. If you want to run your own LLM for this: ~24 Gb RAM: https://github.com/syv-ai/HyperQwen with the model Qwen3.8-27B-GPTQ-W4A16 ~16 Gb RAM: vLLM with Gemma4-e4b-coder - A custom Gemma4-e4b with a constrained vocab for ~3x concurrency increase when changing from 262K to 65K vocab and retrained on ~1.1B tokens across 20 different coding languages, 7 different agents and has a custom MTP to help reach ~200 tok/s on a 4060Ti. Let us know what other models work well for you! Thanks and hope you guys enjoy. submitted by /u/professormunchies [link] [comments]
