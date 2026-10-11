---
title: "Show HN: WallHop – 12ft.io is gone, so I built a replacement"
source: "Hacker News Top + Show HN"
url: "https://wallhop.io/"
date: "2026-10-11"
topic: "AI agents"
type: "article"
read: false
summary: "Hi HN, I'm Josh. WallHop is a free paywall bypass: paste an article URL (or prefix any URL with wallhop.io/) and you get the readable article without the paywall popup, ads or clutter. No signup, no extension. I built it after 12ft.io went away. The News Media Alliance took it down in July 2025 and I missed having something I could hit from my phone. How... (Local summary fallback used.)"
---

Hi HN, I'm Josh. WallHop is a free paywall bypass: paste an article URL (or prefix any URL with wallhop.io/) and you get the readable article without the paywall popup, ads or clutter. No signup, no extension. I built it after 12ft.io went away. The News Media Alliance took it down in July 2025 and I missed having something I could hit from my phone. How it works: it started as a fork of everywall/ladder (GPL-3.0) and I've modified it heavily since. Instead of relying on one trick, it chains several bypass methods per request and falls back to archive.is when they all fail, so one site blocking one technique doesn't break it. Things that might be interesting: - iOS Shortcut: on iPhone, tap Share > WallHop from any article in Safari or another app. This is how I use it 95% of the time. - It works on Medium member-only posts, which 12ft never handled. - Bookmarklet for desktop, plus /raw/<url> and /api/<url> endpoints if you want to script it. I've tested it against most major news outlets and a bunch of local papers. It won't work everywhere. There are SOME server-side paywalls that are out of reach, and I'd rather say that up front. If you find a site that breaks, I'd love the link, and I can likely figure out a way to bypass it!
