---
id: "vincentkoc/dotskills"
name: "vincentkoc/dotskills"
url: "https://github.com/vincentkoc/dotskills"
date: "2026-07-08"
source: "GitHub Search API"
category: "github_discovery"
kind: "agent_framework"
compatibility: 87
momentum: 83
risk: 24
integration_effort: 44
expected_gain: 69
composite: 76
replacement_target: ""
related_articles: [{"title":"Kuberwastaken/VPSmaxxing","date":"2026-06-30","topic":"AI dev tools","similarity":0.31,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-30/13-kuberwastaken-vpsmaxxing.md"},{"title":"AlexNthLab/nth-dao","date":"2026-06-12","topic":"AI dev tools","similarity":0.278,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-12/97-alexnthlab-nth-dao.md"},{"title":"llm011/ethan-agent","date":"2026-06-20","topic":"AI dev tools","similarity":0.268,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-20/93-llm011-ethan-agent.md"}]
pros: ["Recently updated (2026-07-08)","MIT license","96 GitHub stars","GitHub Actions/CI detected"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 4
dependency_files: []
install_commands: ["npx skills add vincentkoc/dotskills --skill ghcrawl-cluster-operator -y","npx skills add vincentkoc/dotskills --skill technical-deslop -y","npx skills add vincentkoc/dotskills --skill technical-documentation -y","npx skills add vincentkoc/dotskills --skill technical-integrations -y","npx skills add vincentkoc/dotskills --skill technical-skill-finder -y","npx skills add vincentkoc/dotskills --skill openclaw-github-dedupe -y"]
risk_flags: []
status: "new"
---

# vincentkoc/dotskills

🐙 A curated set of Codex and OpenClaw skills for workflow automation, technical debugging, and agent-assisted development patterns.

URL: https://github.com/vincentkoc/dotskills

## Why it matters
You saved an article on 2026-06-30 about AI dev tools; this candidate overlaps with "Kuberwastaken/VPSmaxxing" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-08)
+ MIT license
+ 96 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 4

Dependency files:
- none detected

Install commands found:
- npx skills add vincentkoc/dotskills --skill ghcrawl-cluster-operator -y
- npx skills add vincentkoc/dotskills --skill technical-deslop -y
- npx skills add vincentkoc/dotskills --skill technical-documentation -y
- npx skills add vincentkoc/dotskills --skill technical-integrations -y
- npx skills add vincentkoc/dotskills --skill technical-skill-finder -y
- npx skills add vincentkoc/dotskills --skill openclaw-github-dedupe -y

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<div align="center">

  ![.skills banner](.assets/banner.jpg)

# .skills (dotskills)

[![CI](https://img.shields.io/github/actions/workflow/status/vincentkoc/dotskills/validate.yml?event=pull_request&label=CI)](https://github.com/vincentkoc/dotskills/actions/workflows/validate.yml)
[![Release](https://img.shields.io/github/actions/workflow/status/vincentkoc/dotskills/release.yml?label=Release)](https://github.com/vincentkoc/dotskills/actions/workflows/release.yml)
[![Verify installs](https://img.shields.io/github/actions/workflow/status/vincentkoc/dotskills/verify-install.yml?label=Install%20verify)](https://github.com/vincentkoc/dotskills/actions/workflows/verify-install.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/vincentkoc/dotskills/codeql.yml?branch=main&label=CodeQL)](https://github.com/vincentkoc/dotskills/actions/workflows/codeql.yml)
[![License](https://img.shields.io/github/license/vincentkoc/dotskills?label=License)](LICENSE)
[![Latest tag](https://img.shields.io/github/v/tag/vincentkoc/dotskills?label=Release)](https://github.com/vincentkoc/dotskills/tags)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

We are moving from "prompt as text" to **skill as runtime module**. Each skill acts like a lightweight, containerized application for AI work: a stable interface, opinionated workflow, and bundled resources that can be installed, versioned, tested, and reused across projects.

## How this repo works

This is my personal **.skills** repository for Codex, Cursor, OpenClaw and agent-first tooling. `.skills` is the dotfiles mindset applied to AI execution: instead of one-off prompts, this repo stores reusable skill units that bundle:

- prompt logic (`SKILL.md` / `AGENT.md` / `AGENTS.md`)
- references and knowledge assets
- scripts for deterministic execution
- repeatable validation + publishing workflows
- support external skills through submodules
- git managed personal registry and github action hooks

## Public skills

| Skill | What it does | Install |
|---|---|---|
| `crawlkit` | Maintain and release the shared crawl app Go library. | `npx skills add vincentkoc/dotskills --skill crawlkit -y` |
| `graincrawl` | Maintain and release the local-first Granola archive CLI. | `npx skills add vincentkoc/dotskills --skill graincrawl -y` |
| `ghcrawl-cluster-operator` | Operate ghcrawl local sync, clustering, and cluster inspection from the CLI. | `npx skills add vincentkoc/dotskills --skill ghcrawl-cluster-operator -y` |
| `openclaw-github-dedupe` | Triage GitHub issue/PR clusters across repositories, preserving contributor credit while selecting canonical fixes and safe closures. | `npx skills add vincentkoc/dotskills --skill openclaw-github-dedupe -y` |
| `operations-worktree` | Create safe git worktrees from fresh remote defaults instead of stale local branches. | `npx skills add vincentkoc/dotskills --skill operations-worktree -y` |
| `semantic-slicing` | Build local feature, threat, issue, and support maps for focused repo review. | `npx skills add vincentkoc/dotskills --skill semantic-slicing -y` |
| `technical-deslop` | Ship clean diffs fast: remove AI noise and keep behavior unchanged. | `npx skills add vincentkoc/dotskills --skill technical-deslop -y` |
| `technical-documentation` | Produce dev‑ready docs: clear, structured build/review for brownfield + evergreen. | `npx skills add vincentkoc/dotskills --skill technical-documentation -y` |
| `technical-integrations` | Design integrations that land: vendor‑agnostic API/RFC/SDK plans with rollout safety. | `npx skills add vincentkoc/dotskills --skill technical-integrations -y` |
| `technical-skill-finder` | Turn real agent pain into new skills: mine logs, rank wins, draft next steps. | `npx skills add vincentkoc/dotskills --skill technical-skill-finder -y` |

Internal/private workflow skills can live in this repo and are marked in the metadata as `internal: true` and excluded from public marketplace/release artifacts.

## Install

Install one skill:

```bash
npx skills add vincentkoc/dotskills --skill ghcrawl-cluster-operator -y
npx skills add vincentkoc/dotskills --skill technical-deslop -y
npx skills add vincentkoc/dotskills --skill technical-documentation -y
npx skills add vincentkoc/dotskills --skill technical-integrations -y
npx skills add vincentkoc/dotskills --skill technical-skill-finder -y
npx skills add vincentkoc/dotskills --skill openclaw-github-dedupe -y
npx skills add vincentkoc/dotskills --skill operations-worktree -y
npx skills add vincentkoc/dotskills --skill crawlkit -y
npx skills add vincentkoc/dotskills --skill graincrawl -y
npx skills add vincentkoc/dotskills --skill semantic-slicing -y
```

List available public skills:

```bash
npx skills add vincentkoc/dotskills --list
```

Default sync targets are managed automatically by vercel skills.

## Codex slash commands

This repo can also mirror Codex slash-command prompts from `vendor/` and sync them to `~/.codex/prompts`.

- `make sync` now syncs skills and slash commands for the `codex` profile.
- vendored command currently included: `/sectriage` from `steipete/agent-scripts`.

## Repository layout

```text
skills/                      # First-party skills
  <skill-name>/
    SKILL.md|AGENT.md|AGENTS.md
    references/
    scripts/
private-skills/              # Private/local-only skills (not published)
  <skill-name>/
    SKILL.md|AGENT.md|AGENTS.md
    references/
    scripts/
vendor/                      # Third-party mirrored/imported skills
.assets/                     # Shared visual assets (banner/icon)
bin/agent-skills             # List/validate/sync/import
scripts/                     # Validation + publishing automation
catalog.yaml                 # Skill metadata catalog
.claude-plugin/marketplace.json
releases/skills.json
```

## Validation

`make validate` now runs:

1. repo policy checks (`Purpose/When to use/Workflow/Inputs/Outputs`, entry-file checks)
2. AgentSkills spec checks for local `SKILL.md` skills (`name`/`description` constraints, frontmatter validity, relative resource references, one-level reference depth)
3. public skill OpenAI metadata checks (`agents/openai.yaml`, required interface fields, default icons/brand from `AGENTS.md`, and icon path existence)

If installed, the external reference validator is also used:

```bash
skills-ref validate ./skills/<skill-name>
```

## Why .skills

Dotfiles configure machines.
`.skills` configures AI execution quality.

This repo is meant to be composable, auditable, and practical: skills should be testable artifacts, not throwaway prompt snippets.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

