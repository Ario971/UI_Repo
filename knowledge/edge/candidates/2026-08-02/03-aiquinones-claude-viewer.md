---
id: "aiquinones/claude-viewer"
name: "aiquinones/claude-viewer"
url: "https://github.com/aiquinones/claude-viewer"
date: "2026-08-02"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 88
momentum: 45
risk: 35
integration_effort: 52
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"Show HN: Claude-account – switch Claude Code accounts without logging in again","date":"2026-07-30","topic":"AI dev tools","similarity":0.377,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-07-30/12-show-hn-claude-account-switch-claude-code-accounts-without-logging-in-.md"},{"title":"Show HN: Abralo – Free, easy way to run several Claude Code agents in one window","date":"2026-07-08","topic":"AI agents","similarity":0.319,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-08/07-show-hn-abralo-free-easy-way-to-run-several-claude-code-agents-in-one-.md"},{"title":"Kuberwastaken/VPSmaxxing","date":"2026-06-30","topic":"AI dev tools","similarity":0.278,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-30/13-kuberwastaken-vpsmaxxing.md"}]
pros: ["Recently updated (2026-08-02)","MIT license","README includes install commands","Matches 3 saved Feed article(s)"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 78
has_ci: false
has_tests: false
setup_steps_count: 4
dependency_files: [{"name":"package.json","summary":"deps @storybook/addon-a11y, @storybook/react-vite, @tailwindcss/cli, @tailwindcss/vite, @types/node, @types/react, @types/react-dom, @types/vscode; scripts vscode:prepublish, build, watch, typecheck, storybook, build-storybook"}]
install_commands: ["pnpm install","pnpm run build       # or: pnpm run watch","pnpm run typecheck","pnpm run storybook   # component workbench on :6006","npx vsce package --no-dependencies"]
risk_flags: []
status: "new"
---

# aiquinones/claude-viewer

VSCode extension to visualize settings on Claude

URL: https://github.com/aiquinones/claude-viewer

## Why it matters
You saved an article on 2026-07-30 about AI dev tools; this candidate overlaps with "Show HN: Claude-account – switch Claude Code accounts without logging in again" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-02)
+ MIT license
+ README includes install commands
+ Matches 3 saved Feed article(s)

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 78/100
CI detected: no
Tests mentioned: no
Setup steps estimate: 4

Dependency files:
- package.json: deps @storybook/addon-a11y, @storybook/react-vite, @tailwindcss/cli, @tailwindcss/vite, @types/node, @types/react, @types/react-dom, @types/vscode; scripts vscode:prepublish, build, watch, typecheck, storybook, build-storybook

Install commands found:
- pnpm install
- pnpm run build       # or: pnpm run watch
- pnpm run typecheck
- pnpm run storybook   # component workbench on :6006
- npx vsce package --no-dependencies

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Claude Viewer

> *This was written by AI, as a placeholder. Human description coming soon.*

A VS Code extension that shows you your Claude Code setup — CLAUDE.md files, skills, hooks,
subagents, slash commands, MCP servers, plugins, and permissions — resolved for the workspace you
have open.

The files are spread across `~/.claude/`, the project's `.claude/`, `.mcp.json`, and `~/.claude.json`.
Reading them tells you what's on disk. It doesn't tell you which settings file won a given key,
which CLAUDE.md files actually load and in what order, or which of two same-named skills is the one
that runs. Claude Viewer answers that.

Read-only, local files only, no network calls.

## Current state

**Skills work today.** Run **Claude Viewer: Open** from the Command Palette and you get every skill
Claude Code can see for the current workspace, grouped by scope — project, user, plugin — with the
description Claude actually reads. When two scopes define the same name one of them wins; the view
shows which, and keeps the shadowed one visible instead of letting it silently vanish. Malformed
frontmatter shows up as an issue on the skill rather than a missing row.

The panel refreshes as config changes on disk, and it follows your editor theme.

When you already know the name, **Claude Viewer: Open Skill…** skips the list — a searchable picker
over every resolved skill, matching on the description as well as the name, that opens the panel on
the one you chose.

**CLAUDE.md is next** — load order from user global down through nested files, `@imports` expanded
into a tree, and a size estimate per file so you can see what your context is spending.

After that: hooks, MCP servers, subagents, slash commands, and merged permissions.

## Linking to a skill

Any skill has a URL:

```
vscode://canoq.claude-viewer/skill/commit
vscode://canoq.claude-viewer/skill/deploy?scope=user   # a specific scope's copy
vscode://canoq.claude-viewer/skill                     # just open the picker
```

Opening one opens the panel on that skill, launching VS Code first if it isn't running. Useful in a
runbook or a PR description where "check the `deploy` skill" is otherwise a paragraph of
instructions. Without `?scope=`, the name resolves to the skill that actually wins.

Links only ever carry a name, never a path — the extension resolves it against what it found on
disk, so a link can't be crafted to open a file outside your skill directories.

## Install

Search for **Claude Viewer** in the Extensions view, or:

```
code --install-extension canoq.claude-viewer
```

Then open the Command Palette and run **Claude Viewer: Open**.

Nothing to configure. With no folder open you still get your user- and plugin-scoped skills;
project scope is simply absent.

## Notes

Skill precedence is currently modeled as `project > user > plugin`, matching how settings layers
resolve. That has not been confirmed against Claude Code itself, so the UI describes it as the
likely winner rather than stating it as fact.

## Development

```
pnpm install
pnpm run build       # or: pnpm run watch
pnpm run typecheck
pnpm run storybook   # component workbench on :6006
```

F5 launches an Extension Development Host. `npx vsce package --no-dependencies` builds the `.vsix`.

Stack: TypeScript strict, React + shadcn/ui in the webview, Zod for parsing config files, esbuild,
pnpm.

## Unofficial

This is a community project. It is not affiliated with, endorsed by, or supported by Anthropic.
"Claude" and "Claude Code" are trademarks of Anthropic, used here only to describe what the
extension reads.

## License

MIT

