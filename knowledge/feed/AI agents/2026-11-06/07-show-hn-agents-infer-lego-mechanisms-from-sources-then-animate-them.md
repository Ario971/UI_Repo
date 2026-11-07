---
title: "Show HN: Agents infer Lego mechanisms from sources, then animate them"
source: "Hacker News Top + Show HN"
url: "https://github.com/anteloc/ldraw-mecha/tree/v0.5.0"
date: "2026-11-06"
topic: "AI agents"
type: "article"
read: false
summary: "Hi there :) Around a month ago, I released LDraw Nova, an agentic toolset for assembling LEGO CAD models by generating LDraw source code files. For more details, here's the Show HN post: https://news.ycombinator.com/item?id=49937916 From the comments, I got the impression that there was quite an interest in seeing not only AI-generated LEGO models, but al... (Local summary fallback used.)"
---

Hi there :) Around a month ago, I released LDraw Nova, an agentic toolset for assembling LEGO CAD models by generating LDraw source code files. For more details, here's the Show HN post: https://news.ycombinator.com/item?id=49937916 From the comments, I got the impression that there was quite an interest in seeing not only AI-generated LEGO models, but also AI-animated LEGO ones. I took a look at results from past experiments, and found it feasible to use agentic LLMs for: - analyzing the LDraw source code for LEGO models - reverse-engineer! the mechanisms present by reading the descriptions and sequence for the parts there - and then, animate them via Blender! This new project I'm presenting, LDraw Mecha, is the end result and proof that can be done: - Read specially annotated LDraw LEGO models .mpd source files - Infer the model structure in terms of submodels - Select from those the ones that are mechanisms - Plan animations - Execute them in Blender In summary, from an initial .mpd source file, get a rigged and animated version for the model as a Blender (.blend) file. See the results here: - Repo (v0.5.0): https://github.com/anteloc/ldraw-mecha/tree/v0.5.0 - Gallery: https://github.com/anteloc/ldraw-mecha/blob/v0.5.0/GALLERY.m... - Process: https://github.com/anteloc/ldraw-mecha/blob/v0.5.0/PROCESS.m... This project is very unusual, I'd really appreciate some feedback from the community. Cheers!
