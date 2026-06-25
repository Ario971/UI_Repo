---
id: "ai-dvps/comate"
name: "ai-dvps/comate"
url: "https://github.com/ai-dvps/comate"
date: "2026-06-25"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 52
risk: 37
integration_effort: 40
expected_gain: 81
composite: 72
replacement_target: ""
related_articles: [{"title":"Show HN: Jynx, a matchmaking app to find gaming teammates","date":"2026-05-30","topic":"AI agents","similarity":0.27,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-30/46-show-hn-jynx-a-matchmaking-app-to-find-gaming-teammates.md"},{"title":"Show HN: Boxes.dev: ditch localhost; run Claude Code and Codex in the cloud","date":"2026-06-04","topic":"AI agents","similarity":0.257,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-04/10-show-hn-boxes-dev-ditch-localhost-run-claude-code-and-codex-in-the-clo.md"},{"title":"Show HN: Lessons learned from running Claude Code swarms at scale","date":"2026-06-05","topic":"AI agents","similarity":0.22,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-05/07-show-hn-lessons-learned-from-running-claude-code-swarms-at-scale.md"}]
pros: ["Recently updated (2026-06-25)","Apache-2.0 license","2 GitHub stars","GitHub Actions/CI detected"]
cons: ["No clear install command found in README","README mentions telemetry/analytics"]
readme_quality: 70
has_ci: true
has_tests: false
setup_steps_count: 1
dependency_files: [{"name":"package.json","summary":"deps @anthropic-ai/claude-agent-sdk, @chat-adapter/state-memory, @larksuite/vercel-chat-adapter, @larksuiteoapi/node-sdk, @radix-ui/react-collapsible, @radix-ui/react-popover, @radix-ui/react-tooltip, @radix-ui/react-use-controllable-state; scripts dev, dev:server, dev:client, build, build:server, build:cli, build:sidecar, start"}]
install_commands: []
risk_flags: ["README mentions telemetry/analytics"]
status: "new"
---

# ai-dvps/comate

Comate is a desktop AI workspace that brings Claude Code into a polished, native app experience. Organize multiple projects in folder-backed workspaces, chat with AI through streaming sessions, explore files, and manage tasks — all in one place.

URL: https://github.com/ai-dvps/comate

## Why it matters
You saved an article on 2026-05-30 about AI agents; this candidate overlaps with "Show HN: Jynx, a matchmaking app to find gaming teammates" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-25)
+ Apache-2.0 license
+ 2 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No clear install command found in README
- README mentions telemetry/analytics

## Repository Inspection
README quality: 70/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- package.json: deps @anthropic-ai/claude-agent-sdk, @chat-adapter/state-memory, @larksuite/vercel-chat-adapter, @larksuiteoapi/node-sdk, @radix-ui/react-collapsible, @radix-ui/react-popover, @radix-ui/react-tooltip, @radix-ui/react-use-controllable-state; scripts dev, dev:server, dev:client, build, build:server, build:cli, build:sidecar, start

Install commands found:
- none detected

Risk flags:
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Comate

Your friendly AI workspace companion.

<!-- BADGES -->

<!-- SCREENSHOT PLACEHOLDER -->

## Overview

Comate is a desktop AI workspace that brings Claude Code into a polished, native app experience. Organize multiple projects in folder-backed workspaces, chat with AI through streaming sessions, explore files, and manage tasks — all in one place.

## Features

**Workspaces & Projects**
- Folder-backed workspaces — each workspace remembers its own settings, sessions, and configuration
- Chrome-style tabbed navigation for switching between workspaces
- Per-workspace settings for model selection, API keys, skills, MCP servers, and hooks
- Git status awareness in the status bar

**Chat & Sessions**
- Multiple chat sessions per workspace with real-time streaming responses
- Persistent sessions that survive workspace switches and reconnections
- Rich message rendering with Markdown, syntax-highlighted code blocks, and collapsible reasoning
- Tool call display with input arguments and output
- Subagent visibility with live status indicators

**File Explorer**
- Browse workspace folder structure with file type icons
- File preview drawer with syntax highlighting
- Pin files to a side panel for reference while chatting
- Fast file picker powered by ripgrep

**Interactive Surfaces**
- Tool permission approvals with Allow / Allow always / Deny options
- Multi-question stepper for clarifying questions
- Preview panes for side-by-side option comparison

**Prompt Input & Discovery**
- Auto-expanding textarea with configurable font size
- Slash command discovery — type `/` to browse all available commands
- File path autocomplete with `@` references
- Keyboard shortcuts for common actions

**Desktop Experience**
- Native macOS and Windows app via Tauri v2
- System tray / background mode — close to tray, keep sessions alive
- Dark and light themes with OS preference detection
- English and Simplified Chinese (zh-CN) localization

**WeCom Bot Integration**
- Connect a workspace to a WeChat Work (WeCom) bot
- Each WeCom user gets their own persistent Claude session
- Bot sessions visible in the GUI with WeCom badges for monitoring
- HTTP bridge for sending messages from external systems

**Task Tracking**
- Real-time task/todo panel extracted from agent tool calls
- Live task status as the model works through multi-step requests

## Installation

Download the latest release for your platform:

- **macOS** — `.dmg` installer
- **Windows** — `.msi` installer

> **Note:** Prebuilt releases will be available once the repository is set up for distribution. For now, build from source (see [development.md](development.md)).

## Quick Start

1. **Create a workspace** — Click "New Workspace" and select a local folder
2. **Start a session** — Click "New Session" in the sidebar
3. **Send a message** — Type your request in the prompt input and press `Cmd+Enter` (macOS) or `Ctrl+Enter` (Windows)
4. **Approve tool calls** — When Claude requests tool access, review and allow

## System Requirements

- **macOS** 13.0 or later (Ventura+)
- **Windows** 10 or later

## Contributing

See [development.md](development.md) for setup instructions and contribution guidelines.

## License

[Apache License 2.0](LICENSE)

