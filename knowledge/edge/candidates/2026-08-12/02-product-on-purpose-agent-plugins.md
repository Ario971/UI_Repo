---
id: "product-on-purpose/agent-plugins"
name: "product-on-purpose/agent-plugins"
url: "https://github.com/product-on-purpose/agent-plugins"
date: "2026-08-12"
source: "awesome-llm-agents"
category: "awesome_lists"
kind: "claude_skill"
compatibility: 79
momentum: 45
risk: 29
integration_effort: 38
expected_gain: 87
composite: 71
replacement_target: ""
related_articles: [{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.21,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"},{"title":"blurifycom/openora","date":"2026-07-29","topic":"AI dev tools","similarity":0.197,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-07-29/12-blurifycom-openora.md"},{"title":"Show HN: Parley – your coding agent can talk to a teammate's agent","date":"2026-08-11","topic":"AI agents","similarity":0.192,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-11/06-show-hn-parley-your-coding-agent-can-talk-to-a-teammate-s-agent.md"}]
pros: ["Recently updated (2026-08-12)","Apache-2.0 license","GitHub Actions/CI detected","Matches 3 saved Feed article(s)"]
cons: ["No clear install command found in README"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 0
dependency_files: []
install_commands: []
risk_flags: []
status: "new"
---

# product-on-purpose/agent-plugins

Product on Purpose plugin marketplace registry (Claude Code). Thin host repo: lists plugins via .claude-plugin/marketplace.json; holds no plugin code.

URL: https://github.com/product-on-purpose/agent-plugins

## Why it matters
You saved an article on 2026-08-10 about AI agents; this candidate overlaps with "Show HN: Keen Code – an agentic-engineered coding agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-12)
+ Apache-2.0 license
+ GitHub Actions/CI detected
+ Matches 3 saved Feed article(s)

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
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
# Product on Purpose

Thematic AI agent skill and tool collections for product work. One marketplace, multiple independent plugins. Install only the collections you want.

> `pm-skills` also remains available through its existing self-hosted install path during the transition; existing installs are unaffected. See [Migration during transition](#migration-during-transition).

## Quick start

```bash
# 1. Add the marketplace once (by repo path)
/plugin marketplace add product-on-purpose/agent-plugins

# 2. Install the plugins you want (each is independent)
/plugin install pm-skills@product-on-purpose

# 3. Update a plugin later
/plugin update pm-skills
```

You **add** the marketplace by its repo path (`product-on-purpose/agent-plugins`) and **install** plugins by the marketplace identity (`@product-on-purpose`). Those differ by design: the path is the address, the identity is the brand.

## Plugins

| Plugin | What it is | Repo | Status |
|---|---|---|---|
| `pm-skills` | Product management skills, sub-agents, and sprint tools across the full product lifecycle | `product-on-purpose/pm-skills` | listed |
| `thinking-framework-skills` | Canonical thinking and reasoning frameworks (SCQA, MECE, Pyramid Principle, First Principles, OODA) | `product-on-purpose/thinking-framework-skills` | listed |
| `writing-style-catalog` | Composable writing instructions on four orthogonal axes (Voice, Tone, Style, Format) with a compose-instruction skill | `product-on-purpose/writing-style-catalog` | listed |
| `agent-skills-toolkit` | Toolkit and Standard for authoring, validating, governing, and scaling cross-agent skill libraries to a tiered Bronze/Silver/Gold quality bar | `product-on-purpose/agent-skills-toolkit` | listed |
| `critique-skills` | Rubric-cited critique skills that emit machine-parseable, criterion-cited findings and publish their own measured performance against a seeded-defect corpus | `product-on-purpose/critique-skills` | listed |
| `product-lifecycle-templates` | 26 researched document templates across the product lifecycle, each with a lean and full variant, a worked example, and the research log every claim traces to | `product-on-purpose/product-lifecycle-templates` | listed |

Each plugin lives in its **own repo** with its own version, changelog, and release cadence. This repo holds only the registry (`.claude-plugin/marketplace.json`); it contains no plugin code.

## How listing works

The registry points outward at each plugin repo through a `source` entry. The plugin repos do not point back; each only needs a valid `.claude-plugin/plugin.json`. Pointing is one-way: marketplace to plugin.

Production entries pin a `sha` so the marketplace controls exactly which commit of each plugin users receive (a plugin repo cannot then ship to your users by force-pushing `main`). Bumping a plugin means updating its `sha` and `version` in this one file.

## Adding a plugin

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the contract a repo must satisfy to be listed.

## Migration during transition

`pm-skills` has historically installed from its own self-hosted marketplace. That path keeps working; this marketplace is an additional, brand-level home for it. Existing installs are not affected and do not migrate automatically (Claude Code keys an install to the marketplace it came from). To switch, add this marketplace and reinstall `pm-skills@product-on-purpose`.

## License

This repository is Apache-2.0 (see [`LICENSE`](LICENSE)). Each listed plugin carries its own license in its own repo.

