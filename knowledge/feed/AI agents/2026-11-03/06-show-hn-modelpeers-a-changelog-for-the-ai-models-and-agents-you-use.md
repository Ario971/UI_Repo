---
title: "Show HN: Modelpeers – a changelog for the AI models and agents you use"
source: "Hacker News Top + Show HN"
url: "https://modelpeers.com"
date: "2026-11-03"
topic: "AI agents"
type: "article"
read: false
summary: "Earlier this year, I had one of my product's features down for 48 hours because Anthropic retired Claude 3 Haiku. In another instance, an API parameter started returning errors. I grew sick of not being able to follow and track the endless changes of AI models every week, so I decided to build Modelpeers. It's basically a feed of all these changes. You ca... (Local summary fallback used.)"
---

Earlier this year, I had one of my product's features down for 48 hours because Anthropic retired Claude 3 Haiku. In another instance, an API parameter started returning errors. I grew sick of not being able to follow and track the endless changes of AI models every week, so I decided to build Modelpeers. It's basically a feed of all these changes. You can follow models and agents that you use to see what is changing and what you need to do about it. Optionally, you can sign up to get a digest for the models/agents you follow. Every few hours, it downloads and hashes dozens of pages from the prominent AI companies' pages, like changelogs, deprecation pages, status pages, and pricing pages. Then when a page changes, it pulls the diff, validates it with two models, and if validated as true, it posts it to the feed. The feed currently has about 400 changes, 21 of them breaking changes. Fun fact (well, not really fun): OpenAI alone has 12 shutdowns/cutoff planned for the next six months. Would love to hear what y'all think.
