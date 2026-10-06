---
title: "FREA: A Multi-Source Expert Benchmark for Reaction Feasibility Verification"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2610.06614v1"
date: "2026-10-05"
topic: "AI agents"
type: "paper"
read: false
summary: "As generative models and AI agents propose chemical reactions at a scale beyond expert review, feasibility verifiers decide which proposals enter synthesis planning. But do their decisions agree with chemists across different kinds of candidates? We introduce FREA, a benchmark of 751 reactions labeled by expert chemists under an explicit feasibility crite... (Local summary fallback used.)"
---

As generative models and AI agents propose chemical reactions at a scale beyond expert review, feasibility verifiers decide which proposals enter synthesis planning. But do their decisions agree with chemists across different kinds of candidates? We introduce FREA, a benchmark of 751 reactions labeled by expert chemists under an explicit feasibility criterion, drawn from retrosynthesis model proposals, zero-yield experimental records, edits by large language models (LLMs), and five negative candidate generation methods. Our evaluation finds that no verifier leads across all sources: LLMs given only the criterion are competitive with dedicated verifiers, while forward models perform best on retrosynthesis proposals but reject most feasible edits of recorded reactions at the evaluated operating points. Looking beyond aggregate scores, both forward models perform below chance when separating infeasible alternative disconnections from feasible generated candidates. To study whether negative supervision addresses these weaknesses, we also release a corpus of over 14 million recorded reactions and generated negative candidates. In matched training comparisons, adding a mixture of generated negatives to forward training raises mean AUROC across sources, but these gains do not extend to retrosynthesis proposals. Varying the generation method further shows that the largest gain on generated candidates coincides with worse proposal screening. These findings motivate evaluating verifiers against experts across sources and designing negatives for transfer to model proposals.
