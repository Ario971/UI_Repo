---
title: "AutoRSP: An AI Agent for Radar Sensing Pipeline Design"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2611.34754v1"
date: "2026-11-25"
topic: "AI agents"
type: "paper"
read: false
summary: "Radar sensing demands a pipeline that is well-thought-out across hardware and software. We ask whether an AI agent can automatically design radar sensing pipelines at a fraction of the time, cost, and expertise that current practice needs. We present AutoRSP, an agent that embeds radar-system-level structure through sub-agents mapped to five stack layers,... (Local summary fallback used.)"
---

Radar sensing demands a pipeline that is well-thought-out across hardware and software. We ask whether an AI agent can automatically design radar sensing pipelines at a fraction of the time, cost, and expertise that current practice needs. We present AutoRSP, an agent that embeds radar-system-level structure through sub-agents mapped to five stack layers, a code-based representation of every layer with explicitly modeled cross-layer dependencies. Feedback for the agentic search process comes from a pipeline of realistic RF simulation, on-sensor emulation, and execution on real edge devices, rather than from an LLM judge. Because such feedback can be slower than an LLM call, we present methods to efficiently optimize agentic loops. We evaluate AutoRSP on robotic imaging, automotive perception, and vital sign sensing. It produces executable pipelines with performance comparable to or better than human-expert pipelines and closed-source agents. AutoRSP's harness, tools, and benchmarks will be released to bridge the rising gap in agentic research abilities outside of frontier labs.
