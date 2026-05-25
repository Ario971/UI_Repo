---
title: "Show HN: Local note engine uses LLM to organize notes into a knowledge graph"
source: "Hacker News Show HN"
url: "https://github.com/AlexWasHeree/NoteCast"
date: "2026-05-24"
topic: "AI dev tools"
type: "article"
read: false
summary: "i take a lot of notes but rarely find time to organize them so the value of most notes in my personal context quietly disappears. Notecast is a local note engine i've been building to help me with that. it runs a three stage LLM pipeline (Classify -> Organize -> Consolidate) that automatically builds and maintain a knowledge graph from the notes. the them... (Local summary fallback used.)"
---

i take a lot of notes but rarely find time to organize them so the value of most notes in my personal context quietly disappears. Notecast is a local note engine i've been building to help me with that. it runs a three stage LLM pipeline (Classify -> Organize -> Consolidate) that automatically builds and maintain a knowledge graph from the notes. the theme hierarchy emerges by subdivision as notes accumulate. Any change generates a proposal that can be edited and commited by the user. It is early stage and a lot of architectural and domain logic decisions might change but the core is working and is already useful. It has Obsidian vault integration. I recommend using it (just set vaultPath on configurations) I'm actively developing it this year and would love feedback.
