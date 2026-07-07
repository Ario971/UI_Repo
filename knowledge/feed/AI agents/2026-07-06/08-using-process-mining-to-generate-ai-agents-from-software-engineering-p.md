---
title: "Using Process Mining to Generate AI Agents from Software Engineering Process Records"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2607.04948v1"
date: "2026-07-06"
topic: "AI agents"
type: "paper"
read: false
summary: "Integrating AI agents into Software Engineering (SE) raises an important challenge: how can we specify and realize AI agents that work effectively alongside humans in hybrid SE teams? Determining the right granularity and separation of concerns for such agents is non-trivial. Coarse-grained agents may introduce unmanageable complexity, whereas micro-agent... (Local summary fallback used.)"
---

Integrating AI agents into Software Engineering (SE) raises an important challenge: how can we specify and realize AI agents that work effectively alongside humans in hybrid SE teams? Determining the right granularity and separation of concerns for such agents is non-trivial. Coarse-grained agents may introduce unmanageable complexity, whereas micro-agents may create severe coordination overhead. Moreover, existing multi-agent SE frameworks typically rely on predefined role structures and do not account for project-specific characteristics or process adaptations. We address this by combining object-centric, imperative, and declarative process mining. Using event logs extracted from software repositories, our approach discovers project-specific agent roles using a predefined SE role vocabulary grounded in repository behavior and generates matching agent specifications and implementations. As proof-of-concept, we applied our approach to a well-established open-source project. We performed functional tests and an exploratory user study to determine how well the generated AI agent specifications are aligned with human expectations.
