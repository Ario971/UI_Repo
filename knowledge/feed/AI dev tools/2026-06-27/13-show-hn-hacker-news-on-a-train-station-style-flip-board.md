---
title: "Show HN: Hacker News on a train station-style flip board"
source: "Hacker News Show HN"
url: "https://popflame.quickish.space/hn-flipboard/"
date: "2026-06-27"
topic: "AI dev tools"
type: "article"
read: false
summary: "Although the page itself is more just fun to have made and look at (I like the flip sound), the fun part is how I made it to verify the (and I hate to say it) vibe host service I've been working on. The recent flip board back and forth's on Twitter (X) are what inspired me. The idea here is that people (like me or you) can create something neat like this,... (Local summary fallback used.)"
---

Although the page itself is more just fun to have made and look at (I like the flip sound), the fun part is how I made it to verify the (and I hate to say it) vibe host service I've been working on. The recent flip board back and forth's on Twitter (X) are what inspired me. The idea here is that people (like me or you) can create something neat like this, and others can remix it, change it and publish their own version. This is that all in action and it worked great. I wrote a blog about it (the blog is dogfooding, it's just an app hosted on quickish that uses the built in db lib). For the HN version of this flip board I use their firebase api via the built in quickish server functions that make use of the fact that the front-end can get realtime updates (now that you mention firebase) from cloud function db updates. Of course that's over-kill but I wanted to show something fun. You can remix and host your own version for free, just need a google oauth login that's it. OG flip board I built (Portland Based - Current Weather): https://popflame.quickish.space/flipboard-preview Blog post that dives a tiny bit deeper: https://popflame.quickish.space/blog/hacker-news-on-a-split-...
