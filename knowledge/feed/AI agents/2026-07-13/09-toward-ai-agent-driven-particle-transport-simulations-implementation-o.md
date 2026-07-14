---
title: "Toward AI-Agent-Driven Particle Transport Simulations: Implementation of AI-Assisted Workflows for PHITS"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2607.11309v1"
date: "2026-07-13"
topic: "AI agents"
type: "paper"
read: false
summary: "Monte Carlo particle transport codes are powerful tools, but their use requires substantial knowledge of input preparation, execution, and result analysis. In this study, we present a code-side strategy for applying existing AI assistants and AI agents to PHITS. Two complementary sets of AI-ready resources were prepared from manuals, lecture materials, sa... (Local summary fallback used.)"
---

Monte Carlo particle transport codes are powerful tools, but their use requires substantial knowledge of input preparation, execution, and result analysis. In this study, we present a code-side strategy for applying existing AI assistants and AI agents to PHITS. Two complementary sets of AI-ready resources were prepared from manuals, lecture materials, sample inputs, utility information, and developer-curated cautions: a bundled knowledge base for retrieval-augmented generation (RAG)-based assistants and a compact agent reference for direct use by AI agents. The knowledge base was loaded into NotebookLM to provide conversational PHITS support, while the agent reference was combined with PHITS-specific policies and execution rules to enable Codex and Claude Code to edit input files, execute calculations, inspect errors, analyze results, and assist with source-code modification and compilation. Five demonstration tasks covered input modification, repeated simulations, parameter optimization, program compilation, post-processing, and result interpretation. The results showed that AI agents could handle complex PHITS workflows when appropriate resources and rules were provided. Practical lessons included precise prompts, human verification, well-documented sample files, explicit execution policies, and command-line-accessible tools. These findings support bundling AI-ready resources with particle transport codes to enable the use of general-purpose AI tools without requiring dedicated code-specific applications.
