---
id: "please-insert-name/cc-harness"
name: "please-insert-name/cc-harness"
url: "https://github.com/please-insert-name/cc-harness"
date: "2026-07-15"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 93
momentum: 45
risk: 43
integration_effort: 40
expected_gain: 87
composite: 71
replacement_target: ""
related_articles: [{"title":"Kuberwastaken/VPSmaxxing","date":"2026-06-30","topic":"AI dev tools","similarity":0.236,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-30/13-kuberwastaken-vpsmaxxing.md"},{"title":"Skip to main content","date":"2026-06-28","topic":"AI agents","similarity":0.23,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-28/07-skip-to-main-content.md"},{"title":"Show HN: Abralo – Free, easy way to run several Claude Code agents in one window","date":"2026-07-08","topic":"AI agents","similarity":0.228,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-08/07-show-hn-abralo-free-easy-way-to-run-several-claude-code-agents-in-one-.md"}]
pros: ["Recently updated (2026-07-15)","MIT license","README includes install commands","Matches 3 saved Feed article(s)"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 93
has_ci: false
has_tests: false
setup_steps_count: 3
dependency_files: []
install_commands: ["git clone https://github.com/please-insert-name/cc-harness.git"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# please-insert-name/cc-harness

Content Creator Harness: A skill set and harness for claude code, providing efficient AI co-working for content creation.

URL: https://github.com/please-insert-name/cc-harness

## Why it matters
You saved an article on 2026-06-30 about AI dev tools; this candidate overlaps with "Kuberwastaken/VPSmaxxing" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-15)
+ MIT license
+ README includes install commands
+ Matches 3 saved Feed article(s)

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 93/100
CI detected: no
Tests mentioned: no
Setup steps estimate: 3

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/please-insert-name/cc-harness.git

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# cc-harness
Content Creator Harness: A skill set for knowledge management and efficient AI co-working for content creation and conceptional work.

This project is supported by "Bavarian Transformation and Research Foundation", Grant AZ-1648-24 ("SphiNx: Sprachmodelle im hybriden industriellen Nutzungskontext")

## QUICKSTART
This is the only section you need to read in order to get started.

### Prerequisits
- git
- node.js
- uv, uvx

### Setup
Clone the repository and run the setup script:
```bash
git clone https://github.com/please-insert-name/cc-harness.git
cd cc-harness
./setup.sh  # on windows use powershell with ./setup-win.ps1
```

The setup script will:
- Setup your environment:
  - Check for git, node.js and uv/uvx
  - Set up necessary directories and symlinks
- Install the knowledge systems:
  - Install the karpathy-llm-wiki skill from GitHub (wiki knowledge base)
  - Initialize the wiki structure (raw/ and wiki/ directories)
  - Install claude-mem (conversational memory)
- Install useful skills from official sources:
  - Install higgsfield cli and mcp server
  - Pull official anthropic skills
  - Pull official higgsfield skill

Additional skills already included in this repo:
- Joeys (https://www.instagram.com/p/DXb_GzZDmOy/) banana-pro-director-2.0 and cinema-worldbuilder-pro-2.0
See: https://pyrite-mallow-3b0.notion.site/The-Claude-skills-that-run-my-AI-Cinema-workflow-got-an-UPGRADE-Here-s-Why-36d49da027d780ff928ef70a16148369 for Doku
License: "No course. No upsell. The skills to download are above, and the prompts are below — take them."
- please-insert-name skills steam-library-analyser and padlet-contributor
Same License: "take them, use them, modify them" release.

### Post-Setup
**.env**
Contains API-Keys etc. Modify to suit your needs.

**CLAUDE.md**
- includes system overview (has to be adapted to your environment)
- agent directives: taken from https://x.com/iamfakeguru/status/2038965567269249484 to mimic Antropics employee ruleset
Modify or add instructions to suit your needs.

## COLABORATION SPACES
### Google Workspace
- activate built-in services
    - activate with "/mcp"
- Install Google Cloud SDK
    - brew install google-cloud-sdk
    - ```export PATH=/opt/homebrew/share/google-cloud-sdk/bin:"$PATH"```or add to .zshrc
    - ```gcloud auth login```
    - ```gcloud projects create claude-workspace --name="Claude Workspace"```
    - Project-ID: ```gcloud projects list```
    - Activate project for configuration: ```gcloud config set project claude-workspace```
    - Activate APIs in project:
```
  gcloud services enable gmail.googleapis.com
  gcloud services enable drive.googleapis.com                                                   
  gcloud services enable calendar-json.googleapis.com
  gcloud services enable docs.googleapis.com                                                    
  gcloud services enable sheets.googleapis.com
  gcloud services enable slides.googleapis.com
```
    - google-workspace server in ~/.claude.json (User-Scope)
    - configure mcp-server in .mcp.json
```
  "servers": {
    "workspace": {
      "command": "uvx",
      "args": ["workspace-mcp", "--tool-tier", "core"]
    }
  }
```
    - Generate GOOGLE_OAUTH_CLIENT_ID and GOOGLE_OAUTH_CLIENT_SECRET
        - https://console.cloud.google.com/apis/credentials?project=<PROJECT_ID>
        - "Anmeldedaten erstellen" → "OAuth-Client-ID" → "Desktop-App"
        - Update .zshrc
```
export GOOGLE_OAUTH_CLIENT_ID="..."
export GOOGLE_OAUTH_CLIENT_SECRET="..."
```
    - Finally, let Claude Code do the one time authorization in Browser

## SKILLS OVERVIEW
### Steam Library Analyzer (by please-insert-name)
Generates a comprehensive overview of you Steam Gaming-Library.
Installation
- get API key from https://steamcommunity.com/dev/apikey
- get User-ID from https://store.steampowered.com/account/
- IGDB from Twitch-Developerportal:
  - Twitch account and 2FA active
  - https://dev.twitch.tv/console → Register Your Application
  - OAuth Redirect URL: http://localhost, Kategorie: Application Integration
  - copy client id, generate "new secret"

### Karpathys LLM Wiki
See: https://github.com/Astro-Han/karpathy-llm-wiki

### Higgsfield Skills
**Official**
See: https://higgsfield.ai/skills

**Community**
See: https://pyrite-mallow-3b0.notion.site/The-Claude-skills-that-run-my-AI-Cinema-workflow-got-an-UPGRADE-Here-s-Why-36d49da027d780ff928ef70a16148369
These were implemented and updated by Joey: 
- banana-pro-director-2.0 (images)
- cinema-worldbuilder-pro-2.0 (videos)
License: "No course. No upsell. The skills to download are above, and the prompts are below — take them."

### Media Creator (by please-insert-name)
Execution layer for AI-generated media: voice-over with ElevenLabs, avatar videos with HeyGen,
free-form images/videos with Higgsfield (including cost checks before every generation).
Replaces the former higgsfield-creator skill. German source: `.claude/skills/media-creator.md`.
Requires the ElevenLabs, HeyGen and Higgsfield MCP servers plus ffmpeg, Whisper and Audacity locally.

### Padlet Contributor (by please-insert-name)
Creating and working with padlets. This skill needs a paid subscription like "platinum" or "classroom".
Generate API-KEY under Developer/API-KEY and paste it in .env. That's it.

### Anthropic Skills
Get the official skills here: https://github.com/anthropics/skills

Skills used in this project (and pulled by setup script):
- algorithmic art
- docx
- pdf
- pptx
- web-artifact-builder
- xlsx

## Token Economy
### General
- Use /effort to switch to medium
- Use Sonnet for general tasks
- Do /compact or /clear wenn starting new topic

### Statusline
The setup script installs a custom statusline (`statusline.ps1`) that shows the current
context window usage as a color-coded bar (green < 30%, yellow < 45%, red ≥ 45%) plus
token counts, and warns before auto-compact fires at the configured 50% threshold.
No interaction needed — it updates automatically at the bottom of every Claude Code
session; run `/context` for a detailed breakdown.

## LICENSE
This harness and the skills authored here (steam-library-analyzer, padlet-contributor, media-creator)
are released under the [MIT License](LICENSE) — use, modify, share at your own risk.

Included third-party skills keep their authors' terms:
- banana-pro-director-2.0 & cinema-worldbuilder-pro-2.0 by Joey
  ("No course. No upsell. The skills to download are above, and the prompts are below — take them.")
  — see SKILLS OVERVIEW for the source link.

Skills and tools pulled at setup time (Anthropic skills, karpathy-llm-wiki, claude-mem,
Higgsfield CLI) are downloaded from their official sources and remain under their
respective licenses. Note: Anthropic's document skills (docx/pdf/pptx/xlsx) are
source-available, not open source — they are not redistributed in this repo.

Attribution: mention Joey (Higgsfield director skills) and please-insert-name (cc-harness).

