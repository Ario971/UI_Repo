---
title: "Benchmarking Agents for Proving Theorems in Quantum Algorithms and Quantum Information"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2607.21533v1"
date: "2026-07-23"
topic: "AI agents"
type: "paper"
read: false
summary: "Formal verification is becoming increasingly practical for quantum computing, yet the ability of AI agents to construct machine-checkable proofs in this domain remains unmeasured. We introduce Lean-QuantumAlg-Bench and Lean-QIT-Bench, two Lean 4 benchmarks containing 36 and 40 theorem-completion tasks for quantum algorithms and quantum information theory,... (Local summary fallback used.)"
---

Formal verification is becoming increasingly practical for quantum computing, yet the ability of AI agents to construct machine-checkable proofs in this domain remains unmeasured. We introduce Lean-QuantumAlg-Bench and Lean-QIT-Bench, two Lean 4 benchmarks containing 36 and 40 theorem-completion tasks for quantum algorithms and quantum information theory, respectively. Every task compiles in a fixed environment and is evaluated by deterministic proof checking and targeted semantic review, with difficulty weights assigned before model execution. We evaluate four models-GPT-5.5, Kimi K3, DeepSeek V4-Pro, and MiniMax M3-within a common theorem-proving framework under two settings: a task-only baseline and library-augmented deduction (LAD), which additionally provides access to a verified domain library. The highest difficulty-weighted scores are 60.4 out of 100 on the quantum-algorithm benchmark and 59.6 out of 100 on the quantum-information benchmark. LAD improves both score and completion rate in all eight model-benchmark comparisons, with gains of up to 15.9 points, providing evidence that verified libraries can strengthen domain-specific proof agents. The results reveal recurring weaknesses of agentic proving in areas such as quantum simulation, quantum learning, quantum information measures, and entanglement theory. Monetary and wall-clock costs per score point also vary substantially across models, highlighting important capability-efficiency trade-offs. We expect these benchmarks to establish a reproducible baseline for developing more capable and reliable proof agents, and to pave the way toward self-evolving AI scientists for advancing quantum information science.
