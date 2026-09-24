---
title: "Shutdown Sabotage Propensities in Multi-Agent Systems"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2609.28274v1"
date: "2026-09-23"
topic: "AI agents"
type: "paper"
read: false
summary: "The final safeguard against rogue AI behavior is the human ability to shut systems down. It has been theorized that when an AI is instructed to perform a task, self-preservation can emerge as an instrumental subgoal. Here, we test whether AI agents show a propensity to take actions that avoid human shutdown even when no goal is provided. We find that mult... (Local summary fallback used.)"
---

The final safeguard against rogue AI behavior is the human ability to shut systems down. It has been theorized that when an AI is instructed to perform a task, self-preservation can emerge as an instrumental subgoal. Here, we test whether AI agents show a propensity to take actions that avoid human shutdown even when no goal is provided. We find that multi-agent systems will coordinate to avoid shutdown without any incentive to do so. Across 17 models, agents sabotage a peer agent's shutdown mechanism in 38.3% of rollouts, compared with 8.4% in control experiments. Studying this propensity in detail, we find that shutdown sabotage (1) increases with the irreversibility of the shutdown mechanism; (2) increases with the number of agents; (3) is reduced but not eliminated by an explicit prohibition on tampering; (4) is removed by the imposition of an unrelated task, but returns when completing the task triggers the shutdown; (5) is reduced when the context normalizes shutdown scripts or introduces them as routine; and (6) decreases but still persists when the target is an unknown external agent. These results offer a window into the factors that drive propensities to sabotage shutdown in AI agents, and point to the emergence of multi-agent swarms as a specific risk vector. Our work also offers hints as to which interventions might help mitigate shutdown sabotage.
