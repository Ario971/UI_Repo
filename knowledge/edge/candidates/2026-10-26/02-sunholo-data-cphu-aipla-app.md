---
id: "sunholo-data/cphu-aipla-app"
name: "sunholo-data/cphu-aipla-app"
url: "https://github.com/sunholo-data/cphu-aipla-app"
date: "2026-10-26"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 79
momentum: 45
risk: 32
integration_effort: 32
expected_gain: 87
composite: 71
replacement_target: ""
related_articles: [{"title":"Show HN: Seodata.dev (1.1) Free search data for AI agents","date":"2026-10-11","topic":"AI agents","similarity":0.223,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-11/06-show-hn-seodata-dev-1-1-free-search-data-for-ai-agents.md"},{"title":"Show HN: Jevcrawl – A web crawler for AI agents with no LLM in the crawl loop","date":"2026-10-13","topic":"AI agents","similarity":0.222,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-13/06-show-hn-jevcrawl-a-web-crawler-for-ai-agents-with-no-llm-in-the-crawl-.md"},{"title":"Skill-Based AI Agents for Power-System Studies","date":"2026-09-30","topic":"AI agents","similarity":0.221,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-30/07-skill-based-ai-agents-for-power-system-studies.md"}]
pros: ["Recently updated (2026-10-26)","Apache-2.0 license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["README mentions telemetry/analytics"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 1
dependency_files: []
install_commands: ["npm run check:project-content"]
risk_flags: ["README mentions telemetry/analytics"]
status: "new"
---

# sunholo-data/cphu-aipla-app

AI for Physics Based Learning

URL: https://github.com/sunholo-data/cphu-aipla-app

## Why it matters
You saved an article on 2026-10-11 about AI agents; this candidate overlaps with "Show HN: Seodata.dev (1.1) Free search data for AI agents" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-26)
+ Apache-2.0 license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- README mentions telemetry/analytics

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- npm run check:project-content

Risk flags:
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# AIPLA — AI in Physics Learning and Assessment

Execution repo for **AIPLA**, a technical-infrastructure contract for the
University of Copenhagen Center for Digital Education: AI physics tutors,
interactive sims, and teacher/researcher tooling for upper-secondary physics.

Repo: `sunholo-data/cphu-aipla-app` · Default & working branch: **`dev`**.

> Built on the open-source **AI Protocol Platform** template (Skills + AG-UI +
> A2UI + MCP Apps + A2A on Google ADK). Some inherited files still say "Aitana
> Platform v6" — the AIPLA reality is authoritative. See [CLAUDE.md](CLAUDE.md).

## Run it locally (no GCP credentials)

```bash
cp .env.example backend/.env      # then set LOCAL_MODE=1
cd backend && make install && cd ..
make dev                          # frontend :3456 · backend :1956
```

Open **<http://localhost:3456>** — you get a yellow LOCAL_MODE banner and working
demo skills, with Firestore/Firebase/Vertex all stubbed in-memory. Full walkthrough
and the cloud tiers: [WORKSHOP.md](WORKSHOP.md).

## Where things are

| | |
|---|---|
| `frontend/` | Next.js 15 + React 19 + Tailwind (chat, teacher, researcher surfaces) |
| `backend/` | FastAPI + Google ADK (skills, agents, protocols, auth, analytics) |
| `cli/` | the `aiplatform` CLI (`make cli-install`) |
| `infrastructure/` | mcp-sandbox (sim iframes) + Terraform |
| `docs/design/` | design docs — **start at [docs/design/README.md](docs/design/README.md)** |

## Where the design lives

- **Execution design** (file paths, wire shapes, acceptance) → this repo,
  [`docs/design/aipla/SEQUENCE.md`](docs/design/aipla/SEQUENCE.md).
- **Public project information** → the app's native `/project` pages, authored
  as reviewed English Markdown in `frontend/content/project/`. Each page has a
  named owner, status, and next-review date; `npm run check:project-content`
  checks those fields and internal links before deployment.
- **Historical product and pedagogical scoping material** → the separate AIPLA
  Quarto repository. It remains an archive and redirect source during cutover,
  not the maintained public source of truth.
- **Working with this repo as an AI agent** → [CLAUDE.md](CLAUDE.md) is the
  authoritative context (identity, gotchas, footguns, ports).

## Common commands

```bash
make dev                              # local dev servers (:3456 / :1956)
make seed ENV=dev                     # push SKILL.md templates to Firestore (manual, post-deploy)
cd frontend && npm run quality:check  # CI parity: lint + typecheck + tests + build
cd backend && make lint && make test-fast
```

See the [Makefile](Makefile) (`make help`) for the full target list and
[CLAUDE.md](CLAUDE.md) for the development workflow.

