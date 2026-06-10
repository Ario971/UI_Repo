---
id: "ryangerardwilson/looptab"
name: "ryangerardwilson/looptab"
url: "https://github.com/ryangerardwilson/looptab"
date: "2026-06-10"
source: "GitHub Search API"
category: "github_discovery"
kind: "ai_dev_tool"
compatibility: 79
momentum: 45
risk: 24
integration_effort: 48
expected_gain: 77
composite: 68
replacement_target: ""
related_articles: [{"title":"jhwreal/wechat-article-pipeline-skill","date":"2026-05-28","topic":"AI agents","similarity":0.243,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-28/13-jhwreal-wechat-article-pipeline-skill.md"},{"title":"Show HN: Boxes.dev: ditch localhost; run Claude Code and Codex in the cloud","date":"2026-06-04","topic":"AI agents","similarity":0.23,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-04/10-show-hn-boxes-dev-ditch-localhost-run-claude-code-and-codex-in-the-clo.md"},{"title":"Show HN: Cost.dev (YC W21) – making agents cost-aware and cheaper to call","date":"2026-06-04","topic":"AI agents","similarity":0.196,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-04/09-show-hn-cost-dev-yc-w21-making-agents-cost-aware-and-cheaper-to-call.md"}]
pros: ["Recently updated (2026-06-10)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: [{"name":"go.mod","summary":"module github.com/ryangerardwilson/looptab"}]
install_commands: ["go install github.com/ryangerardwilson/looptab/cmd/looptab@latest","codex exec --color never --cd <cwd> <prompt>"]
risk_flags: []
status: "new"
---

# ryangerardwilson/looptab

Readable schedule file for Codex loops

URL: https://github.com/ryangerardwilson/looptab

## Why it matters
You saved an article on 2026-05-28 about AI agents; this candidate overlaps with "jhwreal/wechat-article-pipeline-skill" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-10)
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
- go.mod: module github.com/ryangerardwilson/looptab

Install commands found:
- go install github.com/ryangerardwilson/looptab/cmd/looptab@latest
- codex exec --color never --cd <cwd> <prompt>

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Looptab

Looptab is a readable schedule file for Codex loops.

Run `looptab` to edit `~/.config/looptab/looptab`, then let the scheduler invoke Codex from the working directories you name.

## Install

```sh
go install github.com/ryangerardwilson/looptab/cmd/looptab@latest
looptab help
```

Looptab expects the Codex CLI to be available as `codex` on `PATH`. If Codex lives somewhere else, set `CODEX_BIN`.

## File Format

The first non-comment line may set the timezone. If it is omitted, Looptab uses `UTC`.

Each active job line has one readable schedule, an optional working directory, and one quoted prompt. When the directory is omitted, Looptab runs Codex from `~`.

```text
timezone UTC

now "Run once from home when looptab loads."
now ~/Work/example "Run once from this repo when looptab loads."
hourly "Review from home once per hour."
hourly at 15 ~/Work/example "Review the repo at minute 15 every hour."
daily 11am "Review from home and fix one small obvious issue."
daily 11am ~/Work/example "Review the repo and fix one small obvious issue."
daily 11am,12pm,1pm /home/ryan/Apps/example "Run a quick maintenance pass."
weekdays 9am ~/Work/example "Plan the day and update TODOs."
weekends 5am ~/Work/example "Check quiet weekend maintenance."
mondays 5am ~/Work/example "Prepare the weekly review."
```

Supported schedules:

```text
now
hourly
hourly at <minute>
daily <time[,time...]>
weekdays <time[,time...]>
weekends <time[,time...]>
monday|mondays <time[,time...]>
tuesday|tuesdays <time[,time...]>
wednesday|wednesdays <time[,time...]>
thursday|thursdays <time[,time...]>
friday|fridays <time[,time...]>
saturday|saturdays <time[,time...]>
sunday|sundays <time[,time...]>
```

`now` runs once when the background scheduler first sees that exact job. If you edit and save the file while the scheduler is running, changed `now` jobs run once after that reload.
The background scheduler records claimed `now` job IDs in `~/.local/state/looptab/now-runs.json`, so restarting the service does not rerun unchanged `now` jobs. Use `looptab run now` to force a manual run.

Times may be written as `11am`, `9:30am`, `5pm`, `17:15`, or comma-separated lists such as `11am,12pm,1pm`.
`hourly` runs at minute `0` each hour. Use `hourly at 15` to run at minute `15` each hour.

When present, the working directory must be absolute or start with `~`. The prompt must be quoted.

## Commands

```text
looptab
  open ~/.config/looptab/looptab, then start the background scheduler when jobs exist

looptab check
  validate the loop file, timezone, working directories, and Codex binary, then print parsed job IDs

looptab run
  run the scheduler in the foreground

looptab run now
  run every now job once immediately

looptab run job <id>
  run one parsed job immediately

looptab logs
  open the formatted run history log in your editor

looptab logs print
  print the formatted run history to stdout

looptab logs job <id>
  show one job's run history and latest output tail

looptab inspect
  follow the only active Codex run's live output

looptab inspect <job-or-run-id>
  follow active output or show the latest completed output for a job or run

looptab stream
  stream live Codex output across all active loops

looptab kill <index>
  kill one active Codex loop by the index shown in `looptab status`

looptab status
  show currently running Codex loops with kill indexes

looptab status json
  print active loop state for bars and scripts

looptab status watch
  stream active loop state as JSON lines for desktop bars and scripts

looptab service install
looptab service start
looptab service stop
looptab service restart
looptab service status
looptab service remove
  manage the Linux systemd user service
```

## Logs

Looptab records every run in:

```text
~/.local/state/looptab/runs.jsonl
~/.local/state/looptab/logs/
~/.local/state/looptab/active/
```

`looptab logs` writes this summary to `~/.local/state/looptab/looptab.log` and opens it in your editor. `looptab logs print` prints the same table:

```text
Looptab runs
when                     status  duration  job       cwd                 report
2026-06-10 10:00:00 IST  ok      1m12s     a1b2c3d4  ~/Work/example      Updated README and ran tests.
2026-06-10 11:00:00 IST  failed  8s        a1b2c3d4  ~/Work/example      codex exited with status 1
```

The JSONL history is the audit trail. The per-run `.log` files contain full Codex output. While a run is active, Codex output is written to that run's log file as it arrives.

To inspect a running job:

```sh
looptab inspect
looptab inspect a1b2c3d4
```

If exactly one job is active, `looptab inspect` follows that run's live output until it finishes or you press `Ctrl-C`. With an ID, Looptab first looks for an active job or run, then falls back to the latest completed run with that job ID.

To watch all active jobs at once:

```sh
looptab stream
```

`looptab stream` waits when no loops are active. When a loop starts, it prints the latest live output for that run, prefixes streamed lines with the job ID, and keeps following all active loops until you press `Ctrl-C`.

To stop one active loop:

```sh
looptab status
looptab kill 0
```

The kill argument is the active index from `looptab status`, not the stable parsed job hash.

`looptab status json` prints live active-run state for desktop bars and scripts.
`looptab status watch` streams the same shape as compact JSON lines:

```json
{
  "running": true,
  "count": 1,
  "jobs": [
    {
      "job_id": "a1b2c3d4",
      "index": 0,
      "schedule": "daily 11am",
      "cwd_display": "~/Work/example",
      "prompt": "Review the repo.",
      "duration_millis": 42000,
      "output_path": "/home/user/.local/state/looptab/logs/20260610T043000.000000000Z-a1b2c3d4.log"
    }
  ]
}
```

## Background Service

On Linux, `looptab` installs and starts the systemd user service after you edit and save a file with jobs.

You can still manage the service directly:

```sh
looptab service install
looptab service start
looptab service restart
looptab service status
```

The service uses the installed `looptab` binary path and records runs under `~/.local/state/looptab/`.

## Safety

Looptab does not run arbitrary shell commands. It invokes Codex directly as:

```text
codex exec --color never --cd <cwd> <prompt>
```

Jobs for the same ID do not overlap. If the next scheduled time arrives while the previous run is still active, Looptab records a skipped run.

Missed times are not replayed after sleep or downtime.

