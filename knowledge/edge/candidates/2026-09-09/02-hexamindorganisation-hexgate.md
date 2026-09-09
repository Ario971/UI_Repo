---
id: "hexamindorganisation/hexgate"
name: "HexamindOrganisation/hexgate"
url: "https://github.com/HexamindOrganisation/hexgate"
date: "2026-09-09"
source: "awesome-llm-agents"
category: "awesome_lists"
kind: "agent_framework"
compatibility: 80
momentum: 69
risk: 24
integration_effort: 40
expected_gain: 77
composite: 74
replacement_target: ""
related_articles: [{"title":"Show HN: AletheionAGI – Grounding enforcement for AI agents","date":"2026-08-14","topic":"AI agents","similarity":0.364,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-14/08-show-hn-aletheionagi-grounding-enforcement-for-ai-agents.md"},{"title":"Show HN: Open tool for testing your AI Agents (No LLM)","date":"2026-08-28","topic":"AI agents","similarity":0.299,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-28/06-show-hn-open-tool-for-testing-your-ai-agents-no-llm.md"},{"title":"Show HN: Maritime, a platform for running AI agents for $1 a month","date":"2026-08-18","topic":"AI agents","similarity":0.295,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-18/08-show-hn-maritime-a-platform-for-running-ai-agents-for-1-a-month.md"}]
pros: ["Recently updated (2026-09-09)","MIT license","18 GitHub stars","GitHub Actions/CI detected"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps requires, build-backend, name, version, description, readme, license, license-files"}]
install_commands: ["pip install hexgate"]
risk_flags: []
status: "new"
---

# HexamindOrganisation/hexgate

Authorization infrastructure for AI agents - policy enforcement, signed WASM bundles, per-request user scope, and audit trail for OpenAI Agents, LangChain, Google ADK, and Pydantic AI.

URL: https://github.com/HexamindOrganisation/hexgate

## Why it matters
You saved an article on 2026-08-14 about AI agents; this candidate overlaps with "Show HN: AletheionAGI – Grounding enforcement for AI agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-09)
+ MIT license
+ 18 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- pyproject.toml: python project; deps requires, build-backend, name, version, description, readme, license, license-files

Install commands found:
- pip install hexgate

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<div align="center">

<img src="./icon.svg" alt="Hexgate" width="96" height="96" />

# Hexgate

**Runtime authorization for AI agents.**
On every tool call, Hexgate decides whether *this user*, in *this role*, may run *this tool* with *these arguments* — allow, deny, or require approval. For OpenAI Agents, LangChain, Google ADK, Pydantic AI, or a native runtime.

[**Website**](https://hexgate.ai) · [**Docs**](https://docs.hexgate.ai)
<br>
[![PyPI](https://img.shields.io/pypi/v/hexgate?color=blue&logo=pypi&logoColor=white)](https://pypi.org/project/hexgate/)
[![CI](https://github.com/HexamindOrganisation/hexgate/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/HexamindOrganisation/hexgate/actions/workflows/tests.yml)
[![codecov](https://codecov.io/gh/HexamindOrganisation/hexgate/branch/main/graph/badge.svg?flag=sdk)](https://codecov.io/gh/HexamindOrganisation/hexgate)
[![Downloads](https://img.shields.io/pypi/dm/hexgate?color=blueviolet)](https://pypi.org/project/hexgate/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<br />

<img src="./assets/hero.png" alt="Control what your agents do — not just what they say. Policy decisions streaming live from the PolicyEnforcer." />

</div>

---

## What is Hexgate?

Hexgate is two things that move together:

- **`hexgate` — the SDK.** A Python runtime that gates every tool call through a typed `Decision` (allow / deny / approval-required), resolving the caller's role at call time to apply that role's rules. Wrap an existing agent without rewriting it, or build one natively — every decision is traced and audited with the caller's identity. [See supported frameworks →](https://docs.hexgate.ai/adapters/openai)
- **The Hexgate platform** *(optional)* — a FastAPI control plane + React dashboard for editing policy in a browser, minting per-project tokens, watching live decisions stream from a serving agent, and shipping signed WASM policy bundles to production. Available as **[Hexgate Cloud](https://app.hexgate.ai)** (hosted — set one env var, no infra) or self-hosted.

You can use the SDK three ways: **local** (YAML/bundle on disk, no platform), **Hexgate Cloud** (remote enforcement + audit — just set `HEXGATE_API_KEY`), or **self-hosted** (run the control plane yourself). `HEXGATE_API_URL` defaults to `https://app.hexgate.ai`, so remote enforcement is one env var away.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/decision-flow-dark.svg">
  <img src="./assets/decision-flow-light.svg" alt="End user and tool call merge into PolicyEnforcer.decide(), checked against policy on its right edge, resolving to allow, deny, or approval, always recorded to the audit log." />
</picture>

## Quickstart

```bash
pip install hexgate
```

**See it enforce — no API keys.** Save a policy that gives two roles different
limits on the *same* `refund_order` tool:

<!-- Keep this refund_order policy example in sync with docs/quickstart.mdx -->
```yaml
# policy.yaml
version: 1
roles:
  support:                                     # small USD refunds only
    default_policy: { mode: deny }
    tools:
      refund_order:
        mode: allow
        constraints:
          - args.amount <= 50
          - args.currency == "USD"
  billing:                                     # larger refunds, major currencies
    default_policy: { mode: deny }
    tools:
      refund_order:
        mode: allow
        constraints:
          - args.amount <= 500
          - args.currency in ["USD", "EUR"]
```

`hexgate policy test` decides the **same $400 refund** for each role offline — no model, no keys:

```bash
hexgate policy test policy.yaml --role support \
    --tool refund_order --args '{"amount": 400, "currency": "USD"}'
# ✗ DENY · support → refund_order({"amount": 400, "currency": "USD"})
#   reason: Policy on "refund_order" denied: constraint failed — args.amount <= 50

hexgate policy test policy.yaml --role billing \
    --tool refund_order --args '{"amount": 400, "currency": "USD"}'
# ✓ ALLOW · billing → refund_order({"amount": 400, "currency": "USD"})
```

Same tool, same request — **the caller's role and the arguments decide**, enforced
outside the model. The [full quickstart →](https://docs.hexgate.ai/quickstart) puts
this in front of a live agent.

## Documentation

Full documentation lives at **[docs.hexgate.ai](https://docs.hexgate.ai)**.

| | |
|---|---|
| [Build an agent](https://docs.hexgate.ai/guides/build-an-agent) | Define tools directly with `create_agent`, or wrap an existing framework agent. |
| [Framework adapters](https://docs.hexgate.ai/adapters/openai) | OpenAI Agents, LangChain/LangGraph, Google ADK, Pydantic AI. |
| [Policy](https://docs.hexgate.ai/policy/yaml-shape) | YAML shape, constraints, WASM bundles, signing, local override. |
| [Caller context + roles](https://docs.hexgate.ai/concepts/user-scope) | Per-request identity, role resolution, biscuit attenuation via `HexgateContext`. |
| [CLI](https://docs.hexgate.ai/cli/chat) | `chat`, `serve`, `register`, `policy`. |
| [MCP servers](https://docs.hexgate.ai/concepts/mcp) | Wrap any Model Context Protocol server as policy-enforced tools. |
| [Hexgate Cloud (hosted)](https://docs.hexgate.ai/platform/hosted) | Remote policy enforcement + audit with zero infra — get a key, set one env var. |
| [Platform (self-hosted)](https://docs.hexgate.ai/platform/overview) | Run the control plane, dashboard, ClickHouse audit, and Resend email yourself. |

## Development

Contributor setup, `make` targets, and the test suites are documented in
[Development & testing](https://docs.hexgate.ai/internals/development). The short
version:

```bash
make install-dev     # uv sync --extra dev (first time only)
make check           # lint + fmt-check + test (matches CI)
```

## License

MIT — see [LICENSE](LICENSE).

---

If Hexgate looks useful, [give it a ⭐ on GitHub](https://github.com/HexamindOrganisation/hexgate) — it helps more than you'd think. Built by [Hexamind](https://hexgate.ai).

