---
title: "Herschel: Continuous Optimization of Production LLM Inference through On-Demand Profiling"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2609.40247v1"
date: "2026-09-30"
topic: "AI agents"
type: "paper"
read: false
summary: "Model-as-a-service platforms call for continuous optimization as complex serving conditions expose inefficiencies missed before deployment. Detailed always-on profiling can incur substantial overhead, while lightweight collection omits information needed for diagnosis. We present Herschel, a continuous optimization system for production large language mod... (Local summary fallback used.)"
---

Model-as-a-service platforms call for continuous optimization as complex serving conditions expose inefficiencies missed before deployment. Detailed always-on profiling can incur substantial overhead, while lightweight collection omits information needed for diagnosis. We present Herschel, a continuous optimization system for production large language model (LLM) inference. Our key insight is that adaptive, on-demand profiling can provide rich full-stack evidence without continuous collection. Herschel safely attaches to and detaches from selected running processes without engine changes or restarts, and adapts coverage as investigations reveal missing evidence. Herschel reconstructs operator executions and cross-process dependencies to identify inefficiency mechanisms and suggest solutions using applicable reference fixes. AI agents implement and test engine and kernel changes under controlled conditions that preserve the triggering workload and dependencies, with expert review before deployment. Controlled tests show active-collection overhead below 0.5% for time to first token and 7% for time per output token. Bounded windows, typically 30 s, avoid the continuous cost of always-on tracing. Over six months, Herschel collected approximately 17,000 traces across over 120 model variants and more than 10 accelerator types, identifying inefficiency patterns in 23% of the traces. Representative findings guide widely deployed optimizations, including restructured synchronization, removal of unused computation, and improved operator implementations.
