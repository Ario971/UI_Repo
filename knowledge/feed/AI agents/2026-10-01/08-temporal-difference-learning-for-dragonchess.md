---
title: "Temporal-Difference Learning for Dragonchess"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2610.01845v1"
date: "2026-10-01"
topic: "AI agents"
type: "paper"
read: false
summary: "Our research investigates how two adaptive AI methods, evolutionary transfer learning and TD(lambda), perform in the three-dimensional chess environment Dragonchess. The game challenges players with its unique board structure and computational load, making it an ideal setting to study how adaptive methods can update evaluation heuristics in novel environm... (Local summary fallback used.)"
---

Our research investigates how two adaptive AI methods, evolutionary transfer learning and TD(lambda), perform in the three-dimensional chess environment Dragonchess. The game challenges players with its unique board structure and computational load, making it an ideal setting to study how adaptive methods can update evaluation heuristics in novel environments. In this work we re-implement the Dragonchess engine, changing it from a PyGame engine to C++. This enables faster gameplay, allowing us to run 10,000 games with confidence intervals and significance tests, rather than a single small tournament. Both adaptive methods outperform all other agents in the round-robin tournament. Our results showed that there is no significant difference in the performance between the evolved and learned evaluations. This research establishes the efficacy of adaptive methods in structurally complex, novel game domains.
