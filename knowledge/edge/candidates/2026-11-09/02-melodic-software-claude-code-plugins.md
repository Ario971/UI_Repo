---
id: "melodic-software/claude-code-plugins"
name: "melodic-software/claude-code-plugins"
url: "https://github.com/melodic-software/claude-code-plugins"
date: "2026-11-09"
source: "awesome-mcp"
category: "awesome_lists"
kind: "mcp_server"
compatibility: 84
momentum: 75
risk: 32
integration_effort: 36
expected_gain: 81
composite: 76
replacement_target: ""
related_articles: [{"title":"AIBeginnerX/oh-our-pi-desktop","date":"2026-10-20","topic":"AI dev tools","similarity":0.333,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-10-20/11-aibeginnerx-oh-our-pi-desktop.md"},{"title":"Show HN: shadowclone, skills learned from your coding agent corrections","date":"2026-10-13","topic":"AI agents","similarity":0.244,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-13/06-show-hn-shadowclone-skills-learned-from-your-coding-agent-corrections.md"},{"title":"Show HN: Aigent-OS, a Claude Code harness that clears and resumes","date":"2026-10-27","topic":"AI agents","similarity":0.234,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-27/08-show-hn-aigent-os-a-claude-code-harness-that-clears-and-resumes.md"}]
pros: ["Recently updated (2026-11-09)","MIT license","30 GitHub stars","GitHub Actions/CI detected"]
cons: ["No clear install command found in README"]
readme_quality: 70
has_ci: true
has_tests: true
setup_steps_count: 0
dependency_files: [{"name":"package.json","summary":"deps @anthropic-ai/claude-code, @biomejs/biome, @playwright/cli, @playwright/mcp, graphql, htmlhint, markdownlint-cli2; scripts none"}]
install_commands: []
risk_flags: []
status: "new"
---

# melodic-software/claude-code-plugins

Claude Code plugin marketplace: repo-agnostic skills, hooks, agents, and MCP servers.

URL: https://github.com/melodic-software/claude-code-plugins

## Why it matters
You saved an article on 2026-10-20 about AI dev tools; this candidate overlaps with "AIBeginnerX/oh-our-pi-desktop" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-09)
+ MIT license
+ 30 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 70/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 0

Dependency files:
- package.json: deps @anthropic-ai/claude-code, @biomejs/biome, @playwright/cli, @playwright/mcp, graphql, htmlhint, markdownlint-cli2; scripts none

Install commands found:
- none detected

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Melodic Software Claude Code plugins

A public [Claude Code](https://code.claude.com/docs) plugin marketplace of reusable, repo-agnostic
skills, hooks, and agents. Each plugin works in any repository, and consumers customize it without
editing the plugin itself.

## Use this marketplace

```shell
/plugin marketplace add melodic-software/claude-code-plugins
/plugin install <plugin-name>@melodic-software
```

Browse and manage plugins with `/plugin`. To refresh after updates, run
`/plugin marketplace update melodic-software`.

An install from GitHub is a copy keyed on the plugin's `version`, so a change reaches it only when a
release raises that version. A marketplace added from a local clone loads each plugin in place, so
edits apply at the next session or `/reload-plugins`. See "Same-version commit drift" in
[`docs/migration-playbook.md`](docs/migration-playbook.md#same-version-commit-drift-copied-installs).

A plugin whose catalog entry sets `defaultEnabled: false` installs disabled. Enable it with
`/plugin enable <plugin-name>`.

### Enable plugin suggestions for an organization

Some catalog entries declare `relevance` signals, so Claude Code can suggest the plugin when a
session's work matches. Suggestions appear only after an administrator allowlists the marketplace in
managed settings. This block declares the marketplace source and allowlists it:

```json
{
  "extraKnownMarketplaces": {
    "melodic-software": {
      "source": {
        "source": "github",
        "repo": "melodic-software/claude-code-plugins"
      }
    }
  },
  "pluginSuggestionMarketplaces": ["melodic-software"]
}
```

The rules for this block are in
[Recommend plugins for your org](https://code.claude.com/docs/en/plugins/relevance).

## Find a plugin or skill

- [Skill cheat sheet](docs/skill-cheat-sheet.md): from what you are doing to the skill that does it.
- [Plugin catalog](docs/catalog.md): every plugin by category, generated from the manifests.
- [Catalog taxonomy](docs/catalog-taxonomy.md): the categories the catalog uses.

## What this marketplace publishes

This repository is the only authoritative listing of what this marketplace publishes: the plugins in
`plugins/` on the default branch, listed machine-readably in
[`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json).

Some third-party directory sites credit this publisher with skills that have never existed here. If
a skill credited to this marketplace is not in `plugins/` on the default branch, it is not ours.
Install from the source above, not from a mirror or directory listing. This repository does not
maintain entries on third-party lists such as
[awesome-ai-plugins](https://github.com/hashgraph-online/awesome-ai-plugins) and declines requests
to add them.

## Contributing

| Path | Holds |
|---|---|
| [`AGENTS.md`](AGENTS.md) | Operating rules for agents working in this repository (`CLAUDE.md` imports it) |
| [`docs/migration-playbook.md`](docs/migration-playbook.md) | Design charter, extensibility model, the per-plugin migration gate, and the local development loop |
| [`scripts/README.md`](scripts/README.md) | Validating a change before you push: affected tests, local forms of CI gates, the check-script contract |
| [`REVIEW.md`](REVIEW.md) and [`docs/review/`](docs/review/README.md) | Review criteria |
| [`docs/official-docs.md`](docs/official-docs.md) | Where to find the official Claude Code docs, and how to cite them |
| `lib/` | The shared shell helpers. `scripts/sync-<helper>.sh` copies each into the plugins that use it, and CI rejects a copy that differs, so edit `lib/`, never a copy |
| `prompts/` | Launch-prompt templates to fill in and paste into a session |
| `.claude/` | This repository's own Claude Code configuration; it ships to no one |
| `.github/` | Workflows and the policy files they read |

## License

[MIT](LICENSE).

