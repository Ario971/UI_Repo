---
title: "Show HN: Widen – Open-source Mac Postgres GUI with local or cloud text-to-SQL"
source: "Hacker News Show HN"
url: "https://widen.dev/"
date: "2026-07-31"
topic: "AI dev tools"
type: "article"
read: false
summary: "Github: https://github.com/betocmn/widen I was paying for DataGrip for several years as my desktop database GUI but if I wanted text-to-SQL with LLMs I'd have to pay even more on top. So I decided to build my own and I've been using it for a few weeks now. At any time I'm usually working with 3 to 6 databases, and having them set up in something like Cond... (Local summary fallback used.)"
---

Github: https://github.com/betocmn/widen I was paying for DataGrip for several years as my desktop database GUI but if I wanted text-to-SQL with LLMs I'd have to pay even more on top. So I decided to build my own and I've been using it for a few weeks now. At any time I'm usually working with 3 to 6 databases, and having them set up in something like Conductor (for parallel agentic coding), but for Postgres databases, lets me quickly start a session, ask questions to my database in plain English, get a data export, move on and close the session. It's been working well and I thought I would share it here. It's a native Mac app (Swift), free and open source (MIT). For the LLM you bring your own OpenRouter key, or there's an experimental on-device mode using Apple's local model, where nothing leaves your Mac. Cloud mode only sends the question and schema metadata, not your data, unless you explicitly turn that on per connection.
