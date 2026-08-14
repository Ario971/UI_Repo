---
title: "Show HN: OJCP – an open protocol for agent-consumable job data"
source: "Hacker News Top + Show HN"
url: "https://ojcp.dev/"
date: "2026-08-12"
topic: "AI agents"
type: "article"
read: false
summary: "Author here! Agents are applying to jobs for people right now, with progressively more volume, and there's nothing built for it. So they scrape career pages and fight ATS forms with Playwright/Browser Use, which breaks constantly (or they get bot blocked). Employers get buried in applications that don't fit, candidates hear nothing back, and the resume is... (Local summary fallback used.)"
---

Author here! Agents are applying to jobs for people right now, with progressively more volume, and there's nothing built for it. So they scrape career pages and fight ATS forms with Playwright/Browser Use, which breaks constantly (or they get bot blocked). Employers get buried in applications that don't fit, candidates hear nothing back, and the resume is now an AI-written thing that another AI scores (which breaks the existing model entirely, btw). OJCP is MCP tools for search and apply, a manifest at /.well-known/ojcp.json so agents can find providers, and schemas that extend schema.org instead of replacing it. The playground on the site is a live MCP endpoint, so you can throw calls at it right now. Why a spec at all when models keep getting better at figuring things out? Inference can't produce authorization. An agent can work out what a form wants. It can't establish that someone consented to this specific submission, and then employer has no way to verify who's calling. So TL;DR a more capable agent is also a more capable impersonator. In this model, trust runs both direction. Agents sign requests using the same method that CloudFlare and OpenAI are already using, providers sign their manifests, agents can check against a JWKS, and trust tiers cap how much candidate PII can go to a given provider. Validation happens at consent, so browsing costs nothing and you only pay the verify when the interaction occurs. I'm the CTO of Recruitics (job advertising) and spent time at LinkedIn before that, so I've been at the intersection of hiring and job search for a while and have felt the pain of both sides. Happy to answer any questions!
