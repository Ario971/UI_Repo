---
title: "Show HN: Osint tool that finds exposed files on domains"
source: "Hacker News Top + Show HN"
url: "https://search.cerast-intelligence.com/"
date: "2026-07-05"
topic: "AI agents"
type: "article"
read: false
summary: "hey guys, wanted to show one of my side projects i just made public. the idea is basically another osint tool for pentesters and bug bounty hunters. it watches certificate transparency logs and checks newly-seen domains for exposed stuff like .env files, open .git dirs, config files, db dumps and so on, and puts whatever it finds into a searchable db. you... (Local summary fallback used.)"
---

hey guys, wanted to show one of my side projects i just made public. the idea is basically another osint tool for pentesters and bug bounty hunters. it watches certificate transparency logs and checks newly-seen domains for exposed stuff like .env files, open .git dirs, config files, db dumps and so on, and puts whatever it finds into a searchable db. you just search a domain (or part of one) and see what's exposed. it's read-only and free. one thing i've been thinking about adding is a way to register for certain keywords and get notified when something new shows up for that search. would love to hear if you have other ideas for useful features, and also ideas for how to reduce abuse of the data, since that's the part i'm least sure about. https://search.cerast-intelligence.com/
