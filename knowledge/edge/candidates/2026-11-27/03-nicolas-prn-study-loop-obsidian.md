---
id: "nicolas-prn/study-loop-obsidian"
name: "Nicolas-Prn/study-loop-obsidian"
url: "https://github.com/Nicolas-Prn/study-loop-obsidian"
date: "2026-11-27"
source: "awesome-llm-agents"
category: "awesome_lists"
kind: "claude_skill"
compatibility: 79
momentum: 45
risk: 24
integration_effort: 40
expected_gain: 79
composite: 69
replacement_target: ""
related_articles: [{"title":"Show HN: Mimzie, an agent-neutral alternative to the Claude Suite/Claude Cowork","date":"2026-11-11","topic":"AI agents","similarity":0.211,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-11/09-show-hn-mimzie-an-agent-neutral-alternative-to-the-claude-suite-claude.md"}]
pros: ["Recently updated (2026-11-27)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: []
install_commands: ["git clone https://github.com/Nicolas-Prn/study-loop-obsidian.git","uv tool install graphifyy","git pull"]
risk_flags: []
status: "new"
---

# Nicolas-Prn/study-loop-obsidian

Claude skills: demanding Socratic tutor (explain → test → master, one concept at a time) with fully automatic Obsidian note-taking by a background sub-agent.

URL: https://github.com/Nicolas-Prn/study-loop-obsidian

## Why it matters
You saved an article on 2026-11-11 about AI agents; this candidate overlaps with "Show HN: Mimzie, an agent-neutral alternative to the Claude Suite/Claude Cowork" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-27)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/Nicolas-Prn/study-loop-obsidian.git
- uv tool install graphifyy
- git pull

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# study-loop-obsidian

A collection of Claude skills for studying a course or learning inside a
project, all with **fully automatic Obsidian note-taking** in the
background. They install together; pick the one that matches your goal.

| Skill | Goal | Pace |
|---|---|---|
| [`study-loop-obsidian`](#study-loop-obsidian--deep-understanding) | Understand the course in depth, line by line | Exhaustive: every concept, every definition |
| [`pareto-loop-obsidian`](#pareto-loop-obsidian--pareto-coach-for-exams-and-deliverables) | Best grade in the least time, for an **exam** or a **graded deliverable** (homework, assignment, project, report) | Pareto: the ~20% of the work that earns ~80% of the points |
| [`project-loop-obsidian`](#project-loop-obsidian--learning-inside-a-personal-project) | Move your **own project** forward and learn what it needs on the way, with no course material and no grader | Just in time: full depth for what you want to own, just enough for the rest |

All three are demanding: critical tests, no "almost right", no flattery.
They differ in what they cover and how far they go.

You never have to pick the skill yourself: whichever one Claude loads first
asks for your goal at the start of the session (unless your first message
already makes it clear) and routes you to one of four modes — **depth**
(`study-loop-obsidian`), **exam** or **deliverable** (`pareto-loop-obsidian`),
or **project** (`project-loop-obsidian`). A graded homework or project with a
deadline goes to deliverable mode by default; a personal project with no
grade goes to project mode. You can also switch mid-session.

Every session starts with a **session plan** sized to the time you have:
the tutor explains what will be covered, with a time budget per item, and
shows it in the client's progress panel (the **Progress** section in Claude
desktop). Items are ticked off live as you validate them; when you fall
behind, the plan is adjusted out loud so the session still ends on time —
by moving concepts to the next session in `study-loop-obsidian`, by
dropping the lowest-yield item in `pareto-loop-obsidian`, by shrinking the
building part to the smallest piece that runs in `project-loop-obsidian`.
Every session ends with the very first concrete action of the next one, so
restarting costs nothing.

## study-loop-obsidian — deep understanding

A **demanding Socratic tutor** that covers the course concept by concept.

```
explain a concept  →  test you (critically)  →  mastered?
        ↑                                          │
        └──── no: re-explain differently ◄─────────┤
                                                   │ yes
                                                   ▼
                     background sub-agent writes the note  →  next concept
                     (reusing the exact explanations that worked
                      + your mistakes as "pitfall" callouts)
```

- **Starts from your real level, automatically**: before a chapter or an
  assignment, the tutor checks your vault for notes on its theory. If you
  have none, it starts from the beginning of the chapter. For an
  assignment, it first explains in plain words what is asked, what the
  chapter is about, and which concept unlocks which exercise.
- **One concept at a time**, in the order of the course material (PDF,
  slides), with the course's exact formalism, intuitions and concrete
  examples.
- **A test after every concept**: new cases, trick cases, "why?". No "almost
  right", no flattery, justification required. Until it is mastered, you go
  around again from a different angle.
- **Note written once the concept is validated**: the sub-agent waits for you
  to pass the test so the note reuses exactly the explanations, analogies and
  examples that finally made it click, plus your mistakes as "pitfall"
  callouts. A catch-up check makes sure no validated concept is left without
  its note.
- **Zero note-taking friction**: the note is never discussed in the chat; the
  sub-agent writes it straight into your vault (LaTeX, callouts, wikilinks)
  and links it to the notes already there.
- **You do the work**: the tutor never writes to your project, code or repo
  (no scaffolding, no commits) and never offers to; it explains, asks,
  reviews and points you to the right resource.

## pareto-loop-obsidian — Pareto coach for exams and deliverables

A **demanding Pareto coach** for graded work, when time is short. Progress
is counted in validated output (exam skills that score, parts of the
deliverable that are done), never in hours spent. Planning is capped
(~15 min for an exam, ~5 min for a deliverable) so it never eats the
session.

Your **target** sets the bar: *pass safely* moves on once an item scores
~70% of its points with no fatal error (and drops more freely), *maximise*
requires full marks. Grading stays strict either way; the target only
decides when an item is good enough.

### Exam mode

```
intake: which exam? which latest documents?
        │
        ▼
Pareto plan: Core / If time / Dropped (+ ≥20% of the time for a mock exam)
        │
        ▼
for each item:  diagnose (exam question)  →  already scores? → next item
                        │ no
                        ▼
                teach only the gap  →  exam-style test  →  target met?
                        ↑                                     │
                        └──────────── no ◄────────────────────┤
                                                              │ yes
                                                              ▼
                              background sub-agent writes lean notes,
                              ticks the item off the plan note → next item
        │
        ▼
mock exam under real conditions  →  targeted fixes  →  final review
```

- **Intake first**: the exam's format, date, grading, allowed material and
  announced scope; the hours you actually have; your target (pass safely or
  maximise); a quick self-assessment per chapter. It asks for the **latest
  version of every course document** (slides, exercise sessions with
  solutions, past exams, announcements) and waits for your confirmation
  before planning.
- **A Pareto plan built on evidence**: each topic is scored by expected
  points per hour of study, weighing teacher announcements first, then past
  exams, exercise sessions, slide emphasis, and page count last. Topics are
  split into **Core**, **If time** and **Dropped** (each dropped topic with
  its estimated cost in points). You validate the plan; it is saved in your
  vault so the next session resumes from it.
- **Diagnose before teaching**: each item opens with an exam question. If
  you already score, nothing is explained and you move on.
- **Exam-level teaching**: the course's exact formalism and notation, the
  method that solves the question type, the classic traps. Derivations only
  if the exam asks for them.
- **Timeboxed**: every item has a time budget; when it is blown, the coach
  says so and re-plans with you.
- **Lean notes**: one note per exam-relevant result, one method note per
  question type, definition notes only for the terms the exam asks or you
  confused (~10-30 lines each), plus a plan note with a checklist and a
  mistake log. They stay compatible with `study-loop-obsidian`, which can
  enrich them later.

### Deliverable mode

For a graded homework, assignment, lab, project or report with a deadline:
the deliverable is the product, and learning happens **just in time**.

```
read the statement (yourself, or via Moodle)  →  5-min intake
        │
        ▼
deliverable plan: parts ranked by points per hour, Core / If time / Dropped
(+ ≥15% of the time for the final rubric check and submission)
        │
        ▼
for each part:  frame it (2-3 lines)  →  you attempt it first
                        │ blocked?
                        ▼
                teach only the blocking point (minimal example + 1 check)
                        │
                        ▼
                review like the grader  →  meets the target?  → next part
        │
        ▼
final rubric check  →  submission checklist  →  handed in
```

- **No chapter walk-through**: never starts from the first slide, never
  teaches a concept the current part does not need.
- **Anti-rabbit-hole**: stuck ~20 minutes on the same blocker → a more
  direct hint, then a workaround (simplify, partial credit, a precise
  question for the TA) and the next part.
- **Still your work**: the coach reviews, points to the line and explains
  why, but never writes your solution.
- **Plan note in the vault** with the parts as a checklist, the deadline,
  the mistake log and the next step; notes only for what was taught to
  unblock you.

## project-loop-obsidian — learning inside a personal project

A **demanding learning coach embedded in your own project** (side project,
prototype, research-style build). There is no syllabus and no grader: the
coach turns your backlog into a learning path, does the research legwork
itself, and teaches each concept **at the moment the project needs it**,
then has you apply it straight away in your own code. Progress is counted on
two scoreboards at once: the project (what runs now) and the knowledge you
own.

```
intake: the project, your learning goals, the from-scratch contract
        │
        ▼
knowledge map: backlog → concepts → Own / Use / Defer, ordered just in time
        │
        ▼
each session = one item of the backlog:
   anchor (item, "done when", 1 retrieval question)
        │
        ▼
   diagnose  →  already owned? → build
        │ no
        ▼
   research (Claude finds, ranks and cross-checks the sources)
        │
        ▼
   learn:  Own → full depth: reading pack, you derive the key step,
                  critical test, loop until mastery
           Use → just the blocking point, one check
        │
        ▼
   build from scratch  →  verify like a scientist  →  validated?
        │                                               │ yes
        ▼                                               ▼
   wrap-up: a visible win, the next action    background sub-agent writes
                                              the notes, updates the plan
```

- **Depth chosen per concept**: **Own** (what the project exists to teach
  you, e.g. the mathematics of your model) is validated by four proofs —
  teach-back, hand derivation of the key step, a from-scratch
  implementation that passes verification, and a correct prediction on a
  new case. **Use** (tools, frameworks, plumbing) only has to work and be
  explainable in one sentence. **Defer** is logged as knowledge debt with a
  repay-by date.
- **Research protocol**: your own notes first, then a ranked search
  (textbooks and lecture notes, surveys, original papers, official docs,
  blogs, forums last), every formula cross-checked in two sources, one
  **project notation** that every source is mapped onto, and a short
  **reading pack** (one source, exact pages, guiding questions) for what you
  want to own.
- **The from-scratch contract**: in the parts you decided to build by hand,
  libraries only appear as oracles in your tests.
- **Verify like a scientist**: oracle comparison, simulate-then-recover,
  invariants, convergence checks, predict-then-run, plots.
- **Built for months, not one exam**: a retrieval question at every session
  start, a teach-back checkpoint at the end of each epic, a knowledge-debt
  log, one planned deep dive per sprint at most, a visible win every
  session.
- **Notes**: full-rigour notes for Own concepts (your derivation, the
  verification, the path of your implementation), lean notes for Use
  concepts, one note per source, a project notation note, and a learning
  plan note with the knowledge map, the next step, the knowledge debt and
  the open questions. Notes belong to **topic MOCs** (broad themes such as
  "Stochastic processes", reused when they exist, created at your vault's
  granularity when they do not), never to the project: the project page in
  `Maps of content/Projects/` is only an index that aggregates them.
- **Still your work**: it reads your repository and tracker, but never
  writes your code.

## How explanations are built (all skills)

All the skills share one way of explaining, so the right explanation comes
on the first try instead of the fourth:

- **The explanation ladder**: answer your exact question first, then the
  purpose, what happens on one concrete input, one everyday analogy mapped
  one-to-one, the course's formal version, how it maps onto your own code or
  exercise, and a one-sentence takeaway.
- **No branching**: at most one new technical term per message, no
  undefined placeholder, no example built on code you have never seen;
  programming skills go code-first.
- **Confusion protocol**: at the first "what do you mean?", the whole point
  is restated, with no new material; at the second signal (or when you are
  tired), a complete recap from scratch, in your own language.
- **Living learner profile**: `Inbox/Learner profile.md` in your vault
  records which explanations landed and which failed; it is read at the
  start of every session.

## Vault structure (Zettelkasten adapted to Obsidian)

All the skills share the same vault conventions. The sub-agent manages the vault's **structure**, not just notes:

```
<vault>/
├── Resources/           # all atomic notes, flat
├── Maps of content/     # MOCs — the only folder with a real tree
│   ├── Studies/<Institution>/<Year>/<Term>/COURSE NAME.md
│   ├── <topic branch>/TOPIC NAME.md   # thematic MOCs
│   └── Projects/PROJECT NAME.md       # project index, aggregation only
└── Inbox/               # temporary notes, drafts, dashboards, plans
```

- **Empty vault**: it bootstraps this structure from scratch (folders, course
  MOC, a minimal `Inbox/Home.md`).
- **Existing vault**: if the same structure already exists under other names,
  it follows yours; it creates missing branches (new year, term, course) and
  adds new MOC folders to dashboard / `.base` filters.
- **One MOC per course**, with `##` sections following the chapters; every
  new note is added to it — no orphan notes.
- **Properties**: atomic notes get `MOC`, `Source` and `Date`; MOCs get
  `cover` (left empty if no image is available).
- **Strict atomicity**: one note = one small concept, ~15-60 lines
  (`assets/example.md` is already an upper bound). A long note gets split into
  smaller linked notes.
- **Nothing is ever deleted**: removing a note means moving it to
  `<vault>/.trash/`; `.obsidian/` is never touched.

## Language

All the skills **immerse you in the course language** (for
`project-loop-obsidian`, the project language: that of its code, docs and
literature): explanations, tests, feedback and the session plan are all in
that language from the first message, whatever language you write in,
because your exam or your project lives in it.
You may answer in your own language. When you are lost on a point (second
sign of confusion, or you are tired), the tutor recaps that point in your
language, then it switches back. Notes are written in the course language by default.

## Contents

```
.claude-plugin/                      # Claude Code plugin + marketplace
skills/
├── study-loop-obsidian/
│   ├── SKILL.md                     # the skill
│   ├── scripts/update_note_list.py  # lists the note titles in the vault
│   └── assets/example.md            # style reference for notes
├── pareto-loop-obsidian/
│   ├── SKILL.md                     # the skill
│   ├── references/note-agent.md     # the lean note sub-agent's mission
│   ├── scripts/update_note_list.py  # symlink to the shared script
│   └── assets/example.md            # symlink to the shared example
└── project-loop-obsidian/
    ├── SKILL.md                     # the skill
    ├── references/note-agent.md     # the project note sub-agent's mission
    ├── scripts/update_note_list.py  # symlink to the shared script
    └── assets/example.md            # symlink to the shared example
scripts/
├── install.sh                       # symlinks every skill into ~/.claude/skills
└── package.sh                       # builds one zip per skill in dist/
```

## Installation

### Claude Code — as a plugin (recommended)

Installs every skill at once:

```
/plugin marketplace add Nicolas-Prn/study-loop-obsidian
/plugin install study-loop@study-loop
```

### Claude Code — from a clone

```bash
git clone https://github.com/Nicolas-Prn/study-loop-obsidian.git
./study-loop-obsidian/scripts/install.sh
```

The script symlinks every skill into `~/.claude/skills`, so a simple
`git pull` updates them all.

### Claude (desktop / web app)

1. Download every `.zip` from the latest
   [release](../../releases/latest) (or build them with
   `scripts/package.sh`, which writes them to `dist/`).
2. In Claude: **Settings → Capabilities → Skills → Upload skill**, once per
   zip.

## Customisation

Open each `SKILL.md` and adapt the **"Learner profile"** section (keep all
of them in sync): it drives the choice of concrete examples (DIY, finance,
medicine, video games...).

## First use

At the start of a session, give Claude:

- the **path to your Obsidian vault**;
- the location of **`note_list.txt`** (central list of note titles, a single
  file for all your courses);
- the **course folder** containing the PDFs/slides.

For `pareto-loop-obsidian`, also have ready: the exam details (date, format,
grading, allowed material), the hours you can study, and the latest course
documents, ideally with exercise solutions and past exams. For a
deliverable: the statement, the rubric if any, the deadline and the folder
of your work. With a course-platform connector (e.g. Moodle), the coach
fetches deadlines, statements and announcements itself.

For `project-loop-obsidian`, have ready: a one-sentence description of the
project and what you want to learn from it, which parts you will build from
scratch, the repository (read-only for Claude), the tracker if any (Notion,
GitHub issues...) and whether Claude may update it, and your usual session
length. Web search makes the research protocol much better; without it, the
coach works from your notes and the sources you provide.

Claude needs read/write access to these folders (in the app: connected
folders; in Claude Code: start the session from a parent folder or add
them).

> ⚠️ The sub-agent **writes directly into your vault** and may create folders
> and edit dashboard filters. It never deletes anything (removed notes go to
> `.trash/`) and never modifies `.obsidian/`, but back up / commit your vault
> before the first use.

## Graphify (optional)

If Graphify (package `graphifyy`) is installed and a graph of the vault
exists (`<vault>/graphify-out/graph.json`), the sub-agent uses it to find
related notes without opening them one by one. The skill never installs it
itself. Third-party tool, not maintained by Anthropic: test it on a small
subfolder first, building the graph consumes quota.

```bash
uv tool install graphifyy
graphify <test_subfolder> --obsidian --obsidian-dir <test_subfolder>
```

## License

MIT

