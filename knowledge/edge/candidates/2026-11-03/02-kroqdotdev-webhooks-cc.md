---
id: "kroqdotdev/webhooks-cc"
name: "kroqdotdev/webhooks-cc"
url: "https://github.com/kroqdotdev/webhooks-cc"
date: "2026-11-03"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 52
risk: 40
integration_effort: 60
expected_gain: 87
composite: 71
replacement_target: ""
related_articles: [{"title":"Skill-Based AI Agents for Power-System Studies","date":"2026-09-30","topic":"AI agents","similarity":0.248,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-30/07-skill-based-ai-agents-for-power-system-studies.md"},{"title":"AIBeginnerX/oh-our-pi-desktop","date":"2026-10-20","topic":"AI dev tools","similarity":0.231,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-10-20/11-aibeginnerx-oh-our-pi-desktop.md"},{"title":"My Credentials, Please: Detecting Filesystem Capability Laundering in MCP Servers at Scale","date":"2026-10-15","topic":"AI agents","similarity":0.212,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-15/08-my-credentials-please-detecting-filesystem-capability-laundering-in-mc.md"}]
pros: ["Recently updated (2026-11-03)","AGPL-3.0 license","2 GitHub stars","GitHub Actions/CI detected"]
cons: ["Integration may take more than a quick install","README includes remote script execution pattern","README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps @edge-runtime/vm, @eslint/js, @next/eslint-plugin-next, @types/node, eslint, eslint-config-prettier, eslint-plugin-react, eslint-plugin-react-hooks; scripts dev, dev:web, build, lint, lint:fix, format, format:check, test"}]
install_commands: ["npm install @webhooks-cc/sdk","claude mcp add -s user webhooks-cc -e WHK_API_KEY=whcc_... -- npx -y @webhooks-cc/mcp","npx @webhooks-cc/mcp setup cursor --api-key whcc_..."]
risk_flags: ["README includes remote script execution pattern","README mentions credentials or API tokens"]
status: "new"
---

# kroqdotdev/webhooks-cc

Webhook inspection and testing service

URL: https://github.com/kroqdotdev/webhooks-cc

## Why it matters
You saved an article on 2026-09-30 about AI agents; this candidate overlaps with "Skill-Based AI Agents for Power-System Studies" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-11-03)
+ AGPL-3.0 license
+ 2 GitHub stars
+ GitHub Actions/CI detected

## Cons
- Integration may take more than a quick install
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps @edge-runtime/vm, @eslint/js, @next/eslint-plugin-next, @types/node, eslint, eslint-config-prettier, eslint-plugin-react, eslint-plugin-react-hooks; scripts dev, dev:web, build, lint, lint:fix, format, format:check, test

Install commands found:
- npm install @webhooks-cc/sdk
- claude mcp add -s user webhooks-cc -e WHK_API_KEY=whcc_... -- npx -y @webhooks-cc/mcp
- npx @webhooks-cc/mcp setup cursor --api-key whcc_...

Risk flags:
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# webhooks.cc

Inspect and debug webhooks without deploying to production.

Get a unique URL, point your webhook there, and see every request in real-time. No signup required.

**[Try it now →](https://webhooks.cc)**

## Getting Started

1. Visit [webhooks.cc](https://webhooks.cc)
2. Copy your unique webhook URL
3. Send a test request: `curl -X POST https://go.webhooks.cc/w/<slug> -d '{"test": true}'`
4. Watch it appear in the dashboard

## Features

- **Capture requests** — Store incoming webhooks with headers, body, query params, and metadata
- **Inspect in real-time** — See requests the moment they arrive via WebSocket
- **Configure responses** — Return custom status codes, headers, and body for testing error paths
- **Forward to localhost** — Tunnel webhooks to your local server during development
- **CLI with interactive TUI** — Manage endpoints, tunnel, and stream requests from your terminal
- **TypeScript SDK** — Access webhook data programmatically for automation and testing
- **MCP server** — Connect AI coding agents (Claude Code, Cursor, VS Code, Codex) to your webhooks

## Use Cases

**Testing payment integrations** — Point Stripe's test webhooks at your endpoint. Inspect the payload structure before writing handlers.

**Debugging CI/CD hooks** — See exactly what GitHub sends when a push, PR, or deployment occurs.

**Developing locally** — Forward production-like webhooks to localhost without exposing your machine to the internet.

**Mocking failure scenarios** — Configure your endpoint to return 500 errors and test your retry logic.

## Pricing

**Free** — 50 requests/day, 7-day data retention. Enough for development and testing.

**Pro ($8/month)** — 100,000 requests/month, 30-day retention. For production monitoring and high-volume testing.

See [webhooks.cc](https://webhooks.cc) for details.

## Install

### CLI

```bash
curl -fsSL https://webhooks.cc/install.sh | sh
# or
brew install kroqdotdev/tap/whk
# without root: any directory you can write to (created when missing)
curl -fsSL https://webhooks.cc/install.sh | WHK_INSTALL_DIR="$HOME/.local/bin" sh
```

With `WHK_INSTALL_DIR`, put that directory on your `PATH` (the installer prints the line to add) before running `whk`.

Then launch interactive terminal:

```bash
whk
```

### SDK

```bash
npm install @webhooks-cc/sdk
```

### MCP server

```bash
# Claude Code
claude mcp add -s user webhooks-cc -e WHK_API_KEY=whcc_... -- npx -y @webhooks-cc/mcp

# Cursor, VS Code, Devin Desktop (formerly Windsurf), Claude Desktop
npx @webhooks-cc/mcp setup cursor --api-key whcc_...
```

See [webhooks.cc/installation](https://webhooks.cc/installation) for all install methods, one-click buttons, and setup guides.

## CLI

Run `whk` to launch the interactive TUI:

```
$ whk

  webhooks.cc

  ● Logged in as you@example.com

  ▸ Tunnel    Forward webhooks to localhost
    Listen    Stream incoming requests
    Create    Create a new endpoint
    Endpoints Manage your endpoints
    Auth      Login / logout
    Update    Check for updates
```

All commands also work directly from the command line:

```bash
whk tunnel 8080                       # Forward webhooks to localhost:8080
whk listen <slug>                     # Stream incoming requests
whk create my-endpoint                # Create a new endpoint
whk list                              # List your endpoints
whk replay <request-id> --to :3000    # Replay a captured request
```

Pass `--nogui` or set `WHK_NOGUI=1` to skip the TUI and print help.

## SDK

```typescript
import { WebhooksCC, matchMethod, matchHeader, matchAll } from "@webhooks-cc/sdk";

const client = new WebhooksCC({ apiKey: "whcc_..." });

const endpoint = await client.endpoints.create({ name: "my-webhook" });
console.log(endpoint.url);

// Wait for a matching request with human-readable timeout
const req = await client.requests.waitFor(endpoint.slug, {
  timeout: "30s",
  match: matchAll(matchMethod("POST"), matchHeader("stripe-signature")),
});

// Replay captured requests to your local server
await client.requests.replay(req.id, "http://localhost:3000/webhooks");
```

## MCP server

The `@webhooks-cc/mcp` package exposes 48 tools that let AI agents manage endpoints, inspect webhooks, send test payloads, and replay requests through natural language.

```
You: "Create a webhook endpoint for testing Stripe"
Agent: Created endpoint "stripe-test" at https://go.webhooks.cc/w/abc123

You: "Send a test checkout.session.completed event"
Agent: Sent POST to stripe-test

You: "Replay that to my local server"
Agent: Replayed to http://localhost:3000/webhooks — 200 OK
```

See [`packages/mcp/README.md`](packages/mcp/README.md) for full setup and tool reference.

## Open Source

The source is available for transparency and community contributions, not as a deployment guide. To contribute, see [CONTRIBUTING.md](CONTRIBUTING.md).

For compliance or air-gapped environments, the code is here. For most use cases, the hosted service at [webhooks.cc](https://webhooks.cc) is the easier path.

## License

This project uses a split license:

- **AGPL-3.0**: the web app, receiver, email-capture SMTP host, and Supabase backend (`apps/web/`, `apps/receiver-rs/`, `apps/mx-rs/`, `supabase/`). See [LICENSE](LICENSE).
- **MIT**: the CLI, SDK, and MCP server (`apps/cli-rs/`, `packages/sdk/`, `packages/mcp/`). See their respective `LICENSE` files.

If you use the CLI, SDK, or MCP server in your own projects, MIT applies. If you fork and host the service, AGPL-3.0 applies.

