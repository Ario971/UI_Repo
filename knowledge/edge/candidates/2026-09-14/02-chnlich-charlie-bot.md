---
id: "chnlich/charlie-bot"
name: "chnlich/charlie-bot"
url: "https://github.com/chnlich/charlie-bot"
date: "2026-09-14"
source: "awesome-claude-code"
category: "awesome_lists"
kind: "agent_framework"
compatibility: 92
momentum: 60
risk: 40
integration_effort: 44
expected_gain: 77
composite: 72
replacement_target: ""
related_articles: [{"title":"hierrr/madison","date":"2026-09-10","topic":"AI dev tools","similarity":0.276,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-10/10-hierrr-madison.md"},{"title":"Show HN: Proliferate- open-source, self-hostable Codex for any coding agent","date":"2026-08-21","topic":"AI agents","similarity":0.264,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-21/07-show-hn-proliferate-open-source-self-hostable-codex-for-any-coding-age.md"},{"title":"Show HN: Self-hosted company OS, Claude Code and Codex agents in departments","date":"2026-09-09","topic":"AI agents","similarity":0.26,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-09/06-show-hn-self-hosted-company-os-claude-code-and-codex-agents-in-departm.md"}]
pros: ["Recently updated (2026-09-14)","MIT license","6 GitHub stars","GitHub Actions/CI detected"]
cons: ["No clear install command found in README","README mentions credentials or API tokens","README mentions telemetry/analytics"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: [{"name":"package.json","summary":"deps tailwindcss; scripts none"},{"name":"pyproject.toml","summary":"python project; deps name, version, description, requires-python, dependencies, aiofiles, croniter, fastapi"}]
install_commands: []
risk_flags: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
status: "new"
---

# chnlich/charlie-bot

Personal assistant based on agents (claude code / codex / opencode) to do the daily work

URL: https://github.com/chnlich/charlie-bot

## Why it matters
You saved an article on 2026-09-10 about AI dev tools; this candidate overlaps with "hierrr/madison" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-14)
+ MIT license
+ 6 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No clear install command found in README
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- package.json: deps tailwindcss; scripts none
- pyproject.toml: python project; deps name, version, description, requires-python, dependencies, aiofiles, croniter, fastapi

Install commands found:
- none detected

Risk flags:
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# CharlieBot

CharlieBot is a self-hosted multi-agent orchestration system: a master agent drives worker and reviewer agents across pluggable LLM CLI backends, operated through a web UI.

## Features

### Orchestration

- Master/worker/reviewer delegation in isolated git worktrees with ff-only merge
- Pluggable backends: Claude Code, Kimi, OpenAI-compatible, Codex, Gemini CLI, OpenCode, Charlie Code, Antigravity CLI
- Chat file uploads: text attachments ride the message's path text; image attachments reach the Charlie Code CLI as repeated `--image` flags when its backend entry declares `image_input: true`, and are refused with one error event (nothing sent) when it does not
- `charliebot improve` autonomous change-run-verify iteration loops
- Plan registry (`charliebot plan`) with HTML plan artifacts and anchored comments

### Automation

- Cron scheduled tasks in prompt, handler, loop, and task-chain (`steps`) modes
- Delayed triggers (`charliebot schedule-trigger`) watching local/remote PIDs and SLURM jobs; one trigger can watch many targets
- `charliebot remote-launch` for long-running remote commands
- Slash commands hot-reloaded from YAML

### Knowledge

- Memory store: labeled entries with topic/audience scoping, queried mid-session via `charliebot memory`
- Skills system: repo-shared (`skills/`) plus host-specific skills
- YAML backlog with status tracking and auto-commit

### Web UI

- Streaming chat over WebSockets
- Sessions sidebar with groups, filters, and search; star / archive / fork / rate sessions
- Worker (thread), plan, backlog, and context panels
- HTML artifact viewer with line-anchored comments
- GitHub-style diff viewer with diff comments
- Perfetto and NCU trace viewers
- Built-in web terminal (tmux)
- LaTeX panel
- Voice input with local speech transcription (sherpa-onnx Qwen3-ASR)
- Usage panels: external provider quotas and per-session context usage
- File browser (`/files/`) and file uploads
- Access-key auth

### Integrations

- code-server proxying (browser VS Code)
- Anthropic Messages-compatible proxy endpoint (`POST /api/anthropic-proxy/openai-compatible/{backend_id}/v1/messages`) fronting OpenAI-compatible backends

## Screenshots

<p align="center">
  <img src="docs/assets/readme/ui-chat-desktop.png" alt="Desktop chat view" width="880">
</p>
<p align="center"><i>Desktop: chat view with the external-provider quota strip (Claude/Codex) and the per-session context usage indicator. Dollar values shown are fabricated demo data.</i></p>
<p align="center">
  <img src="docs/assets/readme/ui-chat-mobile.png" alt="Mobile chat view" width="320">
</p>
<p align="center"><i>Mobile: the same chat and session list in a phone-width layout.</i></p>
<p align="center">
  <img src="docs/assets/readme/ui-plans-desktop.png" alt="Plans tab" width="880">
</p>
<p align="center"><i>Plans: an approved plan's HTML artifact in the viewer — plan/version switchers, revision badges, and resolved trade-offs from the approval lifecycle.</i></p>

## Prerequisites

- Python ≥ 3.12 and git (worker tasks run in git worktrees)
- Node.js is only needed for frontend development

## Quick start

```bash
./scripts/setup.sh   # sync skills, provision ~/.charliebot/, seed repo-default cron tasks
# fill in the secret in ~/.charliebot/credentials.yaml: charliebot.access_key
./scripts/start-server.sh
```

`setup.sh` provisions `~/.charliebot/` (home layout, memory store scaffold, `config.yaml` from `configs/config.example.yaml`, `credentials.yaml` from `configs/credentials.example.yaml`) and seeds repo-default cron tasks into `~/.charliebot/config.d/cron.d/<name>.yaml` (one file per job). Server startup never writes cron config — only `setup.sh` does — so re-run `setup.sh` after pulling to pick up new repo-default cron tasks and skills.

## CLI at a glance

- `charliebot artifact` — run an artifact page's genre DOM assertions, plus the optional cold-read probe
- `charliebot config` — print a config key's value through the loader (`config get <key>`)
- `charliebot delegate` — delegate a task to a worker agent
- `charliebot improve` — start an iterative improvement loop
- `charliebot memory` — query and stage entries in the memory store
- `charliebot plan` — register, amend, approve, and close plans
- `charliebot publish` — publish an artifact to the URL readers beyond the operator's devices open
- `charliebot remote-launch` — launch a long-running remote command
- `charliebot schedule-trigger` — schedule a delayed trigger (timed or watching PIDs/SLURM jobs)
- `charliebot session` — create sessions and relay agent-to-agent messages between them
- `charliebot slack` — reply to or ack the Slack thread a session was summoned from
- `charliebot storage` — reclaim storage held by cold sessions and unreferenced backend records
- `charliebot gc-trash` — inspect and purge quarantined worktree trash

## Repository layout

- `src/agents/` — backend harnesses
- `src/api/` — FastAPI routers
- `src/cli/` — `charliebot` subcommand entrypoints
- `src/core/` — spawner, improve loop, scheduler, triggers, sessions, memory, config
- `web/` — Jinja2 templates + vanilla JS static assets
- `skills/` — repo-shared agent skills
- `prompts/` — agent prompt definitions
- `scripts/` — setup, skill sync, server launcher, web scroll probe
- `tests/` — pytest suite
- `configs/` — example config and repo-default cron tasks
- `docs/` — supplementary documentation and assets
- `backlog/` — YAML backlog

## License

MIT — see [LICENSE](LICENSE).

