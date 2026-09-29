---
id: "smirnowld/agent-practices"
name: "smirnowld/agent-practices"
url: "https://github.com/smirnowld/agent-practices"
date: "2026-09-29"
source: "awesome-claude-code"
category: "awesome_lists"
kind: "claude_skill"
compatibility: 79
momentum: 45
risk: 24
integration_effort: 28
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution","date":"2026-08-27","topic":"AI agents","similarity":0.301,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-27/07-wikiskill-compiling-agent-experience-into-persistent-knowledge-for-ski.md"},{"title":"Show HN: Visually orchestrate Claude Code AI agents","date":"2026-09-23","topic":"AI agents","similarity":0.211,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-23/08-show-hn-visually-orchestrate-claude-code-ai-agents.md"},{"title":"Show HN: Recurse – Develop and deploy specialist agents faster","date":"2026-09-25","topic":"AI agents","similarity":0.202,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-25/06-show-hn-recurse-develop-and-deploy-specialist-agents-faster.md"}]
pros: ["Recently updated (2026-09-29)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No clear install command found in README"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 0
dependency_files: []
install_commands: []
risk_flags: []
status: "new"
---

# smirnowld/agent-practices

Vendor-neutral rules, practices, skills and roles for coding agents

URL: https://github.com/smirnowld/agent-practices

## Why it matters
You saved an article on 2026-08-27 about AI agents; this candidate overlaps with "WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-29)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 0

Dependency files:
- none detected

Install commands found:
- none detected

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# agent-practices

The single source of truth for how coding agents work on my projects: policy,
best practices learnt along the way, workflows, role definitions and output
templates. Rules live in this repository rather than in per-machine agent config, so a
new machine or a cloud sandbox starts from the same rules.

It is vendor-neutral. Claude Code and Codex both consume it through thin
adapters; no rule is written for one vendor only.

## Layout

```
policy/AGENTS.md        Always-on rules for every session (the policy)
practices/              Best practices and lessons, with the evidence behind them
skills/<name>/SKILL.md  Workflows loaded on demand (how to do a task)
roles/<name>.md         Agent roles: purpose, tools, capability tier
templates/              Output formats: updates, summaries, briefs, PRs, documents
.claude-plugin/          Plugin and marketplace manifests (the repo root is the plugin)
adapters/claude/        Claude Code agents, hooks, tier map
adapters/codex/         Codex role TOML, tier map, install notes
scripts/                sync-policy.sh (policy into a project), push-policy-sync.sh (sync PRs, run by CI on policy merges), build-adapters.py (roles into agents), check-links.py (P18), ensure-labels.sh (R6 issue labels), check-action-pins.py (C4), check-adrs.py (C5), tests
Makefile                `make check`: the same checks CI runs
```

## What goes where

| If it is… | Put it in | Test |
|---|---|---|
| A rule that must hold in every session | `policy/` | Would a session break the rule by not knowing it up front? |
| Knowledge with a reason and evidence | `practices/` | Is it advice to consult, not a rule to enforce? |
| A repeatable procedure | `skills/` | Does it describe *how* to do a task, step by step? |
| A delegated agent's job | `roles/` | Is it a kind of worker the parent hands work to? |
| The shape of an output | `templates/` | Does it describe *what* a result looks like? |
| Anything naming a vendor's file format, key or event | `adapters/<vendor>/` | Would it change if the vendor changed? |

Policy stays short because it loads into every session and some agents cap
instruction size (see adapters). Detail belongs in a practice, skill or
template, with policy linking to it.

## Precedence

Policy statement P1 in [policy/AGENTS.md](policy/AGENTS.md#p1-precedence)
sets what can override the policy: an explicit project override naming the
statement, or my explicit OK for one action.

## Vendor-neutral approach

- Content is plain Markdown. Roles and skills describe capability tiers
  ("fast exploration", "capable reasoning"), never model IDs.
- Adapters translate content into each vendor's format and are generated or
  thin wrappers, never hand-maintained second copies.
- If only one vendor supports a feature (for example per-role effort), the rule
  says what outcome is needed and the adapter explains the fallback.
- See [adapters/README.md](adapters/README.md) for the mapping and the facts it
  rests on.

## How sessions get it

- **Local:** each adapter installs from this repo (Claude plugin marketplace;
  Codex: skills, role files and a global `AGENTS.md`; see its adapter README).
- **Project repos:** each project's `AGENTS.md` carries the policy between
  sync markers, maintained by `scripts/`, so a project works even with no
  adapter installed, including in cloud sandboxes that only clone that project.
- **Cloud:** cloud sessions only clone the project and load no plugins, so
  they get the policy from the synced copy; skills and templates are local
  only ([adapters/README.md](adapters/README.md#why-the-synced-copy-stays)).

