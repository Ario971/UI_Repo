---
id: "alberduris/skills"
name: "alberduris/skills"
url: "https://github.com/alberduris/skills"
date: "2026-10-04"
source: "awesome-claude-code"
category: "awesome_lists"
kind: "claude_skill"
compatibility: 79
momentum: 68
risk: 29
integration_effort: 28
expected_gain: 87
composite: 77
replacement_target: ""
related_articles: [{"title":"Show HN: Visually orchestrate Claude Code AI agents","date":"2026-09-23","topic":"AI agents","similarity":0.298,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-23/08-show-hn-visually-orchestrate-claude-code-ai-agents.md"},{"title":"Show HN: Self-hosted company OS, Claude Code and Codex agents in departments","date":"2026-09-09","topic":"AI agents","similarity":0.199,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-09/06-show-hn-self-hosted-company-os-claude-code-and-codex-agents-in-departm.md"}]
pros: ["Recently updated (2026-10-04)","MIT license","20 GitHub stars","GitHub Actions/CI detected"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: false
setup_steps_count: 2
dependency_files: []
install_commands: ["claude plugins install alberduris/claude-code-marketplace second-opinion"]
risk_flags: []
status: "new"
---

# alberduris/skills

Claude Code plugins for meta-cognitive augmentation

URL: https://github.com/alberduris/skills

## Why it matters
You saved an article on 2026-09-23 about AI agents; this candidate overlaps with "Show HN: Visually orchestrate Claude Code AI agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-04)
+ MIT license
+ 20 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 2

Dependency files:
- none detected

Install commands found:
- claude plugins install alberduris/claude-code-marketplace second-opinion

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Claude Code Marketplace

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Plugins](https://img.shields.io/badge/plugins-3-blue.svg)](https://github.com/alberduris/claude-code-marketplace)
[![Claude Code](https://img.shields.io/badge/Claude-Code-orange.svg)](https://www.claude.com/product/claude-code)
<img src="assets/claude-icon.png" alt="Claude" height="18" style="margin-left: 6px; vertical-align: middle;">

Claude Code Plugins Marketplace by [@alberduris](https://x.com/alberduris).

This git repository is a Claude Code Marketplace; in other words, a way to **distribute** a **collection** of Plugins that augment Claude Code's capabilities via **Commands**, **Skills**, **Agents**, or **Hooks**.

## Quick Understanding

Zero-bullshit definitions without AI slop so we all know what we're talking about.

**Marketplace**: A git repository with a [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json) file listing available Plugins.

**Plugin**: A packaged directory containing one or more of the following, plus [`.claude-plugin/plugin.json`](plugins/second-opinion/.claude-plugin/plugin.json) with metadata (name, version, author):
- **Skill**: Directory with `SKILL.md` + supporting files (scripts, templates, docs).
- **Command**: Single `.md` file.
- **Agent**: Isolated autonomous agent launched via Task tool; runs multi-turn conversation with tools (agent ↔ tools), returns final result. ([Learn more](https://alberduris.beehiiv.com/p/claude-code-sub-agents-what-they-are-and-what-they-are-not))
- **Hook**: Script triggered by events (file edits, tool calls, user prompt submission).

> **Invocation**: Both Skills and Commands can be invoked 3 ways: manually (`/name`), by Claude via `Skill` tool, or auto-discovered by context. The only difference is structure. Use `disable-model-invocation: true` in frontmatter if you want manual-only.

## Quick Start

### Standard Installation

Add the Marketplace and install Plugins through Claude Code:

```bash
# Add this Marketplace
/plugin marketplace add alberduris/claude-code-marketplace

# Install a Plugin
/plugin install second-opinion
```

### One-Command Installation

Use the Claude Plugins CLI to add the Marketplace and install Plugins in one step:

```bash
claude plugins install alberduris/claude-code-marketplace second-opinion
```

## Available Plugins

| Plugin | Description |
|--------|-------------|
| [second-opinion](plugins/second-opinion/) | Consult GPT-5 Pro for alternative perspectives on technical decisions |
| [langfuse-traces](plugins/langfuse-traces/) | Query Langfuse traces for debugging and observability |
| [slack-reminders](plugins/slack-reminders/) | Schedule future reminders via Slack notifications |

See each plugin's README for setup and usage instructions.

## License

MIT

