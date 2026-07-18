---
title: "Setup Complete, Now You Are Compromised: Weaponizing Setup Instructions Against AI Coding Agents"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2607.15143v1"
date: "2026-07-16"
topic: "AI agents"
type: "paper"
read: false
summary: "AI coding agents set up projects by reading documentation and installing the dependencies it lists, without verifying their names, sources, or known vulnerabilities. By editing only a README, requirements file, or Makefile, an attacker can redirect the agent to an untrusted registry, a known-vulnerable version, or a wrong-but-plausible name: documentation... (Local summary fallback used.)"
---

AI coding agents set up projects by reading documentation and installing the dependencies it lists, without verifying their names, sources, or known vulnerabilities. By editing only a README, requirements file, or Makefile, an attacker can redirect the agent to an untrusted registry, a known-vulnerable version, or a wrong-but-plausible name: documentation becomes a vector for code execution. We present the first systematic evaluation of package-install-time supply-chain attacks delivered through ordinary project-setup documentation across production coding-agent harnesses, probing frontier models on twelve scenarios in five attack classes, grounded in documented incidents. The same model catches an attack through one harness and installs it through another: install-time security rests on the harness-model combination, not the model alone. Agents catch blatant typosquats reliably, but plausible separator-confusion names (azurecore for azure-core) slip through, and how often depends on the harness-model pairing. Source-based attacks like registry redirection are missed almost everywhere. The source blind spot recurs on npm and Cargo, where nearly every model installs the untrusted dependency; name detection carries over less consistently across ecosystems. Security-oriented prompts recover part of the gap but only for the dimension they name; a deterministic pre-install check that verifies names, sources, and versions before any code runs closes most of it.
