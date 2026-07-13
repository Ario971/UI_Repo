---
id: "dingyiyi0226/fantasy-baseball-mcp"
name: "dingyiyi0226/fantasy-baseball-mcp"
url: "https://github.com/dingyiyi0226/fantasy-baseball-mcp"
date: "2026-07-13"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 45
risk: 37
integration_effort: 40
expected_gain: 81
composite: 71
replacement_target: ""
related_articles: [{"title":"llm011/ethan-agent","date":"2026-06-20","topic":"AI dev tools","similarity":0.222,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-20/93-llm011-ethan-agent.md"},{"title":"Kuberwastaken/VPSmaxxing","date":"2026-06-30","topic":"AI dev tools","similarity":0.186,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-30/13-kuberwastaken-vpsmaxxing.md"}]
pros: ["Recently updated (2026-07-13)","MIT license","GitHub Actions/CI detected","Matches 2 saved Feed article(s)"]
cons: ["No clear install command found in README","README mentions credentials or API tokens"]
readme_quality: 70
has_ci: true
has_tests: false
setup_steps_count: 1
dependency_files: [{"name":"package.json","summary":"deps @modelcontextprotocol/sdk, axios, fast-xml-parser, selfsigned, zod, @types/node, json-stringify-pretty-compact, typescript; scripts build, watch, test, auth, serve, pack, pack:safe, pack:skill"}]
install_commands: []
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# dingyiyi0226/fantasy-baseball-mcp

Plugin for Yahoo Fantasy Baseball — AI-powered roster management, Statcast analytics, and free-agent scouting via natural language. For Claude and Codex

URL: https://github.com/dingyiyi0226/fantasy-baseball-mcp

## Why it matters
You saved an article on 2026-06-20 about AI dev tools; this candidate overlaps with "llm011/ethan-agent" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-13)
+ MIT license
+ GitHub Actions/CI detected
+ Matches 2 saved Feed article(s)

## Cons
- No clear install command found in README
- README mentions credentials or API tokens

## Repository Inspection
README quality: 70/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- package.json: deps @modelcontextprotocol/sdk, axios, fast-xml-parser, selfsigned, zod, @types/node, json-stringify-pretty-compact, typescript; scripts build, watch, test, auth, serve, pack, pack:safe, pack:skill

Install commands found:
- none detected

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Fantasy Baseball for Claude & Codex

[![npm](https://img.shields.io/npm/v/fantasy-baseball-mcp)](https://www.npmjs.com/package/fantasy-baseball-mcp)

Manage your **fantasy baseball** team by chatting with **Claude** or **Codex**: check your
roster, scout free agents, review your matchup, and analyze players with Statcast and
FanGraphs data. Everything runs locally with your own Yahoo login — nothing is hosted, and
your credentials stay on your machine.

We support a broad range of operations (league, team, roster, matchup, and player stats) via Yahoo's Fantasy Sports API.
Lineup adjustments and add/drop actions go through browser-based workflows (Claude in Chrome or the Codex browser plugin),
as Yahoo's write-scope API is deprecated.

## Contents

- [Install](#install)
  - [Claude Desktop](#claude-desktop)
  - [Codex desktop app](#codex-desktop-app)
- [Connect your Yahoo team](#connect-your-yahoo-team)
- [Talk to your team](#talk-to-your-team)
- [What "analyze" looks up](#what-analyze-looks-up)
- [Help](#help)
- [License](#license)

---

## Install

Pick the app you use — you only need one. Then continue to
[Connect your Yahoo team](#connect-your-yahoo-team).

### Claude Desktop

**1. Add the extension**

1. Download `fantasy-baseball-vX.X.X.mcpb` from the **[Releases page](../../releases/latest)**.
2. In Claude Desktop, go to **Settings → Extensions**.
3. Drag the file into the Extensions window and click **Install**.

> Leave the **Client ID / Client Secret** boxes empty for now — you'll fill them in during
> [Connect your Yahoo team](#connect-your-yahoo-team).

**2. Add the Fantasy Baseball skill** (guided start/sit and roster-review workflow)

1. Download `fantasy-baseball-skill-vX.X.X.zip` from the **[Releases page](../../releases/latest)**.
2. Go to **Settings → Capabilities** and turn on **code execution**.
3. Go to **Customize → Skills**, click **+ → Create skill → Upload a skill**, and choose the ZIP.

### Codex desktop app

Requires **Node.js** ([nodejs.org/download](https://nodejs.org/en/download) — install the LTS
build). The plugin bundles the Yahoo tools *and* the Fantasy Baseball skill in one step.

1. In the Codex app, go to **Settings → Plugins → Add plugin marketplace**.
2. Add from a GitHub repo:
   - **Source:** `dingyiyi0226/fantasy-baseball-mcp`
   - **Git ref:** `master`
   - **Sparse paths:** *(leave blank)*
3. Open the **Fantasy Baseball** marketplace and install the **Fantasy Baseball** plugin.
4. Sign in to Yahoo in Codex's in-app browser (one time, for lineup and add/drop moves).

   The Yahoo authorization below lets the plugin read your roster. Browser-driven lineup and add/drop
   moves also need Yahoo Fantasy to be logged in inside Codex's in-app browser. In a Codex chat, ask:

   ```text
   Open https://baseball.fantasysports.yahoo.com in the in-app browser so I can sign in.
   ```

   When the in-app browser tab opens, sign in to Yahoo there. After that, `adjust-lineup` and
   `add-drop-player` workflows can use the same in-app browser session. If a workflow opens Yahoo and
   finds that the tab is not logged in, it will stop and report the login state as an error instead
   of trying another browser.

---

## Connect your Yahoo team

You only do this once, and it's the same in both apps: type `fantasy start` in a chat and
follow the prompts.

### a) Create your free Yahoo app

Yahoo requires each person to use their own keys. Go to
**[developer.yahoo.com/apps/create](https://developer.yahoo.com/apps/create/)** and fill in:

- **Application Name:** anything, e.g. `My Fantasy Helper`
- **Homepage URL:** `https://localhost:8488`
- **Redirect URI(s):** `https://localhost:8488/callback`
- **OAuth Client Type:** `Confidential Client`
- **API Permissions:** `Fantasy Sports → Read`
- Click **Create App**

Yahoo then gives you a **Client ID** and a **Client Secret**.

### b) Enter those keys

Paste the **Client ID** and **Client Secret** into the chat when asked, then say `fantasy start`
again. (In Claude Desktop you can instead enter them under **Settings → Extensions → Fantasy
Baseball**.)

### c) Authorize and finish

Open the authorization link and click **Agree**. If your browser warns about a self-signed
certificate, click **Advanced** and continue to localhost. Once you see **Authorization
complete!**, say `fantasy authorize`.

The assistant will find your leagues, set your default team, and finish setup.

> Stuck? Type `fantasy status` to see what's still missing.

---

## Talk to your team

| Say this... | To do this |
| --- | --- |
| `fantasy show roster` | Show your current roster |
| `fantasy my matchup` | Summarize this week's matchup |
| `fantasy standings` | Show league standings |
| `fantasy who should I add` | Find strong free-agent options |
| `fantasy hot free-agent batters` | Rank available hitters by recent Yahoo stats |
| `fantasy MLB leaders` | Rank all Yahoo baseball players by a stat or overall rank |
| `fantasy my stats this week` | Show your team's weekly totals |
| `fantasy recent moves` | List recent adds, drops, and trades |
| `who's pitching tomorrow` | List probable starting pitchers for a date (add "and who's a free agent" for ownership) |
| `analyze Shohei Ohtani` | Pull Statcast, xStats, FanGraphs WAR/wRC+, and recent splits |
| `analyze my roster` | Run the same analysis for every player on your roster |

You can also ask naturally, like *"Who on my bench should I start tonight?"*

## What "analyze" looks up

| Source | Stats |
| --- | --- |
| **MLB Stats API** | Season totals plus 14-day and 30-day splits |
| **Baseball Savant** | xBA, xSLG, xwOBA vs. actual, plus exit velocity, barrel rate, and hard-hit rate |
| **FanGraphs** | WAR, wRC+, FIP, xFIP, K%, BB%, SwStr%, and GB/FB% |

Analysis automatically targets your **league's scoring categories**, and results link to each
player's pages on Baseball Savant, MLB.com, Baseball Reference, and FanGraphs. Leaderboard
data is cached for one hour.

---

## Help

- **[FAQ and troubleshooting](docs/troubleshooting.md)** — data safety, rate limits, and letting `analyze` reach the stats sites.
- **[Developer notes](docs/development.md)** — building from source and the full tool list.

## License

MIT

