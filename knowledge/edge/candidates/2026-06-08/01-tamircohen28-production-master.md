---
id: "tamircohen28/production-master"
name: "Tamircohen28/production-master"
url: "https://github.com/Tamircohen28/production-master"
date: "2026-06-08"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 84
momentum: 45
risk: 24
integration_effort: 40
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"tyanko-lab/agents-mission-control","date":"2026-05-28","topic":"AI agents","similarity":0.29,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-28/12-tyanko-lab-agents-mission-control.md"},{"title":"Show HN: CoreMem – Portable context for AI agents","date":"2026-05-22","topic":"AI agents","similarity":0.288,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-22/50-show-hn-coremem-portable-context-for-ai-agents.md"},{"title":"Show HN: Dari-docs – Optimize your docs using parallel coding agents","date":"2026-05-20","topic":"AI agents","similarity":0.276,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-20/14-show-hn-dari-docs-optimize-your-docs-using-parallel-coding-agents.md"}]
pros: ["Recently updated (2026-06-08)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps none; scripts none"},{"name":"requirements.txt","summary":"deps pyyaml>=6.0.3"}]
install_commands: ["git clone https://github.com/TamirCohen28/production-master ~/.claude/skills/production-master"]
risk_flags: []
status: "new"
---

# Tamircohen28/production-master

Autonomous production incident investigation plugin for Claude Code — 19 agents, configurable MCP toolkit, hypothesis-verification pipeline

URL: https://github.com/Tamircohen28/production-master

## Why it matters
You saved an article on 2026-05-28 about AI agents; this candidate overlaps with "tyanko-lab/agents-mission-control" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-08)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps none; scripts none
- requirements.txt: deps pyyaml>=6.0.3

Install commands found:
- git clone https://github.com/TamirCohen28/production-master ~/.claude/skills/production-master

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<p align="center">
  <img src="assets/banner.jpg" alt="Production Master" width="800">
</p>

# Production Master

<p align="center">
  <a href="https://github.com/TamirCohen28/production-master/actions/workflows/ci.yml"><img src="https://github.com/TamirCohen28/production-master/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/TamirCohen28/production-master/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License"></a>
  <a href="https://docs.anthropic.com/en/docs/claude-code/plugins"><img src="https://img.shields.io/badge/Claude%20Code-v1.2.0-D97757?logo=claude&logoColor=fff" alt="Claude Code v1.2.0"></a>
</p>

Production Master is an autonomous production investigation service for Claude Code. It runs full incident investigations from a free-text bug description or Jira ticket, then produces a cited report and a fix plan with transparent, in-depth analysis.

> [!CAUTION]
> Production Master is an experimental product. Handle all outputs and recommendations with extreme caution. Final responsibility for decisions and actions remains with the engineer.

## By the numbers

<p align="center">
  <img src="https://img.shields.io/badge/agents-19-4A90D9?style=flat-square" alt="19 agents">
  <img src="https://img.shields.io/badge/MCP%20skills-24%2B18-7B68EE?style=flat-square" alt="24+18 MCP skills">
  <img src="https://img.shields.io/badge/pipeline%20steps-10-E8A838?style=flat-square" alt="10-step pipeline">
  <img src="https://img.shields.io/badge/tests-114-2ECC71?style=flat-square" alt="114 tests">
  <img src="https://img.shields.io/badge/CI%20validators-42-E74C3C?style=flat-square" alt="42 CI validators">
  <img src="https://img.shields.io/badge/lines%20of%20code-42k-lightgrey?style=flat-square" alt="42k lines">
</p>

## Feature highlights

- **19 specialized agents** — each with a defined role, model tier (`claude-opus-4-8` / `claude-sonnet-4-6` / `claude-haiku-4-5`), and validated output schema, covering context parsing, log analysis, code semantics, hypothesis generation, verification, fix planning, and report writing
- **Configurable MCP tool layer** — Grafana (logs and dashboards), Slack, Jira, GitHub/Octocode, feature flags, CI/CD, data warehouse, root cause analysis, library documentation, and your own domain-specific tools — wired in `plugin/.mcp.json.example`
- **Hypothesis-driven verification loop** — generates a testable root-cause hypothesis, cross-examines it with an adversarial skeptic agent, and verifies against a 5-point checklist before confirming
- **Citation-first output** — every claim in the report links back to specific evidence (log lines, code references, PR diffs, Slack messages) — no hallucinated root causes
- **Structured tracing + OTel** — full event stream (`trace.jsonl`), per-agent artifacts, state snapshots, and optional OpenTelemetry span export for complete observability
- **Domain configuration** — teach the pipeline your services, artifact IDs, and tool URLs via `plugin/domain/context.md` so investigations get sharper over time
- **Ad-hoc query modes** — 24 generic MCP skills (+ 18 org-specific examples in `examples/acme/`) are individually invocable: query logs, search code, read tickets, or pull metrics without launching the full investigation

## Prerequisites

- [Claude Code](https://claude.ai/download) v2.1.117+ (required — enforced at startup)
- [GitHub CLI (`gh`)](https://cli.github.com/)
- An MCP server configured for your tools (Grafana, Jira, Slack, etc.) — see [MCP Setup](docs/user/mcp-setup.md)

Optionally, set your MCP access key before launching:
```bash
export MCP_ACCESS_KEY="<your-key>"
```

## Quick Start

> **Claude Code v2.1.157+**: If you're on the latest version, use the **skills-directory method** below — no marketplace required.

### Option A: Skills directory (instant, Claude Code v2.1.157+)

```bash
# Clone directly into your skills directory
git clone https://github.com/TamirCohen28/production-master ~/.claude/skills/production-master
```

Claude Code auto-loads it on the next session. No install command needed.

Then configure your tools:

```bash
# Configure your MCP server
cp ~/.claude/skills/production-master/plugin/.mcp.json.example ./.mcp.json
# Edit .mcp.json to point to your Grafana, Jira, Slack MCP servers

# Configure domain context (your org's vocabulary)
cp ~/.claude/skills/production-master/plugin/domain/context.template.md \
   ~/.claude/skills/production-master/plugin/domain/context.md
# Edit context.md with your org's service identifiers and tool URLs
```

### Option B: Marketplace install (all versions)

Install at **project scope** in a dedicated workspace to keep investigations isolated:

**1. Create the workspace:**

```bash
mkdir -p ~/production-master-workspace && cd ~/production-master-workspace
```

**2. Install** (in Claude Code chat):

```text
/plugin marketplace add TamirCohen28/production-master
/plugin install production-master@production-master-marketplace --scope project
/reload-plugins
```

**3. Configure your MCP server** — see [MCP Setup](docs/user/mcp-setup.md)

**4. Configure your domain context:**

```bash
cp plugin/domain/context.template.md plugin/domain/context.md
# Edit plugin/domain/context.md with your org's identifiers and tool URLs
```

**5. Launch Claude from the workspace:**

```bash
cd ~/production-master-workspace && claude
```

**6. Run your first investigation:**

```text
/production-master:investigate YOUR-TICKET-123
```

## Commands

All commands are exposed as Claude Code slash commands under the `/production-master:` namespace. Type `/` and then `production-master:` to autocomplete the full list.

### Top-level pipelines (read these first)

| Command | Purpose |
|---------|---------|
| `/production-master:investigate <ticket-or-text>` | Run the full incident investigation pipeline against a Jira ticket, URL, or free-text description. |
| `/production-master:auto-debug [run]` | Post-mortem of the most recent (or named) investigation run — diagnose orchestrator, I/O, dispatch, MCP. |
| `/production-master:validate-install` | Validate plugin installation: version, MCP authentication, required scripts, runtime env vars. |

### Ad-hoc data sources (call directly when you only need that source)

Every MCP skill the pipeline uses is also exposed as a standalone slash command so you can query a single source without launching the full investigation. See the [user-facing commands reference](docs/user/reference/commands.md) for parameters, examples, and the full tool list each one calls.

| Category | Commands |
|---|---|
| Code & PRs | `/production-master:octocode` · `/production-master:github-mcp` |
| Logs & metrics | `/production-master:grafana-datasource` · `/production-master:grafana-mcp` |
| Issues & chat | `/production-master:jira` · `/production-master:slack` |
| Knowledge & docs | `/production-master:kb-retrieval` · `/production-master:root-cause-mcp` · `/production-master:context7` |
| Data analysis | `/production-master:analyze` · `/production-master:explore-data` · `/production-master:validate-data` · `/production-master:statistical-analysis` |
| Visualization | `/production-master:create-viz` · `/production-master:build-dashboard` · `/production-master:data-visualization` |
| Report tooling | `/production-master:report-html` · `/production-master:report-dark-doc` · `/production-master:dark-terminal-doc` |

### Usage examples

```bash
# Full investigation from issue tracker ticket
/production-master:investigate YOUR-PROJECT-123

# Full investigation from issue tracker URL (configure your URL pattern in plugin/config/input-patterns.json)
/production-master:investigate https://mycompany.atlassian.net/browse/YOUR-PROJECT-123

# Full investigation from free text
/production-master:investigate Investigate repeated 504 alerts in checkout for the last 2 hours

# Diagnose a bad run
/production-master:auto-debug

# Verify the plugin is healthy before a run
/production-master:validate-install

# One-off MCP queries (no full pipeline)
/production-master:grafana-datasource find 504s in checkout in the last 30 minutes
/production-master:octocode where is PaymentsService.processOrder defined
/production-master:jira read YOUR-PROJECT-123
```

## How it works

Production Master runs **inline in your Claude Code session** — no separate service, no daemon, no TypeScript compilation. It's a pure Claude Code plugin: bash scripts + agent prompt files + MCP skill definitions.

```
/production-master:investigate TICKET-1234
         │
         ▼
  ┌─────────────────────────────────────────────────────────────┐
  │  Orchestrator  (plugin/skills/investigate/SKILL.md)         │
  │                                                             │
  │  Step 1  understand         Jira fetch → bug classification  │
  │  Step 2  investigation-plan Per-source evidence agenda       │
  │  Step 3  gather-evidence    ━━ PARALLEL ━━━━━━━━━━━━━━━━━━  │
  │          ├─ grafana-analyzer    Log queries, error rates     │
  │          ├─ codebase-semantics  Code search, PR history      │
  │          ├─ production-analyzer Deploys, rollouts, ownership │
  │          ├─ slack-agent         Incident threads             │
  │          └─ root-cause          Existing RCA documents       │
  │  Step 4  evidence-synthesis  Facts, gaps, confidence ceiling │
  │  Step 5  reachability        Was defective code live for user│
  │  Step 6  quality-gate        Enough evidence? or DEGRADED   │
  │  Step 7  hypothesize         Single testable root-cause      │
  │  Step 8  specificity-check   Score 0–3; re-hypothesize loop  │
  │  Step 9  verify              Skeptic challenge + 5-checklist │
  │  Step 10 report              report.md + report.html + fix   │
  └─────────────────────────────────────────────────────────────┘
         │
         ▼
  ./production-master/TICKET-1234-<run-id>/
    state.json    ← structured pipeline state (jq-queryable)
    trace.jsonl   ← unified event stream (all agents + tools)
    report.md     ← cited investigation report
    report.html   ← rendered report for sharing
    steps/        ← per-agent input/output files
```

**Model tiers:** `claude-opus-4-8` for final report synthesis; `claude-sonnet-4-6` for hypothesis generation, adversarial review, and verification; `claude-haiku-4-5` for evidence collection, classification, and utility tasks. Each tier is chosen to balance cost, latency, and reasoning depth for that step's requirements.

**Design principles:** deterministic gates over LLM routing (bash scripts decide, not prose); hypothesis-verification over free-form analysis; citation-first output (every claim sourced); partial-output rescue (transcript recovery when agents are killed mid-flight).

For the full engineering breakdown: [`docs/engineering/architecture/overview.md`](docs/engineering/architecture/overview.md)

## During a run

During execution, Production Master prints phase-by-phase progress in chat, with explicit notes when a step is skipped, retried, or blocked.

Output is written relative to where you invoke the command:

```text
./production-master/<TICKET>-<RUN_ID>/
  state.json     Authoritative structured investigation state
  trace.jsonl    Unified event stream for all agent and tool activity
  report.md      Final cited report (source of truth)
  report.html    Rendered report for easy reading and sharing
  steps/         Per-step and per-agent output files
```

## Engineering depth

For anyone who wants to go deeper:

| Topic | Where |
|-------|-------|
| Full agent catalog with output contracts | [`docs/engineering/reference/agents/agent-quick-ref.md`](docs/engineering/reference/agents/agent-quick-ref.md) |
| Pipeline architecture and data flow | [`docs/engineering/architecture/overview.md`](docs/engineering/architecture/overview.md) |
| MCP skill definitions (39 skills) | [`plugin/skills/`](plugin/skills/) |
| Known failure patterns and regression history | [`.claude/rules/plugin/known-regressions.md`](.claude/rules/plugin/known-regressions.md) |
| CI validators (42 checks) | [`tooling/ci/`](tooling/ci/) |
| Eval harness | [`evals/`](evals/) — promptfoo smoke + weekly + Inspect AI nightly |
| OTel tracing setup | [`docs/engineering/reference/otel-setup.md`](docs/engineering/reference/otel-setup.md) |
| Architecture decisions (ADRs) | [`docs/engineering/decisions/`](docs/engineering/decisions/) |

## Documentation

- [User documentation](docs/user/) — Quick start, guides, commands, domain configs, troubleshooting
- [Engineering documentation](docs/engineering/) — Architecture, agents, pipeline, governance, ADRs
- [Full docs map](docs/README.md)
- [Contributing](docs/CONTRIBUTING.md) — Development setup, build steps, PR workflow

## Beta and community

Production Master is beta and experimental. The fastest way to improve quality is broad real usage plus direct feedback. If something is confusing, partially correct, or broken, report it via a [GitHub issue](https://github.com/TamirCohen28/production-master/issues/new) or `/pm-auto-debug` for a post-mortem. Fast feedback loops are a core part of the product.

## Releases

- Stable production versions are on the `stable` branch
- Release tags: `vX.Y.Z` (on `stable`, triggers marketplace sync)
- Release notes are tracked in the repository history

## License

See [LICENSE](LICENSE).

---

<p align="center">
  <a href="https://github.com/TamirCohen28/production-master/issues/new"><img src="https://img.shields.io/badge/Found%20an%20issue%3F-121013?logo=github&logoColor=white" alt="Found an issue?"></a>
  <a href="https://github.com/TamirCohen28/production-master/discussions"><img src="https://img.shields.io/badge/Have%20a%20question%3F-100000?logo=github&logoColor=white" alt="Have a question?"></a>
</p>

