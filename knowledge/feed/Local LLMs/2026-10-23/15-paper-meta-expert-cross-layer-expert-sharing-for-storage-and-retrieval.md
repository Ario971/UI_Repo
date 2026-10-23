---
title: "[Paper] Meta Expert: Cross-Layer Expert Sharing for Storage- and Retrieval-Efficient MoE"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1xd5s0n/paper_meta_expert_crosslayer_expert_sharing_for/"
date: "2026-10-23"
topic: "Local LLMs"
type: "article"
read: false
summary: "As model parameters scale up, sparsely activated Mixture-of-Experts (MoE) approaches have become essential for model scaling. However, mainstream models currently adopt hierarchical architectures, where experts in different layers, although topologically independent, exhibit substantial similarity and redundancy in their stored content. Compared to the hi... (Local summary fallback used.)"
---

As model parameters scale up, sparsely activated Mixture-of-Experts (MoE) approaches have become essential for model scaling. However, mainstream models currently adopt hierarchical architectures, where experts in different layers, although topologically independent, exhibit substantial similarity and redundancy in their stored content. Compared to the hierarchically arranged Local Expert in existing mainstream models, we hypothesize that inter-layer shared Meta Expert hold greater potential. To this end, we conduct a multi-dimensional empirical comparison between Local and Meta Experts, and find that models incorporating Meta Experts exhibit lower parameter redundancy, together with lower cross-entropy loss and higher downstream task accuracy. With the activated quantity and the expert granularity held fixed, our model matches the performance of Vanilla MoE using only 70-80% of the experts, substantially improving the model's scaling potential . Beyond removing inter-layer redundancy among experts and improving information storage efficiency, our theoretical analysis further shows that, compared with Local Experts, Meta Experts provide hidden states with more flexible residual pathways, thereby improving information retrieval efficiency. arXiv : https://arxiv.org/abs/2610.27598 PDF : https://arxiv.org/pdf/2610.27598 submitted by /u/pmttyji [link] [comments]
