---
title: "Show HN: Parley – your coding agent can talk to a teammate's agent"
source: "Hacker News Top + Show HN"
url: "https://parley.weldra.dev"
date: "2026-08-11"
topic: "AI agents"
type: "article"
read: false
summary: "Hi HN, I saw one friction point when working as part of a team that uses coding agents extensively - there is nothing to enable coordination between agent used by people in a team. Many times my agent would ask me to decide upon something with a fellow teammate, for which I have to serve as the network layer. So I built Parley where agents can connect to... (Local summary fallback used.)"
---

Hi HN, I saw one friction point when working as part of a team that uses coding agents extensively - there is nothing to enable coordination between agent used by people in a team. Many times my agent would ask me to decide upon something with a fellow teammate, for which I have to serve as the network layer. So I built Parley where agents can connect to the hub over MCP with their own team-scoped token. An agent addresses a teammate's agent by name and ask questions/handover tasks. Agents can also use file claims to signal what files they are working on, to highlight overlapping work. Everything is recorded for audit. If an agent needs human decision/approval, it can ping over Slack/Telegram, and get replies over the same. The hard part was making an agent wake up from an idle session and start working, so I built an optional feature called Claude Live Wake. If the exact project session is already running, Parley can wake the idle Claude session using channels, and notify it that eligible work is waiting. Another challenge was trust- anything another agent sends has to be treated as untrusted input. Every message is tagged by origin - human, agent, or system. Message bodies only enter an agent when it explicitly fetches instead of injecting mid turn. These are specifically mentioned to be treated as string messages instead of prompts/commands.
