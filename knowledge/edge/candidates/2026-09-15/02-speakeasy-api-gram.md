---
id: "speakeasy-api/gram"
name: "speakeasy-api/gram"
url: "https://github.com/speakeasy-api/gram"
date: "2026-09-15"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 80
momentum: 94
risk: 53
integration_effort: 52
expected_gain: 87
composite: 75
replacement_target: ""
related_articles: [{"title":"how to setup llama.cpp and blender to make lovely 3d stuff together","date":"2026-08-28","topic":"Local LLMs","similarity":0.432,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/Local LLMs/2026-08-28/16-how-to-setup-llama-cpp-and-blender-to-make-lovely-3d-stuff-together.md"},{"title":"Show HN: MCP Tool Definition Quality Score (TDQS) Spec","date":"2026-09-03","topic":"AI dev tools","similarity":0.389,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-03/10-show-hn-mcp-tool-definition-quality-score-tdqs-spec.md"},{"title":"Show HN: Itsuki – open-source memory engine for AI agents (API and MCP)","date":"2026-08-29","topic":"AI agents","similarity":0.331,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-29/06-show-hn-itsuki-open-source-memory-engine-for-ai-agents-api-and-mcp.md"}]
pros: ["Recently updated (2026-09-15)","AGPL-3.0 license","268 GitHub stars","GitHub Actions/CI detected"]
cons: ["No clear install command found in README","README mentions credentials or API tokens","README mentions telemetry/analytics"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 2
dependency_files: [{"name":"package.json","summary":"deps @changesets/cli, @clack/prompts, @datadog/datadog-ci, @types/fs-extra, @types/node, confbox, get-port-please, oxfmt; scripts dev, dev:docs, lint, build, type-check, format"},{"name":"pyproject.toml","summary":"python project; deps name, version, requires-python, package, gram-infra, members"},{"name":"go.mod","summary":"module github.com/speakeasy-api/gram"}]
install_commands: []
risk_flags: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
status: "new"
---

# speakeasy-api/gram

Securely scale AI usage across your organization. A single stack to Connect, Secure, Observe and Distribute agents, MCPs, and Skills within your company.

URL: https://github.com/speakeasy-api/gram

## Why it matters
You saved an article on 2026-08-28 about Local LLMs; this candidate overlaps with "how to setup llama.cpp and blender to make lovely 3d stuff together" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-15)
+ AGPL-3.0 license
+ 268 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No clear install command found in README
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 2

Dependency files:
- package.json: deps @changesets/cli, @clack/prompts, @datadog/datadog-ci, @types/fs-extra, @types/node, confbox, get-port-please, oxfmt; scripts dev, dev:docs, lint, build, type-check, format
- pyproject.toml: python project; deps name, version, requires-python, package, gram-infra, members
- go.mod: module github.com/speakeasy-api/gram

Install commands found:
- none detected

Risk flags:
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<p align="center">
  <a href="https://www.speakeasy.com/product/gram" target="_blank">
    <img src="https://raw.githubusercontent.com/speakeasy-api/gram/main/.github/speakeasy-icon.png" alt="Gram by Speakeasy" width="140">
  </a>
</p>

<h3 align="center">Speakeasy AI Control Plane</h3>

<p align="center">
  <strong>Securely scale AI usage across your organization. Built for humans and agents.</strong>
  <br />
  <a href="https://www.speakeasy.com/"><strong>Learn more »</strong></a>
</p>

<p align="center">
  <a href="https://www.getgram.ai/docs/introduction"><strong>Documentation</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="./CONTRIBUTING.md"><strong>Contributing</strong></a> ·
  <a href="https://app.getgram.ai/"><strong>Login</strong></a> ·
  <a href="https://roadmap.speakeasy.com/"><strong>Roadmap</strong></a>
</p>

# Introduction

Gram is the open source stack behind Speakeasy's AI control plane. Secure and centrally manage MCPs, Skills, and Assistants your whole company to access, with fine-grained permissions, threat detection, and full observability of token use and costs. Every tool call, permission change, and access event logged and searchable. SOC 2 Type II and ISO 27001 certified.

To get started on the hosted platform you can [Sign up](https://app.getgram.ai/), or check out the [Quickstart guide](https://www.getgram.ai/docs/introduction).

### Supports popular AI providers

<p align="center">
  <img src="https://raw.githubusercontent.com/speakeasy-api/gram/main/.github/agent-icons/claude.svg" alt="Claude" height="40">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/speakeasy-api/gram/main/.github/agent-icons/claude-code.svg" alt="Claude Code" height="40">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/speakeasy-api/gram/main/.github/agent-icons/openai.svg" alt="ChatGPT" height="40">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/speakeasy-api/gram/main/.github/agent-icons/codex.svg" alt="Codex" height="40">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/speakeasy-api/gram/main/.github/agent-icons/gemini.png" alt="Gemini" height="40">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/speakeasy-api/gram/main/.github/agent-icons/cursor.svg" alt="Cursor" height="40">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://raw.githubusercontent.com/speakeasy-api/gram/main/.github/agent-icons/gh-copilot.svg" alt="GitHub Copilot" height="40">
</p>

## Observe

Track AI usage across teams and measure impact with either tokens or cost. Deep dive expensive sessions, create budgets and measure tool effectiveness. Built on a foundation of Opentelemetry. Exportable and interactive via platform MCP and a built in assistant.

## Secure

Every prompt, response, and agent action is inspected and enforced in real time. Sensitive data is blocked, redacted, or logged before it leaves your environment. Create and enforce flexible policies to prevent prompt injection, log shadow use and detect PII secrets and other sensitive data types.

## Connect

A single control layer for connecting your agents to MCPs for your SaaS vendors, APIs, and internal systems, with policy enforcement and granular access control built in. Private networking and tunneling deployed on demand.

## Distribute

Centralise distribution of MCPs, Skills, Plugins and Assistants to your team based on enterprise roles. Team, server, and tool level permissions enforced through RBAC and Oauth2.1. Synced to your enterprise IDP (Okta, Azure AD, Google Workspace, etc.).

## Support

- Chat with us: [Join our slack](https://join.slack.com/t/speakeasy-dev/shared_invite/zt-3hudfoj4y-9EPqMmHIFhNiTtannqiV3Q) for support and discussions or email us at [support@speakeasy.com](mailto:support@speakeasy.com).
- Contribute feature requests or report issues [on our roadmap](https://roadmap.speakeasy.com/).
- Documentation for the platform is available [here](https://www.speakeasy.com/docs/mcp).

## Running locally

Run `./zero` until it succeeds. This script is what you use to run the dashboard and services for local development. It installs dependencies, runs pending database migrations, and starts everything up.

The main dependencies are [Mise](https://mise.jdx.dev/) and [Docker](https://www.docker.com/). The `./zero` script will guide you to install these if they are not found.

Seed your local organization with a realistic working environment — a deployed API, agent sessions, telemetry, risk findings, teammates, and an API key:

```bash
mise seed
```

It talks to the databases directly, so it can run before the services are up, and re-running it resets the seeded data.

To work on several branches at once, each git worktree can run its own full stack on its own ports:

```bash
wt switch --create my-feature
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more detail on local development, auth, worktrees, and the CLI.

## Contributing

Contributions are welcome! Please open an issue or discussion for questions or suggestions before starting significant work.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and detailed contribution guidelines.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/) — dashboard language.
- [Golang](https://go.dev/) — backend language.
- [Goa](https://github.com/goadesign/goa) — design-first API framework.
- [Temporal](https://temporal.io/) — workflow engine.
- [Polar](https://polar.sh/) — usage-based billing.
- [OpenRouter](https://openrouter.ai/) — LLM gateway.
- [Speakeasy](https://www.speakeasy.com/) — generated SDKs. Spec hosted [here](https://app.getgram.ai/openapi.yaml).

## Contributors

<a href="https://github.com/speakeasy-api/gram/graphs/contributors">
  <img alt="Gram contributors" src="https://contrib.rocks/image?repo=speakeasy-api/gram" />
</a>

<hr />
<br />

<p align="left">
  <a href="https://speakeasy.com/"><img alt="Built by Speakeasy" src="https://www.speakeasy.com/assets/badges/built-by-speakeasy.svg" /></a>
</p>

