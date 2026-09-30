---
title: "Character Training for Risk-Averse Agents"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2609.38093v1"
date: "2026-09-29"
topic: "AI agents"
type: "paper"
read: false
summary: "Risk aversion in resources could prevent misaligned AI agents from causing catastrophic harm. Misaligned but risk-averse agents would tend to favor safer strategies like making deals with humans over riskier strategies like rebelling. We train agents to be risk averse through character training, finding that persona traits provide a robust mechanism for i... (Local summary fallback used.)"
---

Risk aversion in resources could prevent misaligned AI agents from causing catastrophic harm. Misaligned but risk-averse agents would tend to favor safer strategies like making deals with humans over riskier strategies like rebelling. We train agents to be risk averse through character training, finding that persona traits provide a robust mechanism for instilling risk preferences. To do this, we construct a model constitution describing constant absolute risk aversion (CARA) over an agent's resources and instill it through on-policy distillation. Despite never seeing the benchmark's decision format during training, character-trained models are competitive with baselines trained directly on it, and generalise better than them out of distribution on two of our four models. We also modulate different aspects of the constitution, finding that token budget and model choice are the most influential aspect of character training to instill risk aversion. We conclude from these results that character training is a promising and scalable way to instil broad dispositions, which we can use to our advantage in mitigating risk from misaligned AI agents.
