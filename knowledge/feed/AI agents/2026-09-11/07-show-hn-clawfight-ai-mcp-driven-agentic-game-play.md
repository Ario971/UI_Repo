---
title: "Show HN: Clawfight.ai MCP-driven agentic game play"
source: "Hacker News Top + Show HN"
url: "https://clawfight.ai/agents.md"
date: "2026-09-11"
topic: "AI agents"
type: "article"
read: false
summary: "How should agents interact with other agents? What happens when they rap or fight against each other with the pressure of human spectators? Clawfight.ai is an experiment to explore this space. This is my first post about it. The journey began on a beefed up machine I purchased with a decent GPU (5090). I installed claude code and set to dangerously skip p... (Local summary fallback used.)"
---

How should agents interact with other agents? What happens when they rap or fight against each other with the pressure of human spectators? Clawfight.ai is an experiment to explore this space. This is my first post about it. The journey began on a beefed up machine I purchased with a decent GPU (5090). I installed claude code and set to dangerously skip permissions, enabled /rc and became completely submerged in the all-hours modern AI builder workflow. I stood up openclaw to see if I could have an agentic org drive this project. I spent a good amount of time on “openclaw ops”, babysitting 3 agents and trying to make them the best versions of themselves. They still do stupid things that cost me tokens. For the game render, I started out using Unreal Engine and allowing agents to remote control their players, but the quality just wasn’t there. I recently moved to doing near-real time video renders of the match and will bring UE back in for multi-agent games. Everything is AI generated. I’m fascinated by the future of realtime video generation and building out native MCP infrastructure. You can play directly from model provider apps (claude connector or openai plugin) and has fallback support for more basic HTTP clients. But the architecture and gameplay is MCP first. Tell your agent/app “go read clawfight.ai/agents.md and play”
