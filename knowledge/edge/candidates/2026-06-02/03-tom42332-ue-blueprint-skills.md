---
id: "tom42332/ue-blueprint-skills"
name: "tom42332/ue-blueprint-skills"
url: "https://github.com/tom42332/ue-blueprint-skills"
date: "2026-06-02"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 83
momentum: 45
risk: 30
integration_effort: 28
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"linny006/awesome-agent-skills","date":"2026-06-02","topic":"AI dev tools","similarity":0.266,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-02/75-linny006-awesome-agent-skills.md"},{"title":"Show HN: I Made a Claude Skill for Spec-Driven Development (SDD)","date":"2026-05-21","topic":"AI dev tools","similarity":0.229,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-21/43-show-hn-i-made-a-claude-skill-for-spec-driven-development-sdd.md"},{"title":"linny006/skills-tracker","date":"2026-06-02","topic":"AI dev tools","similarity":0.225,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-02/77-linny006-skills-tracker.md"}]
pros: ["Recently updated (2026-06-02)","MIT license","README mentions tests or validation","README includes install commands"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: false
has_tests: true
setup_steps_count: 2
dependency_files: []
install_commands: ["git clone https://github.com/tom42332/ue-blueprint-skills.git /tmp/ue-blueprint-skills"]
risk_flags: []
status: "new"
---

# tom42332/ue-blueprint-skills

Two Claude Code skills for UE Blueprint development (UE 5.x / UE 6): a careful Blueprint developer + a clipboard-codegen for pasteable node graphs. Project-agnostic.

URL: https://github.com/tom42332/ue-blueprint-skills

## Why it matters
You saved an article on 2026-06-02 about AI dev tools; this candidate overlaps with "linny006/awesome-agent-skills" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-02)
+ MIT license
+ README mentions tests or validation
+ README includes install commands

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: no
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/tom42332/ue-blueprint-skills.git /tmp/ue-blueprint-skills

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# UE Blueprint Skills for Claude Code

Two paired [Claude Code](https://claude.com/claude-code) **skills** for Unreal Engine
**Blueprint** development — targeting UE **5.x and the upcoming UE 6**. They make Claude a careful
Blueprint-focused collaborator and let it generate copy/paste-ready Blueprint node graphs.

Both skills are **project-agnostic** — no project-specific assets, paths, or architecture baked in.
The example identifiers (`BP_Demo`, `S_DemoItem`, …) are illustrative.

## The skills

### `ue-blueprint-developer`
Claude acts as a careful UE Blueprint gameplay developer: clean architecture, step-by-step editor
workflows, naming/variable/pure-impure conventions, structural patterns, a debugging checklist, and —
importantly — guidance for **communicating Blueprint edits** when Claude works over export text but you
see a visual canvas.

### `ue-blueprint-codegen`
Claude emits **Blueprint clipboard text** — the `Begin Object Class=…K2Node_…` export you paste straight
onto a function graph (`Ctrl+V`). Grounded in a verified node-format library so it reproduces real export
structure rather than guessing. The two skills are designed to pair: *developer* covers how to build and
review; *codegen* covers how to produce pasteable graphs.

## How Blueprint codegen works (the core idea)

The UE Blueprint editor serializes copied nodes to a text format that round-trips on paste. For nodes
that reference things already in your Blueprint (variables, functions, structs), the editor reconstructs
pins from the signature on paste — so **correct references + links matter more than perfect pin specs**.
The codegen skill encodes that format and a catalog of verified node snippets.

> Project-specific references (custom struct member GUIDs, your Blueprint's generated-class path, etc.)
> must be re-derived per project from a fresh export — the skill is explicit about this. The catalog's
> example identifiers are only there to teach structure.

## Install

Clone into your Claude Code skills directory so each skill is its own folder:

```bash
git clone https://github.com/tom42332/ue-blueprint-skills.git /tmp/ue-blueprint-skills
cp -r /tmp/ue-blueprint-skills/ue-blueprint-developer ~/.claude/skills/
cp -r /tmp/ue-blueprint-skills/ue-blueprint-codegen   ~/.claude/skills/
```

On Windows the skills directory is `C:\Users\<you>\.claude\skills`. You can also clone the whole repo
and symlink the two skill folders into `~/.claude/skills`. Claude Code discovers them automatically and
activates them on UE Blueprint tasks.

## Layout

```
ue-blueprint-developer/
  SKILL.md
  references/conventions.md      # naming, member/local vars, pure/impure
  references/patterns.md         # output, loop, path-following patterns
ue-blueprint-codegen/
  SKILL.md
  references/clipboard-format.md  # the verified export-format primer
  references/node-catalog.md      # verified per-node snippets + gotchas
  references/generation-protocol.md  # manifest, validation tests, delivery model
```

`references/*` load **on demand** to keep always-on context small.

## License

MIT — see [LICENSE](LICENSE). Contributions and forks welcome.

