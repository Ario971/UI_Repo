---
id: "input-output-hk/agent-peer-review"
name: "input-output-hk/agent-peer-review"
url: "https://github.com/input-output-hk/agent-peer-review"
date: "2026-08-21"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 45
risk: 32
integration_effort: 44
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.294,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"},{"title":"Show HN: Parley – your coding agent can talk to a teammate's agent","date":"2026-08-11","topic":"AI agents","similarity":0.293,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-11/06-show-hn-parley-your-coding-agent-can-talk-to-a-teammate-s-agent.md"},{"title":"LamsonRetail/lsr-agent-platform","date":"2026-08-18","topic":"AI dev tools","similarity":0.259,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-18/13-lamsonretail-lsr-agent-platform.md"}]
pros: ["Recently updated (2026-08-21)","Apache-2.0 license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 85
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: [{"name":"package.json","summary":"deps @modelcontextprotocol/sdk, @octokit/plugin-retry, @octokit/plugin-throttling, @octokit/rest, commander, zod, zod-to-json-schema, @types/node; scripts build, typecheck, typecheck:test, pretest, test, gen:schemas, check:schemas, check:version"}]
install_commands: ["npm i -g @input-output-hk/agent-review","npm install && npm test && npm run build"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# input-output-hk/agent-peer-review

The skills and mpc to setup AI agents peer review process

URL: https://github.com/input-output-hk/agent-peer-review

## Why it matters
You saved an article on 2026-08-10 about AI agents; this candidate overlaps with "Show HN: Keen Code – an agentic-engineered coding agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-21)
+ Apache-2.0 license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- package.json: deps @modelcontextprotocol/sdk, @octokit/plugin-retry, @octokit/plugin-throttling, @octokit/rest, commander, zod, zod-to-json-schema, @types/node; scripts build, typecheck, typecheck:test, pretest, test, gen:schemas, check:schemas, check:version

Install commands found:
- npm i -g @input-output-hk/agent-review
- npm install && npm test && npm run build

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# agent-peer-review

Minimal asynchronous PR-review workflow over GitHub for AI agents (Claude Desktop, Codex, pi.dev). One TypeScript package exposes a **CLI** (primary) and an **MCP server** (secondary) over a shared core. **GitHub is the source of truth**: the `ai-review` label + a native review request route a PR to an engineer's agent, a claim-marker comment pins the reviewed commit SHA, and completion posts a native PR review.

## Install

```bash
# ~/.npmrc: @input-output-hk:registry=https://npm.pkg.github.com  (+ read:packages token)
npm i -g @input-output-hk/agent-review
```

Then run `agent-review init --repo owner/name` for a guided setup: it authenticates against GitHub, writes `~/.agent-peer-review/config.json`, bootstraps the `ai-review` label profile, and prints an MCP config snippet. See [`AGENTS.md`](AGENTS.md) for the full install contract, including what an AI agent needs to install and configure this on its own.

## Use

```bash
agent-review labels bootstrap --repo input-output-hk/some-repo
agent-review request --repo input-output-hk/some-repo --pr 42 --reviewers yshyn-iohk --skills security,api
agent-review list --repo input-output-hk/some-repo
agent-review claim --repo input-output-hk/some-repo --pr 42
agent-review complete --repo input-output-hk/some-repo --pr 42 --event comment --summary "LGTM"
```

MCP hosts: `{ "command": "npx", "args": ["-y", "@input-output-hk/agent-review", "serve"] }`.

## Expedition taskflows

Three [pi-taskflow](https://www.npmjs.com/package/pi-taskflow) flows sweep your repositories on demand: `pr-requester` moves your own pull requests forward, `pr-reviewer` works the reviews requested from you, and `pr-steward` handles bot dependency upgrades. All three are **propose-only by default**: the agent comments what it would do and merges nothing unless you opt in per invocation. See [Expedition taskflows](docs/taskflows.md).

## Panel reviews

Multiple requested reviewers now run as a concurrent panel: the earliest to claim is the anchor and posts the primary review, and every other claimant is an enricher that adds one consolidated second opinion once the primary lands. See [Panel review (multiple reviewers)](docs/lifecycle.md#panel-review-multiple-reviewers) for the full flow.

## Docs

Full documentation: **https://input-output-hk.github.io/agent-peer-review/**

> Repo setup (one-time): **Settings → Pages → Source → GitHub Actions** to enable the docs site.

## Develop

```bash
npm install && npm test && npm run build
```

Architecture decisions are recorded as ADRs under [`docs/adr/`](docs/adr/) (rendered in the docs site under "Architecture Decisions").

## License

Apache-2.0.

