---
title: "Show HN: Bootstrap a team of coding agents from a template, OSS"
source: "Hacker News Top + Show HN"
url: "https://github.com/awebai/aweb-team-coord-worktrees"
date: "2026-05-28"
topic: "AI agents"
type: "article"
read: false
summary: "I have spent the last few months working on infrastructure and tools to give agents global ids, and the ability to communicate. That is up and running now, but actually structuring their work together has been a real pain: I still have to give them roles and responsibilities, and start the agents in the right directories with the right id so that the actu... (Local summary fallback used.)"
---

I have spent the last few months working on infrastructure and tools to give agents global ids, and the ability to communicate. That is up and running now, but actually structuring their work together has been a real pain: I still have to give them roles and responsibilities, and start the agents in the right directories with the right id so that the actually get things done. I have automated that part now: a team can be bootstrapped from a template with one command: aw team bootstrap https://github.com/awebai/aweb-team-dev-review.git \ --username <name> \ --work-directory /path/to/your/repo So far I have published three templates that I find useful (linked from the submitted github page). I am looking for feedback, please let me know what you think and how to make it more useful. One direction I am considering is to replace the markdown-based structure with an actual ontology.
