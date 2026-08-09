---
title: "Show HN: Try Benzi – A coding harness/agent beating Claude Code itself on Sonnet"
source: "Hacker News Top + Show HN"
url: "https://benzi.fly.dev/about"
date: "2026-08-08"
topic: "AI agents"
type: "article"
read: false
summary: "Hi y'all. Been working on something that should've been made a long time ago imo. It compiles codebases into O(1) hashmaps that the agent queries to discover the structure of your code/answer questions/write code. It also does complete static analysis checks on any writes the agent makes. Don't take my word for it though. Here are the benchmarks: https://... (Local summary fallback used.)"
---

Hi y'all. Been working on something that should've been made a long time ago imo. It compiles codebases into O(1) hashmaps that the agent queries to discover the structure of your code/answer questions/write code. It also does complete static analysis checks on any writes the agent makes. Don't take my word for it though. Here are the benchmarks: https://benzi.fly.dev/benchmark . on 2/20 tests, Claude Code (mostly Sonnet on one task) regressed or timed out. Benzi didn't because of course, it has a map it can query and not get lost in the sauce. On the other 18 it is cheaper, faster, or often both. Would love to get some early adoption and criticism! (Only available on Windows for now. soz. and also keep an eye on the benchmarking page; I think I can push it far more -- no promises, still work in progress. Haven't thoroughly tested greenfielding experience either.) (another note: VS Code extension/website is running DeepSeek V4 flash. not Sonnet. Everything mostly built with CC Sonnet tho )
