---
title: "Show HN: Hacker News with AI stories filtered out"
source: "Hacker News Top + Show HN"
url: "https://hcker.news/?view=frontpage&ai=exclude"
date: "2026-08-03"
topic: "AI agents"
type: "article"
read: false
summary: "Hi folks, I've noticed that a lot of people here seem exhausted by the amount of AI news on the front page. I shared hcker.news here a year ago and it has since gained a ton of filtering features, including a dedicated AI filter, so I figured I should tell more people about it. The filter works in three passes: 1. Known AI-related keywords and domains are... (Local summary fallback used.)"
---

Hi folks, I've noticed that a lot of people here seem exhausted by the amount of AI news on the front page. I shared hcker.news here a year ago and it has since gained a ton of filtering features, including a dedicated AI filter, so I figured I should tell more people about it. The filter works in three passes: 1. Known AI-related keywords and domains are filtered automatically. 2. An agent reviews the remaining articles and removes those it identifies as AI-related. 3. I make the call on uncertain cases. You can also exclude GitHub repos posted to HN that show signs of AI authorship. The filter checks: - Commit messages for agent attribution - Contributors for known coding agents - Repository files for agent instructions and configs No filter will be perfect, but this is as good as it gets. lmk what you think. Cheers. More links: Original Show HN: https://news.ycombinator.com/item?id=44075353 If you only want AI stories: https://hcker.news/?view=frontpage&ai=include RSS: https://hcker.news/feeds/atom?period=day&ai=exclude A github-only non-AI feed: https://hcker.news/?ai=exclude&include_domains=github.com
