---
title: "Show HN: Analysis of Hacker News predictions since 2008"
source: "Hacker News Show HN"
url: "https://hnpredictions.com/"
date: "2026-11-24"
topic: "AI dev tools"
type: "article"
read: false
summary: "I've always been curious about market and technology predictions so I made HN Predictions. I made it (prompted) in Antigravity using Gemini 4 Neon (High) orchestrator, and it took about 4 to 6 hours. Everything is hosted on Google Cloud and uses Vertex API and various Gemini models (still experimenting and comparing costs vs effectiveness) to analyze and... (Local summary fallback used.)"
---

I've always been curious about market and technology predictions so I made HN Predictions. I made it (prompted) in Antigravity using Gemini 4 Neon (High) orchestrator, and it took about 4 to 6 hours. Everything is hosted on Google Cloud and uses Vertex API and various Gemini models (still experimenting and comparing costs vs effectiveness) to analyze and summarize texts. I primarily have it look at dedicated "prediction" threads where people discuss what they think will happen next year or over the next decade. Then the app checks if they came true by using Google Search (sited public records). To make things interesting I also make it check for major current events daily, and try to find any related comments (that wouldn't otherwise be found via the dedicated prediction threads). Next, I am going to do a deeper analysis to see if there are interesting patterns - and please let me know if you spot any anomalies. Since multiple people can make the same prediction, I cluster them before processing - and rank for Impact, Boldness, and Specificity. How it works: https://hnpredictions.com/about Methodology: https://hnpredictions.com/methodology ... if you search for your HN name you will find your predictions. Questions or suggestions are welcome!
