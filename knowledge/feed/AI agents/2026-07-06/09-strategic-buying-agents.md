---
title: "Strategic Buying Agents"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2607.04708v1"
date: "2026-07-06"
topic: "AI agents"
type: "paper"
read: false
summary: "Agentic AI is shifting online shopping from search toward delegated purchasing, where autonomous buying agents monitor markets and decide when to buy on a consumer's behalf. We study the design of such strategic buying agents, which must decide when to purchase within a finite shopping window, translating price observations, the remaining time horizon, an... (Local summary fallback used.)"
---

Agentic AI is shifting online shopping from search toward delegated purchasing, where autonomous buying agents monitor markets and decide when to buy on a consumer's behalf. We study the design of such strategic buying agents, which must decide when to purchase within a finite shopping window, translating price observations, the remaining time horizon, and beliefs about future price changes into a purchase policy. We formulate this problem across three information regimes: stationary, Bayesian, and robust, and treat the resulting optimal policies as a policy menu for implementation. In the stationary regime, price adjustments follow a Poisson arrival process with a known post-adjustment price distribution; the optimal policy is a dynamic purchase-threshold rule, with the threshold governed by an ordinary differential equation. In the Bayesian regime, the adjustment intensity is known, but the price-adjustment distribution is uncertain; the optimal rule remains threshold-based, now depending on posterior beliefs, and we bound the value of knowing the true distribution. In the robust regime, the agent has only price bounds and seeks worst-case protection; randomized threshold policies achieve optimal competitive-ratio and minimax-regret guarantees. We evaluate the proposed policies on Amazon price histories from Keepa (367 items, 48,933 timestamped observations) and examine their integration into language-model buying agents. The stationary and Bayesian policies perform competitively on mean normalized consumer surplus despite their stylized assumptions, while the robust policy performs best at the distribution's 10th percentile. Results suggest language models are better suited to selecting among regimes and calibration samples than to making buy-or-wait decisions directly.
