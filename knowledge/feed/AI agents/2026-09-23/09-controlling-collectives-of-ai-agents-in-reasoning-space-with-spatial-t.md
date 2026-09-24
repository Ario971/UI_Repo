---
title: "Controlling Collectives of AI Agents in Reasoning Space with Spatial Transformers"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2609.28247v1"
date: "2026-09-23"
topic: "AI agents"
type: "paper"
read: false
summary: "Large Language Models (LLMs) introduce an exciting new paradigm for planning and navigation in robotics, but fail on even simple multi-robot tasks as team sizes grow. We propose COMPASS, a scalable, decentralized multi-robot architecture for controlling large collectives of agentic robots with reasoning space feedback control. Feedback is generated locall... (Local summary fallback used.)"
---

Large Language Models (LLMs) introduce an exciting new paradigm for planning and navigation in robotics, but fail on even simple multi-robot tasks as team sizes grow. We propose COMPASS, a scalable, decentralized multi-robot architecture for controlling large collectives of agentic robots with reasoning space feedback control. Feedback is generated locally on each robot by a spatial transformer which aggregates multi-hop messages across the fleet into a learned feedback token. Our experiments find that collectives of language models demonstrate performance gains from structured diversity of the input command, which can cancel biases; an advantage that is held across scale. Compared against a centralized frontier LLM policy and a language-only communication ablation, we find that the coupled design of COMPASS decisively produces cohesive flocking formations that accurately fly the commanded intent. We show that reasoning feedback works best when composed with a compact learned token. Our ablations show that hand engineered feedback with raw state appearing in the language channel obliterates cohesion. COMPASS generalizes zero-shot to unseen instructions of ambiguous meaning while commanding flocks up to 16 times its training scale, flying up to 1024 robots under natural language commands.
