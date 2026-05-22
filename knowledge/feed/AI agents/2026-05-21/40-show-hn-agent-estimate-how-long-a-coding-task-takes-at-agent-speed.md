---
title: "Show HN: Agent-estimate, how long a coding task takes, at agent speed"
source: "Hacker News Top + Show HN"
url: "https://github.com/kiloloop/agent-estimate"
date: "2026-05-21"
topic: "AI agents"
type: "article"
read: false
summary: "I have used Codex & Claude Code for coding for a while, but how long a coding task will actually take? When I ask Claude Code to estimate, the result is often from training data, which is based on human speed. That’s why I built this tool, to estimate effort in ai agent speed. I run it every morning before I dispatch coding tasks to my agents. What's in i... (Local summary fallback used.)"
---

I have used Codex & Claude Code for coding for a while, but how long a coding task will actually take? When I ask Claude Code to estimate, the result is often from training data, which is based on human speed. That’s why I built this tool, to estimate effort in ai agent speed. I run it every morning before I dispatch coding tasks to my agents. What's in it: task sizing: auto-classifies XS to XL from the description, then runs PERT on that tier human-equivalent comparison: a per-task-type multiplier so you see the speedup METR p80 thresholds: warns when an estimate exceeds a model's reliability horizon wave planning: schedules independent tasks in parallel across a multi-agent fleet The estimation data is from my daily coding tasks from past few weeks: per-runtime calibration: Opus 4.7, GPT-5.5, different models have different reliability horizons and costs per-task-type priors: backend, frontend, app development, docs, and brainstorm PR review: I usually let Codex and Claude Code review each other’s code, and the tool takes that into consideration a calibration loop that keeps me honest: dispatch data is validated at end of day by my coordinator agent Try it: pip install agent-estimate, read the code https://github.com/kiloloop/agent-estimate/ , or the writeup https://kiloloop.com/agent-estimate/
