---
title: "Show HN: Graph2agent; Mermaid diagrams, explained for agents"
source: "Hacker News Top + Show HN"
url: "https://graph2agent.github.io/"
date: "2026-08-10"
topic: "AI agents"
type: "article"
read: false
summary: "During the implementation of a huge high performance service. In order to keep context small (mainly for humans) I kept the specs into mermaid diagrams. When communicating with humans; diagrams were easy to follow and to remember. But when I asked the agent to implement what's in the diagram, most of the times it failed. So I came into conclusion that age... (Local summary fallback used.)"
---

During the implementation of a huge high performance service. In order to keep context small (mainly for humans) I kept the specs into mermaid diagrams. When communicating with humans; diagrams were easy to follow and to remember. But when I asked the agent to implement what's in the diagram, most of the times it failed. So I came into conclusion that agents are good into writing mermaid diagrams but they are not good into reading them. I built graph2agent in order to deterministically (without inference :) ) convert mermaid diagrams into digestible rich text for agents. examples: https://github.com/graph2agent/examples/blob/main/examples/m... This gave us 50% error reduction for any class of diagrams and 80% error reduction for sequence diagrams specifically. Also Input tokens increased on avg by 8% (which is expected) but Reasoning tokens dropped by almost 50%. You can use it either with MCP so agents can call it with any mermaid diagram, and also can put it in pre-commit jobs and run it on every PR so all diagrams are agent ready! I hope you like it! Let me know your thoughts!
