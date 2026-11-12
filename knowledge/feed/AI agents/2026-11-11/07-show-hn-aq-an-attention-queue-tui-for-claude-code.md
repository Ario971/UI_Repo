---
title: "Show HN: Aq – an attention queue TUI for Claude Code"
source: "Hacker News Top + Show HN"
url: "https://github.com/nodo-labs-uk/attention-queue"
date: "2026-11-11"
topic: "AI agents"
type: "article"
read: false
summary: "Hi, here's a TUI we originally created for internal use. The goal is to be able to control multiple Claude Code sessions running in parallel while being able to review the changes and to understand the design choices the agents make. The key design principles are: - the programmer's attention is the bottleneck, so instead of cycling between sessions to fi... (Local summary fallback used.)"
---

Hi, here's a TUI we originally created for internal use. The goal is to be able to control multiple Claude Code sessions running in parallel while being able to review the changes and to understand the design choices the agents make. The key design principles are: - the programmer's attention is the bottleneck, so instead of cycling between sessions to find what's waiting for user input we use hooks to push work to the attention queue, i.e. let work come to you, not viceversa - easy change, review and comment loop: [tuicr]( https://tuicr.dev/ }-inspired code reviews. Easy to add comments and send them to agents - unobtrusive tooling: run on tmux sessions, connect to claude code via hooks, no complex dependencies - quiz mode: answer design questions about the code to verify and reinforce your understanding of the changes - keyboard-first navigation with vim keybindings Comments, ideas and PRs all welcome!
