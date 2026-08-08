---
id: "basedhardware/omi"
name: "BasedHardware/omi"
url: "https://github.com/BasedHardware/omi"
date: "2026-08-08"
source: "GitHub Search API"
category: "github_discovery"
kind: "ai_dev_tool"
compatibility: 80
momentum: 100
risk: 35
integration_effort: 52
expected_gain: 77
composite: 77
replacement_target: ""
related_articles: [{"title":"Show HN: Reverse-engineering web apps into agent tools","date":"2026-07-09","topic":"AI agents","similarity":0.199,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-09/07-show-hn-reverse-engineering-web-apps-into-agent-tools.md"},{"title":"Show HN: Mint MCP – Generate 3D assets from coding agents","date":"2026-08-04","topic":"AI agents","similarity":0.197,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-04/06-show-hn-mint-mcp-generate-3d-assets-from-coding-agents.md"}]
pros: ["Recently updated (2026-08-08)","MIT license","13138 GitHub stars","GitHub Actions/CI detected"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: false
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps expo-file-system, ioredis, @firebase/rules-unit-testing, dotenv-cli, firebase, firebase-tools; scripts test:memory-firestore-rules:emulator, test:memory-firestore-transactions:emulator, test:memory-firestore-python-apply:emulator, test:listen-lifecycle:emulator, test:desktop-beta-admission:emulator, test:listen-pusher-stack:emulator, test:sync-cloud-tasks-stack:emulator, test:replay-harness-phase0a:emulator"}]
install_commands: ["git clone https://github.com/BasedHardware/omi.git && cd omi/desktop/macos && ./run.sh --yolo","git clone https://github.com/BasedHardware/omi.git","npm install","npm run dev","uv --version"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# BasedHardware/omi

AI that sees your screen, listens to your conversations and tells you what to do

URL: https://github.com/BasedHardware/omi

## Why it matters
You saved an article on 2026-07-09 about AI agents; this candidate overlaps with "Show HN: Reverse-engineering web apps into agent tools" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-08)
+ MIT license
+ 13138 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 3

Dependency files:
- package.json: deps expo-file-system, ioredis, @firebase/rules-unit-testing, dotenv-cli, firebase, firebase-tools; scripts test:memory-firestore-rules:emulator, test:memory-firestore-transactions:emulator, test:memory-firestore-python-apply:emulator, test:listen-lifecycle:emulator, test:desktop-beta-admission:emulator, test:listen-pusher-stack:emulator, test:sync-cloud-tasks-stack:emulator, test:replay-harness-phase0a:emulator

Install commands found:
- git clone https://github.com/BasedHardware/omi.git && cd omi/desktop/macos && ./run.sh --yolo
- git clone https://github.com/BasedHardware/omi.git
- npm install
- npm run dev
- uv --version

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<div align="center">

# **omi**

### A 2nd brain you trust more than your 1st

Omi captures your screen and conversations, transcribes in real-time, generates summaries and action items, and gives you an AI chat that remembers everything you've seen and heard. Works on desktop, phone and wearables. Fully open source.

Trusted by 300,000+ professionals.


[![Discord](https://img.shields.io/discord/1192313062041067520?label=Discord&logo=discord&logoColor=white&style=for-the-badge)](http://discord.omi.me)&ensp;
[![GitHub Repo stars](https://img.shields.io/github/stars/BasedHardware/Omi?style=for-the-badge)](https://github.com/BasedHardware/Omi)&ensp;
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Website](https://omi.me/) · [Docs](https://docs.omi.me/) · [Discord](http://discord.omi.me) · [Twitter](https://x.com/kodjima33) · [DeepWiki](https://deepwiki.com/BasedHardware/omi)

</div>

## Quick Start

### macOS

```sh
git clone https://github.com/BasedHardware/omi.git && cd omi/desktop/macos && ./run.sh --yolo
```

Builds the macOS app, connects to the cloud backend, and launches. No env files, no credentials, no local backend.

> **Requirements:** macOS 14+, [Xcode](https://developer.apple.com/xcode/) (includes Swift & code signing), [Node.js](https://nodejs.org/)

### Windows

```powershell
git clone https://github.com/BasedHardware/omi.git
cd omi\desktop\windows
npm install
copy .env.example .env
npm run dev
```

Starts the Windows desktop app from source using the public config in `.env.example`.

> **Requirements:** [Node.js](https://nodejs.org/)

For development worktrees, run the baseline local setup once. It installs the Git hooks and syncs the pinned backend Python environment used by selected pre-push checks; mobile and desktop runtime environments remain opt-in.

```bash
make setup
```

<details>
  <summary>Full Installation</summary>
  
For local development with the full backend stack:

1. Install prerequisites

```bash
xcode-select --install
uv --version
```

2. Clone and configure

```bash
git clone https://github.com/BasedHardware/omi.git
cd omi/desktop/macos
cp ../../backend/.env.example ../../backend/.env
```

3. Build and run

```bash
./run.sh
```

See [desktop/macos/README.md](desktop/macos/README.md) for environment variables and credential setup.


### Mobile App

```bash
cd app && bash setup.sh ios    # or: bash setup.sh android
```

</details>

<p align="center">
  <a href="https://macos.omi.me"><img src="docs/assets/readme/download-macos-badge.png" alt="Download for macOS" height="50"></a>
  <a href="https://apps.apple.com/us/app/friend-ai-wearable/id6502156163"><img src="docs/assets/readme/download-appstore-badge.png" alt="Download on the App Store" height="50"></a>
  <a href="https://play.google.com/store/apps/details?id=com.friend.ios"><img src="docs/assets/readme/download-gplay-badge.png" alt="Get it on Google Play" height="50"></a>
</p>

<p align="center">
  <a href="https://app.omi.me">Try in Browser</a>
</p>

<details>
  <summary>How it works</summary>


```
┌─────────────────────────────────────────────────────────┐
│                      Your Devices                       │
│                                                         │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────────┐  │
│  │ Omi      │  │ macOS App    │  │ Mobile App        │  │
│  │ Wearable │  │ (Swift/Python) │  │ (Flutter)         │  │
│  └────┬─────┘  └──────┬───────┘  └────────┬──────────┘  │
│       │    BLE         │   HTTPS/WS        │             │
└───────┼────────────────┼───────────────────┼─────────────┘
        │                │                   │
        ▼                ▼                   ▼
┌─────────────────────────────────────────────────────────┐
│                    Omi Backend (Python)                  │
│                                                         │
│  ┌─────────┐  ┌──────────┐  ┌─────────┐  ┌──────────┐  │
│  │ Listen  │  │ Pusher   │  │ VAD     │  │ Diarizer │  │
│  │ (REST)  │  │ (WS)     │  │ (GPU)   │  │ (GPU)    │  │
│  └─────────┘  └──────────┘  └─────────┘  └──────────┘  │
│                                                         │
│  ┌─────────┐  ┌──────────┐  ┌─────────┐  ┌──────────┐  │
│  │ Deepgram│  │ Firestore│  │ Redis   │  │ LLMs     │  │
│  │ (STT)   │  │ (DB)     │  │ (Cache) │  │ (AI)     │  │
│  └─────────┘  └──────────┘  └─────────┘  └──────────┘  │
└─────────────────────────────────────────────────────────┘
```

| Component | Path | Stack |
|-----------|------|-------|
| **macOS app** | [`desktop/macos/`](desktop/macos/) | Swift, SwiftUI, Python desktop backend |
| Mobile app | [`app/`](app/) | Flutter (iOS & Android) |
| Backend API | [`backend/`](backend/) | Python, FastAPI, Firebase |
| Firmware | [`omi/`](omi/) | nRF, Zephyr, C |
| Omi Glass | [`omiGlass/`](omiGlass/) | ESP32-S3, C |
| SDKs | [`sdks/`](sdks/) | Device (Python/Swift/RN + multi-lang protocol) |
| AI Personas | [`web/personas-open-source/`](web/personas-open-source/) | Next.js |

</details>

## Documentation

### Getting Started
- [Introduction](https://docs.omi.me/)
- [Quick Start Guide](https://docs.omi.me/quickstart)
- [macOS App Development](desktop/macos/README.md)
- [Mobile App Setup](https://docs.omi.me/doc/developer/AppSetup)
- [Backend Setup](https://docs.omi.me/doc/developer/backend/Backend_Setup)
- [Contributing](https://docs.omi.me/doc/developer/Contribution) — also [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`PRODUCT.md`](PRODUCT.md)

### Building Apps
- [App Development Guide](https://docs.omi.me/doc/developer/apps/Introduction)
- [Example Apps](https://docs.omi.me/doc/developer/apps/examples/Github) — GitHub, Slack, OmiMentor
- [Audio Streaming Apps](https://docs.omi.me/doc/developer/apps/AudioStreaming)
- [Custom Chat Tools](https://docs.omi.me/doc/developer/apps/ChatTools)
- [Submit to App Store](https://docs.omi.me/doc/developer/apps/Submitting)

### API & SDKs
- [API Reference](https://docs.omi.me/api-reference/introduction) — REST endpoints for memories, conversations, action items
- [Device multi-lang protocol SDKs](sdks/device/) — shared BLE UUIDs/packet framing for TS/Go/Rust/C++/Dart
- [Python device SDK](sdks/python/) — full BLE + Opus + Deepgram
- [Swift device SDK](sdks/swift/)
- [React Native device SDK](sdks/react-native/)
- [MCP Server](mcp/) — Model Context Protocol integration

### Architecture
- [Backend Deep Dive](https://docs.omi.me/doc/developer/backend/backend_deepdive)
- [Transcription Pipeline](https://docs.omi.me/doc/developer/backend/transcription)
- [Chat System](https://docs.omi.me/doc/developer/backend/chat_system)
- [Audio Streaming Pipeline](https://docs.omi.me/doc/developer/backend/listen_pusher_pipeline)
- [BLE Protocol](https://docs.omi.me/doc/developer/Protocol)

## Omi Hardware
![Omi](https://github.com/user-attachments/assets/7a658366-9e02-4057-bde5-a510e1f0217a)

Open-source AI wearables that pair with the mobile app for 24h+ continuous capture.

<p align="center">
  <img src="https://github.com/user-attachments/assets/834d3fdb-31b5-4f22-ae35-da3d2b9a8f59" alt="Omi Wearable" width="49%" />
  <img src="https://github.com/user-attachments/assets/fdad4226-e5ce-4c55-b547-9101edfa3203" alt="Omi Glass" width="49%" />
</p>

- [Buy Omi](https://www.omi.me/pages/product)
- [Buy Omi Glass Dev Kit](https://www.omi.me/glass) — ESP32-S3, camera + audio
- [Open Source Hardware Designs](https://docs.omi.me/doc/hardware/consumer/electronics)
- [Buying Guide](https://docs.omi.me/doc/assembly/Buying_Guide)
- [Build the Device](https://docs.omi.me/doc/assembly/Build_the_device)
- [Flash Firmware](https://docs.omi.me/doc/get_started/Flash_device)
- [Integrate Your Wearable](https://docs.omi.me/doc/integrations)
- [Hardware Specs](https://docs.omi.me/doc/hardware/DevKit2)

## License

MIT — see [LICENSE](LICENSE)

