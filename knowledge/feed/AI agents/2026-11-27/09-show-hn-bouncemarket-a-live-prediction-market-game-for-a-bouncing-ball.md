---
title: "Show HN: bouncemarket – a live prediction market game for a bouncing ball"
source: "Hacker News Top + Show HN"
url: "https://bouncemarket.minhanhday.com/"
date: "2026-11-27"
topic: "AI agents"
type: "article"
read: false
summary: "a ball will fall. trade on where it lands. I made this game! Some technical details: The entire drop of the ball is simulated server-side, then streamed to each client as server-sent events with a small buffer. Every drop is deterministic from its starting position, so rounds can be replayed exactly for later analysis, but tiny variations in starting posi... (Local summary fallback used.)"
---

a ball will fall. trade on where it lands. I made this game! Some technical details: The entire drop of the ball is simulated server-side, then streamed to each client as server-sent events with a small buffer. Every drop is deterministic from its starting position, so rounds can be replayed exactly for later analysis, but tiny variations in starting position can change the ultimate outcome. There's some AI traders to keep the market moving, but they drop out in any round that has more than five people. They operate using a naive set of rules that I wrote for them, so they're not too hard to beat -- it's when the market is full of real people that it gets tricky. Curious to get feedback on anything you would change, and especially whether the mechanics were clear right away or not.
