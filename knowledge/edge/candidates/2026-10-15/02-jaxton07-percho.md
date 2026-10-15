---
id: "jaxton07/percho"
name: "Jaxton07/percho"
url: "https://github.com/Jaxton07/percho"
date: "2026-10-15"
source: "awesome-claude-code"
category: "awesome_lists"
kind: "agent_framework"
compatibility: 72
momentum: 95
risk: 24
integration_effort: 36
expected_gain: 77
composite: 78
replacement_target: ""
related_articles: [{"title":"Show HN: Agent Chaperone – Screen AI agent tool calls and results with Jev","date":"2026-09-21","topic":"AI dev tools","similarity":0.412,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-21/10-show-hn-agent-chaperone-screen-ai-agent-tool-calls-and-results-with-je.md"},{"title":"pradverma94/ai-support-agent","date":"2026-09-13","topic":"AI dev tools","similarity":0.349,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-13/12-pradverma94-ai-support-agent.md"},{"title":"LiteReality-Agent: An Agentic System for Interactable 3D Indoor Scene Reconstruction","date":"2026-10-01","topic":"AI agents","similarity":0.346,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-01/07-litereality-agent-an-agentic-system-for-interactable-3d-indoor-scene-r.md"}]
pros: ["Recently updated (2026-10-15)","MIT license","416 GitHub stars","GitHub Actions/CI detected"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: [{"name":"package.json","summary":"deps @biomejs/biome, patch-package; scripts dev, postinstall, build, typecheck, test, dist, lint"}]
install_commands: ["npm install","npm run dev","npm run typecheck"]
risk_flags: []
status: "new"
---

# Jaxton07/percho

Percho: Minimalist desktop GUI for the Pi coding agent — the same engine as the Pi CLI, in a clean visual interface. Multi-session chat, visual tool approvals, and custom themes.

URL: https://github.com/Jaxton07/percho

## Why it matters
You saved an article on 2026-09-21 about AI dev tools; this candidate overlaps with "Show HN: Agent Chaperone – Screen AI agent tool calls and results with Jev" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-15)
+ MIT license
+ 416 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- package.json: deps @biomejs/biome, patch-package; scripts dev, postinstall, build, typecheck, test, dist, lint

Install commands found:
- npm install
- npm run dev
- npm run typecheck

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/img/readme-hero-dark.svg">
    <img src="docs/assets/img/readme-hero-light.svg" alt="Percho — geometric construction wordmark and pyramid" width="100%">
  </picture>
</p>
<h1 align="center">Percho</h1>
<p align="center">
  Highly customizable desktop GUI for the <a href="https://www.npmjs.com/package/@earendil-works/pi-coding-agent">Pi coding agent</a> — the same engine as the Pi CLI, in a clean visual interface. Multi-session chat, visual tool approvals, built-in subagents, UI plugins, and custom themes.
</p>
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/Jaxton07/percho?style=flat-square" alt="License"></a>
  <a href="https://github.com/Jaxton07/percho/releases"><img src="https://img.shields.io/github/v/release/Jaxton07/percho?style=flat-square" alt="Release"></a>
  <a href="https://github.com/Jaxton07/percho/releases"><img src="https://img.shields.io/github/downloads/Jaxton07/percho/total?style=flat-square" alt="Downloads"></a>
  <a href="https://github.com/Jaxton07/percho/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/Jaxton07/percho/ci.yml?style=flat-square" alt="CI"></a>
  <a href="https://github.com/Jaxton07/percho"><img src="https://img.shields.io/github/stars/Jaxton07/percho?style=flat-square" alt="Stars"></a>
  <img src="https://img.shields.io/badge/node-%3E%3D22.19-339933?logo=nodedotjs&style=flat-square" alt="Node >=22.19">
  <img src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-blue?style=flat-square" alt="macOS | Windows | Linux">
</p>
<p align="center">
  <a href="README.md">English</a> | <a href="README.zh.md">简体中文</a>
</p>

---

## Demo

![Percho new-session page](docs/assets/img/chat_001.png)

![Percho project and session sidebar](docs/assets/img/chat_002.png)

![Percho per-turn diff sidebar](docs/assets/img/chat_003.png)

![UI plugins settings — the whale maid desk pet ships built in](docs/assets/img/percho_ui_plugins.png)

**Chat**

![Chat page demo](docs/assets/img/demo-chat.gif)

**Custom background & dark theme**

![Chat with custom background image in dark theme](docs/assets/img/chat_img_bg_show_img.png)

## Why Percho?

Percho embeds the official Pi SDK (`@earendil-works/pi-coding-agent`) in the Electron main process. It is **not a fork and not a reimplementation** — it runs the same engine as the Pi CLI and inherits Pi's native strengths:

- **Extensibility** — TypeScript extensions, skills, and prompt templates installed for the Pi CLI work here too, including project-local ones (with a trust prompt before loading). Adapt Pi to your workflows, no forking required.
- **Shared configuration** — same `~/.pi/agent/` directory as the CLI: sessions, auth, and model settings carry over. Start a session in the terminal, continue it in the GUI.
- **Providers** — subscriptions (Claude Pro/Max, ChatGPT Plus/Pro Codex, GitHub Copilot, logged in via an in-app OAuth flow) and API keys for Anthropic, OpenAI, Gemini, DeepSeek, Bedrock, and more; custom providers and base-URL overrides for relay gateways.

And for those who prefer a GUI over a TUI:

- Highly customizable UI — swap tool-call cards, drop in desk-pet overlays (two whale-maid pets ship built in), or extend the settings panel via UI plugins
- Visual permission gates — approve or deny each tool call from a dock, backed by a per-tool rule engine
- A collapsible project/session sidebar, draggable pinned-session pills, per-session composer drafts, and a follow-up queue with undo
- Built-in subagents — a scout plus your own agent definitions, parallel task fan-outs, and run cards you can click to inspect the sub-session read-only
- Context evaporation (on by default) — stale tool outputs age into compact stubs, keeping long sessions within budget
- Unified error system — in-chat error cards with one-click retry, an auto-retry status line, and full-page renderer crash recovery
- Solid session workspace — fork from assistant turns or selected context, recall your own message back into the composer, todo panel, per-turn diff sidebar, slash-command menu and @-file completion
- Streaming markdown rendering, image previews, message copy
- Agent-initiated image display — a built-in `show_image` tool lets the agent deliberately show you images inline (single or grouped), without turning every tool result into noise
- Custom background image with adjustable overlay dimming, light/dark/system themes
- Cross-device — monitor sessions from a phone or tablet browser via QR code; optionally enable remote prompts, stop generation, and allow-once/deny approval decisions

## Download

Prebuilt installers are published on the [Releases](https://github.com/Jaxton07/percho/releases) page.

| Platform | Download |
| --- | --- |
| macOS (Apple Silicon) | `percho-mac-arm64.dmg` |
| macOS (Intel) | `percho-mac-x64.dmg` |
| Windows | `percho-windows-x64.exe` (installer) or `percho-windows-x64.zip` |
| Linux (x64) | `percho-linux-x86_64.AppImage` |

> Builds are ad-hoc signed (no Developer ID certificate). On macOS, the first launch after a download may show **"Apple cannot verify Percho is free from malware"** — that's Gatekeeper blocking an un-notarized app. To open it:
>
> 1. **System Settings → Privacy & Security** → scroll to the bottom → click **Open Anyway** next to the Percho entry, then confirm with your password or Touch ID (recommended).
>
>    ![macOS Open Anyway](docs/assets/img/percho_mac_permission.png)
>
> 2. Or in Terminal: `xattr -cr "/Applications/Percho.app"`.
>
> Updates are checked in-app. On Windows they download and install there too (click download, then restart). On macOS the ad-hoc signed build cannot self-install, so the app jumps to the Releases page — and a freshly downloaded version will hit Gatekeeper once again. On Windows, click "More info" → "Run anyway" when SmartScreen appears.
>
> On Linux: make the AppImage executable before first launch (`chmod +x percho-linux-x86_64.AppImage`). On Ubuntu 22.04+/24.04+ and derivatives, install `libfuse2` first — AppImages mount via FUSE 2, which is no longer preinstalled. Linux builds download and install updates in-app.

## Development

Prerequisites: **Node.js >= 22.19**.

```bash
npm install
npm run dev
```

npm workspaces monorepo, three packages: `packages/shared` (IPC contracts), `packages/backend` (the only place that imports the Pi SDK), `packages/desktop` (Electron + React 19 + Tailwind 4 + Zustand). Common commands: `npm run typecheck` / `test` / `lint` / `build` / `dist`.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. If you are in China and the Electron binary download stalls, set `ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/` first.

## Disclaimer

Percho is a community project. It is **not** built by or affiliated with the Pi team (earendil-works).

## License

[MIT](LICENSE)

