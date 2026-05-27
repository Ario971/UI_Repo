---
title: "Turning local agents into self-optimizing agents"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1toejzp/turning_local_agents_into_selfoptimizing_agents/"
date: "2026-05-26"
topic: "Local LLMs"
type: "article"
read: false
summary: "I was experimenting with a self-optimizing agentic pipeline to climb the benchmark leaderboard (TerminalBench). On a 10-task subset, I got the performance to rise from ~30% → ~90%. That loop worked, so I asked: can the same reflect-and-rewrite step run continuously against everyday chats instead of a benchmark? How it works Every chat with your local LLM... (Local summary fallback used.)"
---

I was experimenting with a self-optimizing agentic pipeline to climb the benchmark leaderboard (TerminalBench). On a 10-task subset, I got the performance to rise from ~30% → ~90%. That loop worked, so I asked: can the same reflect-and-rewrite step run continuously against everyday chats instead of a benchmark? How it works Every chat with your local LLM goes through a small proxy and is logged. autoswarm reflect has the same local model review those logs, distill concrete lessons, and write them to skills.yaml . Lessons auto-inject into the system prompt of future chats. Run it (LM Studio path) 1. Start LM Studio's local server and load a model. 2. ```bash pip install -e . autoswarm doctor # verifies LM Studio is reachable autoswarm start # auto-detects upstream + model, listens on :8080 I'm genuinely fascinated by the idea of self-optimizing agents, and I believe there's something bigger to uncover there . That said, this is just a hobby project and I'm still experimenting with it. Would love your feedback! Link: https://github.com/arteemg/autoswarm I'm actively working on the project, so please ⭐ the repo to stay updated. submitted by /u/Rude_Substance_8904 [link] [comments]
