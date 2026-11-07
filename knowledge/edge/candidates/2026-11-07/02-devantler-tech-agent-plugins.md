---
id: "devantler-tech/agent-plugins"
name: "devantler-tech/agent-plugins"
url: "https://github.com/devantler-tech/agent-plugins"
date: "2026-11-07"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 84
momentum: 56
risk: 24
integration_effort: 36
expected_gain: 87
composite: 75
replacement_target: ""
related_articles: [{"title":"Show HN: shadowclone, skills learned from your coding agent corrections","date":"2026-10-13","topic":"AI agents","similarity":0.358,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-13/06-show-hn-shadowclone-skills-learned-from-your-coding-agent-corrections.md"},{"title":"Show HN: Omnara – Open-source alternative to Claude Managed Agents","date":"2026-10-21","topic":"AI agents","similarity":0.33,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-21/06-show-hn-omnara-open-source-alternative-to-claude-managed-agents.md"},{"title":"AIBeginnerX/oh-our-pi-desktop","date":"2026-10-20","topic":"AI dev tools","similarity":0.288,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-10-20/11-aibeginnerx-oh-our-pi-desktop.md"}]
pros: ["Recently updated (2026-11-07)","Apache-2.0 license","3 GitHub stars","GitHub Actions/CI detected"]
cons: ["No clear install command found in README"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 0
dependency_files: [{"name":"package.json","summary":"deps commonmark; scripts none"}]
install_commands: []
risk_flags: []
status: "new"
---

# devantler-tech/agent-plugins

Tool-neutral agent-plugin marketplace — maintained and curated skills, MCP servers and agents in category plugins for VS Code, GitHub Copilot CLI, and Claude Code

URL: https://github.com/devantler-tech/agent-plugins

## Why it matters
You saved an article on 2026-10-13 about AI agents; this candidate overlaps with "Show HN: shadowclone, skills learned from your coding agent corrections" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-07)
+ Apache-2.0 license
+ 3 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 0

Dependency files:
- package.json: deps commonmark; scripts none

Install commands found:
- none detected

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Agent Plugins

A plugin marketplace: ready-to-install bundles that teach your AI coding assistant new skills, connect it to tools, and give it specialist roles. For developers using **VS Code**, **GitHub Copilot CLI**, or **Claude Code**.

## Start here

In **Claude Code**, add the marketplace and install the agentic engineering bundle:

```text
/plugin marketplace add devantler-tech/agent-plugins
/plugin install agentic-engineering@devantler-plugins
```

Using another tool? Follow the [VS Code](docs/installation.md#vs-code), [Copilot CLI](docs/installation.md#copilot-cli), [Claude Code](docs/installation.md#claude-code), or [skills-only installation guide](docs/installation.md#any-other-agent--skills-only-via-npx-skills).

## Choose a bundle

There are three bundles. **`agentic-engineering`** is everything an autonomous engineer needs in one install: its agents and workflows, plus skills and tool connections for GitHub and repository security, Go, Kubernetes, Flux, Talos, frontend design and engineering practices. **`ksail`** teaches your assistant the [KSail](https://ksail.devantler.tech) cluster CLI and connects it to KSail's MCP server. **`vibe-coding`** is for building a product by conversation alone. The [plugin catalogue](docs/plugins.md) lists every resource.

The [autonomous engineering setup](plugins/agentic-engineering/README.md) explains how to configure the engineer, surveyor, and improver for your repositories. The [server and agent guide](docs/resources.md) covers bundled connections, prerequisites, and specialist roles.

## Contribute

Maintainers can [review plugin use and usefulness](docs/plugin-effectiveness.md) with native
OpenTelemetry usage exports and skill evaluation results. The read-only scorecard keeps missing
evidence visible instead of treating an installed plugin as a useful one. The
[skill coverage record](docs/skill-coverage.md) maps the bundled skills to the portfolio's work and
records which gaps to fill.

Maintained first-party skills are authored in their plugins here; curated external skills retain their original authors and upstream update paths. To suggest a bundle or report a problem, [open an issue](https://github.com/devantler-tech/agent-plugins/issues). For a safe first repository change, start with [Contributing](CONTRIBUTING.md).

Maintainers can [prepare and publish a marketplace release](docs/marketplace-releases.md) with a reviewed version proposal, matching manifests, and verified release notes. Actions can explicitly create a signed draft containing only the generated marketplace versions and start normal PR CI. Review and merge remain separate gates. Pull-request CI checks that a version update exactly matches its generated proposal; publication separately requires exact successful main CI. Scheduled proposal creation and publication are independently opt-in.

If a pull-request recheck fails, follow the [recovery guide](docs/pr-recheck-recovery.md) to retrieve its saved merge settings and verify the current PR before restoring them.

The marketplace is under the [Apache 2.0 license](LICENSE). Bundled skills keep their own licenses, listed
in the [plugin catalogue](docs/plugins.md#skill-licenses); third-party skills ship their copyright
notices and license texts, or links to the license files beside them, in their plugin's
`resources/THIRD-PARTY-NOTICES.md`.

