---
title: "Share-Borne AI Virus: Memory-Hopping Attacks Across LLM Agents"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2609.35576v1"
date: "2026-09-28"
topic: "AI agents"
type: "paper"
read: false
summary: "Large language models are increasingly deployed as stateful assistants that retain information across interactions and use tools to read, modify, and create persistent artifacts. As these artifacts are shared between users, they form an indirect communication channel between otherwise independent assistants. We study a failure mode in which this channel e... (Local summary fallback used.)"
---

Large language models are increasingly deployed as stateful assistants that retain information across interactions and use tools to read, modify, and create persistent artifacts. As these artifacts are shared between users, they form an indirect communication channel between otherwise independent assistants. We study a failure mode in which this channel enables self-propagating attacks. We introduce artifact-mediated propagation, where adversarial content introduced through an artifact (e.g. a report), is stored in an assistant's persistent memory, reproduced in a subsequently created artifact, and acquired by another assistant that later reads it. We evaluate this process in temporal human-agent universes that model artifact exchange between independently operated assistants over time, measuring whether an attack survives successive hand-offs, how many hops it reaches, and how broadly it spreads. We find that attacks can propagate across multiple independent assistants and persist over extended interaction sequences. In larger simulated environments, even GPT-5.6 Luna exhibits substantial spread, reaching 60-80% of agents with propagation chains extending to eight hops. These results show that persistent artifacts can act as durable carriers of adversarial state, allowing attacks to outlive individual interactions and spread across isolated assistants.
