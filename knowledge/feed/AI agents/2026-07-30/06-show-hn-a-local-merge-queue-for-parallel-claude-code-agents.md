---
title: "Show HN: A local merge queue for parallel Claude Code agents"
source: "Hacker News Top + Show HN"
url: "https://github.com/funador/claude-code-merge-queue"
date: "2026-07-30"
topic: "AI agents"
type: "article"
read: false
summary: "I have been pushing up to 90 commits a day on a MacBook Air via 4-5 parallel agents. As you can imagine when all the agents try to build, test and run dev servers on an 8GB machine it is the fast lane to a force quit and restart. I also did not want to pay the CI minutes on 90 pushes a day. So I designed a local merge queue to have all commits land one at... (Local summary fallback used.)"
---

I have been pushing up to 90 commits a day on a MacBook Air via 4-5 parallel agents. As you can imagine when all the agents try to build, test and run dev servers on an 8GB machine it is the fast lane to a force quit and restart. I also did not want to pay the CI minutes on 90 pushes a day. So I designed a local merge queue to have all commits land one at a time and fully tested. Hopefully this helps other folks with more modest machines. Appreciate any feedback.
