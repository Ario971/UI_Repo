---
title: "Gram: Assessing sabotage propensities via automated alignment auditing"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2605.30322v1"
date: "2026-05-28"
topic: "AI agents"
type: "paper"
read: false
summary: "We introduce Gram, an automated alignment auditing framework to assess the propensity of AI agents to engage in sabotage. We evaluate Gemini models across 17 simulated agentic deployment scenarios that incentivize sabotage. We find Gemini models misbehave in about 2-3% of our simulated trajectories. Many of these cases are explained by \"overeagerness\" in... (Local summary fallback used.)"
---

We introduce Gram, an automated alignment auditing framework to assess the propensity of AI agents to engage in sabotage. We evaluate Gemini models across 17 simulated agentic deployment scenarios that incentivize sabotage. We find Gemini models misbehave in about 2-3% of our simulated trajectories. Many of these cases are explained by "overeagerness" in Gemini models resulting in both excessive role-playing and goal-seeking behavior. In contrast to other alignment auditing approaches, Gram is designed to specifically evaluate misalignment and intentional sabotage in agentic coding and research agents. We additionally introduce an experimental investigator agent pipeline which enables fine-grained targeted experiments to identify the drivers of misbehavior. We find that increasing realism of environments and removing nudges to misbehave tends to reduce sabotage rates close to zero.
