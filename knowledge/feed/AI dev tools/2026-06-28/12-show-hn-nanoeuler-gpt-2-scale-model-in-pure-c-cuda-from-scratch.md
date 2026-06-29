---
title: "Show HN: NanoEuler – GPT-2 scale model in pure C/CUDA from scratch"
source: "Hacker News Show HN"
url: "https://github.com/JustVugg/nanoeuler"
date: "2026-06-28"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi everyone, I started working on nanoeuler after the ban of anthropic's fable because my ambition and dream is to work in the AI field in anthropic. The two interesting reasons that led me to create nanoeuler were (1) interfacing with llm does not mean understanding how they are composed and (2), working on llm with a very low-level layer to understand t... (Local summary fallback used.)"
---

Hi everyone, I started working on nanoeuler after the ban of anthropic's fable because my ambition and dream is to work in the AI field in anthropic. The two interesting reasons that led me to create nanoeuler were (1) interfacing with llm does not mean understanding how they are composed and (2), working on llm with a very low-level layer to understand the correlation between parameters and data and growth of the model and how the GPU works and how some layers can be optimized. So I started working on it with a research aspect by making nanoeuler grow more and more but doing one step after another starting from Shakespeare.txt and understanding what a text generation model understands at 23 million parameters. For example, nanoeuler at that number had understood that Name: started a line and wrote that line with sense. I wrote everything in CUDA because I wanted to not use any intermediary between the model in training and inference and what it had to do. Then the use of SFT and much more, even if in small ways, were really useful to understand the various step to make an llm like a chatbot.Any feedback, help, or suggestions are absolutely welcome!
