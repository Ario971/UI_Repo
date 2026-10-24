---
title: "Show HN: Searching for optimal strategies in a puzzle game with chance (Drop7)"
source: "Hacker News Top + Show HN"
url: "https://drop7.dev"
date: "2026-10-23"
topic: "AI agents"
type: "article"
read: false
summary: "Sixteen years ago, I wrote a Java program which tried to pick the ideal move in a puzzle game called Drop7. On each turn, the player only has seven choices for their next move, but there is also an element of chance which turns this simple game into a surprisingly difficult problem involving search, hidden information, long-term planning, and chance. I re... (Local summary fallback used.)"
---

Sixteen years ago, I wrote a Java program which tried to pick the ideal move in a puzzle game called Drop7. On each turn, the player only has seven choices for their next move, but there is also an element of chance which turns this simple game into a surprisingly difficult problem involving search, hidden information, long-term planning, and chance. I renewed my investigation this weekend, into whether there is an autonomous strategy that averages more than one million points per game. An experienced human player can score a million points with long-term strategic thinking, but the best automated strategies I could come up with are currently averaging around 300k-400k points. One of the easiest ways to contribute to advancing this research is to compete on the global leaderboard and submit your human strategy - https://drop7.dev/compete . This project has also been an enlightening experiment into using agents as research collaborators and evidence collectors. Repository: https://github.com/keshavsaharia/drop7-bench I’d especially appreciate feedback from people who are knowledgeable in game theory, stochastic planning, learned value functions, or heavy-tailed evaluation. How would you approach long-horizon action ranking here? I’d also love to hear whether the research makes sense to someone encountering the project for the first time.
