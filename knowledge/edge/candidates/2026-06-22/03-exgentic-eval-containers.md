---
id: "exgentic/eval-containers"
name: "Exgentic/eval-containers"
url: "https://github.com/Exgentic/eval-containers"
date: "2026-06-22"
source: "GitHub Search API"
category: "github_discovery"
kind: "agent_framework"
compatibility: 67
momentum: 45
risk: 24
integration_effort: 42
expected_gain: 77
composite: 66
replacement_target: ""
related_articles: [{"title":"AlexNthLab/nth-dao","date":"2026-06-12","topic":"AI dev tools","similarity":0.277,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-12/97-alexnthlab-nth-dao.md"},{"title":"greetingromansoldier/agora-perp-agent","date":"2026-06-13","topic":"AI agents","similarity":0.271,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-13/06-greetingromansoldier-agora-perp-agent.md"},{"title":"llm011/ethan-agent","date":"2026-06-20","topic":"AI dev tools","similarity":0.252,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-20/93-llm011-ethan-agent.md"}]
pros: ["Recently updated (2026-06-22)","Apache-2.0 license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: [{"name":"Cargo.toml","summary":"Rust project metadata detected"}]
install_commands: ["docker compose -f oci://ghcr.io/exgentic/eval-aime up -y --abort-on-container-exit","cargo install eval-containers"]
risk_flags: []
status: "new"
---

# Exgentic/eval-containers

AI agent evaluations in containers. 102 benchmarks X 21 agents — ready to deploy at massive scale on any cloud.

URL: https://github.com/Exgentic/eval-containers

## Why it matters
You saved an article on 2026-06-12 about AI dev tools; this candidate overlaps with "AlexNthLab/nth-dao" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-22)
+ Apache-2.0 license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- Cargo.toml: Rust project metadata detected

Install commands found:
- docker compose -f oci://ghcr.io/exgentic/eval-aime up -y --abort-on-container-exit
- cargo install eval-containers

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Eval Containers

AI agent evaluations in containers. 101 benchmarks, 21 agents — ready to deploy at massive scale on any cloud.

*An evaluation is **one benchmark + one agent + one model** — three independent axes, swappable without touching each other.* Our goal is agent evaluations you can trust: fast to run, thin to ship, reliable in any environment, and faithful to what each benchmark really measures.

> **Working in this repo (human or AI agent)?** It is governed by [`AGENTS.md`](AGENTS.md) and the [`.agents/`](.agents/) directory — its **rules** (what a result must be) and **skills** (how to produce it). Read the doctrine for the area you touch before changing it.

## Why Eval Containers

|                     | Cloud-native | Framework-free | Full interchangeability (agent × model × benchmark) | Speed audit | Size audit | Reliability audit | Native model tracing |
| ------------------- | :----------: | :------------: | :-------------------------------------------------: | :---------: | :--------: | :---------------: | :------------------: |
| Harbor              |       ✗      |        ✗       |                          ✗                          |      ✗      |      ✗     |         ✗         |           ✗          |
| Inspect AI          |       ✗      |        ✗       |                          ✗                          |      ✗      |      ✗     |         ✗         |           ✗          |
| **Eval Containers** |       ✓      |        ✓       |                          ✓                          |      ✓      |      ✓     |         ✓         |           ✓          |

## Quick start

One URL for every evaluation — benchmark, agent, model, and task are all `EVAL_*` env vars, run by plain Docker Compose with no clone and no framework:

```bash
echo "OPENAI_API_KEY=sk-..." > .env

EVAL_TASK_ID=0 EVAL_AGENT=codex EVAL_MODEL=openai/gpt-5.4 \
  docker compose -f oci://ghcr.io/exgentic/eval-aime up -y --abort-on-container-exit

cat output/aime/0/task/result.json
```

Prefer a CLI? `cargo install eval-containers`, then `eval-containers run aime --task-id 0 --agent codex --model openai/gpt-5.4` prints and runs that exact Docker command — every command is a reminder of a plain `docker`/`kubectl` one (`--dry-run` to just print it).

## Same eval, on Kubernetes

The exact same evaluation runs at scale on a cluster — the `oci://` Compose reference becomes one `helm | kubectl apply`, with the axes as `--set`s instead of `EVAL_*` vars:

```bash
helm template eval-aime oci://ghcr.io/exgentic/charts/eval \
  --set benchmark=aime --set task=0 --set agent=codex --set model=openai/gpt-5.4 | kubectl apply -f -
```

→ [Triple-mode](docs/concepts/triple-mode.md) (compose / container / job) · [Deploy on Kubernetes](docs/guides/deploy-on-kubernetes.md) · [OpenShift](docs/guides/deploy-on-openshift.md)

> `oci://` references need Docker Compose ≥ 2.34. On older Docker, behind a firewall, or fully airgapped, see [Run offline or airgapped](docs/guides/offline-and-airgapped.md). To iterate on local changes without pulling, add `--local`.

**Full walkthrough:** [Install](docs/guides/install.md) → [Run your first eval](docs/guides/run-your-first-eval.md).

## Documentation

Human-facing docs — concepts, guides, and reference — live in [`docs/`](docs/README.md).

- **Concepts** — [Overview](docs/concepts/overview.md) · [Triple-mode](docs/concepts/triple-mode.md) · [Isolation & gateways](docs/concepts/isolation-and-gateways.md) · [The Helm chart](docs/concepts/the-helm-chart.md)
- **Guides** — [Install](docs/guides/install.md) · [Run your first eval](docs/guides/run-your-first-eval.md) · [Deploy on Kubernetes](docs/guides/deploy-on-kubernetes.md) / [OpenShift](docs/guides/deploy-on-openshift.md) · [Run tests locally](docs/guides/running-tests-locally.md) · Add a [benchmark](docs/guides/add-a-benchmark.md) / [agent](docs/guides/add-an-agent.md) / [model](docs/guides/add-a-model.md)
- **Reference** — [CLI](docs/reference/cli.md) · [Environment variables](docs/reference/env-vars.md) · [Chart values](docs/reference/chart-values.md)

## Contributing & governance

All work is governed by the **rules** and **skills** under [`.agents/`](.agents/); [`AGENTS.md`](AGENTS.md) is the full map. New contributors start with [CONTRIBUTING.md](CONTRIBUTING.md).

