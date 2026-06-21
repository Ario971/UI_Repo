---
id: "chrischall/splitwise-mcp"
name: "chrischall/splitwise-mcp"
url: "https://github.com/chrischall/splitwise-mcp"
date: "2026-06-21"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 45
risk: 32
integration_effort: 64
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"gHashTag/trios-mcp-rag","date":"2026-05-23","topic":"AI agents","similarity":0.455,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-05-23/53-ghashtag-trios-mcp-rag.md"},{"title":"dingmanjiang/ai-resource-config","date":"2026-06-11","topic":"AI dev tools","similarity":0.355,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-11/85-dingmanjiang-ai-resource-config.md"},{"title":"Show HN: AwsmAudio – a WebAudio editor with native MCP","date":"2026-06-15","topic":"AI agents","similarity":0.271,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-15/28-show-hn-awsmaudio-a-webaudio-editor-with-native-mcp.md"}]
pros: ["Recently updated (2026-06-21)","MIT license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["Integration may take more than a quick install","README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 4
dependency_files: [{"name":"package.json","summary":"deps @chrischall/mcp-utils, @modelcontextprotocol/sdk, dotenv, zod, @types/node, @vitest/coverage-v8, esbuild, typescript; scripts build, bundle, dev, test, test:watch, test:coverage"}]
install_commands: ["npx -y splitwise-mcp","git clone https://github.com/chrischall/splitwise-mcp.git","npm install","npm run build","npm test        # run the test suite (vitest)","npm run build   # compile TypeScript -> dist/"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# chrischall/splitwise-mcp

MCP for Splitwise

URL: https://github.com/chrischall/splitwise-mcp

## Why it matters
You saved an article on 2026-05-23 about AI agents; this candidate overlaps with "gHashTag/trios-mcp-rag" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-06-21)
+ MIT license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- Integration may take more than a quick install
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 4

Dependency files:
- package.json: deps @chrischall/mcp-utils, @modelcontextprotocol/sdk, dotenv, zod, @types/node, @vitest/coverage-v8, esbuild, typescript; scripts build, bundle, dev, test, test:watch, test:coverage

Install commands found:
- npx -y splitwise-mcp
- git clone https://github.com/chrischall/splitwise-mcp.git
- npm install
- npm run build
- npm test        # run the test suite (vitest)
- npm run build   # compile TypeScript -> dist/

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Splitwise MCP

[![CI](https://github.com/chrischall/splitwise-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/chrischall/splitwise-mcp/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/splitwise-mcp)](https://www.npmjs.com/package/splitwise-mcp)
[![license](https://img.shields.io/npm/l/splitwise-mcp)](LICENSE)

A [Model Context Protocol](https://modelcontextprotocol.io) server that connects Claude to [Splitwise](https://www.splitwise.com), giving you natural-language access to your expenses, groups, friends, and balances.

> [!WARNING]
> **AI-developed project.** This codebase was entirely built and is actively maintained by [Claude Code](https://www.anthropic.com/claude). No human has audited the implementation. Review all code and tool permissions before use.

## What you can do

Ask Claude things like:

- *"What do I owe?"*
- *"Add a $50 dinner expense to the vacation group"*
- *"Split this hotel bill 60/40 with Sarah"*
- *"Who's in the trip group?"*
- *"Add Meredith to the household group"*
- *"Show me recent expenses"*
- *"Delete that duplicate expense"*

## Requirements

- [Claude Desktop](https://claude.ai/download) or [Claude Code](https://docs.anthropic.com/en/docs/claude-code)
- [Node.js](https://nodejs.org) 20.6 or later
- A [Splitwise](https://www.splitwise.com) account and API key

## Acknowledgement of Terms

By using this MCP server, you acknowledge and agree to the following:

**1. This server accesses your own Splitwise account via Splitwise's official Developer API.** Auth happens via your own API consumer key + secret, which Splitwise issues to you when you register an app. It does not — and cannot — access anyone else's expenses or groups.

**2. [Splitwise's Developer Terms](https://dev.splitwise.com/) govern your use of this server**. The clauses most relevant here:

> You will use Splitwise Materials solely as necessary to develop, test and support a Self-Service integration of your software application… with Splitwise.

And on rate limits: *"You will not use the API in a manner that exceeds rate limits, or constitutes excessive or abusive usage."* And on competitive use: *"You may not [use] Splitwise Materials to create an application that replicates existing Splitwise functionality or competes with Splitwise."*

You are agreeing to those terms — read by the maintainer 2026-05-23 — every time you invoke a tool in this server.

**3. Personal, non-commercial use only.** This project is not affiliated with, endorsed by, sponsored by, or in partnership with Splitwise, Inc. It is a personal automation tool that calls the documented public Splitwise REST API on your own account. Do not use it to commercialize Splitwise data, compete with Splitwise's product, or share API credentials with third parties.

**4. Your API key is yours alone.** Splitwise issues credentials per-app, per-developer. **Do not commit your `SPLITWISE_API_KEY` (or consumer key/secret) to git**, do not paste it into shared chats, and do not embed it in a public client.

**5. You accept full responsibility** for any consequences of using this server in connection with your Splitwise account — rate limiting, API key revocation, account warnings, or any enforcement action. If Splitwise objects to your use or your usage exceeds their rate limits, stop using this server.

This section is the maintainer's good-faith summary of the terms — it is not legal advice and does not modify or supersede Splitwise's actual Developer Terms.

## Installation

### Option A -- npx (recommended)

```bash
npx -y splitwise-mcp
```

Add to your Claude config (`.mcp.json` or Claude Desktop config):

```json
{
  "mcpServers": {
    "splitwise": {
      "command": "npx",
      "args": ["-y", "splitwise-mcp"],
      "env": {
        "SPLITWISE_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### Option B -- from source

```bash
git clone https://github.com/chrischall/splitwise-mcp.git
cd splitwise-mcp
npm install
npm run build
```

Add to Claude Desktop config:

- **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "splitwise": {
      "command": "node",
      "args": ["/absolute/path/to/splitwise-mcp/dist/index.js"],
      "env": {
        "SPLITWISE_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### Getting your API key

1. Go to [secure.splitwise.com/apps/register](https://secure.splitwise.com/apps/register)
2. Register an app (name and description can be anything)
3. Copy the **API key** from the app detail page

## Credentials

| Env var | Required | Notes |
|---------|----------|-------|
| `SPLITWISE_API_KEY` | Yes | API key from [splitwise.com/apps/register](https://secure.splitwise.com/apps/register) |

## Available tools

20 tools across 5 domains. All tools are prefixed `sw_`.

### User

| Tool | What it does |
|------|-------------|
| `sw_get_current_user` | Get the authenticated user's profile |
| `sw_get_user` | Get another user's profile by ID |

### Groups

| Tool | What it does |
|------|-------------|
| `sw_list_groups` | List all groups with members |
| `sw_get_group` | Group details including members and balances |
| `sw_create_group` | Create a new group |
| `sw_delete_group` | Soft-delete a group |
| `sw_undelete_group` | Restore a deleted group |
| `sw_add_user_to_group` | Add a user to a group |
| `sw_remove_user_from_group` | Remove a user from a group |

### Friends

| Tool | What it does |
|------|-------------|
| `sw_list_friends` | List all friends |
| `sw_create_friend` | Add a friend by email |
| `sw_delete_friend` | Remove a friendship |

### Expenses

| Tool | What it does |
|------|-------------|
| `sw_list_expenses` | List or search expenses with filters |
| `sw_get_expense` | Full details of a single expense |
| `sw_create_expense` | Create an expense (equal or custom split) |
| `sw_update_expense` | Edit an existing expense |
| `sw_delete_expense` | Soft-delete an expense |
| `sw_undelete_expense` | Restore a deleted expense |
| `sw_get_comments` | Get comments on an expense |
| `sw_create_comment` | Add a comment to an expense |
| `sw_delete_comment` | Delete a comment |

### Utilities

| Tool | What it does |
|------|-------------|
| `sw_get_notifications` | Recent activity feed |
| `sw_get_categories` | Expense category list |
| `sw_get_currencies` | Supported currency codes |

## Troubleshooting

**"SPLITWISE_API_KEY is required"** -- set the environment variable in your MCP config or a `.env` file.

**429 rate limit** -- Splitwise has undocumented rate limits. Wait a moment and retry.

**Tools not appearing in Claude** -- go to **Claude Desktop > Settings > Developer** to see connected servers. Make sure you fully quit and relaunched after editing the config.

## Development

```bash
npm test        # run the test suite (vitest)
npm run build   # compile TypeScript -> dist/
```

### Project structure

```
src/
  client.ts         Splitwise API client (auth, request handling)
  index.ts          MCP server entry point
  tools/
    user.ts         sw_get_current_user, sw_get_user
    groups.ts       group CRUD and membership
    friends.ts      friend list and management
    expenses.ts     expense CRUD, comments
    utilities.ts    notifications, categories, currencies
```

## License

MIT

