---
title: "Toward Agentic SysAdmin: Rethinking System Administration with AI Agents"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2606.26960v1"
date: "2026-06-25"
topic: "AI agents"
type: "paper"
read: false
summary: "The growing complexity of computer networks, driven by cloud-native architectures, heterogeneous devices, and distributed systems, places increasing pressure on network administrators who must simultaneously manage configuration, troubleshooting, and security under tight operational constraints. Large Language Models (LLMs) have emerged as a promising too... (Local summary fallback used.)"
---

The growing complexity of computer networks, driven by cloud-native architectures, heterogeneous devices, and distributed systems, places increasing pressure on network administrators who must simultaneously manage configuration, troubleshooting, and security under tight operational constraints. Large Language Models (LLMs) have emerged as a promising tool to assist and partially automate these tasks, yet their systematic evaluation in networking scenarios remains an open challenge. Existing benchmarks rely on static reference outputs or manual expert validation, neither of which scales to the diversity of real-world network states or to the variety of orchestration strategies -- from monolithic prompting to fully agentic pipelines --through which LLMs are increasingly deployed. In this paper, we present NetLLMeval, a framework for automatically evaluating LLM-based systems on network administration tasks by leveraging live network emulation to derive ground truth without human intervention. Through a full-factorial study of 24000 runs spanning 10 foundation models, 4 solver architectures, 10 task types, and 6 network topologies of increasing complexity, we show that solver design has a great impact on accuracy -- lifting a 14B open-weight model from 0.43 to 0.88 correctness -- and that such locally-deployable models can match trillion-parameter frontier systems under the right configuration. NetLLMeval is released open-source to support reproducible benchmarking of future models and solver designs.
