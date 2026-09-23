---
id: "agentclientprotocol/claude-agent-acp"
name: "agentclientprotocol/claude-agent-acp"
url: "https://github.com/agentclientprotocol/claude-agent-acp"
date: "2026-09-23"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 100
risk: 27
integration_effort: 32
expected_gain: 95
composite: 88
replacement_target: ""
related_articles: [{"title":"Show HN: Agent Chaperone – Screen AI agent tool calls and results with Jev","date":"2026-09-21","topic":"AI dev tools","similarity":0.332,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-21/10-show-hn-agent-chaperone-screen-ai-agent-tool-calls-and-results-with-je.md"},{"title":"pradverma94/ai-support-agent","date":"2026-09-13","topic":"AI dev tools","similarity":0.305,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-13/12-pradverma94-ai-support-agent.md"},{"title":"Show HN: Proliferate- open-source, self-hostable Codex for any coding agent","date":"2026-08-21","topic":"AI agents","similarity":0.245,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-21/07-show-hn-proliferate-open-source-self-hostable-codex-for-any-coding-age.md"}]
pros: ["Recently updated (2026-09-23)","Apache-2.0 license","2565 GitHub stars","GitHub Actions/CI detected"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 1
dependency_files: [{"name":"package.json","summary":"deps @agentclientprotocol/sdk, @anthropic-ai/claude-agent-sdk, zod, @anthropic-ai/sdk, @eslint/js, @tsconfig/node22, @types/node, @typescript-eslint/eslint-plugin; scripts build, start, dev, example:simple-client, lint, lint:fix, format, format:check"}]
install_commands: ["npm install @agentclientprotocol/claude-agent-acp@preview"]
risk_flags: []
status: "new"
---

# agentclientprotocol/claude-agent-acp

Use Claude Agent SDK from any ACP client

URL: https://github.com/agentclientprotocol/claude-agent-acp

## Why it matters
You saved an article on 2026-09-21 about AI dev tools; this candidate overlaps with "Show HN: Agent Chaperone – Screen AI agent tool calls and results with Jev" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-23)
+ Apache-2.0 license
+ 2565 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- package.json: deps @agentclientprotocol/sdk, @anthropic-ai/claude-agent-sdk, zod, @anthropic-ai/sdk, @eslint/js, @tsconfig/node22, @types/node, @typescript-eslint/eslint-plugin; scripts build, start, dev, example:simple-client, lint, lint:fix, format, format:check

Install commands found:
- npm install @agentclientprotocol/claude-agent-acp@preview

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# ACP adapter for the Claude Agent SDK

[![npm](https://img.shields.io/npm/v/%40agentclientprotocol%2Fclaude-agent-acp)](https://www.npmjs.com/package/@agentclientprotocol/claude-agent-acp)

Use [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview#branding-guidelines) from [ACP-compatible](https://agentclientprotocol.com) clients!

This tool implements an ACP agent by using the official [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview), supporting:

- Context @-mentions
- Images
- Tool calls (with permission requests)
- Following
- Edit review
- TODO lists
- Nested subagent transcripts
- Interactive (and background) terminals
- Custom [Slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)
- Client MCP servers
- Session-scoped long-running goals through the provider-neutral [goal extension](docs/goal-extension.md)
- Structured errors, recovery, and warnings through the opt-in [session failure extension](docs/session-failure-extension.md)
- Concrete model and effort defaults through the opt-in [recommended config value extension](docs/recommended-config-values-extension.md)
- Tool permission presentation, editable choices, and durable effects through the [permission extension](docs/permission-extension.md)

Learn more about the [Agent Client Protocol](https://agentclientprotocol.com/).

To try changes that have landed on `main` but are not released yet, install from the
`preview` channel — every push to `main` publishes one. See
[`docs/RELEASES.md`](docs/RELEASES.md#preview-releases).

```sh
npm install @agentclientprotocol/claude-agent-acp@preview
```

### Subagent sessions

Subagents are exposed only after bilateral capability negotiation. Until the released ACP SDKs
preserve the draft `clientCapabilities.subagents` field, a supporting client may advertise
`nativeSubagentSessions` in `_meta.jetbrains.air.capabilities`; the adapter mirrors the capability
in its initialize response. The canonical field remains supported and takes precedence once it is
available. Without either client signal, Agent/Task lifecycle keeps its legacy ordinary ACP
tool-call representation and child interactions stay on the root session. Clients that use the
historical `_meta["subagent-transcript"]` capability or `forwardSubagentText` session option retain
the flattened child transcript behavior.

## Contribution Policy

This project does not require a Contributor License Agreement (CLA). Instead, contributions are accepted under the following terms:

> By contributing to this project, you agree that your contributions will be licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0). You affirm that you have the legal right to submit your work, that you are not including code you do not have rights to, and that you understand contributions are made without requiring a Contributor License Agreement (CLA).

