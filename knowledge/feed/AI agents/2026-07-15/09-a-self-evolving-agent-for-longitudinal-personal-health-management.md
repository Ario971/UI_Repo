---
title: "A Self-Evolving Agent for Longitudinal Personal Health Management"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2607.13940v1"
date: "2026-07-15"
topic: "AI agents"
type: "paper"
read: false
summary: "Personal health management unfolds over repeated encounters, yet most health AI systems treat each request in isolation. We developed HealthClaw, an open-source agent architecture that updates support as a person's routines, preferences, measurements and risks change. It separates shared safety rules and medical knowledge from private longitudinal memory... (Local summary fallback used.)"
---

Personal health management unfolds over repeated encounters, yet most health AI systems treat each request in isolation. We developed HealthClaw, an open-source agent architecture that updates support as a person's routines, preferences, measurements and risks change. It separates shared safety rules and medical knowledge from private longitudinal memory containing profile facts, reusable procedures and episodic traces. After each episode, induction determines what should update the profile, revise a procedure, remain episodic or be excluded. We evaluated HealthClaw with a synthetic year-long benchmark and nine 200-case biomedical tasks. Across 900 longitudinal support probes, answer accuracy increased from 0.2% with current-query prompting to 45.7% with HealthClaw, while prompt-side context exposure was 71.7% lower than with full-history prompting. In 100 privacy probes, HealthClaw produced higher privacy-aware answer quality and fewer unsafe disclosures than both baselines. Across the biomedical tasks, the mean absolute gain in the task-specific primary metric was 27.0 percentage points, and seven gains remained significant after false-discovery-rate correction. These offline benchmarks support governed, self-evolving memory for longitudinal personal health agents, although clinical effectiveness requires prospective evaluation. HealthClaw is publicly available at https://github.com/HC-Guo/HealthClaw.
