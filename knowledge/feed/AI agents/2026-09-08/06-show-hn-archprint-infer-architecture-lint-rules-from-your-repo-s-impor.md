---
title: "Show HN: Archprint, infer architecture lint rules from your repo's import graph"
source: "Hacker News Top + Show HN"
url: "https://github.com/Tommkruix/archprint"
date: "2026-09-08"
topic: "AI agents"
type: "article"
read: false
summary: "This tool started as a research for me trying to answer the question \"Does AI agents drift from your architecture conventions or if you need enforcement instead?\". So I started out building a benchmark to test that premise and on the scope I tested, the agents did not drift and I had to stop that research line. So to reuse what I have learnt from that res... (Local summary fallback used.)"
---

This tool started as a research for me trying to answer the question "Does AI agents drift from your architecture conventions or if you need enforcement instead?". So I started out building a benchmark to test that premise and on the scope I tested, the agents did not drift and I had to stop that research line. So to reuse what I have learnt from that research, I started out trying to catch engineer's regressions through review and CI and create those conventions codebases already follows with the evidence instead of leaving them in someone's head. Before I started building this tool, I also mostly write the rules by hand and linter's documentations for every linter I wanted to use. But after my research, the tool automates the process and I'm excited to see how it can help other engineers too. I ran the full package workflow (scan, recommend) across 92,861 real public TypeScript repositories on github and it completed on every one without a single crash and the reversible install/uninstall round-trip held. I will appreciates any feedback you have on the rules it infers for your repo and how it can help you enforce them or not. The study is public here https://github.com/Tommkruix/agentrulebench and Archprint is public here https://github.com/Tommkruix/archprint also.
