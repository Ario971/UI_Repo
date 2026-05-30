---
id: "manthanpatelll/claude-code-starter"
name: "manthanpatelll/claude-code-starter"
url: "https://github.com/manthanpatelll/claude-code-starter"
date: "2026-05-30"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 75
momentum: 45
risk: 30
integration_effort: 32
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"Show HN: CoreMem – Portable context for AI agents","date":"2026-05-22","topic":"AI agents","similarity":0.262,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-22/50-show-hn-coremem-portable-context-for-ai-agents.md"},{"title":"Show HN: I Made a Claude Skill for Spec-Driven Development (SDD)","date":"2026-05-21","topic":"AI dev tools","similarity":0.251,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-05-21/43-show-hn-i-made-a-claude-skill-for-spec-driven-development-sdd.md"},{"title":"Show HN: Agent-estimate, how long a coding task takes, at agent speed","date":"2026-05-21","topic":"AI agents","similarity":0.231,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-21/40-show-hn-agent-estimate-how-long-a-coding-task-takes-at-agent-speed.md"}]
pros: ["Recently updated (2026-05-30)","MIT license","README mentions tests or validation","README includes install commands"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 100
has_ci: false
has_tests: true
setup_steps_count: 1
dependency_files: []
install_commands: ["git clone https://github.com/manthanpatelll/claude-code-starter.git my-app"]
risk_flags: []
status: "new"
---

# manthanpatelll/claude-code-starter

A clean, copy-paste .claude/ setup for Claude Code. Hooks, skills, agents, rules, plugins, and settings as working examples. Drop into any project.

URL: https://github.com/manthanpatelll/claude-code-starter

## Why it matters
You saved an article on 2026-05-22 about AI agents; this candidate overlaps with "Show HN: CoreMem – Portable context for AI agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-05-30)
+ MIT license
+ README mentions tests or validation
+ README includes install commands

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 100/100
CI detected: no
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/manthanpatelll/claude-code-starter.git my-app

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Claude Code Starter

A clean, copy-paste `.claude/` setup for [Claude Code](https://claude.com/claude-code).
Drop it into any project (new or existing) and you get a sensible, modern Claude
Code configuration with every surface set up as a working example: **CLAUDE.md,
hooks, skills, agents, rules, plugins, output styles, and settings.**

Everything here is generic and safe to use as a template. Replace the
placeholders with your own project's details.

## Quick start

**New project:**
```bash
git clone https://github.com/manthanpatelll/claude-code-starter.git my-app
cd my-app
rm -rf .git && git init
# open in Claude Code and start building
```

**Existing project:** copy the `.claude/` folder, `CLAUDE.md`, `.mcp.json`, and
`.gitignore` lines into your repo's root:
```bash
cp -r claude-code-starter/.claude your-project/.claude
cp claude-code-starter/CLAUDE.md your-project/CLAUDE.md
cp claude-code-starter/.mcp.json your-project/.mcp.json
```

Then make the hooks executable:
```bash
chmod +x .claude/hooks/*.sh
```

## What's inside

```
your-project/
├── CLAUDE.md              # project rules, loaded every session (keep it lean)
├── CLAUDE.local.md        # personal notes, gitignored
├── .mcp.json              # MCP server connections (MUST be at repo root)
├── .gitignore
└── .claude/
    ├── settings.json      # the control panel: model, permissions, hook registry
    ├── settings.local.json.example   # copy to settings.local.json for personal overrides
    ├── hooks/             # scripts that run automatically at set moments
    │   ├── session-start.sh      # injects project context when a session opens
    │   ├── post-edit-format.sh   # lints automatically after every edit
    │   └── pre-deploy-guard.sh   # runs tests before a deploy, blocks if broken
    ├── commands/          # legacy slash commands (still supported)
    │   └── ship.md
    ├── skills/            # reusable workflows you trigger with /
    │   ├── code-review/
    │   ├── e2e/
    │   └── api-health/
    ├── agents/            # subagents with their own context window
    │   ├── code-reviewer.md
    │   ├── researcher.md
    │   └── log-analyzer.md
    ├── output-styles/     # how Claude formats its replies
    │   └── terse.md
    ├── rules/             # path-scoped rules that load only when relevant
    │   └── api.md
    └── plugins/           # bundled, installable packages (namespaced commands)
        └── deploy/
```

## The mental model

| Layer | Where | What it does |
|-------|-------|--------------|
| **Rules** | `CLAUDE.md` + `rules/` | what Claude should always know |
| **Tools** | `.mcp.json` | live connections (browser, database, etc.) |
| **Skills** | `.claude/skills/` | reusable workflows you invoke with `/` |
| **Hooks** | `.claude/hooks/` | automation that ALWAYS fires (registered in settings.json) |
| **Agents** | `.claude/agents/` | isolated workers for side tasks |
| **Plugins** | `.claude/plugins/` | bundles of the above, installable from a marketplace |
| **Settings** | `settings.json` | the control panel that wires it all together |

**Key insight:** `CLAUDE.md` is advisory (Claude might forget). **Hooks are
deterministic** (they always run). Use hooks for anything that MUST happen, like
auto-formatting or blocking a broken deploy.

## The three hooks explained

- **`session-start.sh`** runs the moment you open Claude Code and tells it your
  branch, last commit, and rules, so it starts oriented.
- **`post-edit-format.sh`** runs after every file edit and lints automatically,
  so Claude never leaves messy code.
- **`pre-deploy-guard.sh`** runs before a deploy command, runs your tests first,
  and blocks the deploy if anything is failing. Broken code can't ship by accident.

Hooks only fire once they are **registered in `settings.json`** (see the `hooks`
block). The script files are the *what*; settings.json is the *when*.

## Customize it

1. Edit `CLAUDE.md` with your project's real description, tech stack, and rules.
2. Edit `.mcp.json` with your real MCP servers.
3. Edit `pre-deploy-guard.sh` so the grep matches your deploy command.
4. Add your own skills under `.claude/skills/<name>/SKILL.md`.

## License

MIT. Use it however you like.

