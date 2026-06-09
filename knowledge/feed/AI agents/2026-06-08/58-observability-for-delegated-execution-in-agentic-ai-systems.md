---
title: "Observability for Delegated Execution in Agentic AI Systems"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2606.09692v1"
date: "2026-06-08"
topic: "AI agents"
type: "paper"
read: false
summary: "Delegation-scoped execution is not identifiable from standard observables: audit logs and execution traces can be identical under multiple incompatible delegation assignments. This gap is especially acute in LLM-based agentic systems, where agents dynamically select tools, vary execution sequences across runs for the same instruction, and spawn cooperatin... (Local summary fallback used.)"
---

Delegation-scoped execution is not identifiable from standard observables: audit logs and execution traces can be identical under multiple incompatible delegation assignments. This gap is especially acute in LLM-based agentic systems, where agents dynamically select tools, vary execution sequences across runs for the same instruction, and spawn cooperating sub-agents. These dynamics fragment and interleave traces, making delegation-scoped reconstruction from causal structure alone structurally underdetermined. Although individual actions are authorized and logged, existing audit, tracing, and security schemas lack the semantics to reconstruct what actions occurred under a given delegation across heterogeneous systems. We focus on delegation-scoped attribution and access/share footprint reconstruction, not intent inference or reasoning reconstruction. We present an agent-aware observability substrate consisting of a lightweight gateway and a common information model that binds delegation context at execution time. This enables reliable cross-tool delegation-scoped reconstruction and direct forensic queries without heuristic time-window correlation.
