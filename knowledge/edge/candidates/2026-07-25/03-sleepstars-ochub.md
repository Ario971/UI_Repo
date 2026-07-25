---
id: "sleepstars/ochub"
name: "Sleepstars/OcHub"
url: "https://github.com/Sleepstars/OcHub"
date: "2026-07-25"
source: "GitHub Search API"
category: "github_discovery"
kind: "mcp_server"
compatibility: 89
momentum: 45
risk: 32
integration_effort: 44
expected_gain: 79
composite: 70
replacement_target: ""
related_articles: [{"title":"Show HN: Local MCP – Claude/ChatGPT read your iMessage, Teams, files on-device","date":"2026-07-05","topic":"AI agents","similarity":0.301,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-05/09-show-hn-local-mcp-claude-chatgpt-read-your-imessage-teams-files-on-dev.md"},{"title":"Kuberwastaken/VPSmaxxing","date":"2026-06-30","topic":"AI dev tools","similarity":0.286,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-30/13-kuberwastaken-vpsmaxxing.md"},{"title":"yearningss/gamemaker-mcp","date":"2026-07-25","topic":"AI dev tools","similarity":0.283,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-07-25/13-yearningss-gamemaker-mcp.md"}]
pros: ["Recently updated (2026-07-25)","GPL-3.0 license","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["README mentions credentials or API tokens"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 2
dependency_files: [{"name":"Cargo.toml","summary":"Rust project metadata detected"}]
install_commands: ["git clone https://github.com/Sleepstars/OcHub.git","cargo run -p ochub-app","cargo install cargo-packager --version 0.11.8 --locked"]
risk_flags: ["README mentions credentials or API tokens"]
status: "new"
---

# Sleepstars/OcHub

Native desktop control center for AI coding tools — provider switching, local relay, MCP, skills, sessions, usage, and sync. Built with GPUI + axum.

URL: https://github.com/Sleepstars/OcHub

## Why it matters
You saved an article on 2026-07-05 about AI agents; this candidate overlaps with "Show HN: Local MCP – Claude/ChatGPT read your iMessage, Teams, files on-device" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-25)
+ GPL-3.0 license
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- README mentions credentials or API tokens

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 2

Dependency files:
- Cargo.toml: Rust project metadata detected

Install commands found:
- git clone https://github.com/Sleepstars/OcHub.git
- cargo run -p ochub-app
- cargo install cargo-packager --version 0.11.8 --locked

Risk flags:
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/ochub-wordmark-light.png">
    <img src="docs/assets/ochub-wordmark-dark.png" alt="OcHub" width="680">
  </picture>
</p>

<p align="center">
  A native desktop control center for AI coding tools.
  Switch providers, manage shared capabilities, and run a local relay from one place.
</p>

<p align="center">
  <a href="https://github.com/Sleepstars/OcHub/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/Sleepstars/OcHub/actions/workflows/ci.yml/badge.svg"></a>
  <a href="https://github.com/Sleepstars/OcHub/actions/workflows/release.yml"><img alt="Release" src="https://github.com/Sleepstars/OcHub/actions/workflows/release.yml/badge.svg"></a>
  <a href="https://github.com/Sleepstars/OcHub/releases/latest"><img alt="Latest release" src="https://img.shields.io/github/v/release/Sleepstars/OcHub?display_name=tag&sort=semver"></a>
  <a href="LICENSE"><img alt="GPL-3.0-or-later" src="https://img.shields.io/github/license/Sleepstars/OcHub"></a>
  <img alt="macOS, Windows, Linux" src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-31b8b5">
</p>

<p align="center">
  <a href="https://github.com/Sleepstars/OcHub/releases/latest">Download</a>
  ·
  <a href="#what-ochub-does">Features</a>
  ·
  <a href="#build-from-source">Build from source</a>
  ·
  <a href="packaging/README.md">Release guide</a>
</p>

> OcHub is under active pre-release development. Back up important tool
> configuration before trying an early build.

## What OcHub does

OcHub manages **Claude Code, Claude Desktop, Codex, OpenCode, OpenClaw, and
Hermes** without requiring a browser shell or webview.

| Area | Capabilities |
| --- | --- |
| Providers | Discover, import, edit, switch, and test direct API providers |
| Relay station | Route supported clients through a local gateway with model aliases, reasoning mapping, failover, health checks, and usage accounting |
| Shared tools | Manage MCP servers and reusable skills across supported clients |
| Operations | Browse sessions, inspect usage, configure sync, and manage app behavior |
| Migration | One-time, read-only import from compatible cc-switch databases |

OcHub owns `~/.ochub/` and never writes back to `~/.cc-switch/`. It does update
the live configuration directories of tools you explicitly manage, so quit
cc-switch before switching providers in OcHub.

## Downloads

Every version tag is built on the matching native GitHub-hosted runner.

| Platform | Release files |
| --- | --- |
| macOS Apple Silicon | ARM64 `.dmg` |
| macOS Intel | x64 `.dmg` |
| Windows 10/11 x64 | NSIS installer and portable `.zip` |
| Linux x64 | AppImage and Debian `.deb` |

The release also includes `SHA256SUMS` and a GitHub artifact attestation. Verify
a downloaded file with:

```sh
sha256sum -c SHA256SUMS --ignore-missing
gh attestation verify <downloaded-file> --repo Sleepstars/OcHub
```

Unsigned packages remain available for testing when platform signing
credentials have not been configured; macOS Gatekeeper or Windows SmartScreen
may warn in that case. See the [release guide](packaging/README.md) for optional
Developer ID notarization and Authenticode signing.

## Architecture

OcHub is a Rust workspace built around GPUI and axum.

| Crate | Role |
| --- | --- |
| `ochub-core` | Domain model, SQLite storage, provider switching, client config writers, sync, MCP, skills, sessions, usage, and auth |
| `ochub-server` | Loopback control API and in-process relay gateway |
| `ochub-convert` | Request and response conversion between supported API dialects |
| `ochub-app` | Native GPUI desktop application hosting the core and server |

GPUI is pinned to a tested Zed commit. Linux builds enable both Wayland and X11;
macOS builds compile Metal shaders at runtime.

## Build from source

The repository pins Rust **1.97.1** in `rust-toolchain.toml`. Rustup selects it
automatically:

```sh
git clone https://github.com/Sleepstars/OcHub.git
cd OcHub
cargo run -p ochub-app
```

Platform prerequisites:

- **macOS:** Xcode or the Xcode Command Line Tools.
- **Windows:** Visual Studio 2022 Build Tools with the Windows SDK.
- **Debian/Ubuntu:** run `./scripts/ci/install-linux-deps.sh`.

Useful development commands:

```sh
just check
just test
just ci
just qa-app       # macOS: fixed /tmp/OCHUB-QA.app acceptance bundle
```

To build installers locally, install the same pinned packager used by CI:

```sh
cargo install cargo-packager --version 0.11.8 --locked
just package-macos
# or, on Linux:
just package-linux
```

## Automated releases

The `Release` workflow accepts only a tag that exactly matches the Cargo
workspace version. For example, workspace version `0.1.0` must be released as
`v0.1.0`. It builds both macOS architectures plus Windows and Linux in parallel,
checks the expected package set, creates checksums and provenance, and then
publishes one GitHub Release.

Detailed signing secret names and local packaging commands are documented in
[`packaging/README.md`](packaging/README.md).

## License

OcHub is licensed under the [GNU General Public License v3.0 or later](LICENSE).
This is a from-scratch GPUI + axum rewrite inspired by
[`cc-switch`](https://github.com/farion1231/cc-switch).

