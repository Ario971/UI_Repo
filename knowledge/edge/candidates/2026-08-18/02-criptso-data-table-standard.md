---
id: "criptso/data-table-standard"
name: "Criptso/data-table-standard"
url: "https://github.com/Criptso/data-table-standard"
date: "2026-08-18"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 80
momentum: 45
risk: 35
integration_effort: 28
expected_gain: 87
composite: 71
replacement_target: ""
related_articles: [{"title":"Show HN: Claude-account – switch Claude Code accounts without logging in again","date":"2026-07-30","topic":"AI dev tools","similarity":0.26,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-07-30/12-show-hn-claude-account-switch-claude-code-accounts-without-logging-in-.md"},{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.236,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"},{"title":"scian0204/ClaudeCodeWorkspace","date":"2026-08-04","topic":"AI dev tools","similarity":0.206,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-04/11-scian0204-claudecodeworkspace.md"}]
pros: ["Recently updated (2026-08-18)","MIT license","README includes install commands","Matches 3 saved Feed article(s)"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 78
has_ci: false
has_tests: false
setup_steps_count: 2
dependency_files: [{"name":"package.json","summary":"deps puppeteer-core; scripts verify"}]
install_commands: ["git clone https://github.com/Criptso/data-table-standard.git ~/.claude/skills/data-table"]
risk_flags: []
status: "new"
---

# Criptso/data-table-standard

Claude Code skill: the house standard for data tables, plus a browser-driven verifier that says which rules a table actually meets

URL: https://github.com/Criptso/data-table-standard

## Why it matters
You saved an article on 2026-07-30 about AI dev tools; this candidate overlaps with "Show HN: Claude-account – switch Claude Code accounts without logging in again" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-18)
+ MIT license
+ README includes install commands
+ Matches 3 saved Feed article(s)

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 78/100
CI detected: no
Tests mentioned: no
Setup steps estimate: 2

Dependency files:
- package.json: deps puppeteer-core; scripts verify

Install commands found:
- git clone https://github.com/Criptso/data-table-standard.git ~/.claude/skills/data-table

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# data-table

A Claude Code skill: the house standard for any multi-column list, plus a verifier that drives
the table in a real browser and tells you which of the rules it actually meets.

Generated tables tend to look right and behave badly. Sorting that does nothing, a filter you
cannot clear, a header that vanishes on a dimmed monitor, a date column you can only filter by
ticking three hundred distinct days. Every rule in [`SKILL.md`](SKILL.md) is there because it was
missing at least once, and every trap in it was shipped before it was written down.

## The rules, in one breath

A high-contrast sticky header — measurably brighter than the rows it labels — with centred
uppercase titles and a thin rule between columns. Click a title to sort. A circle beside each
title opens a menu that filters by value, searches the column by the word it *prints*, and
derives a new column from this one and another; date columns swap the value list for periods and
an exact range. The first column freezes as you scroll sideways, in the same box the header
sticks to, and it follows the user's drag-and-drop order. Short values keep their width, long
text wraps and clamps at three lines with the rest on hover, and both rows and columns can be
dragged to size. Figures sit right-aligned in tabular monospace. Hiding a column takes its sort
and its filter with it, and a column the user made can be removed again. Every search box clears
in one click, and a table its filters have emptied says so. Dates always read `16 Aug 2026`.

## Install

```bash
git clone https://github.com/Criptso/data-table-standard.git ~/.claude/skills/data-table
cd ~/.claude/skills/data-table && npm install
```

Claude Code picks the skill up from `~/.claude/skills/`. It triggers itself whenever the task
involves a list with more than one column.

## Verify a table

```bash
node scripts/verify-table.mjs http://localhost:3000/your-page
node scripts/verify-table.mjs --help                 # selector overrides for non-<table> grids
TZ=America/Los_Angeles node scripts/verify-table.mjs <url>   # date rules, second time zone
```

Output is one line per check with the number it measured, and an exit code you can gate a build
on:

```
PASS    rule  1  header contrast — 12.82:1
PASS    rule  1  header brighter than a typical row — 12.82:1 vs median 6.45:1
FAIL    rule  3  clicking a title changes nothing — dead control
MISSING rule 12  no clear button appears when the box has text

35 pass · 1 fail · 1 missing · 2 skip
RESULT: NOT DONE
```

`FAIL` and `MISSING` are separate on purpose: a control built wrong and a control never built
both fail the gate, but only one of them is visible in a screenshot. `SKIP` means the rule does
not apply to this table — no date column, one row, nothing to scroll.

It needs a Chrome or Chromium binary; pass its path in a config file if it is not in the default
macOS location.

## Why a verifier and not a component

The rules are stack-agnostic; an implementation is not. A React component would not help a
vanilla table and vice versa, so the portable artefact is the check, which drives the built page
and works against anything that renders HTML.

[`reference/mechanics.md`](reference/mechanics.md) has the fiddly parts as copyable snippets: the
one scrollport both frozen planes need, freeze panes that follow column order, a clamp that
survives being inside a `<td>`, a menu that does not close itself when it re-renders, a debounced
layout write that survives the page unloading inside its own window, and the date handling that
keeps a calendar day from drifting across time zones.

MIT.

