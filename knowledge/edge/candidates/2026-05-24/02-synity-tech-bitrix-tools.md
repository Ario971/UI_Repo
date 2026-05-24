---
id: "synity-tech/bitrix-tools"
name: "synity-tech/bitrix-tools"
url: "https://github.com/synity-tech/bitrix-tools"
date: "2026-05-24"
source: "awesome-claude-code"
category: "awesome_lists"
kind: "claude_skill"
compatibility: 92
momentum: 45
risk: 32
integration_effort: 44
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"Show HN: I Made a Claude Skill for Spec-Driven Development (SDD)","date":"2026-05-21","topic":"AI dev tools","similarity":0.219,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-21/43-show-hn-i-made-a-claude-skill-for-spec-driven-development-sdd.md"},{"title":"Show HN: Agent-estimate, how long a coding task takes, at agent speed","date":"2026-05-21","topic":"AI agents","similarity":0.207,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-21/40-show-hn-agent-estimate-how-long-a-coding-task-takes-at-agent-speed.md"}]
pros: ["Recently updated (2026-05-24)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 4
dependency_files: [{"name":"package.json","summary":"deps chalk, clipanion, deepmerge, execa, kleur, @changesets/cli, @eslint/js, @types/node; scripts prebuild, build, dev, prepublishOnly, pretest, test, test:watch, lint"}]
install_commands: ["npx @synity/bitrix-skills install","npx @synity/bitrix-skills install --all          # all features","npx @synity/bitrix-skills install bx-task-sync   # specific feature","npx @synity/bitrix-skills install bx-task-sync --key <your-license-key>","npx @synity/bitrix-skills install bx-task-sync"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# synity-tech/bitrix-tools

Multi-feature CLI for Bitrix24 + Claude Code integration (task sync, skills, hooks)

URL: https://github.com/synity-tech/bitrix-tools

## Why it matters
You saved an article on 2026-05-21 about AI dev tools; this candidate overlaps with "Show HN: I Made a Claude Skill for Spec-Driven Development (SDD)" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-05-24)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 4

Dependency files:
- package.json: deps chalk, clipanion, deepmerge, execa, kleur, @changesets/cli, @eslint/js, @types/node; scripts prebuild, build, dev, prepublishOnly, pretest, test, test:watch, lint

Install commands found:
- npx @synity/bitrix-skills install
- npx @synity/bitrix-skills install --all          # all features
- npx @synity/bitrix-skills install bx-task-sync   # specific feature
- npx @synity/bitrix-skills install bx-task-sync --key <your-license-key>
- npx @synity/bitrix-skills install bx-task-sync

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# @synity/bitrix-skills

[![npm version](https://img.shields.io/npm/v/@synity/bitrix-skills.svg)](https://www.npmjs.com/package/@synity/bitrix-skills)
[![CI](https://github.com/synity-tech/bitrix-tools/actions/workflows/ci.yml/badge.svg)](https://github.com/synity-tech/bitrix-tools/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Multi-feature CLI for **Bitrix24 + Claude Code** integration — task sync hooks, skills, and more.

---

## Features

| Feature | Target | Description |
|---------|--------|-------------|
| `bx-task-sync` | project | AI session sync to Bitrix task chat via hooks |
| `bx-task` | global (`~/.claude/skills`) | Claude Code skill for Bitrix task management |
| `bx-crm` | global (`~/.claude/skills`) | Claude Code skill for CRM: contacts, deals, companies, analysis, reports |
| `bx-calendar` | global (`~/.claude/skills`) | Claude Code skill for Calendar: meetings, reminders, availability, CRM sync |
| `bx` | global (`~/.claude/skills`) | Hub router skill — discovery entry point for all bx:* skills |

## Install

```bash
npx @synity/bitrix-skills install
```

Interactive picker. Or:

```bash
npx @synity/bitrix-skills install --all          # all features
npx @synity/bitrix-skills install bx-task-sync   # specific feature
```

### Paid features (`bx-task-sync`)

`bx-task-sync` requires a license key to unlock:

```bash
npx @synity/bitrix-skills install bx-task-sync --key <your-license-key>
```

Free tier installs all other features (`bx`, `bx-task`, `bx-crm`, `bx-calendar`) without a key.

> **Note:** The flag is `--key`, not `--token`.

## Commands

```bash
bitrix-skills install [features...]          # install with picker or by name
bitrix-skills install --all                  # install all features
bitrix-skills install bx-task-sync --key <key>  # install paid feature with license key
bitrix-skills list                           # show available + installed status
bitrix-skills verify                         # verify installed file checksums
bitrix-skills update                         # update installed features to latest
bitrix-skills uninstall <feature>            # remove a feature
bitrix-skills --version
```

## Requirements

- Node.js >= 20
- `BITRIX_WEBHOOK_URL` env var (for `bx-task-sync`)
- `bitrix-synity-mcp` MCP server (for `bx-task` skill)

## Quick start (bx-task-sync)

```bash
# 1. Install into your project
npx @synity/bitrix-skills install bx-task-sync

# 2. Set TASK_ID in CLAUDE.md
echo -e "## Bitrix Task\nTASK_ID: 12345" >> CLAUDE.md

# 3. Export webhook URL
export BITRIX_WEBHOOK_URL="https://your-portal.bitrix24.com/rest/1/xxx/"

# 4. Start Claude Code session - hooks fire automatically
```

## Migration from `@synity/bitrix-task-sync`

See [docs/migration-from-bitrix-task-sync.md](docs/migration-from-bitrix-task-sync.md).

## Documentation

- [docs/feature-bx-task-sync.md](docs/feature-bx-task-sync.md)
- [docs/feature-bx-task.md](docs/feature-bx-task.md)
- [docs/architecture.md](docs/architecture.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT (c) 2026 Synity Vietnam JSC

