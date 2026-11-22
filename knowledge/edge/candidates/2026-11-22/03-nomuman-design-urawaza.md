---
id: "nomuman/design-urawaza"
name: "nomuman/design-urawaza"
url: "https://github.com/nomuman/design-urawaza"
date: "2026-11-22"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 79
momentum: 45
risk: 24
integration_effort: 28
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"Show HN: Omnara – Open-source alternative to Claude Managed Agents","date":"2026-10-21","topic":"AI agents","similarity":0.245,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-21/06-show-hn-omnara-open-source-alternative-to-claude-managed-agents.md"},{"title":"Show HN: Aq – an attention queue TUI for Claude Code","date":"2026-11-11","topic":"AI agents","similarity":0.237,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-11/07-show-hn-aq-an-attention-queue-tui-for-claude-code.md"},{"title":"Show HN: Mimzie, an agent-neutral alternative to the Claude Suite/Claude Cowork","date":"2026-11-11","topic":"AI agents","similarity":0.236,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-11/09-show-hn-mimzie-an-agent-neutral-alternative-to-the-claude-suite-claude.md"}]
pros: ["Recently updated (2026-11-22)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: []
install_commands: ["npx skills add nomuman/design-urawaza"]
risk_flags: []
status: "new"
---

# nomuman/design-urawaza

An agent skill for the last 10% of design: 3 perception rules (optical centre, colour area effect, visual weight) + 12 finishing moves for layouts that measure right but look wrong.

URL: https://github.com/nomuman/design-urawaza

## Why it matters
You saved an article on 2026-10-21 about AI agents; this candidate overlaps with "Show HN: Omnara – Open-source alternative to Claude Managed Agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-22)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- none detected

Install commands found:
- npx skills add nomuman/design-urawaza

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# design-urawaza

[![CI](https://github.com/nomuman/design-urawaza/actions/workflows/ci.yml/badge.svg)](https://github.com/nomuman/design-urawaza/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

English | [日本語版 README](README.ja.md)

**An agent skill for the last 10% of design.**
Your layout is structurally fine, the numbers are "correct" — and it
still looks off. This skill teaches an agent *why*, and what to nudge.

## The problem

Professional designers constantly make adjustments that look like
mistakes to everyone else: margins that differ top and bottom, one
brand colour shipped as two hex values, a "centred" element that is
not centred. They are not sloppy. They are correcting for how eyes
actually work — and AI agents, which design by arithmetic, never do.

## Layer 1 — Perception rules (why it looks off)

From CyberAgent designer Yuichi Hara's widely-shared talk on the
little ways of thinking behind beautiful UI:

1. **The visual centre is above the numeric centre.** The upper half
   of a space looks larger （上方距離過大の錯視）, so geometrically
   centred content looks like it sinks. Centre things slightly high
   (top:bottom ≈ 48:52) — icons in buttons, text in badges, heroes.
2. **Colour changes with area （色の面積効果）.** A colour gets
   stronger as its area grows. Small elements need a brighter,
   punchier sibling value; large fields need a calmer one. One hex
   everywhere is a bug, not consistency.
3. **Balance by visual weight （重心）, not by numbers.** Dark, dense,
   detailed content outweighs sparse content of the same size. Equal
   margins over unequal weights produce an unbalanced page that
   measures perfectly.

## Layer 2 — Finishing moves (what to do when it still feels off)

From NOGUCHI DESIGN's "裏技集" — twelve small moves, organised in
this skill as **symptom → move**, with an order of operations:

- **Subtract first** (fixes most designs): cut colours to 1–2, cut
  fonts, remove lines, add whitespace
- **Stabilise & structure**: solid band at the bottom, solid band to
  split sections, sharpen the main subject over the sub-message
- **Break the pattern once**: one shape, or one element deliberately
  offset （ハズし）
- **Accent last**: background image, an in-palette gradient,
  decorative English (real words, related to the subject)

Guardrails: at most 2–3 moves per design; check after each one; the
subject's own world beats any generic trick.

## Install

```
npx skills add nomuman/design-urawaza
```

or copy `skills/design-urawaza/` into your agent's skills directory
(Claude Code, Codex, Cursor, and other skills-compatible agents).

## Worked examples

`examples/optical-adjustments.md` — the sinking play button, one
green at two sizes, the hero that measures centred but looks
left-heavy, and the badge text that sits low. Each with the fix and
the numbers.

## Pairs well with

- [punchline-first](https://github.com/nomuman/punchline-first) —
  content structure (one punchline, details to the supplement, scored
  reader loop) plus a design gate against the generic AI look. This
  skill is the fine-adjustment layer that gate points to.

## Sources & credit

This skill is a curated distillation with an editorial layer
(symptom mapping, ordering, checks, guardrails), not a copy of the
originals:

- Yuichi Hara (CyberAgent), 「美しいUIを作るためにデザイナーが意識
  している ちょっとした考え方」, Speaker Deck —
  https://speakerdeck.com/yuichi_hara7/mei-siiuiwozuo-rutameni-dezainagayi-shi-siteiru-tiyotutositakao-efang
- @mai_designlabo (NOGUCHI DESIGN), 「デザインがしっくりこないときに
  試す裏技集」 — https://x.com/mai_designlabo/status/2124148025488757089

## License

MIT

