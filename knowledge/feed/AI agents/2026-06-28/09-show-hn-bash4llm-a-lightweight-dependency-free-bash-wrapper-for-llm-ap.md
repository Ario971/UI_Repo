---
title: "Show HN: Bash4LLM+ – A lightweight, dependency-free Bash wrapper for LLM APIs"
source: "Hacker News Top + Show HN"
url: "https://github.com/kamaludu/bash4llm/"
date: "2026-06-28"
topic: "AI agents"
type: "article"
read: false
summary: "Bash4LLM is a single-file Bash wrapper for interacting with LLMs from the terminal. I created it because I wanted something simple that worked without installing Python, Node, or any other runtime. It uses only Bash, curl, and jq. You can send prompts, start a small chat, process files line by line, stream output, and save session metadata in JSON format.... (Local summary fallback used.)"
---

Bash4LLM is a single-file Bash wrapper for interacting with LLMs from the terminal. I created it because I wanted something simple that worked without installing Python, Node, or any other runtime. It uses only Bash, curl, and jq. You can send prompts, start a small chat, process files line by line, stream output, and save session metadata in JSON format. I tried to make it safe and predictable: no use of the system /tmp, no use of eval. Groq is supported by default, and other providers can be added with dedicated Bash scripts in the extras/providers/ folder. Example: echo "explains the command: ls -l" | ./bash4llm
