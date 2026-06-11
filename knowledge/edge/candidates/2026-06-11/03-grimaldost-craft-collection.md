---
id: "grimaldost/craft-collection"
name: "grimaldost/craft-collection"
url: "https://github.com/grimaldost/craft-collection"
date: "2026-06-11"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 87
momentum: 45
risk: 24
integration_effort: 40
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"Show HN: Agent-estimate, how long a coding task takes, at agent speed","date":"2026-05-21","topic":"AI agents","similarity":0.214,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-21/40-show-hn-agent-estimate-how-long-a-coding-task-takes-at-agent-speed.md"},{"title":"Show HN: I Made a Claude Skill for Spec-Driven Development (SDD)","date":"2026-05-21","topic":"AI dev tools","similarity":0.202,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-21/43-show-hn-i-made-a-claude-skill-for-spec-driven-development-sdd.md"},{"title":"Show HN: Cost.dev (YC W21) – making agents cost-aware and cheaper to call","date":"2026-06-04","topic":"AI agents","similarity":0.202,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-04/09-show-hn-cost-dev-yc-w21-making-agents-cost-aware-and-cheaper-to-call.md"}]
pros: ["Recently updated (2026-06-11)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: []
install_commands: ["claude --plugin-dir ./plugins/engineering-discipline --plugin-dir ./plugins/session-workflow","uv tool run pre-commit install         # enable commit gates: ruff, validator, hygiene","uv tool run pre-commit run --all-files # run every gate now"]
risk_flags: []
status: "new"
---

# grimaldost/craft-collection

A Claude Code plugin marketplace that codifies engineering craft: disciplined Python and data-engineering practice alongside deliberate session-knowledge workflows, packaged as reusable skills.

URL: https://github.com/grimaldost/craft-collection

## Why it matters
You saved an article on 2026-05-21 about AI agents; this candidate overlaps with "Show HN: Agent-estimate, how long a coding task takes, at agent speed" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-11)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- none detected

Install commands found:
- claude --plugin-dir ./plugins/engineering-discipline --plugin-dir ./plugins/session-workflow
- uv tool run pre-commit install         # enable commit gates: ruff, validator, hygiene
- uv tool run pre-commit run --all-files # run every gate now

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# craft-collection

A Claude Code plugin marketplace with two plugins:

- **engineering-discipline** — modern Python engineering standards + stack-agnostic
  data-engineering discipline, with mechanical enforcement (ruff/uv hooks),
  runnable scripts, and a self-refreshing toolchain.
- **session-workflow** — capture session knowledge and distill it into durable
  guidance, author paste-ready hand-off briefs, convene fresh-eyes review panels,
  behaviorally evaluate skills, keep a live inventory of the installed toolkit,
  and run a tool-dogfooding feedback loop (capture + triage).

## Install

```text
/plugin marketplace add grimaldost/craft-collection
/plugin install engineering-discipline@craft-collection
/plugin install session-workflow@craft-collection
```

Local development (no marketplace needed):

```text
claude --plugin-dir ./plugins/engineering-discipline --plugin-dir ./plugins/session-workflow
```

## What's inside

**engineering-discipline** — skills `python-engineering`,
`data-engineering-discipline`, and `/refresh-stack`; scripts for scaffolding,
auditing, version-checking, schema-diffing, parity, and contract validation;
hooks for ruff-format and uv enforcement; a `stack.toml`-based freshness loop.

**session-workflow** — skills `journaling-sessions`, `consolidate-knowledge`,
`context-handoff`, `review-panel`, `evaluate-skill`, `toolkit-awareness`,
`tool-feedback`, and `feedback-triage`; a live `scan_toolkit.py` inventory; the
headless skill-eval engine in `scripts/`; an optional session-start inject hook.

## Optional hooks (all off by default)

| Behaviour | Enable with |
|-----------|-------------|
| Toolkit inventory injected at session start | `TOOLKIT_AWARENESS_INJECT=1` |
| Data pre-shipping checklist nudge on Stop | `DATAENG_CHECKLIST_NUDGE=1` |
| Allow one pip/poetry command in a uv project | `CLAUDE_ALLOW_PIP=1` |

## Versioning

Each plugin pins a semantic `version` in its `plugin.json`. **Bump it on every
release** — Claude Code only pulls an update when the version changes. Do not set
`version` in both the manifest and a marketplace entry (the manifest wins).

## Development

```text
uv tool run pre-commit install         # enable commit gates: ruff, validator, hygiene
uv tool run pre-commit run --all-files # run every gate now
python scripts/run_tests.py            # run every test_*.py (no pytest needed)
python scripts/validate_plugins.py     # structural marketplace checks (needs pyyaml)
```

Formatting and lint are governed by `ruff.toml` (100-column, single quotes). CI
(`.github/workflows/validate.yml`) enforces ruff lint + format, the structural
validator, and the full test suite on push/PR; `currency.yml` runs a monthly
toolchain drift check.

## Layout

```text
.claude-plugin/marketplace.json
plugins/
  engineering-discipline/   .claude-plugin/  skills/  hooks/  evals/
  session-workflow/         .claude-plugin/  skills/  hooks/  evals/
scripts/validate_plugins.py
```

## License

MIT

