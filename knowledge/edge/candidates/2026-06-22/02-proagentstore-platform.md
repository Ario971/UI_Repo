---
id: "proagentstore/platform"
name: "ProAgentStore/platform"
url: "https://github.com/ProAgentStore/platform"
date: "2026-06-22"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 84
momentum: 45
risk: 40
integration_effort: 48
expected_gain: 87
composite: 69
replacement_target: ""
related_articles: [{"title":"Show HN: Cost.dev (YC W21) – making agents cost-aware and cheaper to call","date":"2026-06-04","topic":"AI agents","similarity":0.296,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-04/09-show-hn-cost-dev-yc-w21-making-agents-cost-aware-and-cheaper-to-call.md"},{"title":"gHashTag/trios-mcp-rag","date":"2026-05-23","topic":"AI agents","similarity":0.259,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-23/53-ghashtag-trios-mcp-rag.md"},{"title":"Show HN: Dari-docs – Optimize your docs using parallel coding agents","date":"2026-05-20","topic":"AI agents","similarity":0.23,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-20/14-show-hn-dari-docs-optimize-your-docs-using-parallel-coding-agents.md"}]
pros: ["Recently updated (2026-06-22)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps @biomejs/biome, @playwright/test, typescript, vitest; scripts build, typecheck, test, test:e2e, test:e2e:headed, test:watch, lint, format"}]
install_commands: ["npx @proagentstore/cli init my-agent --template worker","pnpm install && pnpm dev","npx @proagentstore/cli publish","codex mcp add proagentstore --url https://mcp.proagentstore.online/mcp","codex mcp list","codex mcp login proagentstore"]
risk_flags: ["README mentions credentials or API tokens","README mentions telemetry/analytics"]
status: "new"
---

# ProAgentStore/platform

SDK + CLI + compliance + backend for server-powered AI agents on proagentstore.online

URL: https://github.com/ProAgentStore/platform

## Why it matters
You saved an article on 2026-06-04 about AI agents; this candidate overlaps with "Show HN: Cost.dev (YC W21) – making agents cost-aware and cheaper to call" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-22)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps @biomejs/biome, @playwright/test, typescript, vitest; scripts build, typecheck, test, test:e2e, test:e2e:headed, test:watch, lint, format

Install commands found:
- npx @proagentstore/cli init my-agent --template worker
- pnpm install && pnpm dev
- npx @proagentstore/cli publish
- codex mcp add proagentstore --url https://mcp.proagentstore.online/mcp
- codex mcp list
- codex mcp login proagentstore

Risk flags:
- README mentions credentials or API tokens
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# ProAgentStore Platform

Marketplace for server-powered AI agents. Creators build agent templates, clients subscribe and run them on their own data.

**Store:** https://proagentstore.online
**API:** https://api.proagentstore.online
**MCP:** https://mcp.proagentstore.online/mcp
**Console:** https://proagentstore.online/console/
**GitHub:** https://github.com/ProAgentStore
**Free pair:** https://freeagentstore.online

## What's in here

```
platform/
├── packages/sdk/     Internal TypeScript SDK for agents
├── packages/cli/     @proagentstore/cli — init, check, publish, MCP proxy, local runtime
├── packages/browser-runner/ FAGS Playwright browser runtime bundled into the CLI
├── workers/api/      Hono API worker (auth, agents, instances, keys, analytics)
├── workers/host/     Marketing site + console + widget
├── workers/mcp/      MCP server for Codex, Claude Code, Cursor, and VS Code
├── store/            Source HTML for all pages
├── skills/           Open Agent Skills source files
├── plugins/          Codex and Claude plugin wrappers
├── agents/           5 flagship agents (site-monitor, lead-qualifier, etc.)
└── templates/        Agent scaffolding (worker, cron, api)
```

## Agent types

| Type | Template | What it does |
|---|---|---|
| **Agent** | `worker` | Full AI: conversation, memory, knowledge base, 10 tools, Workers AI |
| **Worker** | `cron` | Scheduled tasks: daily digests, monitoring, batch processing |
| **Tool** | `api` | Stateless endpoint: transform, generate, analyze |

## Quick start

### Use an agent
```bash
# Try any published agent — no sign-up needed
curl -X POST https://api.proagentstore.online/v1/public/agents/chatbot/try \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello!"}'
```

### Build an agent
```bash
npx @proagentstore/cli init my-agent --template worker
cd my-agent
pnpm install && pnpm dev
npx @proagentstore/cli publish
```

### SDK
```typescript
import { initPro } from '@proagentstore/sdk'

const agent = initPro({ agentId: 'your-id', token: 'your-token' })
const { response } = await agent.chat('Hello!')
```

### Embed widget
```html
<script src="https://proagentstore.online/widget.js"
  data-agent="chatbot" data-theme="dark"></script>
```

### MCP
```bash
codex mcp add proagentstore --url https://mcp.proagentstore.online/mcp
codex mcp list
# If the server shows "Not logged in":
codex mcp login proagentstore

claude mcp add --transport http proagentstore https://mcp.proagentstore.online/mcp
claude mcp list

npx mcp-remote https://mcp.proagentstore.online/mcp
npx @proagentstore/cli mcp
```

MCP has two runtime modes:

- `chat_with_agent` calls the public trial endpoint. Use it for discovery and smoke tests.
- `subscribe_agent` creates your private instance, then `chat_with_instance` runs that instance with your own state, knowledge, and caller-provided AI credentials.

Typical user run:

```text
list_agents -> subscribe_agent -> my_instances -> add_instance_knowledge -> chat_with_instance
```

The expected response when user-owned AI credentials are missing is:

```text
Add your Cloudflare Workers AI account ID and API token before running this agent.
```

That means the instance runtime path is working and correctly refusing to bill the platform AI account. See [MCP Instance Runtime](docs/mcp-instance-runtime.md) for the full tool map, live test record, and OAuth troubleshooting.

The full MCP-first developer surface is documented at:

- https://proagentstore.online/docs/mcp/
- [docs/mcp.md](docs/mcp.md)
- [server.json](server.json)
- [.mcp.json](.mcp.json)
- [AGENTS.md](AGENTS.md)

MCP safety is enforced server-side. OAuth supports `read`, `write`, `runtime`, and `destructive` scopes; `MCP_READ_ONLY=1` forces read-only mode; mutating tools support `dry_run` where useful; overwrite/destructive tools require exact `confirm` values; and `mcp_audit_log` exposes recent MCP write, runtime, dry-run, denied, and destructive events.

### FAGS browser runtime

Browser-capable agents use PAGS as the control-plane brain and FAGS as the browser runtime/tool executor. Users install one public package, `@proagentstore/cli`; the FAGS Playwright runtime is bundled into it.

```text
PAGS control plane / MCP
  -> task, auth, approval, audit
FAGS browser runtime
  -> Playwright, local files, browser profile
Real browser
  -> job boards, uploads, receipts
```

```bash
npm install -g @proagentstore/cli
pags runner start --port 49171 --token "$PAGS_RUNNER_TOKEN" --instance-id "$PAGS_INSTANCE_ID"
pags runner status --token "$PAGS_RUNNER_TOKEN" --instance-id "$PAGS_INSTANCE_ID"
pags runner task --type echo --input '{"ok":true}' --token "$PAGS_RUNNER_TOKEN" --instance-id "$PAGS_INSTANCE_ID"
```

Current local runtime mode uses a registered HTTPS endpoint. `runner connect` starts the FAGS runtime with a token and instance binding, opens a Cloudflare quick tunnel, and registers only the tunnel URL plus token with PAGS. Runtime registration is instance-scoped: PAGS stores the endpoint and encrypted runner token, then MCP/API proxy task calls to the runtime with `X-PAGS-Instance-Id`.

```bash
pags runner connect "$PAGS_INSTANCE_ID" --pags-token "$PAGS_TOKEN" --headless
```

`runner connect` is the current shipped local mode. It is the cheapest usable path today, but the target cheapest best-practice mode is outbound polling from the FAGS runtime to PAGS so the user's machine does not need a public tunnel. Manual setup is still available when you want to use a stable named tunnel:

```bash
pags runner register "$PAGS_INSTANCE_ID" \
  --endpoint-url "$PAGS_RUNNER_ENDPOINT" \
  --runner-token "$PAGS_RUNNER_TOKEN" \
  --pags-token "$PAGS_TOKEN" \
  --probe
pags runner runtime "$PAGS_INSTANCE_ID" --pags-token "$PAGS_TOKEN" --probe
pags runner run "$PAGS_INSTANCE_ID" --type echo --input '{"ok":true}' --pags-token "$PAGS_TOKEN"
```

The rentable job application agent uses the `job.apply_basic` runner task for basic resume-upload forms. The task is approval-gated and runs on the user's FAGS browser runtime:

```bash
pags runner run "$PAGS_INSTANCE_ID" \
  --type job.apply_basic \
  --input '{"url":"https://example.com/jobs/123","resumePath":"/Users/me/resume.pdf","candidate":{"fullName":"Sam Candidate","email":"sam@example.com"},"coverNote":"I am interested in this role."}' \
  --pags-token "$PAGS_TOKEN"
pags runner approve-task "$PAGS_INSTANCE_ID" "$TASK_ID" --pags-token "$PAGS_TOKEN"
```

```text
subscribe_agent -> register_instance_runtime -> instance_runtime_status(probe: true) -> run_instance_task -> approve_instance_task -> instance_task_events
```

The browser runtime MCP tools are `register_instance_runtime`, `instance_runtime_status`, `unregister_instance_runtime`, `run_instance_task`, `approve_instance_task`, `cancel_instance_task`, and `instance_task_events`.

The Console also shows FAGS runtime work as a kanban-style runtime board: open `Console -> My Instances -> <instance> -> Runtime` to see queued, running, approval-gated, blocked, completed, and cancelled tasks plus recent runtime events.

### Skills and plugins

ProAgentStore publishes skills through platform-specific plugin marketplaces so users can find them from both Codex and Claude Code.

Codex:

```bash
codex plugin marketplace add ProAgentStore/platform
```

Claude Code:

```text
/plugin marketplace add ProAgentStore/platform
/plugin install proagentstore@proagentstore
/reload-plugins
```

See [Skill Publishing](docs/skill-publishing.md) for the publishing layout, marketplace files, and dual Codex/Claude release checklist.

Public discovery pages:

- https://proagentstore.online/skills/
- https://proagentstore.online/skills/proagentstore-mcp-operator/
- https://proagentstore.online/llms.txt
- https://proagentstore.online/llms-full.txt
- https://proagentstore.online/skills.json

## Flagship agents

| Agent | Type | Description |
|---|---|---|
| site-monitor | Worker | Hourly URL change detection + webhook alerts |
| lead-qualifier | Agent | AI lead scoring from webhook submissions |
| content-pipeline | Worker | Daily AI content generation to R2 |
| competitor-intel | Worker | Daily competitor tracking + AI briefings |
| support-escalator | Agent | Ticket triage + auto-response + daily summary |

## Part of the FreeStore ecosystem

| Store | URL | Product |
|---|---|---|
| FreeAppStore | freeappstore.online | PWA apps |
| FreeGameStore | freegamestore.online | Browser games |
| FreeWebStore | freewebstore.online | AI-built sites |
| FreeAgentStore | freeagentstore.online | Browser AI tools |
| ProAppStore | proappstore.online | Paid apps |
| **ProAgentStore** | **proagentstore.online** | **Server AI agents** |

## License

MIT

