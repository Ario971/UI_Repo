---
id: "zerone-agents/agent-sdk"
name: "zerone-agents/agent-sdk"
url: "https://github.com/zerone-agents/agent-sdk"
date: "2026-08-24"
source: "awesome-llm-agents"
category: "awesome_lists"
kind: "agent_framework"
compatibility: 80
momentum: 49
risk: 32
integration_effort: 36
expected_gain: 77
composite: 69
replacement_target: ""
related_articles: [{"title":"LamsonRetail/lsr-agent-platform","date":"2026-08-18","topic":"AI dev tools","similarity":0.454,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-18/13-lamsonretail-lsr-agent-platform.md"},{"title":"Show HN: Parley – your coding agent can talk to a teammate's agent","date":"2026-08-11","topic":"AI agents","similarity":0.441,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-11/06-show-hn-parley-your-coding-agent-can-talk-to-a-teammate-s-agent.md"},{"title":"What Does It Take to Detect an AI Agent? Minimal Feature Sets for Behavioral Detection under Browser Automation","date":"2026-07-29","topic":"AI agents","similarity":0.377,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-29/09-what-does-it-take-to-detect-an-ai-agent-minimal-feature-sets-for-behav.md"}]
pros: ["Recently updated (2026-08-24)","MIT license","1 GitHub stars","GitHub Actions/CI detected"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: [{"name":"package.json","summary":"deps @anthropic-ai/sdk, @modelcontextprotocol/sdk, @mozilla/readability, cross-spawn, diff, linkedom, pdfjs-dist, sharp; scripts build, dev, typecheck, test, test:watch, test:examples, test:examples:all, web"}]
install_commands: ["npm install @zerone-agent/agent-sdk","npx tsx examples/basic/01-simple-query.ts"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# zerone-agents/agent-sdk

Zerone Agent SDK

URL: https://github.com/zerone-agents/agent-sdk

## Why it matters
You saved an article on 2026-08-18 about AI dev tools; this candidate overlaps with "LamsonRetail/lsr-agent-platform" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-24)
+ MIT license
+ 1 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- package.json: deps @anthropic-ai/sdk, @modelcontextprotocol/sdk, @mozilla/readability, cross-spawn, diff, linkedom, pdfjs-dist, sharp; scripts build, dev, typecheck, test, test:watch, test:examples, test:examples:all, web

Install commands found:
- npm install @zerone-agent/agent-sdk
- npx tsx examples/basic/01-simple-query.ts

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<div align="center">

# Zerone Agent SDK

**Open-source TypeScript SDK for building AI agents.**<br/>
Runs the full agent loop in-process — no subprocess or CLI required.

[![npm version](https://img.shields.io/npm/v/@zerone-agent/agent-sdk)](https://www.npmjs.com/package/@zerone-agent/agent-sdk)
[![Node.js](https://img.shields.io/badge/node-%3E%3D22-brightgreen)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)

[Quick Start](#quick-start) · [Documentation](#documentation) · [Examples](#examples) · [License](#license)

**English** | [简体中文](./README.zh-CN.md)

</div>

---

## Features

- **In-process agent loop** — runs anywhere Node runs: cloud, serverless, Docker, CI/CD
- **Multi-provider** — Anthropic, OpenAI / DeepSeek, or custom providers
- **18 built-in tools** — file I/O, search, bash, web, subagents, skills
- **Streaming + blocking** — `query()` for events, `prompt()` for promises
- **Session persistence** — automatic compaction when context grows
- **Permission system** — per-tool allow/deny with hooks for custom policy
- **Skills + Subagents** — composable in-context capabilities

## Concepts

Five core abstractions compose every agent run:

- **Agent** — stateful wrapper around a session. Holds the tool pool, MCP connections, hooks, and history. Created via `createAgent()`.
- **QueryEngine** — runs the agentic loop on each `prompt()` / `query()` call: API request → tool calls → repeat until turn limit or completion.
- **Tool** — a function the model can invoke. The SDK ships 20+ built-in tools (Bash, Read, Write, Edit, Glob, Grep, WebFetch, ...). Custom tools are defined with `tool()` (Zod schema) or `defineTool()` (low-level).
- **Provider** — LLM backend abstraction. `AnthropicProvider` and `OpenAIProvider` ship built-in; custom providers implement the `LLMProvider` interface.
- **Skill** — a reusable prompt template (Claude-Code-compatible). Skills are loaded programmatically via `registerSkill()` or from the filesystem (`.agents/skills/<name>/SKILL.md`); the SDK ships no built-in skills.

For the full component model and request flow, see [Architecture](docs/architecture.md).

## Installation

```bash
npm install @zerone-agent/agent-sdk
```

Requires Node.js 22 or later.

Set your API key (or use the `apiKey` option in code):

```bash
export ZERONE_AGENT_API_KEY=...     # primary
# or
export ZERONE_AGENT_AUTH_TOKEN=...  # alternative auth token
```

For other providers (DeepSeek, third-party Anthropic-compatible endpoints, custom base URLs), see [Provider Configuration](docs/api.md#provider-configuration).

## Quick Start

**Streaming** (events as they arrive):

```typescript
import { createAgent } from "@zerone-agent/agent-sdk";

const agent = createAgent({ model: "claude-sonnet-4-6" });

for await (const event of agent.query("Write a haiku about TypeScript.")) {
  if (event.type === "assistant") {
    for (const block of event.message.content) {
      if ("text" in block) process.stdout.write(block.text);
    }
  }
}
```

**Blocking** (single result):

```typescript
import { createAgent } from "@zerone-agent/agent-sdk";

const agent = createAgent();
const result = await agent.prompt("List 3 JavaScript testing frameworks.");
console.log(result.text);
```

For the full set of patterns (multi-turn, custom tools, skills, hooks, MCP, subagents, permissions, web UI), see [Getting Started](docs/getting-started.md).

## Documentation

| Document | Contents |
|----------|----------|
| [Getting Started](docs/getting-started.md) | Full quick start with 12 example patterns |
| [API Reference](docs/api.md) | Top-level functions, Agent methods, options, env vars |
| [Built-in Tools](docs/tools.md) | 20+ tools + PDF support details |
| [Architecture](docs/architecture.md) | Component model and request flow |
| [Examples](docs/examples.md) | 30+ runnable examples by category |

## Examples

Browse the [`examples/`](examples/) directory or see the [curated examples index](docs/examples.md) for guidance by use case.

Run any example:

```bash
npx tsx examples/basic/01-simple-query.ts
```

## Community

- **Issues & feature requests**: [github.com/zerone-agents/agent-sdk/issues](https://github.com/zerone-agents/agent-sdk/issues)
- **Source code**: [github.com/zerone-agents/agent-sdk](https://github.com/zerone-agents/agent-sdk)

## License

MIT

