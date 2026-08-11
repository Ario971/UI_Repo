---
id: "akunzai/agent-skills"
name: "akunzai/agent-skills"
url: "https://github.com/akunzai/agent-skills"
date: "2026-08-11"
source: "GitHub Trending"
category: "github_discovery"
kind: "claude_skill"
compatibility: 79
momentum: 45
risk: 24
integration_effort: 28
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.364,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"},{"title":"What Does It Take to Detect an AI Agent? Minimal Feature Sets for Behavioral Detection under Browser Automation","date":"2026-07-29","topic":"AI agents","similarity":0.322,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-29/09-what-does-it-take-to-detect-an-ai-agent-minimal-feature-sets-for-behav.md"},{"title":"qinxiangrui-dev/edge-ai-agent","date":"2026-08-04","topic":"AI dev tools","similarity":0.303,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-04/10-qinxiangrui-dev-edge-ai-agent.md"}]
pros: ["Recently updated (2026-08-11)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: []
install_commands: ["npx skills add akunzai/agent-skills"]
risk_flags: []
status: "new"
---

# akunzai/agent-skills

My personal agent skills for AI coding assistants

URL: https://github.com/akunzai/agent-skills

## Why it matters
You saved an article on 2026-08-10 about AI agents; this candidate overlaps with "Show HN: Keen Code – an agentic-engineered coding agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-11)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- none detected

Install commands found:
- npx skills add akunzai/agent-skills

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Agent Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/akunzai/agent-skills/actions/workflows/tests.yml/badge.svg)](https://github.com/akunzai/agent-skills/actions/workflows/tests.yml)
[![skills.sh](https://skills.sh/b/akunzai/agent-skills)](https://skills.sh/akunzai/agent-skills)

My personal agent skills for AI coding assistants — compatible with Antigravity, Claude Code, Codex, and more.

## Why

AI coding assistants are powerful out of the box, but they lack persistent memory
and opinionated workflows across sessions. This project fills that gap with
reusable skills grouped into three areas: **Memory** (durable project context
that survives across sessions), **Git** (clean commit history and safe PR/issue
workflows), and **Toolchain** (pinned, opinionated tool and dependency
management).

## Install

```bash
npx skills add akunzai/agent-skills
```

## Skills

### Git

#### [`tidy-commits`](skills/tidy-commits/SKILL.md)

Clean up local git commit history before review or merge. Use it to turn WIP,
fixup, review-fix, format-only, poorly ordered, unsigned, or poorly messaged
commits into a clear, verified branch story.

#### [`pr-workflow`](skills/pr-workflow/SKILL.md)

Standard operating procedure for preparing, opening, and managing Pull Requests (PR) and Merge Requests (MR) safely with preflight checks, commit scoping, and issue auto-closing rules.

#### [`github-epic`](skills/github-epic/SKILL.md)

Manage multi-issue epics, parent-child task hierarchies, and blocking dependencies natively on GitHub (`gh api ... sub_issues` and `dependencies/blocked_by`).

#### [`gitlab-epic`](skills/gitlab-epic/SKILL.md)

Manage multi-issue epics and task hierarchies on GitLab (supporting Premium/Ultimate native epics and Free/CE tier label & markdown emulation).

### Memory

#### [`agents-md`](skills/agents-md/SKILL.md)

Audit, create, and improve `AGENTS.md` files to give AI assistants persistent project memory.

Use it when you want to:

- Bootstrap an `AGENTS.md` for a new project
- Audit and score an existing `AGENTS.md` for quality
- Keep `AGENTS.md` in sync with Claude Code via a `CLAUDE.md` symlink
- Automatically write discovered knowledge back to `AGENTS.md` after solving problems

#### [`to-memory`](skills/to-memory/SKILL.md)

Explicitly record something worth remembering — decides scope (global vs.
project) and tier (short-term candidate vs. long-term durable), then writes it.
Autonomous knowledge capture after solving a problem stays with `agents-md`'s
Self-Reflection mechanism.

#### [`agentsview-extract`](skills/agentsview-extract/SKILL.md)

Analyze conversation history across AI agents using `agentsview` (CLI or MCP) to extract reusable gotchas/preferences into `AGENTS.md` or construct new skills.

### Toolchain

#### [`mise`](skills/mise/SKILL.md)

Manage a project's toolchain, language runtimes, and tasks through a single
committed `mise.toml`. Captures opinionated conventions for pinning, built-in
backends, tasks over scripts, and phased host → CI → container adoption.

#### [`aube`](skills/aube/SKILL.md)

Use [aube](https://aube.jdx.dev/) as the Node.js package manager, installed and
pinned through mise. Covers `aubr`/`aube ci` workflows, lockfile policy, the
lifecycle-script jail, and migrating from pnpm/npm/bun.


## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for
guidelines on how to get started.

## License

This project is licensed under the [MIT License](LICENSE).

