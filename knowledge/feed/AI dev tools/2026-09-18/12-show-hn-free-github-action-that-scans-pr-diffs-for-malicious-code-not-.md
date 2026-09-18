---
title: "Show HN: Free GitHub Action that scans PR diffs for malicious code, not quality"
source: "Hacker News Show HN"
url: "https://github.com/marketplace/actions/vigil-pr-scanner"
date: "2026-09-18"
topic: "AI dev tools"
type: "article"
read: false
summary: "I watched a video recently on malicious code injection into OSS repo PRs and how they can go undetected because of how well they're hidden and decided to do a project for this. This tool is essentially used in unison with ai code review bots like greptile. While tools like greptile reason because they run with LLMs, this is a deterministic step before gre... (Local summary fallback used.)"
---

I watched a video recently on malicious code injection into OSS repo PRs and how they can go undetected because of how well they're hidden and decided to do a project for this. This tool is essentially used in unison with ai code review bots like greptile. While tools like greptile reason because they run with LLMs, this is a deterministic step before greptile that scans for malicious code (command execution, credential access, exfil, auto-run hooks, obfuscation, and prompt injection; regex + semgrep, no LLM), then can trigger the ai code reviewer like greptile or coderabbit, pointing it to its findings. It's free/MIT and runs in your CI.
