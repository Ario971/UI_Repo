---
title: "Show HN: Open-source multi-player artifacts that update themselves"
source: "Hacker News Top + Show HN"
url: "https://rallywith.ai/"
date: "2026-11-17"
topic: "AI agents"
type: "article"
read: false
summary: "Rally is a multi-player platform to build reactive micro-applications together that connects event streams to agents that then update the artifact. We've had pilots build a PR dashboard that sorts by risk assessment (an agent actually reads the code) per PR, a micro-CRM that pulls in live deals from multiple Gmail inboxes, and a shared grocery list that g... (Local summary fallback used.)"
---

Rally is a multi-player platform to build reactive micro-applications together that connects event streams to agents that then update the artifact. We've had pilots build a PR dashboard that sorts by risk assessment (an agent actually reads the code) per PR, a micro-CRM that pulls in live deals from multiple Gmail inboxes, and a shared grocery list that groups items by store aisle. We're similar to Muse's Spaces, Google's TableTop, and the standard artifacts most harnesses now support. Our differentiator is being multi-player so groups can iterate together, artifacts calling agents on incoming events so updates can be more sophisticated than an API call, and giving artifacts a full application stack. Under the hood, each artifact is a Cloudflare Durable Object with its own SQLite database, compute, and storage. As an example this is our podcast artifact that helps us keep up-to-date on what happened on the repo each day https://connected-tidy-crystalline-haldane-g.rallyuserconten... GitHub: https://github.com/juno-ai-labs/avalon
