---
title: "Show HN: Deslop skill based on corpus-linguistics and psycholinguistics research"
source: "Hacker News Show HN"
url: "https://github.com/etodanik/deslop"
date: "2026-11-16"
topic: "AI dev tools"
type: "article"
read: false
summary: "I vibed this deslop skill because I was getting increasingly annoyed that deslop skills for prose relied either on fitting prose into an overly restrictive format (simple-english and iso-24495) or telling AI to rewrite something without providing any tools in the skill to measure the outcome (which more often than not resulted in one slop being replaced w... (Local summary fallback used.)"
---

I vibed this deslop skill because I was getting increasingly annoyed that deslop skills for prose relied either on fitting prose into an overly restrictive format (simple-english and iso-24495) or telling AI to rewrite something without providing any tools in the skill to measure the outcome (which more often than not resulted in one slop being replaced with another). This skill is based on published measurements of how LLM text differs from human text: Reinhart et al.’s comparison of Biber’s grammatical features in human and model writing, Terčon & Dobrovoljc’s survey of 44 studies, Clark, Martin & Mahowald’s work on why AI text is hard to read, and Graphite’s “AI Tells” study, whose released data includes tell lists for nine current models. It’s benchmarked against three corpora in which humans and models answered the same prompts: 9,984 web-article topics from Graphite, 24,322 questions from HC3 and 3,027 advice prompts from ELEPHANT. It also ships with a scanner that runs before and after each revision. It shows which problems the revision fixed or newly caused, and it catches dropped facts and any tells from the reviser’s own model family.
