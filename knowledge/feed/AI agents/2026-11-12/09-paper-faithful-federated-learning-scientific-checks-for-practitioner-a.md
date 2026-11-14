---
title: "Paper-Faithful Federated Learning: Scientific Checks for Practitioner and Agent Development"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2611.17129v1"
date: "2026-11-12"
topic: "AI agents"
type: "paper"
read: false
summary: "Federated learning experiments can produce reasonable-looking results even when the experiment implementation differs from the intended experimental protocol. Small errors in configuration, data partitioning, aggregation, randomness, evaluation, or checkpoint recovery may therefore affect a comparison without causing the program to fail. We present FedBre... (Local summary fallback used.)"
---

Federated learning experiments can produce reasonable-looking results even when the experiment implementation differs from the intended experimental protocol. Small errors in configuration, data partitioning, aggregation, randomness, evaluation, or checkpoint recovery may therefore affect a comparison without causing the program to fail. We present FedBrew, a research codebase for controlled and reproducible federated learning experiments. Its focus is controlled simulation with checks of specified conditions of the intended experimental protocol. FedBrew uses configuration checks, identifiable client data partitions, checkpoint recovery checks, self-describing run records, and development-time checks of scientific conditions. These checks assess, for example, whether client partitions are disjoint and exhaustive and aggregation weights match the prescribed rule; numerical and recovery checks examine non-finite client model states and interrupted runs. The same structure also provides clear extension points and automated checks for new algorithms, datasets, models, and tasks, whether they are added by researchers or AI coding agents. FedBrew therefore supports reproducible and inspectable FL experiments through checks of specified software and scientific conditions and the run records associated with reported results.
