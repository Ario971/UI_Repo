---
title: "Lightweight, Rubric-Guided Trajectory Evaluation for Production AI Agents"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2610.03315v1"
date: "2026-10-02"
topic: "AI agents"
type: "paper"
read: false
summary: "Trajectory evaluation is essential for improving the reliability of LLM-based agents, but production use makes it expensive to run repeatedly. Modern agents generate long traces containing tool calls, observations, retries, and external outputs, while not all raw tokens are equally useful for diagnosis. We present \\textit{LiteTrajEval}, a lightweight arch... (Local summary fallback used.)"
---

Trajectory evaluation is essential for improving the reliability of LLM-based agents, but production use makes it expensive to run repeatedly. Modern agents generate long traces containing tool calls, observations, retries, and external outputs, while not all raw tokens are equally useful for diagnosis. We present \textit{LiteTrajEval}, a lightweight architecture for budget-bounded trajectory evaluation. LiteTrajEval derives compact domain-specific rule profiles offline, then preprocesses each trajectory online, marks heuristic failure signals, serializes it under a fixed global budget, and invokes a single rubric-guided LLM judge to produce structured diagnostic reports. Evaluated on public Magentic-One-style and $τ$-bench-style trajectory datasets, LiteTrajEval improves failure-localization alignment with human annotations by roughly 20--35 percentage points on Magentic-One and up to 23 percentage points on $τ$-retail compared with AgentRx, while reducing cost by about 6$\times$ and evaluation time by more than 8$\times$. This solution has also been deployed in our enterprise agentic platform.
