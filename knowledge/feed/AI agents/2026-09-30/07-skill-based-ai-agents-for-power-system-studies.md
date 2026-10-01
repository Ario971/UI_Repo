---
title: "Skill-Based AI Agents for Power-System Studies"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2609.40272v1"
date: "2026-09-30"
topic: "AI agents"
type: "paper"
read: false
summary: "This paper describes a skill-based agentic framework for power-system studies using Model Context Protocol (MCP)-connected engineering tools. A custom MCP server was developed to expose Siemens PTI PSSE functions for power-flow analysis, dynamic simulation, result extraction, and model-validation workflows. Two implementation pathways built on a programma... (Local summary fallback used.)"
---

This paper describes a skill-based agentic framework for power-system studies using Model Context Protocol (MCP)-connected engineering tools. A custom MCP server was developed to expose Siemens PTI PSSE functions for power-flow analysis, dynamic simulation, result extraction, and model-validation workflows. Two implementation pathways built on a programmable OpenAI Agents software development kit (SDK) and a Claude Code command-line interface (CLI) were evaluated, both using reusable skills, subagents, MCP tools, data-repository connections, and local shell/Python execution. Both frontier-model-based implementations successfully executed representative study tasks. Success was evaluated based on task completion, output accuracy, and the need for human expert interventions. Results based on public datasets show that agentic systems can greatly accelerate power system dynamic simulation process for transmission planning studies leveraging industry-grade simulation platforms. This points toward a shift in transmission planning practice, where agentic systems could handle routine simulation setup and result extraction, allowing engineers to focus expert judgment on scenario design and interpretation rather than tool operation.
