---
title: "Show HN: Agentic Identity Broker, OAuth Delegation for AI Agents"
source: "Hacker News Top + Show HN"
url: "https://github.com/zalando-incubator/agentic-identity-broker"
date: "2026-11-06"
topic: "AI agents"
type: "article"
read: false
summary: "Hi HN, I’m Jan. I am co-author of the Agentic Identity Broker (AIB), an MIT-licensed OAuth2 broker in the Zalando Incubator, that lets a user give an AI agent scoped, revocable access to MCP services. The broker solves three major challenges that are especially relevant in corporate environments: (A) Enable users to delegate workloads to agents without pr... (Local summary fallback used.)"
---

Hi HN, I’m Jan. I am co-author of the Agentic Identity Broker (AIB), an MIT-licensed OAuth2 broker in the Zalando Incubator, that lets a user give an AI agent scoped, revocable access to MCP services. The broker solves three major challenges that are especially relevant in corporate environments: (A) Enable users to delegate workloads to agents without providing the agents all the user’s tokens. (B) Connect fragmented identity and authorization systems. (C) Centralize tool approvals and audit logging. We built AIB to fill an infrastructure gap in our own agent platform. At this moment in time, IETF working groups are still finalizing standards for agent identity, and vendors are still turning the necessary infrastructure into off-the-shelf products. We needed that infrastructure today. How it works: the user consents once per agent and service. The broker stores the third-party tokens encrypted. At request time a gateway (e.g. Agentgateway) does RFC 8693 token exchange. Agents never see user tokens and MCP servers only implement tools and don’t need to care about all the OAuth 2.1 plumbing. AIB is v0.1 and runs in production, bringing together hundreds of our agents with dozens of internal and external MCP servers. To try it locally: clone the repo, run "just compose-up-detached". The current features focus on on-behalf-of (OBO) use cases, where human actors delegate to agents. Next we are looking to also support headless agents, where agents are invoked by machines. Intent-based authorization is yet another package on our roadmap. If you’ve built either, or have feedback on the UI/UX, I’d like to hear from you!
