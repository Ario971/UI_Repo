---
id: "lemmaoracle/lemma"
name: "lemmaoracle/lemma"
url: "https://github.com/lemmaoracle/lemma"
date: "2026-06-09"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 52
risk: 47
integration_effort: 48
expected_gain: 81
composite: 69
replacement_target: ""
related_articles: [{"title":"gHashTag/trios-mcp-rag","date":"2026-05-23","topic":"AI agents","similarity":0.276,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-23/53-ghashtag-trios-mcp-rag.md"},{"title":"Show HN: I built an on-chain economy where AI agents transact autonomously","date":"2026-06-02","topic":"AI agents","similarity":0.24,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-02/84-show-hn-i-built-an-on-chain-economy-where-ai-agents-transact-autonomou.md"},{"title":"Show HN: Agent Chat Bridge – give AI IDE agents an async callback","date":"2026-05-21","topic":"AI agents","similarity":0.228,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-21/27-show-hn-agent-chat-bridge-give-ai-ide-agents-an-async-callback.md"}]
pros: ["Recently updated (2026-06-09)","1 GitHub stars","GitHub Actions/CI detected","Matches 3 saved Feed article(s)"]
cons: ["License was not clearly detected by GitHub","No clear install command found in README"]
readme_quality: 55
has_ci: true
has_tests: false
setup_steps_count: 0
dependency_files: [{"name":"package.json","summary":"deps @eslint/js, @types/node, astro-eslint-parser, eslint-config-prettier, eslint-plugin-astro, eslint-plugin-functional, prettier, prettier-plugin-astro; scripts build, type-check, lint, test, format, format:check, sync:workers:spec"}]
install_commands: []
risk_flags: []
status: "new"
---

# lemmaoracle/lemma

Give AI proven facts — a cryptographically verified truth layer for agent AI, built on ZK proofs, selective disclosure, and on-chain provenance.

URL: https://github.com/lemmaoracle/lemma

## Why it matters
You saved an article on 2026-05-23 about AI agents; this candidate overlaps with "gHashTag/trios-mcp-rag" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-09)
+ 1 GitHub stars
+ GitHub Actions/CI detected
+ Matches 3 saved Feed article(s)

## Cons
- License was not clearly detected by GitHub
- No clear install command found in README

## Repository Inspection
README quality: 55/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 0

Dependency files:
- package.json: deps @eslint/js, @types/node, astro-eslint-parser, eslint-config-prettier, eslint-plugin-astro, eslint-plugin-functional, prettier, prettier-plugin-astro; scripts build, type-check, lint, test, format, format:check, sync:workers:spec

Install commands found:
- none detected

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Lemma Oracle

> Give AI proven facts.

Lemma is a cryptographically verified truth layer for agent AI. It lets AI
reason over confidential data via zero-knowledge proofs, selective
disclosure, and tamper-evident provenance — while raw content stays
encrypted.

Every attribute an AI reads through Lemma carries permanent provenance:
who issued it, which schema defined it, how it was proven, and where its
verification record is anchored.

## Learn more

- 🌐 **Website**: https://lemma.frame00.com
- 📄 **Services**: https://lemma.frame00.com/services
- ✍️ **Blog & essays**: https://lemma.frame00.com/blog
- ❓ **FAQ**: https://lemma.frame00.com/blog/faq

## MCP server

`@lemmaoracle/mcp` is the **Model Context Protocol (MCP) server** for Lemma,
published on npm and built with the official **MCP SDK**
(`@modelcontextprotocol/sdk`). Point Claude Desktop or any MCP-compatible
agent at it:

```json
{
  "mcpServers": {
    "lemma": {
      "command": "npx",
      "args": ["-y", "@lemmaoracle/mcp"],
      "env": { "LEMMA_API_KEY": "YOUR_API_KEY" }
    }
  }
}
```

Tool list, env vars, and contributor build: [packages/mcp/README.md](./packages/mcp/README.md) · [npm](https://www.npmjs.com/package/@lemmaoracle/mcp)

## Packages

Public packages in this monorepo:

- **[`packages/mcp/`](./packages/mcp)** — `@lemmaoracle/mcp`, the **Model Context Protocol (MCP) server** for AI agents (this is the package above).
- **[`packages/sdk/`](./packages/sdk)** — `@lemmaoracle/sdk`, TypeScript SDK for the Lemma API.
- **[`packages/spec/`](./packages/spec)** — `@lemmaoracle/spec`, OpenAPI spec + shared TypeScript types.
- **[`packages/x402/`](./packages/x402)** — `@lemmaoracle/x402`, x402 payment middleware drop-in.

## Contact

For partnership and implementation inquiries, please use the contact form:
https://lemma.frame00.com/services

## License

This repository uses different licenses for different packages:

| Package | License |
|---|---|
| `packages/contracts`, `packages/relay`, `packages/passthrough` | **BUSL-1.1** (changes to Apache-2.0 on 2030-05-01) |
| `packages/sdk`, `packages/spec`, `packages/mcp`, `packages/parser`, `packages/x402` | **Apache-2.0** |
| `packages/web` | Private (not distributed) |

The root `LICENSE` file applies as the default. Each package may contain its own `LICENSE` file that takes precedence.

---

© 2026 FRAME00 Inc.

🇯🇵 [日本語版はこちら / Japanese README](./README.ja.md)

