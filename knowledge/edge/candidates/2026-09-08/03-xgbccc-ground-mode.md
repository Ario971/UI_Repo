---
id: "xgbccc/ground-mode"
name: "XGBCCC/ground-mode"
url: "https://github.com/XGBCCC/ground-mode"
date: "2026-09-08"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 75
momentum: 45
risk: 35
integration_effort: 24
expected_gain: 81
composite: 69
replacement_target: ""
related_articles: [{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.369,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"},{"title":"WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution","date":"2026-08-27","topic":"AI agents","similarity":0.312,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-27/07-wikiskill-compiling-agent-experience-into-persistent-knowledge-for-ski.md"},{"title":"LamsonRetail/lsr-agent-platform","date":"2026-08-18","topic":"AI dev tools","similarity":0.303,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-18/13-lamsonretail-lsr-agent-platform.md"}]
pros: ["Recently updated (2026-09-08)","MIT license","README includes install commands","Matches 3 saved Feed article(s)"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 58
has_ci: false
has_tests: false
setup_steps_count: 1
dependency_files: []
install_commands: ["npx skills add XGBCCC/ground-mode -g --skill '*' -a grok -a claude-code -a cursor -a github-copilot -a codex -y"]
risk_flags: []
status: "new"
---

# XGBCCC/ground-mode

Personal agent workflow skill

URL: https://github.com/XGBCCC/ground-mode

## Why it matters
You saved an article on 2026-08-10 about AI agents; this candidate overlaps with "Show HN: Keen Code – an agentic-engineered coding agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-08)
+ MIT license
+ README includes install commands
+ Matches 3 saved Feed article(s)

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 58/100
CI detected: no
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- npx skills add XGBCCC/ground-mode -g --skill '*' -a grok -a claude-code -a cursor -a github-copilot -a codex -y

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# ground-mode

显式 `/ground-mode` 后，先判定本轮是问还是改，再点名已装的 skill。

## 安装

```sh
npx skills add XGBCCC/ground-mode -g --skill '*' -a grok -a claude-code -a cursor -a github-copilot -a codex -y
```

`/ground-mode-setup` → `/ground-mode`

| Skill | 调用 |
| --- | --- |
| [ground-mode](ground-mode/SKILL.md) | `/ground-mode` |
| [ground-mode-setup](ground-mode-setup/SKILL.md) | `/ground-mode-setup` |

术语见 [CONTEXT.md](CONTEXT.md)。

## 许可

[MIT](LICENSE)

