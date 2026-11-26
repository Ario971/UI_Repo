---
id: "qyqj/serena-pool"
name: "QyQj/serena-pool"
url: "https://github.com/QyQj/serena-pool"
date: "2026-11-26"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 85
momentum: 45
risk: 32
integration_effort: 52
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"Show HN: Mantis – AI agents browse 36% faster than with Playwright MCP","date":"2026-11-06","topic":"AI agents","similarity":0.277,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-06/06-show-hn-mantis-ai-agents-browse-36-faster-than-with-playwright-mcp.md"},{"title":"Show HN: Memro – Persistent Memory for Claude Code, Cursor and Codex","date":"2026-11-14","topic":"AI agents","similarity":0.243,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-14/06-show-hn-memro-persistent-memory-for-claude-code-cursor-and-codex.md"},{"title":"When Tool Names Are Not Identities: Measuring Provider Misbinding in MCP-Based AI Agents","date":"2026-11-16","topic":"AI agents","similarity":0.239,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-11-16/07-when-tool-names-are-not-identities-measuring-provider-misbinding-in-mc.md"}]
pros: ["Recently updated (2026-11-26)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: []
install_commands: ["claude mcp add --transport stdio --scope user"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# QyQj/serena-pool

Share local Serena REPL workers across MCP clients.

URL: https://github.com/QyQj/serena-pool

## Why it matters
You saved an article on 2026-11-06 about AI agents; this candidate overlaps with "Show HN: Mantis – AI agents browse 36% faster than with Playwright MCP" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-26)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- none detected

Install commands found:
- claude mcp add --transport stdio --scope user

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Serena Pool

**English** | [简体中文](https://github.com/QyQj/serena-pool/blob/main/README.zh-CN.md)

Serena Pool lets multiple local MCP clients and coding agents share [Serena](https://github.com/oraios/serena) processes on the same machine. It runs at most one Serena process per project or Git worktree directory, gives each caller an isolated Python REPL session, exposes a `stdio` MCP transport, and includes an independent local Web dashboard for inspecting workers and leases. Supports Windows, Linux, and macOS.

## Features

- **One worker per checkout / worktree**: Resolves `workdir` to its canonical physical path (including symlinks and junctions), so clients targeting the same repository reuse one warm Serena and language server process while separate Git worktrees run concurrently.
- **Isolated REPL sessions (`leases`)**: Every `acquire(workdir)` opens a separate Serena REPL session with a private `instance_id`, keeping Python variables isolated per agent without duplicating language servers. Variables persist for the lifetime of the lease even if other agents repeatedly acquire and release the same worker.
- **Serialized per-worker execution**: Calls targeting the same directory are queued and executed sequentially through a per-worker gate, preventing concurrent REPL or LSP state collisions.
- **Shared `stdio` pool**. Each client has its own bridge to the shared core over a local named pipe.
- **Setup for 7 clients**: `serena-pool setup` can install the companion skill, register the MCP server, or print stdio MCP JSON for a gateway such as Moor.
- **Local Web dashboard**: Monitor worker status, PIDs, queues, errors, and leases at `http://127.0.0.1:32980/`, release stale leases, and recycle idle workers. On Windows, open the dashboard from the notification area.
- **Process-tree cleanup**: Contains spawned Serena and language server processes in a Windows Job Object (`KILL_ON_JOB_CLOSE`) on Windows or a dedicated POSIX process group with a parent-watching launcher on Linux and macOS.

## How It Works

```text
MCP client ── stdio ── Bridge ── MCP pipe ──┐
                                           ├── Core ── Serena workers
Browser ── HTTP ── Dashboard ── Admin pipe ──┘
```

1. **On-demand core**. A `serena-pool mcp` bridge connects to a same-user named pipe and starts the core if needed. The selected dashboard port identifies the pool. An operating-system mutex elects one core per user and port. The core uses named pipes for both MCP and dashboard operations.
2. **Per-directory workers**. The core starts one Serena REPL worker per project or Git worktree and opens a separate REPL session for each lease.
3. **Independent dashboard**. When enabled, the core starts a separate ASP.NET Core dashboard process. That process alone binds the configured loopback TCP port. The dashboard reads state and runs management operations over its own named pipe. Restarting it preserves workers, active calls, leases, and call history in the core.
4. **Automatic recycling and shutdown**. `Pool__LeaseTimeout` expires inactive leases and pauses during queued or running calls. `Pool__IdleTimeout` recycles workers with no leases or pending calls. When no stdio clients or workers remain, the core exits on its 15-second idle check. The automatically started dashboard exits with it.

## Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0) or newer (includes the ASP.NET Core 10 runtime).
- [Serena](https://github.com/oraios/serena) with REPL interface support (`--agent-interface repl`, exposing `initial_instructions` and `serena_repl`).
- Serena Pool reads the required session parameter from the `serena_repl` schema at worker startup. Serena 2.0.0 declares `session_id` and Serena 2.1.0 declares `session`. MCP clients pass the Pool lease as `instance_id`.
- Install `serena` (`serena.exe` on Windows) to register or export MCP configuration. `setup` checks `PATH` and user installation directories, or accepts `Pool__Executable` as an explicit executable path or containing directory.

## Installation & Quick Setup

Run the stable package from [NuGet](https://www.nuget.org/packages/SerenaPool) directly with `dnx` or `dotnet tool exec` (the example below configures Codex):

```sh
dnx SerenaPool -- setup codex
```

Or with `dotnet tool exec`:

```sh
dotnet tool exec SerenaPool -- setup codex
```

You can also install it as a global .NET tool and run `serena-pool` directly:

```sh
dotnet tool install --global SerenaPool
serena-pool setup codex
```

> [!NOTE]
> When running `dotnet tool exec` interactively on .NET 11 or newer SDKs, pass `--yes` before `--` to skip the confirmation prompt. Inside generated MCP client configs, `serena-pool setup` automatically includes `--yes` when it detects .NET 11+.

### Upgrading

To upgrade from an earlier version, run `setup` from `0.3.0` for each configured client. For Codex:

```sh
dotnet tool exec SerenaPool@0.3.0 -- setup codex
```

Include all installed clients that share the same skill directory in the same command, for example `setup codex cursor`. If you prefer using the global command, first run `dotnet tool update --global SerenaPool --version 0.3.0`, then run `serena-pool setup codex`.

Release active leases and close clients connected to the old shared pool. After the old background process exits, start a new client session. Updating the installed command alone does not change the pinned client configurations. Migrate clients configured with an HTTP `/mcp` URL to stdio.

### Setup Options

Run `serena-pool setup` in a terminal to choose an action. For installation, select clients from the list or pass one or more IDs on the command line.

| Command | Action |
| --- | --- |
| `serena-pool setup codex` | Install the skill and register MCP in Codex. |
| `serena-pool setup --skill-only codex` | Install the Codex skill. Requires only the Serena Pool tool. |
| `serena-pool setup --mcp-only codex` | Register or update the Codex MCP entry. |
| `serena-pool setup --mcp-json` | Print an importable `mcpServers` JSON document to stdout with the pinned package version and absolute executable paths. Writes no setup files. |

To let Moor manage Serena Pool, install the skill with `setup --skill-only codex` and paste the output of `setup --mcp-json` into Moor under **Servers → Import JSON**. Connect Codex to Moor's MCP endpoint. [Moor setup guide](https://github.com/varandrew/moor#quickstart)

### Supported Clients (`setup`)

| Client ID | MCP Registration Target | Skill Path | Notes |
| --- | --- | --- | --- |
| `codex` | `$CODEX_HOME/config.toml` (default `~/.codex/config.toml`) | `~/.agents/skills/serena-pool/SKILL.md` | Writes `[mcp_servers.serena-pool]`. |
| `claude-code` | `$CLAUDE_CONFIG_DIR/.claude.json` (default `~/.claude.json`) | `$CLAUDE_CONFIG_DIR/skills/serena-pool/SKILL.md` (default `~/.claude/skills/serena-pool/SKILL.md`) | Runs `claude mcp add --transport stdio --scope user`; requires native `claude` on `PATH`. |
| `cursor` | `~/.cursor/mcp.json` | `~/.agents/skills/serena-pool/SKILL.md` | Writes `mcpServers.serena-pool` (`type: "stdio"`). |
| `copilot` | `$COPILOT_HOME/mcp-config.json` (default `~/.copilot/mcp-config.json`) | `~/.agents/skills/serena-pool/SKILL.md` | Shared by Copilot CLI and VS Code native Copilot. |
| `opencode` | `$OPENCODE_CONFIG`, or `$XDG_CONFIG_HOME/opencode/opencode.json[c]` (default `~/.config/opencode/opencode.json`) | `~/.agents/skills/serena-pool/SKILL.md` | Writes `mcp.serena-pool` with `type: "local"` and a `command` array. |
| `antigravity` | `~/.gemini/config/mcp_config.json` | `~/.gemini/config/skills/serena-pool/SKILL.md` | Writes `mcpServers.serena-pool`. |
| `gemini-cli` | `$GEMINI_CLI_HOME/.gemini/settings.json` (default `~/.gemini/settings.json`) | `~/.agents/skills/serena-pool/SKILL.md` | Writes `mcpServers.serena-pool`. |

`setup` checks all selected targets before modifying any files:
- Deduplicates shared skill paths (for example, `codex`, `cursor`, `copilot`, `opencode`, and `gemini-cli` share `~/.agents/skills/serena-pool/SKILL.md`) and tracks managed state in `~/.serena-pool/setup.json`.
- Preserves existing unrelated MCP entries and any custom `--urls` flags already configured for `serena-pool`. In Codex, setup adds the Serena Pool child table under the existing `[mcp_servers]` table.
- Checks for external `serena-pool` entries when registering MCP and locally edited skill files when installing skills. When doing both, setup also checks for version conflicts with other registered clients sharing the same skill path.
- Runs the selected Serena executable to check REPL support before registering MCP or printing JSON.
- Writes the absolute Serena path as `Pool__Executable` in each MCP entry and removes legacy Serena Pool credential settings from existing managed entries.
- Backs up an existing MCP configuration before modifying it. Backup filenames end in `.SerenaPool` and receive a numbered suffix before that extension if the name is taken.
- Rolls back atomically if any file write fails mid-operation.

After setup installs a skill or registers MCP, it prints the package version and the paths for the selected action. MCP registration also reports any changed managed settings, backup paths, and runtime addresses. Start a new client session to load the changes.

## Connecting & Managing

### CLI Commands

```sh
serena-pool mcp [--urls http://127.0.0.1:32980]
serena-pool dashboard [--urls http://127.0.0.1:32980]
serena-pool setup [--skill-only | --mcp-only] [harness ...]
serena-pool setup --mcp-json
serena-pool --help
```

### MCP Connection

- **stdio**: For manual client configuration, set the command to `serena-pool` (after global install) with `["mcp"]`, or use the pinned `dotnet tool exec SerenaPool@<version> -- mcp` command generated by `setup`:

  ```json
  {
    "mcpServers": {
      "serena-pool": {
        "command": "serena-pool",
        "args": ["mcp"]
      }
    }
  }
  ```

- **Custom ports**: Pass the same `--urls http://127.0.0.1:<port>` flag to `serena-pool mcp` for every stdio client that should share a pool, and pass the same address to `serena-pool dashboard` when starting it independently. `--urls` must be a loopback `http` or `https` URL with a fixed non-zero port and no path, userinfo, query string, or fragment.

### MCP Tools & REPL Workflow

Clients that display MCP tool titles show names such as `SerenaPool Acquire`. The call identifiers are listed below.

| MCP Tool | Description |
| --- | --- |
| `list()` | Read-only snapshot of workers (`number`, `workdir`, `pid`, `state`, `started`, `recycleAt`, `running`, `queued`, `lastError`) and public lease numbers (never exposes private `instance_id`s). |
| `acquire(workdir)` | Takes an existing absolute project or worktree path, ensures a worker is running for that directory, and returns `{ instance_id, workdir, instructions }`. Keep `instance_id` private per agent/session. |
| `call(instance_id, code)` | Runs Python code inside the acquired Serena REPL session. Variables persist within the lease. Use `s.lsp` for symbol operations and `s.info(...)` for API signatures. |
| `release(instance_id)` | Releases the lease and cancels any queued calls belonging to it (an already-executing call finishes). Returns `true` if released, or `false` if already gone. |

Example REPL calls inside `call(instance_id, code)`:

```python
# Inspect available Serena LSP signatures
s.info("lsp.find_symbol", "lsp.find_referencing_symbols")
```

```python
# Query symbols in the acquired checkout (variables persist across call() invocations)
symbols = s.lsp.find_symbol(
    "InstancePool",
    relative_path="src/SerenaPool/InstancePool.cs",
    include_body=False,
)
symbols
```

If a lease expires or its worker restarts, call `acquire(workdir)` again and read the returned `instructions` before making further calls (previous REPL variables are lost with the old session).

### Web Dashboard

Open [http://127.0.0.1:32980/](http://127.0.0.1:32980/) in your browser (replace the port if using `--urls`).

- **Local-only access**: Only loopback connections, `127.0.0.1`/`localhost` hosts, and matching `Origin` headers are accepted; non-local or cross-origin requests receive `403 Forbidden`.
- **No token required**: Viewing worker/lease status, releasing leases (`DELETE /api/leases/{number}`), and recycling idle or failed workers (`DELETE /api/workers/{number}`) require no token and prompt for confirmation before acting.
- **Call log and REPL usage**: `/api/calls` lists the last 200 completed REPL requests in memory with the working directory, public lease number, status, and elapsed time including queueing. The dashboard ranks the Serena facade and REPL methods actually invoked across those requests and reports how many calls provided traces. The log retains only these metadata fields and the invoked tool names and counts. Restarting the pool clears the history.
- **Live updates**: Polls worker status and call history every 2.5 seconds while the page is visible. Closing the browser tab does not stop the pool host.

The dashboard is available on Windows, macOS, and Linux. On Windows, select the Serena Pool notification-area icon to open it. Each shared pool has one notification-area icon. The dashboard uses the project icon in the browser and stays enabled by default. If the dashboard stops while the core is running, run `serena-pool dashboard` to start it again. A manually started dashboard reports HTTP 503 for management requests while the core is unavailable.

To disable the page, its management API, call tracing, and the tray icon, add `Pool__WebDashboard = "false"` to your MCP server's environment configuration. Stdio remains available and the pool leaves the TCP port free. To open the enabled page automatically when the shared pool starts, set `Pool__WebDashboardOpenOnLaunch = "true"`.

## Process Logs

The dashboard, stdio bridge, and core write separate `dashboard-*.log`, `stdio-*.log`, and `core-*.log` files. Each file name includes the UTC start time and process ID. Logs cover startup, connections, shutdown, and failures. They omit MCP messages and REPL inputs and results.

- Windows: `%LOCALAPPDATA%\SerenaPool\logs`
- Linux: `$XDG_STATE_HOME/SerenaPool/logs`, defaulting to `~/.local/state/SerenaPool/logs`
- macOS: `~/Library/Logs/SerenaPool`

## Environment Variables

Serena Pool uses the system UI language for CLI output, native diagnostics, and MCP messages. Set `SERENA_POOL_LANGUAGE` to `en` or `zh-CN` to override it. The dashboard uses the browser language and offers a switch in its header.

Set these variables in your MCP client configuration. The shared background host reads them at startup. Restart the background host after changing its configuration or upgrading the package.

| Environment Variable | Default | Description |
| --- | --- | --- |
| `SERENA_POOL_LANGUAGE` | System UI language (English for unsupported languages) | Selects English or Simplified Chinese for CLI output and pool messages. |
| `Pool__Executable` | Searches `PATH`, `UV_TOOL_BIN_DIR`, `XDG_BIN_HOME`, and `~/.local/bin` in order | Absolute path to the Serena executable or its containing directory. |
| `Pool__IdleTimeout` | `00:10:00` | How long a worker stays alive after all leases are released and no calls are running or queued (must be `> 0`). |
| `Pool__WebDashboard` | `true` | Enables the dashboard, management API, and Windows tray icon. |
| `Pool__WebDashboardOpenOnLaunch` | `false` | Opens the dashboard in the browser on shared pool startup when enabled. |
| `Pool__LeaseTimeout` | `01:00:00` | Inactivity timeout for an open lease; timer pauses while calls are queued or executing (must be `> 0`). |

## Building, Testing & Packaging from Source

Requires the [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0) (see `global.json`). Running the smoke test also requires `git`, `serena`, and `uv` on `PATH`. Serena uses `uv` to launch the Python language server for the test worktrees.

```sh
# Build the solution
dotnet build SerenaPool.slnx -c Release

# Pack the NuGet tool package (outputs to src/SerenaPool/bin/Release)
dotnet pack src/SerenaPool -c Release

# Verify the locally packed tool
dotnet tool exec SerenaPool@0.3.0 --source src/SerenaPool/bin/Release -- --help

# Run the end-to-end smoke test against a writable temporary directory
dotnet run --project tests/SerenaPool.Smoke -c Release -- "<absolute-path-to-writable-temp-dir>"
```

The smoke test creates temporary Git worktrees and an isolated `SERENA_HOME` inside the directory you pass, then verifies real Serena language servers, independent dashboard restart, `stdio` access, lease isolation, queued call cancellation, dashboard APIs, worker crash isolation, process-tree cleanup, and automatic idle shutdown.

To publish a framework-dependent single-file executable (replace `win-x64` with `linux-x64`, `linux-arm64`, `osx-x64`, or `osx-arm64`):

```sh
dotnet publish src/SerenaPool -c Release -r win-x64 --self-contained false -p:PublishSingleFile=true
```

## License

[MIT](https://github.com/QyQj/serena-pool/blob/main/LICENSE)

