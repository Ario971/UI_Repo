---
id: "jpeakai/skills"
name: "jpeakai/skills"
url: "https://github.com/jpeakai/skills"
date: "2026-09-08"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 75
momentum: 45
risk: 30
integration_effort: 44
expected_gain: 87
composite: 69
replacement_target: ""
related_articles: [{"title":"WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution","date":"2026-08-27","topic":"AI agents","similarity":0.456,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-27/07-wikiskill-compiling-agent-experience-into-persistent-knowledge-for-ski.md"},{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.375,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"},{"title":"LamsonRetail/lsr-agent-platform","date":"2026-08-18","topic":"AI dev tools","similarity":0.33,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-18/13-lamsonretail-lsr-agent-platform.md"}]
pros: ["Recently updated (2026-09-08)","MIT license","README mentions tests or validation","README includes install commands"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: false
has_tests: true
setup_steps_count: 4
dependency_files: []
install_commands: ["codex plugin marketplace add jpeakai/skills","codex plugin add jpai-essentials@jpeakai","codex plugin add jpai-delivery@jpeakai","git clone https://github.com/jpeakai/skills.git","uv run scripts/sync_plugins.py           # mirror the canonical trees into the packs","uv run scripts/sync_plugins.py --check   # CI: fail if a pack has drifted"]
risk_flags: []
status: "new"
---

# jpeakai/skills

agent skills

URL: https://github.com/jpeakai/skills

## Why it matters
You saved an article on 2026-08-27 about AI agents; this candidate overlaps with "WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-08)
+ MIT license
+ README mentions tests or validation
+ README includes install commands

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: no
Tests mentioned: yes
Setup steps estimate: 4

Dependency files:
- none detected

Install commands found:
- codex plugin marketplace add jpeakai/skills
- codex plugin add jpai-essentials@jpeakai
- codex plugin add jpai-delivery@jpeakai
- git clone https://github.com/jpeakai/skills.git
- uv run scripts/sync_plugins.py           # mirror the canonical trees into the packs
- uv run scripts/sync_plugins.py --check   # CI: fail if a pack has drifted

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# skills

Agent skills published by [jpeak.ai](https://github.com/jpeakai). Each directory under
`skills/` is one skill: a `SKILL.md` carrying YAML frontmatter, plus whatever resources,
scripts and templates it needs.

The skills are published as two installable plugins, so you take the pack you
want rather than all of them:

| Plugin | For | Contains |
|---|---|---|
| [`jpai-essentials`](plugins/jpai-essentials) | Documentation and diagrams | `librarian`, `gooddocs`, `mermaidjs-diagrams`, `richdocs`, `concise-decisions`, `agnostic` |
| [`jpai-delivery`](plugins/jpai-delivery) | Delivery planning | `plan-gap`, `concise-decisions` |

Both packs ship the `tool_coach` PreToolUse hook.

## Installing

### Claude Code

`.claude-plugin/marketplace.json` registers this repo as a
[plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces).

```
/plugin marketplace add jpeakai/skills
/plugin install jpai-essentials@jpeakai
/plugin install jpai-delivery@jpeakai
```

### Codex

`.agents/plugins/marketplace.json` is the repo-scoped marketplace Codex looks for.

```sh
codex plugin marketplace add jpeakai/skills
codex plugin add jpai-essentials@jpeakai
codex plugin add jpai-delivery@jpeakai
```

### Manually

Copy or symlink a skill into your agent's skills directory:

```sh
git clone https://github.com/jpeakai/skills.git
ln -s "$PWD/skills/librarian" ~/.claude/skills/librarian
```

This is also how to get [`cli`](skills/cli), which is not in either pack.

## The skills

| Skill | Pack | What it does |
|---|---|---|
| [`agnostic`](skills/agnostic) | essentials | Keeps documentation generic by renaming project-, client- or company-specific names to open-source-style placeholders |
| [`cli`](skills/cli) | — | Playbook for building project-local developer CLIs and the assets they generate — static HTML viewers, workflow templates, stencil diagrams, sticky PR comments |
| [`concise-decisions`](skills/concise-decisions) | both | Consolidates accumulated ambiguities into a single highest-leverage decision question, answering first from existing decision records |
| [`gooddocs`](skills/gooddocs) | essentials | Documentation quality in three modes: audit docs against the reality of the code, write or improve them, or restructure one for readability |
| [`librarian`](skills/librarian) | essentials | Repo documentation organisation: ensures the canonical document set exists and every doc lives where its content says it belongs |
| [`mermaidjs-diagrams`](skills/mermaidjs-diagrams) | essentials | Renders and analyses Mermaid diagrams in markdown, enforcing visual complexity limits and WCAG colour-contrast requirements |
| [`plan-gap`](skills/plan-gap) | delivery | Gap analysis planning: iteratively refines a tiered spec covering execution plan, gaps, decisions, and success and negative measures |
| [`richdocs`](skills/richdocs) | essentials | Rich HTML companions to markdown discovery documents, with a vendored draw.io stencil library and an injectable design-tokens brandpack |

## Layout

`skills/` and `hooks/` are canonical. The packs under `plugins/` are **generated**
from them — [`plugins/composition.json`](plugins/composition.json) declares what
each pack composes, and `scripts/sync_plugins.py` copies it in.

```
skills/          canonical skills, one directory each   ← edit here
hooks/           canonical hook, its rules and tests    ← edit here
plugins/         generated packs, two manifests each    ← never edit
  composition.json   which skills go in which pack
scripts/         sync, validate, and harness install test
```

Copies rather than symlinks, because Codex drops symlinked plugin components
and installs an empty pack without erroring. Git deduplicates the copies by
content hash, so the repository barely notices. The reasoning is in
[plugins/README.md](plugins/README.md#why-copies-and-not-symlinks).

To change a skill, edit it under `skills/` and re-sync:

```sh
uv run scripts/sync_plugins.py           # mirror the canonical trees into the packs
uv run scripts/sync_plugins.py --check   # CI: fail if a pack has drifted
uv run scripts/validate_plugins.py       # every layout invariant
./scripts/test_harness_install.sh        # install into throwaway Claude + Codex sandboxes
```

## Hooks

### tool_coach

A `PreToolUse` hook that turns a dead-end "permission denied" into a redirect:
every blocked call comes back with the thing to do instead, so the model
stops retrying near-miss variants. Structural checks (no deletions, no
scratch space outside the project) parse the command's argv; tool-choice
coaching lives in an editable rules file. Stdlib only — no install, no
virtualenv.

It is written once, in [`hooks/`](hooks), and mirrored into both packs by the
same [`hooks/hooks.json`](hooks/hooks.json): installing either plugin brings it
along. See [hooks/README.md](hooks/README.md) for what it checks and how the one
wiring file works for both Claude Code and Codex.

```sh
uv run --no-project --with pytest pytest hooks/test_tool_coach.py
```

## Licence

MIT — see [LICENSE](LICENSE).

