---
id: "susanthgit/-ainews"
name: "susanthgit/-ainews"
url: "https://github.com/susanthgit/-ainews"
date: "2026-08-17"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 94
momentum: 45
risk: 47
integration_effort: 49
expected_gain: 87
composite: 70
replacement_target: ""
related_articles: [{"title":"Show HN: Sift – MCP aggregator that exposes 2 tools instead of hundreds","date":"2026-08-06","topic":"AI dev tools","similarity":0.345,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-08-06/13-show-hn-sift-mcp-aggregator-that-exposes-2-tools-instead-of-hundreds.md"},{"title":"yearningss/gamemaker-mcp","date":"2026-07-25","topic":"AI dev tools","similarity":0.27,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-07-25/13-yearningss-gamemaker-mcp.md"},{"title":"Show HN: GAI – A Go runtime for typed, tool-using LLM agents","date":"2026-07-31","topic":"AI agents","similarity":0.257,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-31/08-show-hn-gai-a-go-runtime-for-typed-tool-using-llm-agents.md"}]
pros: ["Recently updated (2026-08-17)","GitHub Actions/CI detected","README includes install commands","Matches 3 saved Feed article(s)"]
cons: ["License was not clearly detected by GitHub"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 1
dependency_files: [{"name":"requirements.txt","summary":"deps feedparser>=6.0, requests>=2.31, jinja2>=3.1, python-dateutil>=2.8, openai>=1.0"}]
install_commands: ["pip install -r requirements.txt"]
risk_flags: []
status: "new"
---

# susanthgit/-ainews

Automated AI news aggregator - ainews.aguidetocloud.com

URL: https://github.com/susanthgit/-ainews

## Why it matters
You saved an article on 2026-08-06 about AI dev tools; this candidate overlaps with "Show HN: Sift – MCP aggregator that exposes 2 tools instead of hundreds" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-17)
+ GitHub Actions/CI detected
+ README includes install commands
+ Matches 3 saved Feed article(s)

## Cons
- License was not clearly detected by GitHub

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- requirements.txt: deps feedparser>=6.0, requests>=2.31, jinja2>=3.1, python-dateutil>=2.8, openai>=1.0

Install commands found:
- pip install -r requirements.txt

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# 🗞️ AI News — ainews.aguidetocloud.com

Automated AI news aggregator that runs every night, fetches the latest AI news from RSS feeds and NewsAPI, summarises each article using GPT-4o mini (via GitHub Models), and publishes a slick retro-neon dashboard.

## 🌐 Live Site

**[ainews.aguidetocloud.com](https://ainews.aguidetocloud.com)** — Updated daily at midnight NZT

## 🏗️ Architecture

```
RSS Feeds ──┐
             ├──▶ fetch_news.py ──▶ summarise.py ──▶ generate_page.py ──▶ index.html
NewsAPI ────┘      (articles)       (GPT-4o mini)     (retro HTML)        (deployed)

GitHub Actions runs this pipeline nightly → commits output → deploys to Azure Static Web App
```

## 📰 News Categories

| Section | What's Covered |
|---------|---------------|
| 🔥 Top Stories | Biggest AI headlines from TechCrunch, The Verge, Ars Technica |
| 🗣️ Rumours & Gossip | Leaks, speculation, "reportedly" stories |
| 🟦 Microsoft | Copilot, Azure AI, Foundry, Windows AI |
| 🟩 OpenAI | GPT models, ChatGPT, API updates |
| 🟥 Google | Gemini, DeepMind, Vertex AI |
| 🟪 Meta | Llama, open-source AI |
| 🟧 Anthropic | Claude, MCP protocol |
| ⬛ Open Source | Hugging Face, community models |
| 🔵 Industry | Regulations, funding, trends |

## 📅 Features

- **Daily page** with sidebar navigation and category cards
- **Weekly digest** — top stories from the last 7 days
- **Monthly roundup** — all stories from the current month
- **Archive** — browse back through previous days
- **Retro neon theme** — dark, glowing, visually appealing

## 💰 Cost

Under **$2/month** — mostly AI summarisation. Hosting, automation, and news sources are free.

## 🔧 Local Development

```bash
pip install -r requirements.txt
export NEWSAPI_KEY="your-key"
export GITHUB_TOKEN="your-pat"
python scripts/fetch_news.py
python scripts/summarise.py
python scripts/generate_page.py
# Open site/index.html in browser
```

## 📝 License

Built by [Sutheesh](https://www.aguidetocloud.com) — Part of the Cloud & AI learning journey.

