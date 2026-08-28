---
id: "kyroshendrix/pi-killeros"
name: "KyrosHendrix/pi-KillerOS"
url: "https://github.com/KyrosHendrix/pi-KillerOS"
date: "2026-08-28"
source: "GitHub Trending"
category: "github_discovery"
kind: "agent_framework"
compatibility: 92
momentum: 52
risk: 32
integration_effort: 32
expected_gain: 77
composite: 73
replacement_target: ""
related_articles: [{"title":"Show HN: Parley – your coding agent can talk to a teammate's agent","date":"2026-08-11","topic":"AI agents","similarity":0.284,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-11/06-show-hn-parley-your-coding-agent-can-talk-to-a-teammate-s-agent.md"},{"title":"Show HN: Open tool for testing your AI Agents (No LLM)","date":"2026-08-28","topic":"AI agents","similarity":0.251,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-28/06-show-hn-open-tool-for-testing-your-ai-agents-no-llm.md"},{"title":"What Does It Take to Detect an AI Agent? Minimal Feature Sets for Behavioral Detection under Browser Automation","date":"2026-07-29","topic":"AI agents","similarity":0.247,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-29/09-what-does-it-take-to-detect-an-ai-agent-minimal-feature-sets-for-behav.md"}]
pros: ["Recently updated (2026-08-28)","MIT license","2 GitHub stars","GitHub Actions/CI detected"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps @earendil-works/pi-ai, @earendil-works/pi-coding-agent, @earendil-works/pi-tui, @types/node, eslint, typebox, typescript, typescript-eslint; scripts check, lint, test"}]
install_commands: ["npm ci && npm run check && npm test"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# KyrosHendrix/pi-KillerOS

TUI, goals, and workflow automation for the Pi coding agent

URL: https://github.com/KyrosHendrix/pi-KillerOS

## Why it matters
You saved an article on 2026-08-11 about AI agents; this candidate overlaps with "Show HN: Parley – your coding agent can talk to a teammate's agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-28)
+ MIT license
+ 2 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps @earendil-works/pi-ai, @earendil-works/pi-coding-agent, @earendil-works/pi-tui, @types/node, eslint, typebox, typescript, typescript-eslint; scripts check, lint, test

Install commands found:
- npm ci && npm run check && npm test

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# KillerOS

A TypeScript extension for the [Pi coding agent](https://github.com/earendil-works/pi) that replaces the stock TUI and adds long-running goals, reasoning controls, and workflow commands.

## What you get

- A custom TUI: startup card with version, model, provider, working directory, and Git branch; a dark theme with coral accents; a multiline editor with slash-command completion; a footer that tracks model, context, and goal state; settled task receipts with duration and token usage.
- `/goal`: set an objective and Pi keeps working toward it across turns, compaction, reloads, and branch navigation. Pause, resume, edit, or clear it anytime.
- `/init`: generates a root `AGENTS.md` from repository evidence, preserving compatible existing rules.
- `/variants`: pick a reasoning level supported by the active model.
- `/codex-fast`: toggles the `priority` service tier on Codex requests.
- `/handoff`: starts a fresh linked session carrying visible continuation context.
- Automatic context compaction when remaining tokens drop below 15% of the window (configurable).
- A `question` tool with single-select and multi-select modes.
- Lifecycle hooks (`tool_call`, `tool_result`, `agent_settled`) from `.pi/killeros-hooks.json`, plus `AGENTS.local.md` loading for trusted projects.
- Optional completion sounds for settled requests.


## Requirements

- Node.js 22.19.0+
- Pi 0.84.3 or later within the 0.x release line
- An interactive TUI session for the custom header, editor, footer, `question`, and `/init`

## Install

```bash
pi install npm:killeros
```

Or from GitHub:

```bash
pi install git:github.com/KyrosHendrix/pi-KillerOS
```

Pin a release by appending its tag, for example `@v2.0.21`. Add `-l` to install only for the current project. Restart Pi after installing.

## Commands

```text
/init                     Generate root AGENTS.md from repository evidence
/goal                     Open goal status, or set an objective with /goal <objective>
/goal edit|pause|resume|clear
/variants                 Reasoning-level selector (/variants high sets directly)
/codex-fast               Toggle Codex fast mode
/notification             Configure the completion sound
/handoff [focus]          Fresh session with continuation context
/clear                    New session after confirmation
/exit                     Quit Pi gracefully
```

## Behavior by mode

| Mode | What works |
| --- | --- |
| TUI | Everything |
| RPC | Goals, proactive compaction; no TUI components, `/goal edit`, `/init`, sounds, title indicator |
| Print/JSON | No interactive questions, `/goal`, `/init`, or proactive compaction |

## Configuration

The packaged `killeros` theme activates on TUI start. Compaction triggers by default at 15% tokens remaining, stored in global `killeros.json`:

```json
{
  "autoCompaction": {
    "enabled": true,
    "percentRemaining": 15
  },
  "handoffMaxTokens": 8192
}
```

`handoffMaxTokens` caps the `/handoff` summary output at 8192 tokens by default; raise it when long sessions truncate the summary.

Completion sounds are off by default; change with `/notification` in TUI mode. The tab-title indicator requires a Nerd Font.

## Development

Strict TypeScript throughout. Tests run on Node's built-in test runner:

```bash
npm ci && npm run check && npm test
```

Releases go through CI on `main`; do not push version tags manually.

## Security

Pi extensions run with your user permissions. Review the source before installing globally. Hook commands run only for projects Pi marks as trusted; check `.pi/killeros-hooks.json` before enabling project trust. KillerOS accepts that configuration only as a regular, non-linked file no larger than 64 KiB in the project's real `.pi` directory.

## License

[MIT](LICENSE) © 2026 KyrosHendrix

