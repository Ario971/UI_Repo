---
id: "mozilla-ai/otari"
name: "mozilla-ai/otari"
url: "https://github.com/mozilla-ai/otari"
date: "2026-09-11"
source: "GitHub Trending"
category: "github_discovery"
kind: "ai_dev_tool"
compatibility: 80
momentum: 97
risk: 40
integration_effort: 56
expected_gain: 69
composite: 73
replacement_target: ""
related_articles: [{"title":"Show HN: Open tool for testing your AI Agents (No LLM)","date":"2026-08-28","topic":"AI agents","similarity":0.316,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-28/06-show-hn-open-tool-for-testing-your-ai-agents-no-llm.md"},{"title":"doudouli103-dot/tenx-ai-gateway","date":"2026-08-30","topic":"AI dev tools","similarity":0.293,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-30/13-doudouli103-dot-tenx-ai-gateway.md"},{"title":"Show HN: Itsuki – open-source memory engine for AI agents (API and MCP)","date":"2026-08-29","topic":"AI agents","similarity":0.234,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-29/06-show-hn-itsuki-open-source-memory-engine-for-ai-agents-api-and-mcp.md"}]
pros: ["Recently updated (2026-09-11)","Apache-2.0 license","452 GitHub stars","GitHub Actions/CI detected"]
cons: ["Integration may take more than a quick install","README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 4
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps requires, build-backend, name, version, description, requires-python, dependencies, any-guardrail"}]
install_commands: ["docker run --rm -p 8000:8000 \\","git clone https://github.com/mozilla-ai/otari","docker compose pull","docker compose up -d","docker compose --profile code-exec --profile web-search --profile guardrails up -d","uv sync --dev"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# mozilla-ai/otari

Open-source, OpenAI-compatible LLM gateway you run yourself. One endpoint for 40+ providers, with virtual keys, budgets, and usage tracking.

URL: https://github.com/mozilla-ai/otari

## Why it matters
You saved an article on 2026-08-28 about AI agents; this candidate overlaps with "Show HN: Open tool for testing your AI Agents (No LLM)" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-11)
+ Apache-2.0 license
+ 452 GitHub stars
+ GitHub Actions/CI detected

## Cons
- Integration may take more than a quick install
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 4

Dependency files:
- pyproject.toml: python project; deps requires, build-backend, name, version, description, requires-python, dependencies, any-guardrail

Install commands found:
- docker run --rm -p 8000:8000 \
- git clone https://github.com/mozilla-ai/otari
- docker compose pull
- docker compose up -d
- docker compose --profile code-exec --profile web-search --profile guardrails up -d
- uv sync --dev

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<p align="center">
  <img src="assets/otari-logo.svg" width="320" alt="Otari logo"/>
</p>

<div align="center">

**An OpenAI-compatible LLM gateway you own and run.**

Route one endpoint to 40+ providers, issue virtual keys, enforce budgets, and
track usage.

[![Tests](https://github.com/mozilla-ai/otari/actions/workflows/otari-tests.yml/badge.svg)](https://github.com/mozilla-ai/otari/actions/workflows/otari-tests.yml)
[![Lint](https://github.com/mozilla-ai/otari/actions/workflows/otari-lint.yml/badge.svg)](https://github.com/mozilla-ai/otari/actions/workflows/otari-lint.yml)
[![Typecheck](https://github.com/mozilla-ai/otari/actions/workflows/otari-typecheck.yml/badge.svg)](https://github.com/mozilla-ai/otari/actions/workflows/otari-typecheck.yml)
[![Docker](https://github.com/mozilla-ai/otari/actions/workflows/otari-docker.yml/badge.svg)](https://github.com/mozilla-ai/otari/actions/workflows/otari-docker.yml)
![Python 3.13+](https://img.shields.io/badge/python-3.13%2B-blue.svg)

[Docs](docs/index.md) · [otari.ai](https://otari.ai) ·
[Launch blog](https://blog.mozilla.ai/otari-own-your-ai-stack/) ·
[Discord](https://discord.gg/ZfZPfTdtSe)

</div>

<p align="center">
  <img src="assets/otari-demo.gif" width="720" alt="Otari dashboard showing usage, providers, models, users, budgets, and API keys"/>
</p>

Otari sits between your applications and model providers. It authenticates
requests, resolves provider credentials, enforces budgets before dispatch, and
records usage afterwards. Provider calls go through
[any-llm](https://github.com/mozilla-ai/any-llm).

Run Otari standalone with your own database and provider keys, or connect a data
plane to [otari.ai](https://otari.ai).

## Why Otari

- One OpenAI and Anthropic-compatible endpoint for many providers
- Provider credentials stay behind the gateway
- Revocable API keys with user, workspace, and model scope
- Budget checks before spend and usage records after settlement
- Local routing policies for failover, weighting, and learned selection
- Optional code execution, web search, MCP, guardrails, and file understanding

## Quickstart

Run an ephemeral standalone gateway with Docker:

```bash
docker run --rm -p 8000:8000 \
  -e OTARI_MASTER_KEY=SET_A_MASTER_KEY \
  -e OPENAI_API_KEY=YOUR_OPENAI_KEY \
  -e OTARI_CONFIG_YAML='default_pricing: true' \
  mzdotai/otari:latest \
  otari serve
```

On the first empty database, Otari creates an API key and prints it once:

```text
No API keys found. Created bootstrap key for first run. Save this key now:
gw-...
```

Send a request with that key:

```bash
curl http://localhost:8000/api/v1/chat/completions \
  -H "Authorization: Bearer gw-..." \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai:gpt-4o-mini",
    "messages": [{"role": "user", "content": "Say hello."}]
  }'
```

OpenAI clients work by setting `base_url` to
`http://localhost:8000/api/v1`.

This container uses SQLite inside the container and is deleted when it stops.
Use the Compose setup below for persistent data.

## Run the full stack

```bash
git clone https://github.com/mozilla-ai/otari
cd otari
cp config.example.yml config.yml
# Set a master key, provider credentials, and pricing in config.yml.
docker compose pull
docker compose up -d
```

Compose runs Otari with PostgreSQL. Optional profiles add the code sandbox,
web search, and guardrail services:

```bash
docker compose --profile code-exec --profile web-search --profile guardrails up -d
```

The dashboard is served at `http://localhost:8000/`. To store provider keys
through the dashboard, set `OTARI_SECRET_KEY` to a Fernet key generated by
`otari gen-secret-key`.

One-click deployment templates are available for
[Render](deploy/render/README.md) and [Railway](deploy/railway/README.md).

## Runtime modes

| Mode | Purpose |
| --- | --- |
| Standalone | One process serves management and inference using local storage. |
| Hosted | A multi-tenant control plane; inference runs on connected gateways. |
| Hybrid | A data-plane gateway resolves credentials and reports usage to otari.ai. |

When `OTARI_MODE` is unset, `OTARI_AI_TOKEN` selects hybrid mode; otherwise
Otari defaults to standalone. See [Runtime modes](docs/modes.md).

## API and dashboard

The core completion routes are:

- `POST /api/v1/chat/completions`
- `POST /api/v1/messages`
- `POST /api/v1/responses`

Standalone also serves the broader OpenAI-compatible and management APIs. The
running server publishes Swagger UI at `/api/v1/docs` and OpenAPI at
`/api/v1/openapi.json`. See [API reference](docs/api-reference.md).

The dashboard manages providers, models, routing, tools, keys, members, budgets,
settings, activity, and usage. Its navigation adapts to the deployment mode and
the signed-in person's authority. See [Admin dashboard](docs/dashboard.md).

## Development

```bash
git clone https://github.com/mozilla-ai/otari
cd otari
uv sync --dev
cp config.example.yml config.yml
uv run otari serve --config config.yml
```

For local development without PostgreSQL, change `database_url` to
`sqlite+aiosqlite:///./otari.db`.

Common checks:

```bash
make test
make lint
make typecheck
pnpm --dir web run lint
```

See [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Documentation

- [Quickstart](docs/quickstart.md)
- [Deployment](docs/deployment.md)
- [Configuration](docs/configuration.md)
- [Models](docs/models.md)
- [Routing](docs/routing.md)
- [Access control](docs/access-control.md)
- [Built-in tools](docs/tools.md)
- [SDK and agent integrations](docs/index.md#for-integrators)
- [Architecture](ARCHITECTURE.md)

## License

Apache 2.0. See [LICENSE](LICENSE).

