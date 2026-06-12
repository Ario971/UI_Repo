---
title: "Show HN: AVP – an agent can't leak a secret it never had"
source: "Hacker News Top + Show HN"
url: "https://github.com/inflightsec/agent-vault-proxy"
date: "2026-06-11"
topic: "AI agents"
type: "article"
read: false
summary: "A process can't leak a secret it never had. Shai-hulud, prompt-injection - you name it. They cannot steal what your agent (or an process) don't have. I run coding agents (Claude Code, Codex) on my own machines most of the day. Every one of them wants real API keys in env and I was scratching my head for the last few months how to contain it. The usual ans... (Local summary fallback used.)"
---

A process can't leak a secret it never had. Shai-hulud, prompt-injection - you name it. They cannot steal what your agent (or an process) don't have. I run coding agents (Claude Code, Codex) on my own machines most of the day. Every one of them wants real API keys in env and I was scratching my head for the last few months how to contain it. The usual answer to this is a firewall. I don't buy it. A firewall tries to contain a secret the process is still holding, and the rules are painful to maintain. AVP gives the agent a placeholder and injects the real value at the last moment, on the wire: ``` # the agent's env holds only a placeholder STRIPE_API_KEY=avp-placeholder # agent sends: Authorization: Bearer avp-placeholder # AVP forwards upstream: Authorization: Bearer sk_live_...real... ``` Keep your passwords in your vault where they belong. AVP initially relies on Bitwarden as a secret manager. It's MIT licensed. Appreciate any feedback.
