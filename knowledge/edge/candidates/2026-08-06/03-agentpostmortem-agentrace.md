---
id: "agentpostmortem/agentrace"
name: "AgentPostmortem/Agentrace"
url: "https://github.com/AgentPostmortem/Agentrace"
date: "2026-08-06"
source: "GitHub Trending"
category: "github_discovery"
kind: "agent_framework"
compatibility: 92
momentum: 45
risk: 24
integration_effort: 44
expected_gain: 77
composite: 72
replacement_target: ""
related_articles: [{"title":"Show HN: Abralo – Free, easy way to run several Claude Code agents in one window","date":"2026-07-08","topic":"AI agents","similarity":0.381,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-08/07-show-hn-abralo-free-easy-way-to-run-several-claude-code-agents-in-one-.md"},{"title":"Show HN: Claude-account – switch Claude Code accounts without logging in again","date":"2026-07-30","topic":"AI dev tools","similarity":0.302,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-07-30/12-show-hn-claude-account-switch-claude-code-accounts-without-logging-in-.md"},{"title":"scian0204/ClaudeCodeWorkspace","date":"2026-08-04","topic":"AI dev tools","similarity":0.256,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-04/11-scian0204-claudecodeworkspace.md"}]
pros: ["Recently updated (2026-08-06)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps name, version, description, requires-python, dependencies, packages, dev, agentrace"}]
install_commands: ["pip install -e \".[dev]\""]
risk_flags: []
status: "new"
---

# AgentPostmortem/Agentrace

Observability for Claude Code subagents. Reads session transcripts, flags the results you should not trust. Checks derived from real agent failures.

URL: https://github.com/AgentPostmortem/Agentrace

## Why it matters
You saved an article on 2026-07-08 about AI agents; this candidate overlaps with "Show HN: Abralo – Free, easy way to run several Claude Code agents in one window" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-06)
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
- pyproject.toml: python project; deps name, version, description, requires-python, dependencies, packages, dev, agentrace

Install commands found:
- pip install -e ".[dev]"

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# agentrace

[![ci](https://github.com/AgentPostmortem/agentrace/actions/workflows/ci.yml/badge.svg)](https://github.com/AgentPostmortem/agentrace/actions/workflows/ci.yml)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![python](https://img.shields.io/badge/python-3.11%20%7C%203.12-blue.svg)](pyproject.toml)

Observability for Claude Code subagents. Reads session transcripts, shows what your agents
actually did, and flags the results you should not trust.

## Demo

[![agentrace demo](assets/demo-thumb.png)](assets/demo.mp4)

▶ [Watch the demo](assets/demo.mp4)

```
$ agentrace stats
 subagent runs          152
 errored                7
 total agent time       2.3 h
 slowest run            9.5 min
 prompt chars written   350,134
 result chars returned  257,721

$ agentrace check
 36/152 runs flagged, 39 findings
```

## Why

Directing agents is the easy half. The hard half is knowing which of their answers to trust.

A model is good at producing candidates and bad at knowing what counts as proof. So when you fan
out ten subagents and they each return a confident wall of text, the bottleneck is not generation,
it is verification. And you cannot verify what you cannot see: by the time ten background agents
have reported, the interesting details are buried in a transcript nobody reads.

agentrace reads the transcript for you.

No instrumentation, no wrapper, no SDK. Claude Code already writes every session to
`~/.claude/projects/<slug>/<session-id>.jsonl`, including every `Agent` delegation and its result.
The data is on disk whether or not you planned ahead, so you can analyse the run you wish you had
traced.

## The checks come from real failures

Every check exists because it actually happened, over roughly 150 research subagents across two
weeks. None of them are hypothetical.

| Check | The failure it came from |
|---|---|
| `error` | Agents dying on session limits mid-sweep. Work silently lost; nobody noticed until the report was short. |
| `absence_as_evidence` | An agent concluded a company was not hiring because an API returned an empty list. That API returns empty **with HTTP 200** for accounts that do not exist. Absence of data is not evidence of absence. |
| `gave_up` | *"I was unable to find..."* reads like an answer if you skim. It is not one. |
| `hedged_claim` | An agent said a company *"appears to be"* hiring. That became a fact by the time it reached a decision. Hedges are honest; the bug is flattening them downstream. |
| `unverified_urls` | Twenty URLs cited, none opened. That is autocomplete, not research. |
| `no_output_contract` / `thin_prompt` | The failure that is **yours, not the model's**. A task with no definition of done cannot be verified, because you never really asked the question. |
| `slow_run` | A subagent running 25 minutes is usually looping or retrying. |

Run against the session that motivated the tool, it flags **36 of 152 runs**: 7 agents that died on
session limits, 17 hedged claims, and 12 prompts where *I* forgot to specify an output shape.

That last number is the useful one. Most agent tooling assumes the model is the problem.

## These are hints, not verdicts

Every check is a heuristic over text. It tells you what to go read; it does not tell you what is
true. Severity is deliberately conservative, and `test_clean_run_produces_nothing` exists to keep
it that way: **a checker that cries wolf gets switched off, which is worse than no checker at all.**

That is not a slogan, it is maintenance. `thin_prompt` used to fire on any prompt under 200
characters. But *"Run the suite and report every failing test as node ids with its assertion
message"* is 113 characters and completely verifiable, and flagging it taught nobody anything
while spending the reader's attention. Length was never the defect. Being short **and** never
saying what done looks like is, so now both signals have to fire. On the bundled fixture that took
findings from 16 to 9 without losing a single true one.

## Usage

```bash
agentrace list                  # every subagent run: description, duration, sizes
agentrace check                 # flag suspicious results
agentrace check --severity high # only the ones that definitely matter
agentrace check --strict        # exit 1 on any high finding (CI-friendly)
agentrace show 6e7fAJ8T         # read one run in full: prompt, result, findings
agentrace stats --json          # aggregate, machine-readable
```

Point it somewhere else with `--dir` or at one file with `--file`.

## Install

```bash
pip install -e ".[dev]"
pytest -q          # 17 tests
agentrace stats    # reads ~/.claude/projects by default
```

No session of your own to look at yet? A synthetic one ships with the repo:

```bash
agentrace --file tests/fixtures/session.jsonl check
```

It is hand-written rather than a real transcript, deliberately: real sessions are full of whatever
you were actually working on, and a fixture is not the place to publish it.

Zero dependencies beyond `rich`. No API keys, no network: it reads local files.

## Design notes

**Two passes over the transcript, not one.** Results can appear before every use has been seen in
unusual orderings. A 34MB file is cheap to scan twice compared to getting the pairing subtly wrong.

**A torn final line is skipped, not fatal.** A live session being appended to yields half-written
JSON. Refusing to parse would mean you cannot analyse a run until it is over, which is exactly
when you most want to look.

**A run with no result still appears.** An agent that is still going, or that died, should show up
as such rather than vanish from the report.

## Status

Working, 17 tests, validated against a real 34MB session with 152 subagent runs.

