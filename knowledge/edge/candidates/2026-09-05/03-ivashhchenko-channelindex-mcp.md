---
id: "ivashhchenko/channelindex-mcp"
name: "ivashhchenko/channelindex-mcp"
url: "https://github.com/ivashhchenko/channelindex-mcp"
date: "2026-09-05"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 88
momentum: 45
risk: 35
integration_effort: 48
expected_gain: 87
composite: 71
replacement_target: ""
related_articles: [{"title":"how to setup llama.cpp and blender to make lovely 3d stuff together","date":"2026-08-28","topic":"Local LLMs","similarity":0.401,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/Local LLMs/2026-08-28/16-how-to-setup-llama-cpp-and-blender-to-make-lovely-3d-stuff-together.md"},{"title":"qgeng1465/bio-mcp","date":"2026-08-11","topic":"AI dev tools","similarity":0.364,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-11/13-qgeng1465-bio-mcp.md"},{"title":"Show HN: MCP Tool Definition Quality Score (TDQS) Spec","date":"2026-09-03","topic":"AI dev tools","similarity":0.346,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-09-03/10-show-hn-mcp-tool-definition-quality-score-tdqs-spec.md"}]
pros: ["Recently updated (2026-09-05)","MIT license","README includes install commands","Matches 3 saved Feed article(s)"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 78
has_ci: false
has_tests: false
setup_steps_count: 2
dependency_files: [{"name":"package.json","summary":"deps none; scripts start, test"}]
install_commands: ["npx channelindex-mcp"]
risk_flags: []
status: "new"
---

# ivashhchenko/channelindex-mcp

MCP server for public Telegram channels — profiles, posting cadence, and the channels Telegram itself considers similar.

URL: https://github.com/ivashhchenko/channelindex-mcp

## Why it matters
You saved an article on 2026-08-28 about Local LLMs; this candidate overlaps with "how to setup llama.cpp and blender to make lovely 3d stuff together" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-05)
+ MIT license
+ README includes install commands
+ Matches 3 saved Feed article(s)

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 78/100
CI detected: no
Tests mentioned: no
Setup steps estimate: 2

Dependency files:
- package.json: deps none; scripts start, test

Install commands found:
- npx channelindex-mcp

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# channelindex-mcp

MCP server for public Telegram channels. Gives an agent a channel's real
profile — subscribers, description, creation date, verification and scam
flags, how often it posts — and the channels Telegram itself considers
similar to it.

No phone number, no session file, no MTProto client to keep alive. An API
key and a Node runtime.

## Install

```bash
npx channelindex-mcp
```

Claude Desktop / Claude Code / any MCP client:

```json
{
  "mcpServers": {
    "channelindex": {
      "command": "npx",
      "args": ["-y", "channelindex-mcp"],
      "env": { "TELEGRAM_API_KEY": "your-rapidapi-key" }
    }
  }
}
```

Get a key at [rapidapi.com/starnikovoleg/api/telegram155](https://rapidapi.com/starnikovoleg/api/telegram155).
There is a free tier and no card.

## Tools

### `telegram_channel`

A channel's profile: title, description, exact subscriber count, creation
date, Telegram's own verification and scam flags, and posting cadence.

The cadence is the part most directories leave out, and it is usually the
answer to the question being asked. A channel with 200,000 subscribers and
nothing published in fourteen months looks identical to a live one in every
listing that reports only follower counts.

```
@durov — Du rov's Channel
Subscribers   1,400,000
Created       2017-02-15
Last post     2026-08-29
Posting rate  0.4 posts/day over the last 30
```

### `telegram_similar_channels`

The channels Telegram recommends alongside a given one — its own topical
judgement rather than a keyword match, so it returns channels that share an
audience without sharing vocabulary.

This is how you find channels whose names you do not already know: start
from one you do and walk outward. Two rounds of expansion from a few dozen
seeds reaches several thousand channels.

Set `enrich: true` to fetch exact subscriber counts for each result.

### `telegram_search_channels`

Telegram's global search over public channels and groups. Use it to find a
starting point; use `telegram_similar_channels` to expand it.

## Output

Markdown by default — what a model reads without a parsing step. Pass
`format: "json"` for the raw API response when you are piping into code.

## Scope

Public channel metadata only. Message contents, member lists, and private
groups are outside what this reads and outside what it will return.

## Cost

Tools call the REST endpoints directly rather than proxying a remote MCP
endpoint. RapidAPI bills per request, so this arrangement means `initialize`
and `tools/list` are free: you pay for lookups, not handshakes.

`telegram_channel` costs three calls with cadence on, two with
`cadence: false`. `telegram_similar_channels` costs two, plus one per result
when `enrich: true` (capped at 12).

## Environment

| Variable | Default | Purpose |
|---|---|---|
| `TELEGRAM_API_KEY` | — | RapidAPI key. `RAPIDAPI_KEY` also works. |
| `TELEGRAM_API_HOST` | `telegram155.p.rapidapi.com` | Upstream host. |
| `TELEGRAM_TIMEOUT_MS` | `30000` | Per-request timeout. |

## Related

[ChannelIndex](https://channelindex.org) publishes a weekly measured corpus
built on the same API: channel directories by topic, the recommendation
graph inverted into "who recommends this channel", and how those numbers
move week to week.

MIT.

