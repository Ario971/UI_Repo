---
title: "Show HN: Saccade – Live semantic browser truth for AI agents"
source: "Hacker News Top + Show HN"
url: "https://github.com/nanlogic/saccade"
date: "2026-08-31"
topic: "AI agents"
type: "article"
read: false
summary: "I build one this application is to resolve the most of the agent cannot handle the brother they extremely slow. So I come up with this idea, we install one of the extntion on chrome or edge to give continuously compile the tabs authorized by the user into semantically meaningful objects with stable identities, and push page changes as deltas to the local... (Local summary fallback used.)"
---

I build one this application is to resolve the most of the agent cannot handle the brother they extremely slow. So I come up with this idea, we install one of the extntion on chrome or edge to give continuously compile the tabs authorized by the user into semantically meaningful objects with stable identities, and push page changes as deltas to the local Node.js Broker. The Agent reads the full truth or delta of the specified tab via MCP and executes actions using object IDs bound to document. The preliminary result shows that it is very close to the performance of Playwright in terms of token use and speed. The only problem with this one is that at the very first time, it is going to send the full truth, and after that, for any page changes, it only sends the data. So, after the first read, the continuous operation of the page reaches the millisecond reaction loop. It can also upload filled forms, downloads, and all kinds of stuff. I want somebody to check and use it. If it is possible plz give me some feedback.
