---
id: "jlapenna/agent-lcars"
name: "jlapenna/agent-lcars"
url: "https://github.com/jlapenna/agent-lcars"
date: "2026-08-20"
source: "awesome-claude-code"
category: "awesome_lists"
kind: "claude_skill"
compatibility: 84
momentum: 49
risk: 40
integration_effort: 40
expected_gain: 87
composite: 71
replacement_target: ""
related_articles: [{"title":"LamsonRetail/lsr-agent-platform","date":"2026-08-18","topic":"AI dev tools","similarity":0.341,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-18/13-lamsonretail-lsr-agent-platform.md"},{"title":"Show HN: Parley – your coding agent can talk to a teammate's agent","date":"2026-08-11","topic":"AI agents","similarity":0.309,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-11/06-show-hn-parley-your-coding-agent-can-talk-to-a-teammate-s-agent.md"},{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.254,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"}]
pros: ["Recently updated (2026-08-20)","Apache-2.0 license","1 GitHub stars","GitHub Actions/CI detected"]
cons: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps @google-cloud/firestore, @google-cloud/storage, @google-cloud/tasks, @mantine/core, @mantine/modals, @mantine/notifications, @octokit/plugin-retry, @octokit/plugin-throttling; scripts check:contracts, check:dependencies, check:labels, format, format:check, lint, postinstall, prepare"}]
install_commands: ["pnpm install","pnpm nx run-many -t test typecheck build --all","pnpm verify   # format:check, lint, lint:circular, then test/typecheck/build --all","docker build","docker run"]
risk_flags: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
status: "new"
---

# jlapenna/agent-lcars

LCARS operations console and agent telemetry pipeline

URL: https://github.com/jlapenna/agent-lcars

## Why it matters
You saved an article on 2026-08-18 about AI dev tools; this candidate overlaps with "LamsonRetail/lsr-agent-platform" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-20)
+ Apache-2.0 license
+ 1 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps @google-cloud/firestore, @google-cloud/storage, @google-cloud/tasks, @mantine/core, @mantine/modals, @mantine/notifications, @octokit/plugin-retry, @octokit/plugin-throttling; scripts check:contracts, check:dependencies, check:labels, format, format:check, lint, postinstall, prepare

Install commands found:
- pnpm install
- pnpm nx run-many -t test typecheck build --all
- pnpm verify   # format:check, lint, lint:circular, then test/typecheck/build --all
- docker build
- docker run

Risk flags:
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Agent LCARS

Agent LCARS is the operations console, telemetry pipeline, and self-hosted
runner fleet for headless coding agents (Claude Code, and experimentally
OpenCode) dispatched against GitHub issues.

![Agent LCARS console — Queue tab showing the action-item board and in-flight CLI sessions](docs/images/console-dashboard.png)

## What it does

Adding the `claude` (or `opencode`) label to an issue in a watched repo
dispatches a coding agent on this fleet's own ephemeral, self-hosted GitHub
Actions runners. That agent works the issue headlessly — commenting,
opening a PR, asking a clarifying question — following the shared
conventions in [`.agents/skills/agent-protocol`](.agents/skills/agent-protocol/reference/agent-protocol.md)
and this repo's own [`.agents/skills/lcars`](.agents/skills/lcars/lcars-protocol.md)
delta. Agent LCARS is the console that makes that fleet observable and
operable: what needs a human right now, what's actively running, and a full
searchable history of every session, live or finished.

## Console features

The console (`apps/console`, Next.js on Firebase App Hosting, gated behind a
single-admin GitHub OAuth login) has three sections:

- **Queue** (`/`) — the maintainer's action-item board: issues/PRs tagged
  `status:needs-human`, a failed run, a review request, a post-deploy check, or a
  run that reported success but whose own telemetry shows a silent-error
  signature (an error result or essentially zero recorded work). Each card
  carries the right one-click action. **Quick task** files an idempotent,
  repository-explicit issue from free text with both `intake:quick-task` and
  the selected agent label in the creation write; **Run unstick-prs**
  dispatches a maintenance playbook that finds
  and un-sticks stalled PRs.
- **Agents** (`/agents`) — a fleet-wide, agent-by-agent view: a snapshot bar
  of live/active counts per pipeline (Claude, OpenCode, Codex, interactive
  CLI), the runs and CLI sessions currently active, anything claimed by the
  fleet identity with no live run or session behind it (a safety net for
  orphaned claims), and recently finished outcomes.
- **Sessions** (`/sessions`) — the full session archive, not just the last
  24h the other two pages show: every CLI and issue-agent session, filterable
  by day window, source, or issue number, with a live/archived transcript
  viewer.

Every data fetch (GitHub API, Firestore) degrades to a visible warning
banner on failure rather than a blank or broken page — a rate limit or a
transient Firestore hiccup never takes the whole console down.

## How it's wired together

1. **Agent protocol** — every dispatch workflow (`claude.yml`, experimentally
   `opencode.yml`) follows the shared, cross-repo conventions in
   `.agents/skills/agent-protocol`: a takeover comment with a resume command,
   👀 reactions as the agent reads a thread, one continuously edited status
   comment, and — when waiting on a human — the fixed `status:needs-human` label
   plus a maintainer assignee so the console's queue can find it.
2. **Telemetry** (`apps/telemetry-watcher`, reduced by `libs/telemetry`) —
   reports session data to a dedicated `agent-telemetry` Firestore database,
   isolated from the console's own app data. Two paths feed it: a per-host
   daemon watches interactive Claude Code/Codex sessions on a workstation;
   in CI, a self-contained bundle of the same tool is baked into the shared
   runner image at build time and runs as a sidecar for the lifetime of the
   dispatched job, reporting live turns and finalizing an archived transcript
   when the job ends.
3. **Runner fleet** (`apps/runner-autoscaler`) — a Go control plane
   (published as a container image, deployed by `jlapenna/homelab`) that
   supervises independent GitHub Actions scale-set listeners across every
   onboarded repo/account ("registration") and schedules ephemeral JIT
   runner containers across one shared Docker host pool. Agent-dispatch
   pools never hold the Docker socket; trusted, workflow-defined-only CI
   that genuinely needs `docker build`/`docker run` gets its own separate,
   socket-enabled scale set.
4. **Actions metrics** (`apps/github-actions-exporter`) — a small,
   independently published Python service that polls explicit repositories,
   stores restart-safe run/job history in SQLite, and exposes bounded-label
   Prometheus metrics. It is kept out of the watcher and autoscaler processes
   so observability failures cannot interrupt transcripts or scheduling.
5. **Infrastructure** (`infra/terraform`) — the GCP project services, the
   dedicated Firestore database and transcript storage bucket, runtime
   secret containers (values are never stored in Terraform state), service
   accounts, GitHub Workload Identity Federation, and a billing budget.

See [docs/onboarding-console-and-telemetry.md](docs/onboarding-console-and-telemetry.md)
and [docs/onboarding-autoscaler.md](docs/onboarding-autoscaler.md) for the
full wiring instructions to bring a new repo onto this fleet.

## Workspace

| Path                             | What it is                                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `apps/console`                   | The operations console — Next.js, deployed with Firebase App Hosting                                                |
| `apps/console-e2e`               | Playwright end-to-end specs for the console                                                                         |
| `apps/telemetry-watcher`         | Host watcher daemon and versioned CI runner-sidecar bundle                                                          |
| `apps/runner-autoscaler`         | Go control plane for the shared GitHub Actions runner fleet, plus the JIT worker image                              |
| `apps/github-actions-exporter`   | Durable, low-cardinality GitHub Actions metrics exporter and published image                                        |
| `libs/telemetry`                 | Pure, source-agnostic reducer: a Claude Code transcript → a structured session summary; Firestore/transcript stores |
| `libs/app-providers`             | Shared client-side React providers (Mantine app providers, browser error reporting)                                 |
| `libs/dispatch-contracts`        | The single published definition of the dispatch facts shared across systems (pipeline registry, markers, outcomes)  |
| `libs/env-vars`                  | Typed environment-variable accessors                                                                                |
| `libs/logging`                   | Structured logging shared by the console and the telemetry watcher                                                  |
| `libs/orchestrator`              | Durable per-task dispatch mutex with an audit trail (admission, lease recovery, bounded retry)                      |
| `libs/util` / `libs/util-server` | Browser-safe type/environment guards; server-only env accessors (emulator/E2E/Cloud Run detection, project id)      |
| `libs/test-utils`                | Shared test helpers                                                                                                 |
| `infra/terraform`                | GCP services, Firestore, storage, IAM, WIF, secrets and budget                                                      |
| `.agents/skills`                 | The agent-protocol and repo-specific conventions dispatched agents follow                                           |

## Getting started

Use Node 24 and pnpm 11 (`packageManager` in `package.json` pins the exact
version). Then:

```sh
pnpm install
pnpm nx run-many -t test typecheck build --all
```

Before opening a PR, match what CI runs:

```sh
pnpm verify   # format:check, lint, lint:circular, then test/typecheck/build --all
```

### Agent GitHub App

OpenCode and Codex use the private **Agent LCARS** GitHub App
(`agent-lcars[bot]`), not a long-lived personal access token. Install it on
every repository where either agent may work, with repository read/write access to **Actions**,
**Contents**, **Issues**, **Pull requests**, and **Workflows**. For hosted
dispatch, enable the App webhook and subscribe it to **Issues**, **Issue
comments**, and **Pull request** events before running the production webhook
configuration workflow. Each enrolled repository needs:

- the `AGENT_LCARS_CLIENT_ID` repository variable;
- the `AGENT_LCARS_PRIVATE_KEY` Actions secret containing the App PEM key.

`opencode.yml` and `codex.yml` mint a short-lived installation token and
verify the expected App slug and bot login (`agent-lcars[bot]`) before agent
work. This keeps both non-Claude coding agents' branch/PR identity stable
and avoids GitHub's first-contributor workflow approval path. Generate a
replacement private key from the App's settings page when needed; never put
it in source control or an issue.

`agent-lcars-bot` remains the separate, assignable fleet-ownership account on
issues and pull requests. GitHub App identities, including
`agent-lcars[bot]`, cannot be assigned by GitHub's API.

## Documentation

- [docs/onboarding-console-and-telemetry.md](docs/onboarding-console-and-telemetry.md)
  — wiring a new repo's dispatched agents into this console (dashboard,
  Sessions, live transcripts).
- [docs/onboarding-autoscaler.md](docs/onboarding-autoscaler.md) — adding a
  new GitHub account/repo as a registration on the shared runner fleet.
- [docs/e2e-security-boundary.md](docs/e2e-security-boundary.md) — the
  credential-free local/CI E2E boundary.
- [docs/e2e-reliability.md](docs/e2e-reliability.md) — the E2E contract,
  failure taxonomy, harness rules, and review checklist.
- [docs/trajectory-evaluation.md](docs/trajectory-evaluation.md) — the
  reviewed production-trajectory corpus, rolling read-only report, and
  mutation-free prompt/setup comparison boundary.
- [docs/bot-identity-formats.md](docs/bot-identity-formats.md) — why
  `claude[bot]` (REST) and `app/claude` (GraphQL) are the same identity in
  two shapes, and which one is canonical here.
- [.agents/skills/agent-protocol/reference/agent-protocol.md](.agents/skills/agent-protocol/reference/agent-protocol.md)
  and [.agents/skills/lcars/lcars-protocol.md](.agents/skills/lcars/lcars-protocol.md)
  — the conventions this repo's own dispatched agents follow.

## Cutover from the old `supersprinklesracing`-hosted console

This console used to live inside the `supersprinklesracing` GCP project; it's
being migrated to its own isolated `agent-lcars` project (see
[infra/terraform](infra/terraform)). The migration starts from an empty
default Firestore database and transcript bucket: provision Terraform,
populate secret versions, create the App Hosting backend, publish the
telemetry-watcher sidecar bundle, and deploy the host watcher — all before
moving the custom domain. Verify login, GitHub Actions, session ingestion,
and transcript viewing on the new project before cutting over. Only then
remove the old `supersprinklesracing`-project resources.

