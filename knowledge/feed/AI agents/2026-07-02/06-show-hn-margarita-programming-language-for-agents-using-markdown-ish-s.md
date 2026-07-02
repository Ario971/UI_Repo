---
title: "Show HN: Margarita - Programming language for Agents using Markdown-ish syntax"
source: "Hacker News Top + Show HN"
url: "https://www.margarita.run"
date: "2026-07-02"
topic: "AI agents"
type: "article"
read: false
summary: "On my list of build it from scratch has always been to build a programming language. So with the help of AI I was able to get it done! Why did I build it? At work I've seen two major problems with our ai workflows/ skills libraries. There is a lack of determinism when your whole workflow is a markdown file of 100 steps, and markdown skill libraries lack c... (Local summary fallback used.)"
---

On my list of build it from scratch has always been to build a programming language. So with the help of AI I was able to get it done! Why did I build it? At work I've seen two major problems with our ai workflows/ skills libraries. There is a lack of determinism when your whole workflow is a markdown file of 100 steps, and markdown skill libraries lack composability. Meaning we violate things like DRY in the all the md files in the skills library. I built Margarita to allow for markdown and logical operators to exist together, which means you can bring in determinism through code structures when it makes sense, and fall back to llm dynamic code when that makes sense. As an added bonus allows for composable prompts ala React which solve my other gripe with skills libraries being a mash of text everywhere. Overall I've been getting pretty luke warm responses from Reddit, so I'll probably just shelve it, but it was a blast to make. Got to build code agents for pretty much every llm provider and built my own harness. I would recommend doing that it's a great learning experience. https://www.margarita.run https://github.com/Banyango/margarita
