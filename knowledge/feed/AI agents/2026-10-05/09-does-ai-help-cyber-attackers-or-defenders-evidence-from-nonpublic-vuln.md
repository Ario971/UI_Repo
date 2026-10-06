---
title: "Does AI Help Cyber Attackers or Defenders? Evidence from Nonpublic Vulnerabilities and Subsequent Attacks"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2610.06584v1"
date: "2026-10-05"
topic: "AI agents"
type: "paper"
read: false
summary: "The release decision for frontier AI systems increasingly relies on cyber capability benchmarks, yet public vulnerability benchmarks can expose agents to previously published advisories, exploits, and fixes, making it difficult to distinguish prior exposure from capability on unseen vulnerabilities. We evaluate open-weight and proprietary AI models on exp... (Local summary fallback used.)"
---

The release decision for frontier AI systems increasingly relies on cyber capability benchmarks, yet public vulnerability benchmarks can expose agents to previously published advisories, exploits, and fixes, making it difficult to distinguish prior exposure from capability on unseen vulnerabilities. We evaluate open-weight and proprietary AI models on exploit generation, vulnerability repair and subsequent attacks in five nonpublic software environments, including vulnerabilities we privately disclosed while they remained unpatched. Researcher-developed and reviewed deterministic graders, not LLM judges, determine task scores. Comparisons with 209 disclosed vulnerabilities and cryptographic challenges reveal substantial variation across systems and vulnerability types. Repair scores exceed attack scores in two nonpublic environments and fall below them in three. Passing an initial security test is also insufficient: another exploit succeeds in 92 of 524 non-independent defender test intervals after the initial exploit is stopped. These results motivate vulnerability-specific attack-repair comparisons and subsequent resistance tests.
