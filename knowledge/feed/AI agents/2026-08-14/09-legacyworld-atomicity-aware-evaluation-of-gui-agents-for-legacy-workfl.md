---
title: "LegacyWorld: Atomicity-Aware Evaluation of GUI Agents for Legacy Workflows"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2608.14131v1"
date: "2026-08-14"
topic: "AI agents"
type: "paper"
read: false
summary: "Legacy and legacy-like enterprise systems often remain difficult to modernize because critical workflows expose limited programmable interfaces and still require manual GUI interaction. This paper reports a pre-deployment evaluation study motivated by the development of legacy-use, an industry-oriented framework for automating such workflows with multimod... (Local summary fallback used.)"
---

Legacy and legacy-like enterprise systems often remain difficult to modernize because critical workflows expose limited programmable interfaces and still require manual GUI interaction. This paper reports a pre-deployment evaluation study motivated by the development of legacy-use, an industry-oriented framework for automating such workflows with multimodal LLM agents. During framework development, domain experts helped identify stateful workflows where successful demos are not sufficient: a failed agent run may still leave persistent invalid changes in business or healthcare records. We therefore evaluate computer-use agents using atomicity: a run should either complete the intended workflow correctly or fail without unintended persistent side effects. We construct a domain-expert-informed benchmark of 28 Windows GUI workflows, each specified with an initial state, goal state, and task-specific validator. We compare expert-crafted prompts with prompts generated from screen recordings of expert golden-path executions. Across six hosted computer-use agents, our results show that useful completion, safe failure, and non-atomic side effects are distinct operational profiles. We conclude that workflow capture, state validators, and atomicity-aware acceptance tests should be first-class requirements for AI-based legacy workflow automation.
