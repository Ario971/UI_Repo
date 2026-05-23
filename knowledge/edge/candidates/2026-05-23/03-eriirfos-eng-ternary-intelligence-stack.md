---
id: "eriirfos-eng/ternary-intelligence-stack"
name: "eriirfos-eng/ternary-intelligence-stack"
url: "https://github.com/eriirfos-eng/ternary-intelligence-stack"
date: "2026-05-23"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 67
momentum: 73
risk: 40
integration_effort: 48
expected_gain: 69
composite: 66
replacement_target: ""
related_articles: []
pros: ["Recently updated (2026-05-23)","LGPL-3.0 license","22 GitHub stars","GitHub Actions/CI detected"]
cons: ["No clear install command found in README","README includes remote script execution pattern","README mentions telemetry/analytics"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 0
dependency_files: [{"name":"Cargo.toml","summary":"Rust project metadata detected"}]
install_commands: []
risk_flags: ["README includes remote script execution pattern","README mentions telemetry/analytics"]
status: "new"
---

# eriirfos-eng/ternary-intelligence-stack

sparse ternary AI stack enabling efficient frontier intelligence without hyperscaler-scale infrastructure.

URL: https://github.com/eriirfos-eng/ternary-intelligence-stack

## Why it matters
eriirfos-eng/ternary-intelligence-stack matches your AI development source filters and scored strongly enough to review before it disappears into the daily noise.

## Pros
+ Recently updated (2026-05-23)
+ LGPL-3.0 license
+ 22 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No clear install command found in README
- README includes remote script execution pattern
- README mentions telemetry/analytics

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 0

Dependency files:
- Cargo.toml: Rust project metadata detected

Install commands found:
- none detected

Risk flags:
- README includes remote script execution pattern
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Ternary Intelligence Stack (TIS)

[![crates.io](https://img.shields.io/crates/v/ternlang-core.svg)](https://crates.io/crates/ternlang-core)
[![version](https://img.shields.io/badge/version-v1.3.7-blue)](#architecture)
[![license](https://img.shields.io/badge/license-LGPL--3.0%20%2F%20BSL--1.1-blue)](LICENSE)
[![tests](https://img.shields.io/badge/tests-138%20CI%20%7C%205%20crates-yellow)](#architecture)
[![API](https://img.shields.io/badge/API-live-brightgreen)](https://ternlang-api.fly.dev/health)
[![EU AI Act](https://img.shields.io/badge/EU%20AI%20Act-Article%2013,14+15%20Compliant%20Design-003399?logo=european-union)](https://ternlang.com/compliance)
[![MCP](https://img.shields.io/badge/MCP-34_tools-orange)](#mcp-server--v040-34-tools)
[![smithery badge](https://smithery.ai/badge/rfi-irfos/ternlang)](https://smithery.ai/servers/rfi-irfos/ternlang)
[![examples](https://img.shields.io/badge/examples-3.9k%2B_.tern_programs-blueviolet)](#architecture)
[![stdlib](https://img.shields.io/badge/stdlib-28k+_open_%26_2.5k+_premium-blue)](ternlang-root/stdlib/PREMIUM.md)
[![DOI](https://img.shields.io/badge/DOI-10.17605%2FOSF.IO%2FTZ7DC-informational)](https://doi.org/10.17605/OSF.IO/TZ7DC)
[![moe-core](https://img.shields.io/crates/v/moe-core.svg?label=moe-core)](https://crates.io/crates/moe-core)
[![moe-platform](https://img.shields.io/crates/v/moe-platform.svg?label=moe-platform)](https://crates.io/crates/moe-platform)
[![moe-runtime](https://img.shields.io/crates/v/moe-runtime.svg?label=moe-runtime)](https://crates.io/crates/moe-runtime)
[![HuggingFace](https://img.shields.io/badge/HuggingFace-rfi--irfos%2Falbert-yellow?logo=huggingface)](https://huggingface.co/rfi-irfos/albert)

Built by [RFI-IRFOS](https://ternlang.com) · Graz, Austria · Whitepaper [https://osf.io/cyn28]

---

### Documentation

- **[README.md](https://github.com/eriirfos-eng/ternary-intelligence-stack/blob/main/ternlang-root/README.md)** — Full technical documentation and compiler specifications
- **[Ternlang Studio (Preview)](https://ternlang-api.fly.dev/studio)** — Developer dashboard and SDK
- **[albert.](https://github.com/eriirfos-eng/ternary-intelligence-stack/tree/main/albert-moe-13)** — Native ternary training framework, EvolutionManager, live dashboard
- **[Model Card](https://github.com/eriirfos-eng/ternary-intelligence-stack/blob/main/MODEL_CARD.md)** — Architecture, training status, EU AI Act compliance notes
- **[Convergence Log](https://github.com/eriirfos-eng/ternary-intelligence-stack/blob/main/albert-moe-13/docs/convergence_log.md)** — Live training loss history across all albert. versions
- **[Agent Albert CLI](https://github.com/eriirfos-eng/ternary-intelligence-stack/tree/main/agent_albert_cli)** — Terminal-native, model-agnostic AI agent built in pure Rust
- **[Roadmap](https://github.com/eriirfos-eng/ternary-intelligence-stack/blob/main/ternlang-root/docs/ROADMAP.md)** — Phases 1–20 and priority matrix
- **[Session Log](https://github.com/eriirfos-eng/ternary-intelligence-stack/blob/main/ternlang-root/docs/session_log.md)** — Production fixes and deployment notes

---

## 1. Ternlang

A systems programming language, compiler, and inference runtime built on balanced ternary logic. The core type is `trit`: `−1` (reject) · `0` (hold) · `+1` (affirm). The zero state is a first-class routing instruction — deterministic uncertainty, not a missing value.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && source "$HOME/.cargo/env" && cargo install ternlang-cli
```
```bash
ternlang                    # interactive REPL
ternlang my_program.tern    # run a .tern file
```

---

## 2. albert. <sup>[HuggingFace ↗](https://huggingface.co/rfi-irfos/albert)</sup>

**albert. is an existence proof wearing the shape of a language model.**

A ternary Mixture-of-Experts language model trained natively from scratch — not quantized from float. Every weight is in `{−γ, 0, +γ}` throughout training. The architecture expands itself autonomously via Net2Net surgery when it plateaus. The `@sparseskip` primitive (Patent A50296/2026) delivers 83 tok/s on CPU by skipping zero-weight operations exactly, not approximately.

**Current state:** 18L · 256H · 12E · Top-3 · 256CTX · 32k vocab · ep2490+ · epoch ATL **9.6248** · batch ATL **9.3866** · Gen 1 step 1/6 · window 233ep

```bash
# API live — requires key (free tier at ternlang.com/#licensing)
curl -s https://ternlang-api.fly.dev/api/trit_decide \
  -H "Content-Type: application/json" \
  -H "X-Ternlang-Key: <your-key>" \
  -d '{"statement": "This architecture is worth funding"}' | jq .
```

---

## 3. Agent Albert

Terminal-native AI agent built in pure Rust. Runs locally via Ollama or connects to commercial model bridges. No telemetry, no cloud dependency.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && source "$HOME/.cargo/env" && cargo install albert-cli
```
```bash
albert-cli    # launch immediately
```

---

## Licensing

| Tier | License | What's included |
|------|---------|-----------------|
| Community | LGPL-3.0 (free) | Compiler, VM, CLI, LSP, 28,500+ stdlib modules, 34 MCP tools |
| Pro Standard | BSL-1.1 · €99/mo | REST API, server-side memory, Tier 2 modules |
| Industrial | BSL-1.1 · €349/mo | QNN, SEC, T-HAL, TernAudit, Tier 3 modules |
| Enterprise | Proprietary · from €2,500/mo | On-premise, FPGA, custom SLA, unlimited API |

The `@sparseskip` primitive (Patent A50296/2026) is implemented in open-source LGPL files — the patent covers the method; the code is freely readable and modifiable.

---

## Team

Built by [RFI-IRFOS](https://ternlang.com), Graz, Austria.

| | |
|---|---|
| **Simeon Kepp** | Lead Architect |
| **Nikoletta Csonka** | Strategic Outreach & EU Relations |
| **Zabih Karimi** | Network & ML Infrastructure |
| **Lisa Scharler** | Social Technology & Ecocentric Systems |
| **Louis Ehrig** | Corporate Secretary, Press & Media |

→ [LEADERSHIP.md](LEADERSHIP.md)

---

<div align="center">
  <img src="ternlang-root/ternlang-web/assets/ternlang_logo_notext.png" alt="Ternlang Logo" width="100">
</div>

