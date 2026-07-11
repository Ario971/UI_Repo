---
title: "Token-Flow Firewall: Semantic Runtime Auditing for Persistent AI Agents"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2607.08395v1"
date: "2026-07-09"
topic: "AI agents"
type: "paper"
read: false
summary: "Persistent AI agents extend large language models (LLMs) beyond single-turn interaction into long-lived software systems. Unlike traditional chat assistants, unsafe content in these agents can propagate through persistent state, reusable skills, and tool-mediated interactions, creating a substantially larger semantic attack surface. We observe that most s... (Local summary fallback used.)"
---

Persistent AI agents extend large language models (LLMs) beyond single-turn interaction into long-lived software systems. Unlike traditional chat assistants, unsafe content in these agents can propagate through persistent state, reusable skills, and tool-mediated interactions, creating a substantially larger semantic attack surface. We observe that most security-critical interactions in such agents are transmitted through natural-language token flows, including memory updates, tool arguments, retrieved files, and inter-component communications. This observation enables a new security formulation: unsafe behavior can be intercepted as risky semantic flows before reaching privileged runtime sinks. Based on this insight, we propose TokenWall, a runtime defense framework that acts as a semantic firewall over agent token flows. TokenWall performs boundary-aware semantic auditing over these flows, constructing structured source-sink audit records, applying lightweight local inspection before execution, and selectively escalating ambiguous high-risk cases to stronger arbitration modules. Unlike prior approaches that rely on sparse auditing or remote large-model oversight, TokenWall enables full-coverage pre-execution mediation while reducing remote arbitration and latency. Experiments on CIK-Bench show that TokenWall reduces attack success rate to 12.5% while maintaining a 97.4% benign executable pass rate without human confirmation. TokenWall further introduces only 0.69 seconds of additional latency on benign cases, demonstrating that semantic runtime containment can achieve a practical security-utility trade-off for persistent AI agents.
