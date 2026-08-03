---
title: "Tool Specifications Matter: Uncovering and Mitigating Safety Risks in AI Agents"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2607.29254v1"
date: "2026-07-31"
topic: "AI agents"
type: "paper"
read: false
summary: "AI agents extend large language models (LLMs) with external tools, enabling them to perform complex tasks and translate model outputs into consequential real-world actions. Yet LLMs often become substantially less safe when deployed as agents, and the source of this degradation remains poorly understood. In this paper, we identify schema-formatted tool sp... (Local summary fallback used.)"
---

AI agents extend large language models (LLMs) with external tools, enabling them to perform complex tasks and translate model outputs into consequential real-world actions. Yet LLMs often become substantially less safe when deployed as agents, and the source of this degradation remains poorly understood. In this paper, we identify schema-formatted tool specifications as a primary source of agent safety degradation and show, through white-box representation analysis, that they weaken the model's internal refusal signals and contribute to unsafe tool execution. Building on this finding, we propose SafeKeep, an inference-time safeguard that decouples safety judgment from tool execution: it assesses requests using flattened textual tool specifications while retaining the original schema-formatted specifications for execution. Across two representative benchmarks and four LLMs, including both white-box and black-box models, SafeKeep increases the average refusal rate for harmful requests from 23.8% to 70.6% and reduces the average attack success rate under observation-level prompt injection from 25.6% to 2.5%. It also outperforms existing safeguards and preserves task-handling capability. We release the code and data at https://github.com/snowcatsmoking/SafeKeep .
