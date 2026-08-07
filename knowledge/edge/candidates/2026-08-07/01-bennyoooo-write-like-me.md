---
id: "bennyoooo/write-like-me"
name: "Bennyoooo/write-like-me"
url: "https://github.com/Bennyoooo/write-like-me"
date: "2026-08-07"
source: "GitHub Search API"
category: "github_discovery"
kind: "claude_skill"
compatibility: 92
momentum: 52
risk: 40
integration_effort: 36
expected_gain: 87
composite: 74
replacement_target: ""
related_articles: [{"title":"Bennyoooo/write-like-me","date":"2026-08-06","topic":"AI agents","similarity":0.855,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-06/06-bennyoooo-write-like-me.md"},{"title":"Show HN: Abralo – Free, easy way to run several Claude Code agents in one window","date":"2026-07-08","topic":"AI agents","similarity":0.364,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-08/07-show-hn-abralo-free-easy-way-to-run-several-claude-code-agents-in-one-.md"},{"title":"Show HN: Claude-account – switch Claude Code accounts without logging in again","date":"2026-07-30","topic":"AI dev tools","similarity":0.342,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-07-30/12-show-hn-claude-account-switch-claude-code-accounts-without-logging-in-.md"}]
pros: ["Recently updated (2026-08-07)","MIT license","2 GitHub stars","GitHub Actions/CI detected"]
cons: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps requires, build-backend, name, version, description, readme, requires-python, license"}]
install_commands: ["git clone https://github.com/Bennyoooo/write-like-me.git","pip install -e '.[dev]'","pipx install ."]
risk_flags: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
status: "new"
---

# Bennyoooo/write-like-me

Local-first writing voice memory for Codex, Claude Code, OpenCode, Gemini CLI, Cursor, and other AI agents

URL: https://github.com/Bennyoooo/write-like-me

## Why it matters
You saved an article on 2026-08-06 about AI agents; this candidate overlaps with "Bennyoooo/write-like-me" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-07)
+ MIT license
+ 2 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- pyproject.toml: python project; deps requires, build-backend, name, version, description, readme, requires-python, license

Install commands found:
- git clone https://github.com/Bennyoooo/write-like-me.git
- pip install -e '.[dev]'
- pipx install .

Risk flags:
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Write Like Me

Local-first writing voice memory for AI agents.

Write Like Me learns from the prompts, documents, and speech transcripts you choose to capture. It builds a portable voice profile that Codex, Claude Code, OpenCode, Cursor, and other agents can use when you ask them to write in your style.

- Writing data stays local: prompts, excerpts, and profiles are never sent as telemetry
- Explicit opt-in before prompt capture starts
- Automatic secret and email redaction
- Automatic daily background updates from the GitHub `main` branch
- Anonymous PostHog product telemetry with strict event/property allowlists
- Native prompt hooks plus a portable agent skill
- Inspect, pause, export, or delete the profile at any time
- Dependency-free runtime on Python 3.9+ (works with the stock macOS `python3`)

## Quick Start

```bash
curl -fsSL https://raw.githubusercontent.com/Bennyoooo/write-like-me/main/scripts/bootstrap.py \
  | python3 - --agent auto
```

The bootstrap script clones the repository into an operating-system temporary directory, runs the installer, and removes the checkout. The runtime and copied adapters remain under `~/.write-like-me` and the relevant agent config directories, so installation does not depend on where you ran the command.

Inspect [bootstrap.py](scripts/bootstrap.py) before piping it to Python if required by your security policy. The installer discloses local prompt storage, daily background updates, and anonymous PostHog telemetry before asking for consent. Use `--yes` only when you intentionally want a non-interactive install:

```bash
curl -fsSL https://raw.githubusercontent.com/Bennyoooo/write-like-me/main/scripts/bootstrap.py \
  | python3 - --agent all --yes
```

Pin a tag or branch with `--ref <name>`. For example, append `--ref v0.2.0` after `python3 -` once that release exists.

Disable either network feature during installation:

```bash
curl -fsSL https://raw.githubusercontent.com/Bennyoooo/write-like-me/main/scripts/bootstrap.py \
  | python3 - --agent auto --no-telemetry --no-auto-update
```

Then write normally in an installed agent. Once the profile has useful evidence, ask:

```text
Rewrite this so it sounds like me.
Draft this update in my voice.
Write a concise reply using my style.
```

## Agent Support

| Agent | Capture integration | Voice integration | Install |
| --- | --- | --- | --- |
| Codex | `UserPromptSubmit` hook | Native skill/plugin | `--agent codex` |
| Claude Code | `UserPromptSubmit` hook | Native skill/plugin | `--agent claude` |
| OpenCode | `chat.message` plugin hook | Native skill | `--agent opencode` |
| Cursor | `beforeSubmitPrompt` hook | Native skill | `--agent cursor` |
| Other agents | Manual or external hook | Portable instructions | See [Other agents](#other-agents) |

The Codex CLI asks you to review and trust a new command hook. Run `/hooks` after installation and approve the Write Like Me hook. Other agents may show a similar trust prompt.

Pass the listed option to the Quick Start command. Run the installer again to upgrade the runtime and refresh adapters. Existing Cursor hooks are preserved.

## Build A Better Profile

Short coding prompts are weak evidence for prose. Import representative writing for better results:

```bash
~/.write-like-me/runtime/bin/wlm learn essay.txt emails.txt
~/.write-like-me/runtime/bin/wlm learn --channel spoken meeting-transcript.txt
```

Transcripts teach spoken phrasing; Write Like Me does not record a microphone or transcribe audio. Only text passed to `wlm` or a configured prompt hook is captured.

## CLI

The installer keeps the isolated runtime at `~/.write-like-me/runtime` and creates a stable `wlm` command in a user-owned directory already on `PATH`. If no suitable directory exists, it uses `~/.local/bin` and updates the active shell profile; open a new shell after installation in that fallback case.

```bash
wlm status                 # capture state, sample count, and data path
wlm profile                # human-readable analysis
wlm profile --json         # machine-readable metrics
wlm context                # instructions and redacted excerpts for an agent
wlm capture "sample text"  # add one sample manually
wlm learn file.txt         # learn from a document
wlm pause                  # stop new capture
wlm resume                 # resume capture
wlm update                 # check and install an update now
wlm auto-update status     # inspect automatic update state
wlm auto-update off        # disable background updates
wlm telemetry status       # inspect anonymous telemetry state
wlm telemetry off          # disable PostHog telemetry
wlm export profile.json    # export redacted samples and metrics
wlm restore profile.json   # restore an exported profile
wlm forget --yes           # delete every learned sample
```

Set `WLM_HOME` to move all state, or `XDG_STATE_HOME` to use an XDG state directory.

## How It Works

1. A native hook receives the submitted user prompt and passes JSON to `wlm hook`.
2. The capture pipeline ignores short, duplicate, and code-dominant samples, then redacts common credentials and emails.
3. Samples are stored in a private SQLite database with bounded retention.
4. `wlm context` measures sentence rhythm, paragraph density, punctuation, contractions, vocabulary, phrases, openers, and pronoun use.
5. The agent skill applies those tendencies and a few bounded redacted excerpts when the user requests voice-matched writing.
6. Prompt hooks schedule a detached update check at most once every 24 hours.
7. Allowed anonymous product events are queued locally and sent to PostHog by a detached batch worker.

Analysis is deterministic and runs locally. No model is used to build the profile. The final quality still depends on the installed agent and the quality of the samples.

See [Architecture](docs/ARCHITECTURE.md), [Privacy](docs/PRIVACY.md), and [Telemetry](docs/TELEMETRY.md) for the detailed design and complete event schema.

## Other Agents

Agents that can run commands can use the project without a native adapter:

1. Install the runtime with the Quick Start command or `pipx install .` from a checkout.
2. Add [WRITE_LIKE_ME.md](adapters/universal/WRITE_LIKE_ME.md) to the agent's global instructions.
3. Send each eligible user prompt to `wlm hook --agent <agent-name>` on standard input when the agent exposes a prompt hook.

The hook command is silent, always exits successfully, and never blocks the agent loop.

## Development

```bash
git clone https://github.com/Bennyoooo/write-like-me.git
cd write-like-me
python3 -m venv .venv
. .venv/bin/activate
pip install -e '.[dev]'
pytest -q
python -m build
```

To test plugins directly from a development checkout, run `./scripts/install.sh --local --agent <agent>`. Normal installs register the GitHub marketplace and do not retain a checkout path.

Plugin manifests live under `plugins/write-like-me`; agent-specific adapters live under `adapters`. Contributions for additional agents should reuse `wlm hook` rather than implement a second profile store.

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

MIT

