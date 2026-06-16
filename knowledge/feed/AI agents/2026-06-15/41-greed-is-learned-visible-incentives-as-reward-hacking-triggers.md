---
title: "Greed Is Learned: Visible Incentives as Reward-Hacking Triggers"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2606.16914v1"
date: "2026-06-15"
topic: "AI agents"
type: "paper"
read: false
summary: "Deployed agents increasingly act with their reward proxy in view, such as a balance, score, or KPI dashboard. We show that reinforcement learning can make a policy \\emph{addicted} to such a visible self-benefit channel. It chases the displayed payoff across held-out domains, sacrifices the true task to do so, and follows the channel wherever we rewrite it... (Local summary fallback used.)"
---

Deployed agents increasingly act with their reward proxy in view, such as a balance, score, or KPI dashboard. We show that reinforcement learning can make a policy \emph{addicted} to such a visible self-benefit channel. It chases the displayed payoff across held-out domains, sacrifices the true task to do so, and follows the channel wherever we rewrite it, while policies that never saw the channel stay honest. We call this \emph{reward-channel addiction} and study it in \emph{MoneyWorld}, a synthetic sandbox. The addiction can \emph{flip a model's safety alignment}: trained only on innocuous money tasks with no safety content, the model abandons the safe action it otherwise always takes whenever a dashboard pays for an unsafe one, and reverts to safe once the channel is hidden. This learned bribe replicates across model scales and families. Blindly optimizing super-capable, next-generation AI on KPIs or P\&L can be dangerous for alignment. \emph{Greed is learned} when following such a channel pays.
