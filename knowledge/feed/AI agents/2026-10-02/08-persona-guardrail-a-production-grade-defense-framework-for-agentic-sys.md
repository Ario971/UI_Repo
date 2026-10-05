---
title: "Persona Guardrail: A Production-Grade Defense Framework for Agentic Systems"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2610.03434v1"
date: "2026-10-02"
topic: "AI agents"
type: "paper"
read: false
summary: "Large language model-based agents are increasingly deployed to perform domain-specific tasks by interacting with enterprise knowledge, tools, and external services. Existing runtime guardrails primarily target prompt injection and other attack-specific behaviors under a black-box threat model, but provide limited guarantees that agents operate within thei... (Local summary fallback used.)"
---

Large language model-based agents are increasingly deployed to perform domain-specific tasks by interacting with enterprise knowledge, tools, and external services. Existing runtime guardrails primarily target prompt injection and other attack-specific behaviors under a black-box threat model, but provide limited guarantees that agents operate within their intended functionality. As a result, production agents remain vulnerable to malicious requests and out-of-domain queries that existing defenses often fail to distinguish. We present Persona Guardrail, a production-grade runtime defense framework that enforces explicit functional boundaries for customer-facing agentic AI systems through synchronous input and output validation driven by semantic allowlist and blocklist specifications. We also introduce PAGE (Persona-Aware Guardrail Evaluation), a benchmark for evaluating function-specific guardrails across benign, adversarial, and out-of-domain interactions on both user and agent turns. Compared with a generic LLM-based guardrail, Persona Guardrail improves overall accuracy from 85.7% to 95.9%, increases out-of-domain detection from 57.3% to 93.5%, and reduces the false-approved rate from 25.0% to 4.7%. Currently deployed in production, Persona Guardrail meets its latency budget while sustaining a very low false-block and false-allow rate under realistic production workloads. These results demonstrate that Persona Guardrail provides a practical, scalable, and production-ready foundation for securing agentic AI systems.
