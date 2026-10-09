---
id: "glunk-works/claude-workbench"
name: "glunk-works/claude-workbench"
url: "https://github.com/glunk-works/claude-workbench"
date: "2026-10-09"
source: "awesome-claude-code"
category: "awesome_lists"
kind: "claude_skill"
compatibility: 87
momentum: 45
risk: 32
integration_effort: 28
expected_gain: 81
composite: 72
replacement_target: ""
related_articles: [{"title":"Show HN: Visually orchestrate Claude Code AI agents","date":"2026-09-23","topic":"AI agents","similarity":0.331,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-23/08-show-hn-visually-orchestrate-claude-code-ai-agents.md"},{"title":"Show HN: Self-hosted company OS, Claude Code and Codex agents in departments","date":"2026-09-09","topic":"AI agents","similarity":0.202,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-09/06-show-hn-self-hosted-company-os-claude-code-and-codex-agents-in-departm.md"}]
pros: ["Recently updated (2026-10-09)","Apache-2.0 license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No clear install command found in README"]
readme_quality: 70
has_ci: true
has_tests: true
setup_steps_count: 0
dependency_files: []
install_commands: []
risk_flags: []
status: "new"
---

# glunk-works/claude-workbench

Claude Code plugin marketplace: the way-of-working plugin (session-handoff skills, review agents, hooks, Global Conventions), parameterized per-repo by .ai/project.yml.

URL: https://github.com/glunk-works/claude-workbench

## Why it matters
You saved an article on 2026-09-23 about AI agents; this candidate overlaps with "Show HN: Visually orchestrate Claude Code AI agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-09)
+ Apache-2.0 license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 70/100
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
# claude-workbench

A [Claude Code plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces.md)
holding `way-of-working`: a portable Claude Code session-handoff protocol
(`/way-of-working:resume` → `/way-of-working:handoff` → `/way-of-working:critic-gate` → `/way-of-working:ship` → `/way-of-working:pr-checks` → `/way-of-working:archive-sprint`,
plus `/way-of-working:retro`, `/way-of-working:plan-sprint` for triaging the backlog into
milestones under `github_milestones` planning, `/way-of-working:architect-review` for a repo
that wires a fresh-session review gate, and `/way-of-working:park-sprint` /
`/way-of-working:unpark-sprint` for
setting a sprint aside mid-flight), four general-purpose review/implementation agents (`architect`, `coder`,
`security-critic`, `docs-consistency`), a `SessionStart` cursor-banner hook, and the
Global Conventions (Python, OpenTofu/IaC, Conventional Commits, branch names, the
squash-merge policy, label taxonomy, Definition of Done).

## Why

The working method for a Claude-Code-driven repo was being re-authored per repo, with no
single source of truth. This repo is that source of truth, shipped as an installable
plugin rather than a docs URL, so it can be prompt-cached and version-pinned the same way
a GitHub Actions `uses:` is. See [`docs/decisions.md`](docs/decisions.md) (`WB-D1..D4`) for
the full reasoning, and `glunk-works/bounty-infra`'s
`sprints/SW_way_of_working/sprint_plan.md` for the extraction sprint that produced it.

## The parameterization rule

Shared plugin code in `plugins/way-of-working/` — every entry except `reference/` and
`.claude-plugin/` — may **never name a repo-specific value** (a check name, a roadmap
path, a review-gate header string, an identity). If it needs one, it reads the consuming
repo's `.ai/project.yml` (`plugins/way-of-working/reference/project-schema.md`). If a
value can't be expressed there, the skill isn't portable and belongs local to that repo
instead. A repo-local override of a shared skill is a **bug report against the schema,
not a fork** — plugin skills cannot be partially overridden; a same-named local skill
shadows the whole thing.

## Using it in a repo

```json
// .claude/settings.json
{
  "extraKnownMarketplaces": {
    "claude-workbench": {
      "source": { "source": "github", "repo": "glunk-works/claude-workbench" }
    }
  },
  "enabledPlugins": {
    "way-of-working@claude-workbench": true
  }
}
```

Pin to a released tag in the marketplace source config (never `main`) and add the repo's
own `.ai/project.yml` per `reference/project-schema.md`.

## Layout

```
.claude-plugin/marketplace.json
plugins/way-of-working/
  .claude-plugin/plugin.json
  skills/     resume/ handoff/ critic-gate/ ship/ pr-checks/ archive-sprint/ retro/
              park-sprint/ unpark-sprint/ plan-sprint/ architect-review/
  agents/     architect.md coder.md security-critic.md docs-consistency.md
  bin/        cursor-drift.sh entry-anchor.sh review-gate-state.sh plan-anchor.sh
              spawn-model.sh review-base-anchor.sh review-sandbox.sh
              milestone-close-line.sh plan-gather.sh schema-complete.sh
              cursor-sync-pr.sh blocked-state.sh prune-verdict.sh review-step.sh critic-section.sh
              plan-depends.sh driver-lock.sh
              — executables, added to the Bash
              tool's PATH
  hooks/      hooks.json + ai-cursor-banner.sh
  reference/  conventions.md  workflow.md  project-schema.md
docs/decisions.md   # the WB-D* log
CHANGELOG.md        # what each tag changes — read before bumping a pin
scripts/            # the CI gates: lint, coupling, invariants
tests/              # fixtures for the plugin's bin/ scripts and for the CI gates
```

## License

Apache-2.0 — see [LICENSE](LICENSE).

