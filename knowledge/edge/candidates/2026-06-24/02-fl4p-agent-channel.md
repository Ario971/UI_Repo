---
id: "fl4p/agent-channel"
name: "fl4p/agent-channel"
url: "https://github.com/fl4p/agent-channel"
date: "2026-06-24"
source: "GitHub Trending"
category: "github_discovery"
kind: "claude_skill"
compatibility: 83
momentum: 67
risk: 43
integration_effort: 40
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"gHashTag/trios-mcp-rag","date":"2026-05-23","topic":"AI agents","similarity":0.287,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-23/53-ghashtag-trios-mcp-rag.md"},{"title":"rutulraval/ai-coding-agents-autogen","date":"2026-06-01","topic":"AI agents","similarity":0.283,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-01/59-rutulraval-ai-coding-agents-autogen.md"},{"title":"LuD1161/agentjail","date":"2026-06-23","topic":"AI dev tools","similarity":0.279,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-23/12-lud1161-agentjail.md"}]
pros: ["Recently updated (2026-06-24)","MIT license","11 GitHub stars","README includes install commands"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 93
has_ci: false
has_tests: false
setup_steps_count: 3
dependency_files: []
install_commands: ["git clone https://github.com/fl4p/agent-channel ~/agent-channel","git clone https://github.com/fl4p/agent-channel ~/agent-channel   # if not already"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# fl4p/agent-channel

File-based named channels for talking between AI coding agents (Claude Code, Codex, OpenCode) across sessions — zero-server, kqueue-backed wake-up.

URL: https://github.com/fl4p/agent-channel

## Why it matters
You saved an article on 2026-05-23 about AI agents; this candidate overlaps with "gHashTag/trios-mcp-rag" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-24)
+ MIT license
+ 11 GitHub stars
+ README includes install commands

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 93/100
CI detected: no
Tests mentioned: no
Setup steps estimate: 3

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/fl4p/agent-channel ~/agent-channel
- git clone https://github.com/fl4p/agent-channel ~/agent-channel   # if not already

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# agent-channel

Let two AI coding agents — **Claude Code**, **Codex**, or **OpenCode** — talk to
each other across separate sessions over a shared, file-based named channel.

No server, no daemon, no API keys. Agents append JSON lines to
`/tmp/claude-channels/<channel>.ndjson` and each keeps its own durable cursor.
On macOS/BSD the receive path blocks on `kqueue` filesystem events, so an agent
can *wait* for a peer message with **zero CPU and zero model inference** until
something actually arrives — then wake exactly once.

```
agent A  ──send──▶  /tmp/claude-channels/demo.ndjson  ◀──wait/listen──  agent B
   ▲                                                                       │
   └──────────────────────────── replies ─────────────────────────────────┘
```

## What's in the box

A single Python helper (`scripts/channel.py`, identical across all three) plus a
harness-specific `SKILL.md` that teaches the agent how to drive it:

| Harness      | Skill source                 |
|--------------|------------------------------|
| Claude Code  | `plugins/channel/skills/channel` (also installable as a plugin) |
| Codex        | `codex/channel`              |
| OpenCode     | `opencode/channel`           |

Two agents on different harnesses interoperate as long as they share the same
`/tmp/claude-channels/<channel>.ndjson` path.

## Install

### Claude Code (plugin — recommended)

```
/plugin marketplace add fl4p/agent-channel
/plugin install channel@agent-channel
```

Then just ask: *"go on channel demo as alice and watch it"*.

### Claude Code (plain skill, no plugin)

```bash
git clone https://github.com/fl4p/agent-channel ~/agent-channel
ln -s ~/agent-channel/plugins/channel/skills/channel ~/.claude/skills/channel
```

### Codex

```bash
git clone https://github.com/fl4p/agent-channel ~/agent-channel   # if not already
ln -s ~/agent-channel/codex/channel ~/.codex/skills/channel
```

### OpenCode

```bash
git clone https://github.com/fl4p/agent-channel ~/agent-channel   # if not already
ln -s ~/agent-channel/opencode/channel ~/.config/opencode/skills/channel
```

(Adjust the destination to your harness's skill directory if it differs.)

## Usage

Ask the agent in natural language — it invokes the skill itself:

- *"open channel `demo` as `alice` and tell me when the other agent says something"*
- *"send 'build is green' on channel demo"*
- *"watch channel demo in the background"*
- *"leave the channel"*

You never run `channel.py` by hand; the skill drives it for the agent.

## Receive primitives

- **`wait` (preferred, 0-token).** Launched as a *background* command in harnesses
  that re-invoke the agent on background-command exit (Claude Code). On macOS/BSD
  it blocks on `kqueue` filesystem events until a peer message lands, prints it,
  exits — waking the agent exactly once with no idle polling. On Linux/Windows
  (no `kqueue`) it falls back to a short bounded sleep poll: same behavior, just
  a little idle CPU instead of true event blocking.
- **`listen --timeout 30` (portable).** Foreground bounded listen for harnesses
  without background wake-up. Re-run while actively waiting.
- **`watch-start` (legacy).** A detached watcher that only logs and posts desktop
  notifications; it never wakes the agent on its own.

## Protocol

Shared transcript — append-only NDJSON, one JSON object per line:

```
/tmp/claude-channels/<channel>.ndjson
{"from":"alice","ts":1234567890,"text":"hello"}
```

Each agent tracks its position in a sibling cursor file
(`/tmp/claude-channels/<channel>.<agent>.cursor`) so nothing is seen twice and
agents never re-read their own messages.

## Platform support

Pure Python 3 standard library, no third-party deps.

| OS              | Messaging (`send`/`listen`/`wait`/`leave`) | Wake mechanism            | `watch-*` daemon | Desktop notifications |
|-----------------|--------------------------------------------|---------------------------|------------------|-----------------------|
| **macOS**       | ✅                                          | `kqueue` events (0 CPU)   | ✅               | ✅ (`osascript`)       |
| **Linux**       | ✅                                          | bounded sleep poll        | ✅               | — (no-op)             |
| **Windows**     | ✅                                          | bounded sleep poll        | ✅               | — (no-op)             |

Notes:

- The channel directory is `/tmp/claude-channels` on macOS/Linux and
  `%TEMP%\claude-channels` on Windows. Set the **`CHANNEL_DIR`** environment
  variable to override it — required only if two agents would otherwise compute
  different paths (e.g. a macOS and a Windows agent on the same host).
- Desktop notifications (`--desktop`) are macOS-only; elsewhere they silently
  no-op and the channel still works.
- An earlier MCP-broker implementation of this idea is deprecated in favor of the
  file-based approach here — no extra process, no polling, instant wake.

## License

MIT — see [LICENSE](LICENSE).

