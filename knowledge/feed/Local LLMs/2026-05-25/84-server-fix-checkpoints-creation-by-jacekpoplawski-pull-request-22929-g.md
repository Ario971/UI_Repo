---
title: "server: fix checkpoints creation by jacekpoplawski · Pull Request #22929 · ggml-org/llama.cpp"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1tn0jyp/server_fix_checkpoints_creation_by_jacekpoplawski/"
date: "2026-05-25"
topic: "Local LLMs"
type: "article"
read: false
summary: "Imagine you are using a local model for agentic coding. You discuss the idea (50k tokens), then say “implement it”. The agent reads files, writes files, runs commands, produces another 20k tokens and the code is ready. Then your next prompt is just “thank you”, and... nothing happens, you have to wait for \"something\". What is happening is that some tools,... (Local summary fallback used.)"
---

Imagine you are using a local model for agentic coding. You discuss the idea (50k tokens), then say “implement it”. The agent reads files, writes files, runs commands, produces another 20k tokens and the code is ready. Then your next prompt is just “thank you”, and... nothing happens, you have to wait for "something". What is happening is that some tools, like opencode, try to be smart and optimize the context. They modify something in the conversation history. In the best case, llama.cpp has to reprocess everything from that point. In the worst case, it has to reprocess the entire context (70k tokens) and you get “forcing full prompt re-processing...” To avoid that, I switched from opencode to pi. Not because pi has some magical features, but because it does not do that kind of context rewriting. Another issue is the model being smart by removing reasoning from the context. In the best case, llama.cpp only has to reprocess the last run (20k tokens). In the worst case, again, it has to reprocess everything (70k) To avoid that, you can enable “preserve thinking”, at least with Qwen 3.6. The goal of this PR is to avoid the worst case (full prompt re-processing) and get closer to the best case, where llama.cpp only reprocesses what actually changed. I have been using this code for about two weeks and in my opinion agentic coding is now more responsive. submitted by /u/jacek2023 [link] [comments]
