---
id: "krzaq/lemat"
name: "KrzaQ/lemat"
url: "https://github.com/KrzaQ/lemat"
date: "2026-11-12"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 88
momentum: 45
risk: 35
integration_effort: 48
expected_gain: 81
composite: 69
replacement_target: ""
related_articles: [{"title":"Show HN: Omnara – Open-source alternative to Claude Managed Agents","date":"2026-10-21","topic":"AI agents","similarity":0.29,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-21/06-show-hn-omnara-open-source-alternative-to-claude-managed-agents.md"},{"title":"Show HN: shadowclone, skills learned from your coding agent corrections","date":"2026-10-13","topic":"AI agents","similarity":0.288,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-13/06-show-hn-shadowclone-skills-learned-from-your-coding-agent-corrections.md"},{"title":"Show HN: Nico – a two-agent type personal agent on your Mac","date":"2026-11-05","topic":"AI agents","similarity":0.268,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-05/07-show-hn-nico-a-two-agent-type-personal-agent-on-your-mac.md"}]
pros: ["Recently updated (2026-11-12)","Apache-2.0 license","Matches 3 saved Feed article(s)"]
cons: ["No clear install command found in README"]
readme_quality: 58
has_ci: false
has_tests: false
setup_steps_count: 0
dependency_files: [{"name":"package.json","summary":"deps @tauri-apps/cli; scripts tauri"}]
install_commands: []
risk_flags: []
status: "new"
---

# KrzaQ/lemat

A math board that works with a coding agent

URL: https://github.com/KrzaQ/lemat

## Why it matters
You saved an article on 2026-10-21 about AI agents; this candidate overlaps with "Show HN: Omnara – Open-source alternative to Claude Managed Agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-12)
+ Apache-2.0 license
+ Matches 3 saved Feed article(s)

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 58/100
CI detected: no
Tests mentioned: no
Setup steps estimate: 0

Dependency files:
- package.json: deps @tauri-apps/cli; scripts tauri

Install commands found:
- none detected

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Lemat

Lemat is a math board that works with a coding agent. You lead a proof or
a calculation one sentence at a time, and the agent writes each step in
LaTeX, checks it, and marks mistakes. The board shows the steps as they
change.

The agent is Claude Code, pi, or later Codex, through
[Lejce](https://github.com/KrzaQ/lejce). It can run on this machine or in
a folder on another machine over SSH, where your notes and course files
live. Lemat gives it MCP servers: its own (the board) and any you add.

Lemat works well with voice input, for example from
[Kuterlapa](https://github.com/KrzaQ/kuterlapa): dictate into Lemat's text
field like into any other window.

Status: early. `docs/design.md` describes the plan.

## Build

Needs Rust and Node.js.

```sh
make install
make run      # development build with live reload
make build    # release bundle
```

`make help` lists all targets.

## License

MIT or Apache 2.0, at your choice. KaTeX and marked (in `src/vendor/`)
keep their own MIT licenses.

## Credits

Written by krzaq together with Claude (Anthropic), through Claude Code.

