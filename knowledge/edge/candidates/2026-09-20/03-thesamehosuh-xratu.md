---
id: "thesamehosuh/xratu"
name: "thesamehosuh/xratu"
url: "https://github.com/thesamehosuh/xratu"
date: "2026-09-20"
source: "GitHub Trending"
category: "github_discovery"
kind: "local_model_tool"
compatibility: 84
momentum: 58
risk: 32
integration_effort: 36
expected_gain: 77
composite: 72
replacement_target: ""
related_articles: [{"title":"Show HN: Mnemosyne Local hierarchical memory engine for AI agents (MCP Native)","date":"2026-08-23","topic":"AI agents","similarity":0.287,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-23/06-show-hn-mnemosyne-local-hierarchical-memory-engine-for-ai-agents-mcp-n.md"},{"title":"Show HN: Ax-check.com – Can agents use your product?","date":"2026-09-17","topic":"AI agents","similarity":0.267,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-17/09-show-hn-ax-check-com-can-agents-use-your-product.md"},{"title":"Show HN: Open tool for testing your AI Agents (No LLM)","date":"2026-08-28","topic":"AI agents","similarity":0.256,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-28/06-show-hn-open-tool-for-testing-your-ai-agents-no-llm.md"}]
pros: ["Recently updated (2026-09-20)","Apache-2.0 license","4 GitHub stars","GitHub Actions/CI detected"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: [{"name":"package.json","summary":"deps @modelcontextprotocol/sdk, cross-spawn, lucide-react, markdown-it, pdfjs-dist, shiki, ws, @playwright/test; scripts vscode:prepublish, compile, watch, watch:webview, build:webview, test:webview, test:e2e, test:sanitizer"}]
install_commands: ["npm ci","npm run compile        # host bundle (esbuild) + webview (vite)","npm run test:webview","npm run deploy:staging"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# thesamehosuh/xratu

AI coding assistant for VS Code. Bring your own key or use a local runtime.

URL: https://github.com/thesamehosuh/xratu

## Why it matters
You saved an article on 2026-08-23 about AI agents; this candidate overlaps with "Show HN: Mnemosyne Local hierarchical memory engine for AI agents (MCP Native)" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-20)
+ Apache-2.0 license
+ 4 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- package.json: deps @modelcontextprotocol/sdk, cross-spawn, lucide-react, markdown-it, pdfjs-dist, shiki, ws, @playwright/test; scripts vscode:prepublish, compile, watch, watch:webview, build:webview, test:webview, test:e2e, test:sanitizer

Install commands found:
- npm ci
- npm run compile        # host bundle (esbuild) + webview (vite)
- npm run test:webview
- npm run deploy:staging

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Xratu

<p align="center">
  <img src="assets/brand/logo-128.png" width="88" alt="Xratu" />
</p>

<p align="center">
  <a href="#xratu">English</a> ·
  <a href="README.fa.md">فارسی</a>
</p>

<p align="center">
  <a href="https://github.com/thesamehosuh/xratu/actions/workflows/ci.yml"><img src="https://github.com/thesamehosuh/xratu/actions/workflows/ci.yml/badge.svg" alt="CI" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="License: Apache-2.0" /></a>
  <img src="https://img.shields.io/badge/VS%20Code-1.90%2B-007ACC.svg" alt="VS Code 1.90+" />
</p>

Open-source AI coding agent for VS Code. Bring your own key or use a local
runtime. Everything runs inside the extension host, on your machine.

## Your keys. Your models. Your machine.

- API keys live in VS Code secrets storage and go only to the endpoint you
  configure.
- Fully offline capable: Ollama, LM Studio, vLLM, and llama.cpp are
  auto-discovered on your machine.

## Features

- **Agentic coding** - reads files, edits code, runs terminal commands,
  searches the web. Every edit and command needs your approval; per-tool
  auto-approve if you trust a workflow, YOLO mode if you don't want the gate.
- **Plan mode** - read-only planning with a task list. Mutating tools are
  blocked in code, not by prompt.
- **Checkpoints** - shadow-git snapshots before sends and edits, restorable
  anytime. Your real git repo is never touched.
- **MCP servers** - stdio, WebSocket, or streamable HTTP/SSE, with
  Cline-compatible files-based config.
- **Agent Skills** - the open [agentskills.io](https://agentskills.io)
  standard; skills can be shared with Claude Code, Roo Code, OpenCode, and
  others.
- **Long sessions** - steer mid-task, edit & resend any message, image and
  PDF attachments, automatic context compaction.

## Models

| Group | Providers |
|-------|-----------|
| Cloud | OpenAI, Google Gemini, OpenRouter, xAI, Groq, DeepSeek, Mistral, Perplexity, Cohere, Together, Fireworks, Cerebras, NVIDIA NIM, Hugging Face, SambaNova, Moonshot, Z.AI, OpenCode Zen |
| Local | Ollama, LM Studio, vLLM, llama.cpp |
| Custom | Any OpenAI-compatible HTTPS endpoint |

## Getting started

Install from the VS Code Marketplace:
[xratu.xratu](https://marketplace.visualstudio.com/items?itemName=xratu.xratu)

Prefer a manual install? Grab the latest `xratu-*.vsix` from
[Releases](https://github.com/thesamehosuh/xratu/releases) and install it
via **Code → Extensions → ⋯ → Install from VSIX…**

1. Open the Xratu panel from the activity bar.
2. Pick a preset or a local runtime, paste your API key, choose a model.
3. Chat. Approve edits and commands as the agent works - or turn on
   auto-approval once you trust the loop.

## MCP servers

Xratu reads server config from two files:

- **Global**: `mcp.json` in the extension's global storage
- **Workspace**: `.xratu/mcp.json` in the workspace root (overrides global
  per server key)

Format is Cline-compatible: `command`/`args`/`env` for stdio, `url` for
remote. Tools surface to the agent as `mcp__<server>__<tool>` and follow the
same approval flow as built-ins.

## Agent Skills

A skill is a folder with a `SKILL.md` file - YAML frontmatter
(`name` + `description`) plus a markdown body. Only the name/description
load up front; the agent pulls in the rest via its `skill` tool when your
request matches. Search order (first match wins):

- `.xratu/skills/<name>/SKILL.md`
- `.agents/skills/<name>/SKILL.md` (shared with other agent tools)
- `.claude/skills/<name>/SKILL.md` (Claude Code)
- `~/.agents/skills/<name>/SKILL.md`
- `~/.claude/skills/<name>/SKILL.md` (Claude Code)

```markdown
---
name: deploy-staging
description: Deploy the app to staging; use when the user asks to deploy or ship to staging.
---

1. Run the test suite
2. Build the app
3. `npm run deploy:staging`
```

Extra files (scripts, references, templates) go next to the `SKILL.md`.
Enable/disable skills in Settings → Servers & skills → Skills.

## Privacy

API keys are stored in VS Code secrets storage and sent only to the endpoint
you configure. Chat history and checkpoints live on your disk only.

## Development

```bash
npm ci
npm run compile        # host bundle (esbuild) + webview (vite)
npm run test:webview
```

CI type-checks host and webview separately and runs the test suites on
Ubuntu and Windows. See [AGENTS.md](AGENTS.md) for details.

## Contributing

Issues and PRs welcome. Open an issue before large changes. Conventional
Commits, CI green, and code review required for every PR.

## License

[Apache-2.0](LICENSE)

