---
id: "devopssquaddev/zelkor-platform"
name: "devopssquaddev/zelkor-platform"
url: "https://github.com/devopssquaddev/zelkor-platform"
date: "2026-11-24"
source: "awesome-mcp"
category: "awesome_lists"
kind: "mcp_server"
compatibility: 75
momentum: 49
risk: 37
integration_effort: 44
expected_gain: 87
composite: 68
replacement_target: ""
related_articles: [{"title":"Show HN: Omnara – Open-source alternative to Claude Managed Agents","date":"2026-10-21","topic":"AI agents","similarity":0.228,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-21/06-show-hn-omnara-open-source-alternative-to-claude-managed-agents.md"},{"title":"xity4uu-a11y/nexus-agent-os","date":"2026-11-24","topic":"AI dev tools","similarity":0.218,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-11-24/12-xity4uu-a11y-nexus-agent-os.md"},{"title":"luokai25/ultran","date":"2026-11-09","topic":"AI dev tools","similarity":0.217,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-11-09/13-luokai25-ultran.md"}]
pros: ["Recently updated (2026-11-24)","Apache-2.0 license","1 GitHub stars","GitHub Actions/CI detected"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: false
setup_steps_count: 1
dependency_files: []
install_commands: ["git clone https://github.com/devopssquaddev/zelkor-platform.git"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# devopssquaddev/zelkor-platform

Self-hosted AI agent runtime and security layer for Kubernetes: deploy your existing LangGraph, CrewAI or Python agent behind an LLM API key gateway, MCP gateway, gVisor sandbox, default-deny network policy, rate limit, Langfuse tracing and tenant isolation

URL: https://github.com/devopssquaddev/zelkor-platform

## Why it matters
You saved an article on 2026-10-21 about AI agents; this candidate overlaps with "Show HN: Omnara – Open-source alternative to Claude Managed Agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-24)
+ Apache-2.0 license
+ 1 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/devopssquaddev/zelkor-platform.git

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Zelkor Platform

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Chart](https://img.shields.io/badge/chart-2.5.7-informational)](charts/zelkor-platform/Chart.yaml)

You get **the self-hosted agent runtime** on your Kubernetes cluster: bring the agent you already wrote — it can't break out, reach unauthorized data or networks, its prompts are verified, budget controlled, and it is under observation; tenants stay isolated.

You configure three things — a **model**, a **tool**, and an **agent**. The laptop install and a shared cluster use the same objects and the same Helm charts. Community Edition is Apache-2.0 and runs from this repository without a sales step.

## Run Community Edition on your laptop

Needs Docker running, `kind`, `helm`, `kubectl`, and one LLM provider key.

```bash
git clone https://github.com/devopssquaddev/zelkor-platform.git
cd zelkor-platform
OPENAI_API_KEY=sk-... ./install.sh
```

`./install.sh` creates a local kind cluster, installs Zelkor Community Edition (chart `2.5.7`), and prints URLs when it finishes. Full prerequisites, other providers, and the first verification call: [Local Quickstart](docs/quickstart.md).

## What you set

| You declare | Platform job |
| :--- | :--- |
| **Model** | Routes chat and embeddings through one gateway; injects the upstream key from a cluster secret |
| **Tool** | Exposes tools over MCP (Model Context Protocol) — SQL, vectors, sandbox, your own backends — without putting secrets in agent code |
| **Agent** | Deploys your LangGraph or Deep Agents workload; you run it and open the trace |

After the local install, point the [`zelkor` CLI](cli/README.md) at the cluster, `zelkor deploy` your project, `zelkor run`, then open the trace UI the install prints (Langfuse). A worked demo lives under [`examples/finserve/`](examples/finserve/README.md) if you want a sample agent — it is not required to learn the platform.

What wraps the agent you already wrote:

![What wraps the agent you already wrote](docs/assets/sandbox-postcard.svg)

Those four arrows are the only paths out of the agent. It cannot reach another network, another tenant’s data, or run generated code in its own process. The run, the tools, and the trace share one verified tenant identity; the agent cannot choose a different tenant. Full hops: [Architecture Hub](docs/architecture.md) and [Tenant Isolation](docs/architecture-tenants.md).

## Editions

| Edition | What you get |
| :--- | :--- |
| **Community Edition** | The self-hosted runtime in this repo: gateway, tools, sandbox, traces, Helm install |
| **Pro** | Team budgets and tool approvals, persistent sandboxes, SSO, and team GitOps on top of CE |
| **Enterprise** | Isolation and compliance on Pro: hardware sandbox, mTLS, DLP, retained audit, HIPAA-ready safeguards |

CE is enough to evaluate and to run single-workspace production installs. Pro and Enterprise add multi-team control-plane and compliance layers — not a different product story.

🏢 **For Enterprise** — hardware isolation, audit retention, and HIPAA-ready safeguards on the same platform shape. Start with [Local Quickstart](docs/quickstart.md); talk to us when CE is running on a shared cluster.

## Docs

| Start here | Job |
| :--- | :--- |
| [Local Quickstart](docs/quickstart.md) | Install CE on kind and prove a model call + a trace |
| [Documentation index](docs/README.md) | Map of every published page |
| [`zelkor` CLI](cli/README.md) | Point at a cluster, deploy your agent, run, inspect |
| [FinServe example](examples/finserve/README.md) | Optional reference agents on top of the platform |

