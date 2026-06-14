---
title: "Show HN: StackScope – I crawled over 40k indie launches to see what they ship"
source: "Hacker News Show HN"
url: "https://stackscope.dev/"
date: "2026-06-12"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hey all, I built StackScope, a crawler/catalogue that looks at new product launches and shows what they were built with. It watches launches from Product Hunt, Show HN, and PeerPush, then crawls the public site behind each one. The goal is to show what people actually launched with: hosting, frameworks, analytics, DNS, security headers, legal pages, AI-bu... (Local summary fallback used.)"
---

Hey all, I built StackScope, a crawler/catalogue that looks at new product launches and shows what they were built with. It watches launches from Product Hunt, Show HN, and PeerPush, then crawls the public site behind each one. The goal is to show what people actually launched with: hosting, frameworks, analytics, DNS, security headers, legal pages, AI-builder signals, and other public clues. I started building it because most stack-detection sites look at the web as a whole. I was more interested in the current indie launch scene: what people are choosing right now, at the point they first put something in public. A few implementation details: it runs on .NET, uses Playwright for rendered pages, and has a first-party fingerprint catalogue rather than one copied from Wappalyzer/etc. robots.txt is honoured, and the bot identifies itself. Frustratingly, I am still waiting for verified bot status from Cloudflare and currently that knocks out about 10% of all sites. There is also a private readiness check: paste a URL, get the same style of report, fix things, and recrawl. No account or email needed. I'd be interested in feedback on the usefulness of this, the methodology, and any obvious false positives. Jonathan.
