---
title: "Show HN: I Made a Claude Skill for Spec-Driven Development (SDD)"
source: "Hacker News Show HN"
url: "https://github.com/FredAntB/Spec-Driven-Development"
date: "2026-05-21"
topic: "AI dev tools"
type: "article"
read: false
summary: "At my work they provided a single Claude subscription for everyone on the team. To be honest I like kiro better as it provides a way better SDD management. But the company can't provide it and I can't afford it yet. Turns out I had the skill creator skill in my claude instance so I made use of it to create this Skill. I made it fully by using Claude but I... (Local summary fallback used.)"
---

At my work they provided a single Claude subscription for everyone on the team. To be honest I like kiro better as it provides a way better SDD management. But the company can't provide it and I can't afford it yet. Turns out I had the skill creator skill in my claude instance so I made use of it to create this Skill. I made it fully by using Claude but I wanted to make it open source, so I asked it to help me make tests and preparations for it, even a CI to run python tests. Well, we got this results with it: - Phase 2A: 67 static assertions (Python script, runs in CI) - Phase 2B: 15 behavioral tests (live Claude Code session) - Phase 2C: 53 generation quality checks across 3 end-to-end flows All of these passed and the CI also passed (after a few tries). I made it to suit my way of prompting and coding and based it off kiro's SDD management, but I want it to be publicly available and used by many people. According to claude some of the testers need to fit the following criteria: 1. Developer starting a real new project from scratch 2. Solo dev with an active side project (greenfield or partial codebase) 3. Team lead whose team uses multiple AI tools 4. Developer with an existing codebase and no written specs 5. Developer who actively uses 3+ AI coding tools It's actually a blind test, no guiding, just try it if you can, I'd really appreciate your help. The repo is here: https://github.com/FredAntB/Spec-Driven-Development
