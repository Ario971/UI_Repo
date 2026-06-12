---
title: "Show HN: Claw Patrol, a security firewall for agents"
source: "Hacker News Top + Show HN"
url: "https://github.com/denoland/clawpatrol"
date: "2026-06-09"
topic: "AI agents"
type: "article"
read: false
summary: "At Deno we've been using OpenClaw and other agents increasingly for addressing production problems in Deno Deploy - when a PagerDuty alert fires, the agent starts researching the cause and making fixes. In order to do this, the agent needs access to real production systems - postgres, kubernetes, gcp, clickhouse, github, etc. But this is dangerous to say... (Local summary fallback used.)"
---

At Deno we've been using OpenClaw and other agents increasingly for addressing production problems in Deno Deploy - when a PagerDuty alert fires, the agent starts researching the cause and making fixes. In order to do this, the agent needs access to real production systems - postgres, kubernetes, gcp, clickhouse, github, etc. But this is dangerous to say the least - we want destructive actions to be reviewed by other LLMs, approved by humans, and logged appropriately. Claw Patrol terminates TCP connections over WireGuard or Tailscale, then parses application protocols (eg http, postgres, ssh) to apply rules that allow you to deny/allow requests. There are a few projects that sit as a proxy in front of agents to do secret injection or apply various guardrails, but none met our needs (LLM gateways, MCP proxies, sandboxes), particularly the need to handle low-level protocols, or handle complex real world situations like tunneling postgres through k8s. Written in Go, configured in HCL, MIT licensed. Happy to answer any questions. https://clawpatrol.dev/
