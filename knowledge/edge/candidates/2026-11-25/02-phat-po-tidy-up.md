---
id: "phat-po/tidy-up"
name: "Phat-Po/tidy-up"
url: "https://github.com/Phat-Po/tidy-up"
date: "2026-11-25"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 79
momentum: 45
risk: 24
integration_effort: 32
expected_gain: 87
composite: 72
replacement_target: ""
related_articles: [{"title":"Show HN: Mimzie, an agent-neutral alternative to the Claude Suite/Claude Cowork","date":"2026-11-11","topic":"AI agents","similarity":0.265,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-11/09-show-hn-mimzie-an-agent-neutral-alternative-to-the-claude-suite-claude.md"},{"title":"I ran the same Halloween animation prompt through five coding agents on one local Qwen model","date":"2026-11-13","topic":"Local LLMs","similarity":0.226,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/Local LLMs/2026-11-13/15-i-ran-the-same-halloween-animation-prompt-through-five-coding-agents-o.md"},{"title":"Show HN: Gauge – Open-Source CLI to recursively improve your docs","date":"2026-11-04","topic":"AI agents","similarity":0.226,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-04/06-show-hn-gauge-open-source-cli-to-recursively-improve-your-docs.md"}]
pros: ["Recently updated (2026-11-25)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: []
install_commands: ["git clone https://github.com/Phat-Po/tidy-up.git","git clone https://github.com/Phat-Po/tidy-up.git ~/.claude/skills/tidy-up"]
risk_flags: []
status: "new"
---

# Phat-Po/tidy-up

A closeout skill for Claude Code and Codex CLI: a searchable known-issues book (错题本) and a decision memory that actually gets read.

URL: https://github.com/Phat-Po/tidy-up

## Why it matters
You saved an article on 2026-11-11 about AI agents; this candidate overlaps with "Show HN: Mimzie, an agent-neutral alternative to the Claude Suite/Claude Cowork" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-25)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/Phat-Po/tidy-up.git
- git clone https://github.com/Phat-Po/tidy-up.git ~/.claude/skills/tidy-up

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# tidy-up

**The closeout skill for AI-assisted work.** One skill for **Claude Code** and **Codex CLI**
that turns the end of a session into two things a human can actually use: a **known-issues
book** the next agent can search, and a **decision profile** that changes how the next decision
gets made.

> 中文版本：[README.zh-CN.md](./README.zh-CN.md)

**Fourteen worked examples, in order:**

| | | | |
|---|---|---|---|
| [1. One entry](#1-one-entry-fully-worked) | [2. The routing table](#2-the-routing-table) | [3. Recurrence](#3-recurrence-and-promoting-it-to-a-hard-rule) | [4. Shards and the guide](#4-shards-and-the-guide) |
| [5. Recall](#5-recall-before-and-after) | [6. The lookup block](#6-the-lookup-block-every-plan-carries) | [7. What counts as a decision](#7-what-counts-as-a-decision) | [8. A decision case](#8-a-decision-case) |
| [9. The decision profile](#9-the-decision-profile--the-part-that-makes-it-get-used) | [10. The closeout report](#10-the-closeout-report) | [11. With and without the book](#11-the-same-bug-with-and-without-the-book) | [12. Command reference](#12-command-reference) |
| [13. Install](#13-install) | [14. Limits](#14-limits-and-when-not-to-use-it) | | |

---

## The problem

An AI-assisted project accumulates two kinds of knowledge, and both of them die quietly.

**The lessons.** The agent hit something strange at 2 a.m., worked out why, and fixed it. By
the next session the fix is in git — but the *reasoning* is gone. The next agent re-derives it,
or worse, does it differently. A notes file does not help: after three months it is a wall of
text that nobody reads and nobody greps.

**The decisions.** "We shortened the refund window to 14 days for the outlet line." Six weeks
later somebody asks why. Was it the cost? The launch date? The platform limit? Nobody knows —
and the reasoning is not in the code either.

Both failures have the same cause: **knowledge without a retrieval path is a diary.** The
entries exist, the agent just never finds them.

## What it does

| Job | What it produces |
|---|---|
| **Known-issues book** | `docs/known-issues.md` — routed by module, stable `KI-…` ids, a keyword line on every entry, a recurrence rule, shards with a guide, and a checker that keeps the format honest. |
| **Decision capture** | A capture gate, an 18-factor checklist, an append-only private case store, and a **decision profile** whose numbered index lives in the instruction files every session already loads. |
| **Doc drift** | A spot-check of README / CLAUDE.md / AGENTS.md claims against the current code: stale commands, dead paths, "current status" that no longer holds. |
| **Working-file patrol** | What is stale, loose, or referenced by nothing: dead files in `tasks/`, stalled goal folders, orphan scripts, a status log that fell behind. |

It is not a release-verification tool, not a workspace audit, not a handoff. If you want one of
those, this skill says so instead of quietly doing more.

## The known-issues book

The book is worth nothing if the next agent cannot find the entry without reading all of it.
Everything below exists for that one reason.

### 1. One entry, fully worked

```markdown
### 2026-11-20 | [order] refund window closes before the cancel request lands

- **ID**: KI-order-003
- **Keywords**: refund window, cancel request, refund rejected, 退款期限, 取消订单
- **Symptom**: a customer cancels an order 15 days after delivery; the platform answers
  "outside the refund window" even though our listing promised 30 days.
- **Root cause**: the platform counts from the *dispatch* date, we advertise from the
  *delivery* date. Dispatch is 2-4 days earlier.
- **Fix [root fix]**: listing copy now states "30 days from delivery" and the ops sheet adds
  the dispatch date next to the refund date (commit `a1b2c3d`).
- **Next time**: when a listing promises a window, check which date the platform counts from
  before publishing it.
```

Four things to notice:

- **The heading is the symptom**, in the words a person would use — not a function name.
- **The keyword line is a retrieval surface**, not decoration. It holds the phrase the operator
  would type, the field name, and both spellings when they differ. Three to eight words.
- **Twelve lines maximum.** Detail that git can recover gets a pointer, not a copy.
- **The fix is tagged** `[root fix]` or `[workaround]` — a workaround has to say it will come
  back.

The whole format spec is in [`references/known-issues-format.md`](./references/known-issues-format.md);
a full worked book is in [`examples/known-issues.md`](./examples/known-issues.md).

### 2. The routing table

Every book opens with a table that says where each module lives. You read the table, then grep
— you never read the book end to end.

```markdown
## Index

| Module | Code | Location | Entries | Last update | Common keywords |
|---|---|---|---|---|---|
| Orders | order | this file | 3 | 2026-11-20 | refund window, cancel race, order lookup |
| Listings | listing | this file | 2 | 2026-10-14 | price edit, image upload, publish failed |
| Payments | payment | this file | 2 | 2026-11-02 | settlement delay, payout mismatch |
| Misc | misc | this file | 1 | 2026-09-30 | timezone, clock skew |
```

`Entries` and `Last update` are not maintained by hand — `ki_check.py sync` fills them in from
the actual entries, and `check` complains when they drift.

### 3. Recurrence, and promoting it to a hard rule

The same trap coming back is the single most valuable signal a book can produce. The second
recurrence means the old fix did not hold, so the fix has to change — not be re-run.

```markdown
- **Recurrence**: 2026-12-04 — the same support ticket, this time on the mobile app, where
  the state check was not ported.
```

Every `check` run prints the recurrence hotspots, even when you wrote nothing:

```
Recurrences: 1 entry carries recurrence notes (2 times in total)
  promotion candidate  KI-order-001  x2  docs/known-issues.md:42  [order] cancel and refund in the same second
  recurrence x1: KI-listing-002
```

A promotion candidate is not a rule — it is a **suggestion**: one concrete guardrail line for
your project notes, proposed for you to approve. Once the guardrail really exists, the entry
is marked `- **Promoted**: 2026-12-05 -> AGENTS.md` and the checker stops proposing it again.

### 4. Shards and the guide

A module that outgrows the index file moves to `docs/known-issues/<code>.md`. The move is
done by the tool, which verifies it is lossless in memory before it writes anything:

```bash
python3 scripts/ki_check.py split <project> order
# Moved 3 entries of [order] to docs/known-issues/order.md; the index now points there
```

A shard has no sub-headings, so once it grows it needs a map at the top:

```markdown
## Guide

- **Refund window**: KI-order-012, KI-order-009
- **Cancellation race**: KI-order-007, KI-order-004
- **Order lookup**: KI-order-002
- **Most frequent**: KI-order-011
```

### 5. Recall, before and after

The keyword line can also be read by a hook, so the right lesson reaches the agent *before* it
starts working instead of after it breaks something.

```bash
$ echo '{"prompt": "the refund window is counted from the wrong date again"}' \
    | python3 scripts/ki_recall.py
⚠ Known-issues book may have a hit (read these before you act) [project]
  KI-order-003「refund window closes before the cancel」 docs/known-issues.md:38
  KI-order-001「cancel and refund in the same second —」 docs/known-issues.md:62
```

The hook reads the current project's book by default; `--book` and `--global-book` add your
cross-project book, and `TIDY_UP_BOOK` / `TIDY_UP_GLOBAL_BOOK` do the same from the
environment. It always exits 0 — a hook must never block a prompt. Full transcript in
[`examples/recall-transcript.txt`](./examples/recall-transcript.txt).

### 6. The lookup block every plan carries

The hook is a supplement. The **reliable** path is that every plan states which lessons it
checked. It is three lines, and it is the difference between a plan that re-steps on a known
trap and one that does not.

```markdown
## Known-issues lookup

- **Keywords**: refund window, refund rejected, cancel request, 退款期限, dispatch date
- **Hits**: `KI-order-003` — the platform counts the refund window from the dispatch date
  while the listing advertised it from the delivery date; `KI-order-001` — cancel and refund in
  the same second, the refund wins
- **Effect on the plan**: step 3 has to state the date the window is counted from, because
  `KI-order-003` shows that a correct number in the wrong date still produces support tickets.
```

A plan without that block is evidence the rule was skipped — the skill says so in the
closeout report instead of reporting it as done. A worked example is in
[`examples/plan-lookup.md`](./examples/plan-lookup.md).

## The decision memory

A known-issues book answers *"what broke before"*. Decision memory answers the harder
question: *"what did we decide, on what grounds, and would we decide the same way again?"*

### 7. What counts as a decision

Most things that happen in a session are not decisions. The gate is deliberately strict: **at
least two** of these must hold.

1. There were materially different alternatives.
2. There was a non-trivial trade-off or risk.
3. The consequences reach beyond the current task.
4. It produces a reusable change condition or evidence pattern.

Routing, an ordinary "go ahead", a visual preference, an interval somebody picked — that is
task history, not decision memory. **A session may legitimately yield zero cases**, and that is
a normal outcome, not a failure.

### 8. A decision case

One JSON object per decision, with the factors that were actually weighed — and a basis label
on each one, so an inference is never mistaken for a quote.

```json
{
  "kind": "case",
  "id": "20261120-refund-window-policy",
  "title": "Refund window shortened to 14 days for the outlet line",
  "observed_at": "2026-11-20",
  "privacy": "business",
  "keywords": ["refund window", "returns policy", "outlet line", "退款期限"],
  "status": "recorded",
  "factors": {
    "purpose": {
      "value": "Cut return handling cost without letting complaints rise",
      "basis": "explicit",
      "source": "session-2026-11-20-a turn 12",
      "user_quote": "we want 14 days for the outlet line, the main line stays at 30"
    },
    "options": {
      "value": "14 days on the outlet line only / 30 days everywhere / keep 14 everywhere",
      "basis": "fact",
      "source": "session-2026-11-20-a turn 14"
    },
    "risk": {
      "value": "Unknown: what a shorter window does to the outlet review score",
      "basis": "unknown"
    },
    "outcome": {
      "value": "Not observed yet - the outlet line has not launched yet",
      "basis": "unknown"
    },
    "change_conditions": {
      "value": "Revisit if the outlet complaint rate exceeds 3%, or if the platform allows a per-line window",
      "basis": "explicit",
      "source": "session-2026-11-20-a turn 18",
      "user_quote": "if complaints go over 3% we go back to 30 days"
    }
  }
}
```

The full checklist has **18 factor categories** — context, purpose, options, evidence,
constraints, resources, benefit, risk, timing, tradeoffs, intuition, social, emotion,
physical_state, process, outcome, change_conditions. They are listed in
[`references/decision-memory.md`](./references/decision-memory.md); a complete case is in
[`examples/decision-case.json`](./examples/decision-case.json).

### 9. The decision profile — the part that makes it get used

Here is the finding that shaped this design: **a decision store with no read path is a
diary.** Writing is a fixed step, so it grows. Reading is one sentence of advice with no
landing point, so as the store grows it gets skipped. The fix is not "write more" — it is to
give the memory a **fixed read path**: a short profile, one section per principle, whose
numbered index sits in the instruction files that every session already loads.

```markdown
### 1. A promise with a number in it needs one agreed start date

**Principle**: Any window, delay or threshold that gets promised to a customer must name the
date it is counted from, and that date has to be the same one the platform counts from.

**Actual practice**

- 2026-11-20: the outlet refund window was set from the platform's dispatch date while the
  listing promised delivery date — both numbers were correct, they were not the same number
  (`20261120-refund-window-policy`)

**Exceptions**: none found yet.

**Status**: candidate — one case so far; a second case from another session would promote it.

**Review trigger**: revisit when a third numeric promise in this area turns out to be measured
differently from the way it is advertised.
```

The index that goes into `~/.claude/CLAUDE.md` and `~/.codex/AGENTS.md`:

```markdown
## Decision Principles (Index)

1. A promise with a number in it needs one agreed start date
2. A success response is not a confirmation
3. A check that lives in one place only is a check that will be missed
```

`decision_profile_check.py` fails when the index and the profile disagree, when a section has
no status or no review trigger, or when a section cites a case that does not exist. The profile
is edited **one section at a time** — a closeout updates the section the session touched, and
reports "profile unchanged" when nothing changed. See
[`references/decision-profile-format.md`](./references/decision-profile-format.md) and
[`examples/decision-profile.md`](./examples/decision-profile.md).

### 10. The closeout report

Plain language first — what changed, whether it works, what is still open. The technical
detail goes below the line, where it can be skipped.

```markdown
## Closeout done

**Known-issues book**: added one entry — the refund window is counted from the dispatch date
while the listing promised it from the delivery date (`KI-order-003`). The cancellation race
entry was recorded as a recurrence instead of a new entry (`KI-order-001`).

**Book structure**: the routing table now lists four modules and the counts match the entries.
The check passes with no errors and no warnings.

**Recurrence hotspots**: one promotion candidate — `KI-order-001` has now come back twice, and
the old fix did not hold on the mobile app. Suggested guardrail for the project notes: "before
any new action on an order, check the states it can conflict with, not just its own".

**Decisions captured**: one case — the refund window for the outlet line, 14 days on the outlet
shop only, because the platform enforces one window per shop and the outlet return rate is
twice the main line. The complaint-rate effect is still unknown.

**Decision profile**: the "agreed start date" section now cites that case. No other section
changed.

**Doc fixes**: the operations sheet still said "30 days" for every line; it now states the
window per line. The project notes described the export step as automatic, which it is not.

**Needs your confirmation**
- Promote to a project rule: `KI-order-001` (two recurrences) — the guardrail line is above.
- Deletion candidates: `old-export.py` (37 days without a commit, referenced nowhere).

**Leftovers**: the two entries written before the routing table existed are still marked as
legacy format — they need a one-line pass to add ids.
```

A complete example, with the checker output below the line, is in
[`examples/closeout-report.md`](./examples/closeout-report.md).

## Using it

### 11. The same bug, with and without the book

**Without the book.** The agent sees a price edit that returns `200` but does not change the
shop page. It tries the API again, adds a retry, reads the docs, checks the channel setting,
and finally hard-codes the second channel into the script. The fix works. The reason is now
buried in a commit message, and the next person adds a third channel.

**With the book.** The prompt says "the price did not change on the shop page". The keyword
line of `KI-listing-002` matches (`price edit`, `price not applied`, `改价没生效`). The agent
reads that entry, learns that the price field is per-channel and that the API returning `200`
is not a confirmation, and writes the fix to every channel plus a read-back. The entry stays
in the book, so the next agent gets it for free — and when it shows up again, the recurrence
line says so.

That is the whole promise: **the second occurrence costs one grep instead of one afternoon.**

### 12. Command reference

```bash
# ---- known-issues book -------------------------------------------------
python3 scripts/ki_check.py init    <project> listing:Listing image:Image [--lang en|zh]
python3 scripts/ki_check.py check   <project>     # format, order, ids, index, shard thresholds
python3 scripts/ki_check.py sync    <project>     # back-fill the index counts and dates
python3 scripts/ki_check.py next-id <project> <code>
python3 scripts/ki_check.py split   <project> <code>
python3 scripts/ki_check.py stats   <project>
python3 scripts/ki_check.py migrate <project> <mapping.json> [--apply]
python3 scripts/ki_check.py --selftest

# ---- decision memory ----------------------------------------------------
python3 scripts/decision_memory.py --root <store> search --query "<what you want to know>"
python3 scripts/decision_memory.py --root <store> put --input <private.json>
python3 scripts/decision_memory.py --root <store> check

# ---- decision profile ---------------------------------------------------
python3 scripts/decision_profile_check.py
python3 scripts/decision_profile_check.py --selftest

# ---- recall hook --------------------------------------------------------
echo '{"prompt": "your question"}' | python3 scripts/ki_recall.py --book <book>

# ---- patrol -------------------------------------------------------------
python3 scripts/tasks_patrol.py <project>
python3 scripts/patrol_all.py <parent-dir>

# ---- housekeeping -------------------------------------------------------
python3 scripts/check_readme_parity.py     # keeps README.md and README.zh-CN.md in step
bash    scripts/privacy_audit.sh            # scans this tree for anything unpublishable
```

Exit codes for `ki_check.py`: `0` ok, `1` errors present or command refused, `2` book missing
or in legacy format. Every script is stdlib-only and runs on Python 3.8+.

### 13. Install

```bash
git clone https://github.com/Phat-Po/tidy-up.git
cd tidy-up && bash scripts/install.sh
```

The installer copies the skill into whichever of the two tools is present — Claude Code
(`~/.claude/skills/tidy-up/`) and Codex CLI (`~/.codex/skills/tidy-up/`). It is a copy, not a
symlink, so it keeps working if the clone lives on an external drive. Re-run it after editing
`SKILL.md` to keep both tools in lockstep.

Claude Code only:

```bash
git clone https://github.com/Phat-Po/tidy-up.git ~/.claude/skills/tidy-up
```

If you already have a local `tidy-up` skill, this replaces it.

To wire the recall hook into Claude Code, add it to `~/.claude/settings.json`:

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          { "type": "command", "command": "python3 ~/.claude/skills/tidy-up/scripts/ki_recall.py" }
        ]
      }
    ]
  }
}
```

### 14. Limits, and when not to use it

Being straight about this saves you an afternoon.

- **The recall hook is imprecise.** It matches substrings, so "auto-open the browser" and
  "auto-rename the pane" look alike. It is built to be quiet, not complete. The plan-time
  lookup is the reliable path.
- **The hook reads the books you give it.** By default that is the current project only —
  `--book` and `--global-book` add more. It does not scan your whole workspace.
- **A book nobody writes to is not a memory.** The skill can scaffold one in the first
  trigger, but it cannot make you file entries.
- **The decision profile is hand-edited.** It is not generated from your history. A closeout
  updates one section; that is the habit that keeps it true.
- **Decision capture is local and private.** The store is `600`-permission files under
  `~/.local/share/tidy-up-memory/`. Nothing is uploaded. Retrieval is bounded and personal
  cases are excluded unless you ask for them explicitly.
- **It does not verify a release.** No staging/prod comparison, no smoke tests. That is a
  different, heavier job.
- **It does not delete anything.** Deletion candidates are proposed with reasons and wait for
  your confirmation.
- **Labels work in English and Chinese.** `**Keywords**` / `**关键词**`,
  `**Root cause**` / `**根因**`, `**Next time**` / `**以后注意**`, `[root fix]` / `【根治】`.
  `init --lang zh` scaffolds a Chinese book.

## How it works

```
session ends
     |
     v
+tidy-up ---------------------------------------------------+
|                                                          |
|  Job 1  known-issues book                                |
|          check -> graduation test -> search both books   |
|          -> write (id, keyword line, 12 lines max)        |
|          -> sync, check, split, promote candidates       |
|                                                          |
|  Job 2  decision capture                                 |
|          capture gate (2 of 4) -> 18-factor snapshot     |
|          -> private store -> profile (one section)       |
|                                                          |
|  Job 3  doc drift      README / CLAUDE.md / AGENTS.md     |
|  Job 4  patrol         tasks/, dead paths, orphans       |
|                                                          |
|  report: plain language first, technical detail below    |
+----------------------------------------------------------+
     |
     v
the next session greps the book, or the profile is already in context
```

Two properties make this work, and both were learned the hard way (the reasoning is in
[`docs/known-issues.md`](./docs/known-issues.md)):

- **Everything has a retrieval path.** The book has a routing table and keyword lines; the
  profile has an index in the instruction files. Writing without a read path produces a diary.
- **The tools refuse to let the format rot.** `check` fails on a missing id, a missing keyword
  line, a duplicated id, an entry in the wrong file, a stale routing table, an untagged fix, a
  body over twelve lines — and it prints the recurrence hotspots on every run.

## Contributing

```bash
python3 scripts/ki_check.py --selftest
python3 -I scripts/ki_recall.py --selftest
python3 scripts/check_decision_memory.py
python3 scripts/decision_profile_check.py --selftest
python3 scripts/check_readme_parity.py --selftest
bash scripts/privacy_audit.sh
```

The same commands run in CI on Python 3.8, 3.9 and 3.11.

Two rules when you add something:

- **A new script belongs in the installer's copy list in the same change that introduces it**,
  otherwise the installed copy silently stays on the old version.
- **A change to the format needs a change to the format spec** in `references/`, and to the
  self-test.

## License

MIT — see [LICENSE](./LICENSE).

