---
id: "echovic/orca-agent"
name: "echoVic/orca-agent"
url: "https://github.com/echoVic/orca-agent"
date: "2026-08-05"
source: "GitHub Search API"
category: "github_discovery"
kind: "agent_framework"
compatibility: 90
momentum: 80
risk: 30
integration_effort: 44
expected_gain: 77
composite: 77
replacement_target: ""
related_articles: [{"title":"Show HN: ctx – Search the coding agent history already on your machine","date":"2026-07-02","topic":"AI agents","similarity":0.252,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-02/07-show-hn-ctx-search-the-coding-agent-history-already-on-your-machine.md"},{"title":"Show HN: Reverse-engineering web apps into agent tools","date":"2026-07-09","topic":"AI agents","similarity":0.252,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-09/07-show-hn-reverse-engineering-web-apps-into-agent-tools.md"},{"title":"Show HN: Mint MCP – Generate 3D assets from coding agents","date":"2026-08-04","topic":"AI agents","similarity":0.235,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-04/06-show-hn-mint-mcp-generate-3d-assets-from-coding-agents.md"}]
pros: ["Recently updated (2026-08-05)","MIT license","523 GitHub stars","GitHub Actions/CI detected"]
cons: ["README includes remote script execution pattern","README mentions credentials or API tokens"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps name, version, requires-python, dependencies, where, include"},{"name":"Cargo.toml","summary":"Rust project metadata detected"}]
install_commands: ["npm install -g @blade-ai/orca"]
risk_flags: ["README includes remote script execution pattern","README mentions credentials or API tokens"]
status: "new"
---

# echoVic/orca-agent

Orca is a DeepSeek-native coding agent.

URL: https://github.com/echoVic/orca-agent

## Why it matters
You saved an article on 2026-07-02 about AI agents; this candidate overlaps with "Show HN: ctx – Search the coding agent history already on your machine" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-05)
+ MIT license
+ 523 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- pyproject.toml: python project; deps name, version, requires-python, dependencies, where, include
- Cargo.toml: Rust project metadata detected

Install commands found:
- npm install -g @blade-ai/orca

Risk flags:
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Orca

A DeepSeek-native coding agent for your terminal.

Give Orca a task and it reads code, edits files, runs commands, verifies the
result, and keeps working until the task is done or it needs you. Use the TUI
for interactive work or `orca exec` for scripts and CI. Orca is built in Rust,
runs locally, and is MIT licensed.

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja-JP.md) · [Tiếng Việt](README.vi.md) · [한국어](README.ko-KR.md) · [Español](README.es-419.md) · [Português](README.pt-BR.md)

[Website](https://orcaagent.dev/) · [Changelog](https://orcaagent.dev/changelog/) · [Releases](https://github.com/echoVic/orca-agent/releases/latest) · [npm](https://www.npmjs.com/package/@blade-ai/orca)

## Install

```bash
npm install -g @blade-ai/orca
```

Or install the native binary directly:

```bash
curl -fsSL https://orcaagent.dev/install.sh | sh
```

On Windows PowerShell:

```powershell
irm https://orcaagent.dev/install.ps1 | iex
```

From a project directory, provision its restricted sandbox capability with:

```powershell
& ([scriptblock]::Create((irm https://orcaagent.dev/install.ps1))) -SetupSandbox
```

The npm package supports macOS, Linux, and Windows on ARM64 and x64. Prebuilt
archives are also available from [GitHub Releases](https://github.com/echoVic/orca-agent/releases/latest).

On Windows, Orca prefers PowerShell 7 and detects its standard installation
path even when it is absent from `PATH`. Restricted sessions fall back to
`cmd.exe` when PowerShell 7 is unavailable. Windows PowerShell 5.1 remains an
explicit option only for modes that do not require AppContainer isolation.
Protocol command arrays are launched as native Windows argv without shell
re-parsing; legacy string commands use the resolved shell dialect.

## Use

```bash
export DEEPSEEK_API_KEY=sk-...

orca                                      # open the TUI
orca exec "fix the failing test"          # run headlessly
orca exec --verifier "cargo test" "fix it" # verify before finishing
orca --mode=acp                           # connect an ACP client
orca --resume [SESSION_ID]                # resume a saved conversation
orca --fork SESSION_ID                    # fork a saved conversation
```

On Windows PowerShell, set the key with `$env:DEEPSEEK_API_KEY = "sk-..."`;
the `orca` commands are the same.

In the TUI, `@` searches files, skills, plugins, and MCP resources. Session
commands are `/new`, `/resume`, `/fork [name]`, `/rename [name]`, `/status`,
and `/copy [N]`. The resume picker also supports fork, rename, archive, delete,
and copying a session ID. `/history` is retired; `/clear` remains a hidden
compatibility alias for `/new`. `Ctrl+L` clears only the displayed transcript
and terminal scrollback, keeping the current conversation context. On exit,
Orca prints the exact `orca --resume <SESSION_ID>` command for the session.

Use `/plan` for read-only planning, `/goal` for a persistent objective,
`/workflows` for background work, and `/trust` to manage the current folder's
sandbox permissions.

## What it does

- Uses DeepSeek's reasoning and tool-use semantics directly, with SSE streaming,
  prefix-cache-friendly prompts, automatic context management, and retry logic.
- Reads, searches, edits, and writes code; runs shell commands; and can verify
  the result with a command you choose.
- Gates risky actions with `suggest`, sandboxed `auto-edit`, full-access
  `full-auto`, and read-only `plan` modes, plus per-folder trust.
- Saves local conversations with `--resume` for continuation and `--fork` for
  branching.
- Runs persistent goals without a fixed turn ceiling, plus subagents and
  JavaScript workflows for longer tasks that need continuation or parallel work.
- Loads project instructions, skills, plugins, custom tools, MCP tools, and MCP
  resources after the workspace is trusted.
- Exposes stable JSONL, app-server, and Agent Client Protocol (ACP) contracts
  for editors, harnesses, and CI.

Configuration priority is environment variables, CLI arguments, config files,
then defaults. Run `orca --help` or `orca exec --help` for the full command
surface. User configuration lives at `~/.orca/config.toml`; trusted projects
can also provide `.orca/config.toml`, `AGENTS.md`, rules, skills, and workflows.

DeepSeek V4 thinking is enabled explicitly. Set `reasoning_effort` to `low`,
`high`, or `max` (the default) in `config.toml`, or use
`ORCA_REASONING_EFFORT`. Both `deepseek-v4-flash` and `deepseek-v4-pro` use a
1M-token context window and allow up to 384K output tokens. Orca keeps the
Chat Completions transport and fully replays any returned `reasoning_content`
across tool turns as required by DeepSeek.

More detail:

- [Persistent Goal Mode](docs/goal-mode.md)
- [Harness and app-server contract](docs/harness-contract.md)
- [Dynamic workflow design](docs/claude-code-workflow-parity.md)
- [Production roadmap](docs/production-roadmap.md)

## Reliability

- TUI, headless, ACP, and JSONL sessions use the same runtime host for turn
  ownership, cancellation, persistence, and terminal results.
- Goal and session storage run outside the async actor loop, so a slow disk or
  busy SQLite database does not freeze unrelated controls such as cancel or
  status.
- Cancelling a foreground turn also stops the subagent task tree it owns;
  unrelated detached work is left alone.
- Session switches start the replacement before closing the current runtime.
  Rename, fork, archive, and delete commit through revision-checked and durable
  paths, and stale events from a previous attachment are ignored.
- Runtime surface and platform contracts run in CI before release artifacts are
  built for macOS, Linux, and Windows.

## Community

- QQ group: `472309526`
- [Telegram](https://t.me/+11No1w5ZbTMyZTQ1)

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before contributing. Open an issue first
for large or compatibility-sensitive changes.

- [Report a bug](https://github.com/echoVic/orca-agent/issues/new?template=bug_report.yml)
- [Request a feature](https://github.com/echoVic/orca-agent/issues/new?template=feature_request.yml)
- [Ask for help](SUPPORT.md)
- [Report a vulnerability](SECURITY.md)

## License

[MIT](LICENSE)

