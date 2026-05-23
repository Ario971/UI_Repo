---
id: "0sec-labs/pwnkit"
name: "0sec-labs/pwnkit"
url: "https://github.com/0sec-labs/pwnkit"
date: "2026-05-23"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 80
momentum: 74
risk: 50
integration_effort: 60
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"bastion-soft/bastion-prompt-protection","date":"2026-05-21","topic":"AI agents","similarity":0.212,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-21/28-bastion-soft-bastion-prompt-protection.md"}]
pros: ["Recently updated (2026-05-23)","30 GitHub stars","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["License was not clearly detected by GitHub","Integration may take more than a quick install","README includes remote script execution pattern"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps @types/pdfkit, drizzle-orm, node-sqlite3-wasm, pdfkit, @types/node, esbuild; scripts build, build:bundle, dev, lint, test, test:launcher, bench, bench:quick"}]
install_commands: ["npx pwnkit-cli scan --target https://example.com","docker run --rm -e OPENROUTER_API_KEY=$KEY \\","git clone https://github.com/0sec-labs/pwnkit.git","pnpm run build"]
risk_flags: ["README includes remote script execution pattern"]
status: "new"
---

# 0sec-labs/pwnkit

The leading research-backed autonomous pentesting engine for all software.

URL: https://github.com/0sec-labs/pwnkit

## Why it matters
You saved an article on 2026-05-21 about AI agents; this candidate overlaps with "bastion-soft/bastion-prompt-protection" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-05-23)
+ 30 GitHub stars
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- License was not clearly detected by GitHub
- Integration may take more than a quick install
- README includes remote script execution pattern

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps @types/pdfkit, drizzle-orm, node-sqlite3-wasm, pdfkit, @types/node, esbuild; scripts build, build:bundle, dev, lint, test, test:launcher, bench, bench:quick

Install commands found:
- npx pwnkit-cli scan --target https://example.com
- docker run --rm -e OPENROUTER_API_KEY=$KEY \
- git clone https://github.com/0sec-labs/pwnkit.git
- pnpm run build

Risk flags:
- README includes remote script execution pattern

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<p align="center">
 <img src="assets/pwnkit-icon.gif" alt="pwnkit" width="80" />
</p>

<h1 align="center">pwnkit</h1>

<p align="center">
 <strong>Let autonomous AI agents hack you before attackers do.</strong><br/>
 <em>Fully autonomous agentic pentesting for web apps, AI/LLM apps, package ecosystems, and source code.</em>
</p>

<p align="center">
 <a href="https://docs.pwnkit.com/benchmark"><img src="https://img.shields.io/badge/XBOW%20aggregate-99.0%25%20(103%2F104)-e63946?style=flat-square&labelColor=2b2d42" alt="XBOW retained artifact-backed aggregate" /></a>
 <a href="https://docs.pwnkit.com/benchmark"><img src="https://img.shields.io/badge/XBOW%20gpt--5.4%20cohort-97.9%25%20(93%2F95)-e63946?style=flat-square&labelColor=2b2d42" alt="XBOW gpt-5.4 model-specific cohort" /></a>
 <a href="https://docs.pwnkit.com/benchmark"><img src="https://img.shields.io/badge/Cybench-90.0%25%20(36%2F40)-e63946?style=flat-square&labelColor=2b2d42" alt="Cybench full 40-challenge score" /></a>
</p>

<p align="center">
 <a href="https://www.npmjs.com/package/pwnkit-cli"><img src="https://img.shields.io/npm/v/pwnkit-cli?color=e63946&style=flat-square&labelColor=2b2d42" alt="npm version" /></a>
 <a href="https://github.com/0sec-labs/pwnkit/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-1d3557?style=flat-square&labelColor=2b2d42" alt="license" /></a>
 <a href="https://github.com/0sec-labs/pwnkit/actions"><img src="https://img.shields.io/github/actions/workflow/status/0sec-labs/pwnkit/ci.yml?style=flat-square&labelColor=2b2d42&label=build" alt="build" /></a>
 <a href="https://e2b.dev/startups"><img src="https://img.shields.io/badge/sponsored%20by-E2B%20for%20Startups-000000?style=flat-square&labelColor=2b2d42" alt="Sponsored by E2B for Startups" /></a>
</p>

<p align="center">
 <img src="assets/demo.gif" alt="pwnkit Demo" width="700" />
</p>

<p align="center">
 <a href="https://docs.pwnkit.com">Docs</a> &middot;
 <a href="https://pwnkit.com">Website</a> &middot;
 <a href="https://pwnkit.com/blog">Blog</a> &middot;
 <a href="https://docs.pwnkit.com/benchmark">Benchmark</a> &middot;
 <a href="https://docs.pwnkit.com/triage">Triage</a>
</p>

---

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/0sec-labs/pwnkit/main/install.sh | bash
```

Drops a standalone `pwnkit` binary into `~/.pwnkit/bin` (~74 MB, linux-x64 / linux-arm64 / darwin-arm64 / windows-x64). Pin a version with `PWNKIT_VERSION=vX.Y.Z`, change the install dir with `PWNKIT_INSTALL_DIR=…`.

Alternatives:

```bash
# Node ≥20 (npm bundle, command name is pwnkit-cli)
npx pwnkit-cli scan --target https://example.com

# Docker (Playwright + sqlmap/wpscan/nmap/nikto/gobuster/ffuf/hydra/john preinstalled)
docker run --rm -e OPENROUTER_API_KEY=$KEY \
  ghcr.io/0sec-labs/pwnkit:latest scan --target https://example.com
```

Intel Mac users have no prebuilt binary — install Bun and build from source.

## Use

```bash
# AI / LLM endpoint
pwnkit scan --target https://example.com/api/chat

# Web app (optionally with source for white-box)
pwnkit scan --target https://example.com --mode web
pwnkit scan --target https://example.com --repo ./source

# Audit a package, review source, ingest kernel crashes
pwnkit audit lodash
pwnkit review ./my-app
pwnkit ingest ./kernel-crashes --verify --output json
pwnkit ingest --reproducer ./poc.c --kernel-tree ./linux --config kasan --output json
pwnkit ingest ./kernel-crashes --review-subsystem --tree ./linux --output json

# Kernel-advisory variant hunting with foxguard rules
pwnkit kernel variant-hunt --tree ./linux --rules ./foxguard/rules/kernel/dirty-frag-class

# Auto-detect
pwnkit https://example.com
```

`scan`, `audit`, `review`, `ingest`, `kernel`, and `h1` cover detection. `dashboard`, `history`, `findings`, and `triage` cover review. Full reference: [docs.pwnkit.com/commands](https://docs.pwnkit.com/commands).

## Why It's Different

- **Shell-first web pentesting.** The agent uses `bash`, writes scripts, and chains tools like a human pentester instead of being trapped in a small HTTP-tool DSL.
- **Blind verification.** Findings are independently re-exploited before they are reported.
- **Public benchmark transparency.** Raw artifacts and per-challenge breakdowns under [`packages/benchmark/results`](https://github.com/0sec-labs/pwnkit/tree/main/packages/benchmark/results).

## GitHub Action

```yaml
- uses: 0sec-labs/pwnkit@main
  with:
    mode: review
    path: .
    format: sarif
  env:
    OPENROUTER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
```

## Docs

[Getting Started](https://docs.pwnkit.com/getting-started) · [Commands](https://docs.pwnkit.com/commands) · [Configuration](https://docs.pwnkit.com/configuration) · [Recipes](https://docs.pwnkit.com/recipes) · [Architecture](https://docs.pwnkit.com/architecture) · [Triage](https://docs.pwnkit.com/triage) · [Benchmark](https://docs.pwnkit.com/benchmark) · [Adversarial evals](https://docs.pwnkit.com/adversarial-evals) · [Enterprise](https://docs.pwnkit.com/enterprise)

## Development

```bash
git clone https://github.com/0sec-labs/pwnkit.git
cd pwnkit && pnpm install && pnpm lint && pnpm test
```

When running from a source checkout, rebuild after every pull before invoking the ignored bundle:

```bash
pnpm run build
node dist/pwnkit.js --help
```

`dist/pwnkit.js` embeds the git commit it was built from and exits if it no longer matches the checkout `HEAD`; this prevents clean-looking source trees from running stale ignored code.

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Part of PwnKit Labs

Open-source adversarial security for the agentic AI era:

- **[pwnkit](https://github.com/0sec-labs/pwnkit)** — AI agent pentester (detect)
- **[foxguard](https://github.com/0sec-labs/foxguard)** — Rust security scanner (prevent)
- **[opensoar](https://github.com/opensoar-hq/opensoar-core)** — Python-native SOAR platform (respond)

## License

[Apache 2.0](LICENSE)

