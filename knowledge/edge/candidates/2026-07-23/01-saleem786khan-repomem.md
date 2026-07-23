---
id: "saleem786khan/repomem"
name: "saleem786khan/repomem"
url: "https://github.com/saleem786khan/repomem"
date: "2026-07-23"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 88
momentum: 45
risk: 30
integration_effort: 64
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"Show HN: Abralo – Free, easy way to run several Claude Code agents in one window","date":"2026-07-08","topic":"AI agents","similarity":0.325,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-08/07-show-hn-abralo-free-easy-way-to-run-several-claude-code-agents-in-one-.md"},{"title":"LuD1161/agentjail","date":"2026-06-23","topic":"AI dev tools","similarity":0.3,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-23/12-lud1161-agentjail.md"},{"title":"Show HN: Two-tier-memory – queryable long-term memory for AI coding agents","date":"2026-07-05","topic":"AI agents","similarity":0.238,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-05/06-show-hn-two-tier-memory-queryable-long-term-memory-for-ai-coding-agent.md"}]
pros: ["Recently updated (2026-07-23)","MIT license","README mentions tests or validation","README includes install commands"]
cons: ["Integration may take more than a quick install"]
readme_quality: 85
has_ci: false
has_tests: true
setup_steps_count: 4
dependency_files: [{"name":"package.json","summary":"deps @modelcontextprotocol/sdk, zod, @types/node, rimraf, ts-node, typescript; scripts build, dev, start, test, prepare"}]
install_commands: ["npm install -g @saleem11kh/repomem","git clone https://github.com/saleem786khan/repomem","npm install","npm run dev","git add .repomem/ && git commit","git clone"]
risk_flags: []
status: "new"
---

# saleem786khan/repomem

Git-native memory for AI coding agents. .repomem/ commits with your code, clones with your team, works with Claude Code, Cursor, Gemini CLI and more.

URL: https://github.com/saleem786khan/repomem

## Why it matters
You saved an article on 2026-07-08 about AI agents; this candidate overlaps with "Show HN: Abralo – Free, easy way to run several Claude Code agents in one window" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-23)
+ MIT license
+ README mentions tests or validation
+ README includes install commands

## Cons
- Integration may take more than a quick install

## Repository Inspection
README quality: 85/100
CI detected: no
Tests mentioned: yes
Setup steps estimate: 4

Dependency files:
- package.json: deps @modelcontextprotocol/sdk, zod, @types/node, rimraf, ts-node, typescript; scripts build, dev, start, test, prepare

Install commands found:
- npm install -g @saleem11kh/repomem
- git clone https://github.com/saleem786khan/repomem
- npm install
- npm run dev
- git add .repomem/ && git commit
- git clone

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<div align="center">

# repomem

**Git-native memory for AI coding agents.**

`.repomem/` lives in your repo. Commits with your code. Clones with your team.  
Works with Claude Code, Cursor, Gemini CLI, Codex — any MCP-compatible agent.

[![npm](https://img.shields.io/npm/v/@saleem11kh/repomem?color=7F77DD&label=npm)](https://www.npmjs.com/package/@saleem11kh/repomem)
[![license](https://img.shields.io/badge/license-MIT-1D9E75)](./LICENSE)
[![status](https://img.shields.io/badge/status-early%20development-amber)](https://github.com/saleem786khan/repomem)

</div>

---

## The problem

Every AI coding session starts from zero.

You spend the first 10–15 minutes re-explaining your folder structure, your deployment order, what your team decided last week, which patterns to use, which ones to avoid. Your teammate picks up your work and has no idea what Claude was told. You switch from Claude Code to Cursor and lose all context. You start a new session on a different machine and rediscover everything from scratch.

CLAUDE.md helps — but it's static. It doesn't capture what was done yesterday, decisions made mid-session, or work-in-progress state. claude-mem and Engram are personal — they don't sync with your team and don't travel with the repo.

**The root problem: memory lives in the tool, not in the project.**

---

## The solution

repomem puts memory where code already lives — in the git repo.

```
your-project/
└── .repomem/
    ├── decisions/     ← architectural choices + why
    ├── sessions/      ← what was done, what's next
    ├── patterns/      ← reusable conventions for this codebase
    └── issues/        ← known gotchas, do-not-repeat mistakes
```

Plain markdown files. No database. No cloud. No vendor lock-in.

`git add .repomem/ && git commit` → your whole team has the memory.  
`git clone` → new teammate inherits full project context on day one.  
Switch agents → same memory, because it's in the repo, not the tool.

---

## How it works

repomem runs as an MCP server. Your AI agent gets 4 tools:

| Tool | What it does |
|---|---|
| `mem_save` | Save a decision, pattern, issue, or session note |
| `mem_search` | Search across all memory files instantly |
| `mem_context` | Get a context packet at session start — no re-explaining |
| `mem_handoff` | Write today's session file, ready to commit |

At the start of every session, your agent calls `mem_context()` and immediately knows:
- What was worked on last session
- Key architectural decisions and why they were made
- Patterns and conventions for this specific codebase
- Known issues to avoid repeating
- What's next

---

## Quick start

```bash
# Install
npm install -g @saleem11kh/repomem

# Initialize in your project
cd your-project
repomem init

# Wire to Claude Code
repomem setup claude-code

# Wire to Cursor
repomem setup cursor

# Wire to Gemini CLI
repomem setup gemini
```

That's it. Your agent now has persistent memory that lives in your repo.

---

## Multi-repo support

Working across microservices or a multi-repo setup? repomem handles it.

```json
// repomem.config.json
{
  "project": "payments-service",
  "workspace": "../repomem-workspace",
  "linked": [
    { "repo": "../auth-service",          "relation": "depends-on" },
    { "repo": "../shared-lib",            "relation": "consumes"   },
    { "repo": "github:acme/billing-svc",  "relation": "depends-on" }
  ]
}
```

Linked repos can be **local paths** or **remote GitHub repos** (`github:owner/name`,
optionally `#ref`). For remotes, run `repomem pull` once to fetch their `.repomem/`
into a local, gitignored cache — no full clone needed. A `GITHUB_TOKEN`/`GH_TOKEN`
env var is used for private repos and higher rate limits.

When your agent calls `mem_search` with `linked=true`, repomem searches:
1. Current repo memory
2. Linked repo memory — local paths and pulled remotes (contracts, shared patterns)
3. Workspace memory (org-wide decisions)

Results are ranked (TF-IDF + recency) and labelled by source:
`[current] [linked:auth-service] [remote:billing-svc] [workspace]`

Cross-repository context that actually travels with the code — not locked in a personal tool on one machine.

---

## Compared to alternatives

| | repomem | Engram | claude-mem | CLAUDE.md |
|---|---|---|---|---|
| Git-committed | ✅ | ❌ | ❌ | ✅ |
| Team-shared on clone | ✅ | ❌ | ❌ | ✅ |
| Captures session work | ✅ | ✅ | ✅ | ❌ |
| Multi-repo support | ✅ | ❌ | ❌ | ❌ |
| Multi-agent (any MCP) | ✅ | ✅ | ❌ | ✅ |
| No cloud / no vendor | ✅ | ❌ | ✅ | ✅ |
| Plain markdown files | ✅ | ❌ | ❌ | ✅ |

---

## Roadmap

- [x] npm package claimed
- [x] `repomem init` — scaffold `.repomem/` in any project
- [x] 4 core MCP tools (`mem_save`, `mem_search`, `mem_context`, `mem_handoff`)
- [x] Claude Code wiring (`repomem setup claude-code`)
- [x] Cursor wiring
- [x] Gemini CLI / Codex wiring
- [x] Multi-repo `linked` support (local paths)
- [x] Workspace scope (cross-org shared memory repo)
- [x] `repomem sync` — export `.repomem/` to stdout for sharing
- [x] Remote linked repos (read `.repomem/` from GitHub without cloning, via `repomem pull`)
- [x] `repomem import` — import a sync bundle for airgapped environments
- [x] Smarter search ranking (recency + TF-IDF weighting)

---

## Status

**v0.1 — working.** `init`, `setup`, `status`, `sync`, `import`, `pull`, and all
four MCP tools (`mem_save`, `mem_search`, `mem_context`, `mem_handoff`) are
implemented and tested. Multi-repo search spans local `linked` paths, remote
GitHub repos (pulled into a local cache), and a shared `workspace`. Search is
ranked by TF-IDF with a recency boost.

If this solves a problem you have, **star the repo** — it helps validate that this is worth building and tells me which features to prioritise first.

Have this exact problem on your team? Open an [issue](https://github.com/saleem786khan/repomem/issues) describing your setup — I'm using real use cases to shape the v0.1 feature set.

---

## Contributing

repomem is being built in public. Contributions welcome at any stage.

```bash
git clone https://github.com/saleem786khan/repomem
cd repomem
npm install
npm run dev
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to get involved.  
Good first issues will be labelled once the scaffold is up.

---

## License

MIT — see [LICENSE](./LICENSE)

---

<div align="center">
Built by <a href="https://github.com/saleem786khan">Saleem Khan</a> — Solutions Architect with 11 years of enterprise delivery,  
tired of re-explaining the same project to Claude every single morning.
</div>

