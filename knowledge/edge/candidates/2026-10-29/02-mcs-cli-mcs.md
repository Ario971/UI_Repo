---
id: "mcs-cli/mcs"
name: "mcs-cli/mcs"
url: "https://github.com/mcs-cli/mcs"
date: "2026-10-29"
source: "GitHub Search API"
category: "github_discovery"
kind: "agent_framework"
compatibility: 79
momentum: 82
risk: 24
integration_effort: 40
expected_gain: 71
composite: 75
replacement_target: ""
related_articles: [{"title":"Show HN: shadowclone, skills learned from your coding agent corrections","date":"2026-10-13","topic":"AI agents","similarity":0.283,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-10-13/06-show-hn-shadowclone-skills-learned-from-your-coding-agent-corrections.md"},{"title":"AIBeginnerX/oh-our-pi-desktop","date":"2026-10-20","topic":"AI dev tools","similarity":0.255,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-10-20/11-aibeginnerx-oh-our-pi-desktop.md"},{"title":"waniyaro/agent-reels-viewer","date":"2026-10-05","topic":"AI dev tools","similarity":0.253,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-10-05/13-waniyaro-agent-reels-viewer.md"}]
pros: ["Recently updated (2026-10-29)","MIT license","92 GitHub stars","GitHub Actions/CI detected"]
cons: ["No clear install command found in README"]
readme_quality: 70
has_ci: true
has_tests: true
setup_steps_count: 0
dependency_files: []
install_commands: []
risk_flags: []
status: "new"
---

# mcs-cli/mcs

Managed Claude Stack - Reproducible AI infrastructure for Claude Code

URL: https://github.com/mcs-cli/mcs

## Why it matters
You saved an article on 2026-10-13 about AI agents; this candidate overlaps with "Show HN: shadowclone, skills learned from your coding agent corrections" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-10-29)
+ MIT license
+ 92 GitHub stars
+ GitHub Actions/CI detected

## Cons
- No clear install command found in README

## Repository Inspection
README quality: 70/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 0

Dependency files:
- none detected

Install commands found:
- none detected

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://mcs-cli.dev/assets/logo.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://mcs-cli.dev/assets/logo-light.svg">
  <img alt="mcs" src="https://mcs-cli.dev/assets/logo-light.svg" width="280">
</picture>

### Your Claude Code environment — packaged, portable, and reproducible.

[![Swift 6.0+](https://img.shields.io/badge/Swift-6.0+-F05138.svg?logo=swift&logoColor=white)](https://swift.org)
[![macOS](https://img.shields.io/badge/macOS-13+-000000.svg?logo=apple&logoColor=white)](https://www.apple.com/macos/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Homebrew](https://img.shields.io/badge/Homebrew-tap-FBB040.svg?logo=homebrew&logoColor=white)](https://github.com/mcs-cli/homebrew-tap)
[![Tech Packs](https://img.shields.io/badge/Tech_Packs-Browse-8B5CF6.svg)](https://techpacks.mcs-cli.dev)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/mcs-cli/mcs)

</div>

## 🚀 Quick Start

### 1. Install

```bash
brew install mcs-cli/tap/mcs
```

### 2. Add tech packs

Browse available packs at **[techpacks.mcs-cli.dev](https://techpacks.mcs-cli.dev)**, then add them:

```bash
mcs pack add owner/pack-name
```

### 3. Sync a project

```bash
cd ~/Developer/my-project
mcs sync
```

### 4. Verify everything

```bash
mcs doctor
```

That's it. Your MCP servers, plugins, hooks, skills, commands, agents, settings, and templates are all in place.

### One-file bootstrap

Prefer a declarative setup? Drop a `mcs.yaml` at the project root and run `mcs bootstrap`:

```yaml
# ./mcs.yaml
schemaVersion: 1
packs:
  - source: mcs-cli/dev
    ref: main
    values:
      BRANCH_PREFIX: feature
  - source: mcs-cli/memory
```

```bash
mcs bootstrap
```

Bootstrap adds any missing packs, seeds prompt answers from `values`, and syncs the project. Add `--trust-all` to approve packs without the interactive trust prompt, for any run with no terminal to answer it. See [`mcs bootstrap`](docs/cli.md#mcs-bootstrap) for the full reference.

---

## The Problem

You've spent hours getting Claude Code just right — MCP servers, plugins, hooks, skills, custom commands, fine-tuned settings. Then:

- 🖥️ **New machine?** Start over from scratch.
- 👥 **Onboarding a teammate?** "Just follow this 47-step wiki page."
- 📂 **Different projects?** Copy-paste configs, hope nothing drifts.
- 🔄 **Something broke?** Good luck figuring out what changed.

## The Solution

`mcs` is a **configuration engine for Claude Code** — like Ansible for your AI development environment. Package everything into shareable **tech packs** (Git repos with a `techpack.yaml` manifest), then sync them across any project, any machine, in seconds.

| Without `mcs` | With `mcs` |
|---|---|
| Install MCP servers one by one | `mcs pack add` + `mcs sync` |
| Hand-edit `settings.json` per project | Managed settings composition |
| Copy hooks between projects manually | Auto-installed per-project from packs |
| Configuration drifts silently | `mcs doctor --fix` detects and repairs |
| Rebuild from memory on new machines | Fully reproducible in minutes |
| No way to share your setup | Push a pack, anyone can `mcs pack add` it |

---

## 🔍 Explore Tech Packs

Packs are modular — mix and match what you need instead of one monolith. Browse the full catalog, search by category, and find install commands:

**[techpacks.mcs-cli.dev](https://techpacks.mcs-cli.dev)**

> 💡 Can't find what you need? Build your own — see [Creating Tech Packs](docs/creating-tech-packs.md).

---

## ⚙️ How It Works

```
 Tech Packs          mcs sync          Your Project
 (Git repos)  -----> (engine)  -----> (configured)
                        |
                   .---------.
                   |         |
                   v         v
              Per-Project  Global
              artifacts    artifacts
```

1. **Select** which packs to apply (interactive multi-select or `--all`)
2. **Resolve** prompts (auto-detect project files, ask for config values)
3. **Install** artifacts to the right locations (skills, hooks, commands, agents, settings, MCP servers)
4. **Track** everything for convergence — re-running `mcs sync` adds what's missing, removes what's deselected, and updates what changed

Use `mcs sync --global` for global-scope components (Homebrew packages, plugins, global MCP servers). See [Architecture](docs/architecture.md) for artifact locations and the full sync flow.

---

## 📦 What's in a Tech Pack?

A tech pack is a Git repo with a `techpack.yaml` manifest. It can bundle MCP servers, plugins, hooks, skills, commands, agents, settings, templates, and doctor checks — anything `mcs` can install, verify, and uninstall.

Use `mcs pack validate` to check your pack for structural errors and best practices before sharing.

📖 **Full guide:** [Creating Tech Packs](docs/creating-tech-packs.md) · **Schema reference:** [techpack-schema.md](docs/techpack-schema.md)

---

## 🎯 Use Cases

- **🧑‍💻 Solo Developer** — New Mac? One `mcs pack add` + `mcs sync` and your entire Claude Code environment is back. No wiki, no notes, no memory required.
- **👥 Teams** — Create a team pack with your org's MCP servers, approved plugins, and coding standards. Every developer gets the same setup with `mcs sync --all`.
- **🌐 Open Source** — Use `mcs export` to create a tech pack from your repo's config. Contributors run `mcs sync` and get the right MCP servers, skills, and conventions automatically.
- **🧪 Experimentation** — Try a different set of MCP servers, swap packs, roll back. `mcs` converges cleanly — deselected packs are fully removed, no leftovers.

---

## 🛡️ Safety & Trust

`mcs` is designed to be non-destructive and transparent. Timestamped backups before modifying user content, `--dry-run` to preview changes, section markers to preserve your edits in `CLAUDE.local.md`, and SHA-256 trust verification for pack scripts.

📖 **Full details:** [Architecture > Safety & Trust](docs/architecture.md#safety--trust)

---

## 🔍 Verifying Your Setup with Poirot

After `mcs sync`, want to confirm everything landed correctly? [**Poirot**](https://github.com/leonardocardoso/poirot) is a native macOS companion that gives you a visual overview of your Claude Code configuration — MCP servers, settings, sessions, and more — all in one place.

The perfect complement to `mcs`: configure your environment with `mcs`, then use Poirot to see exactly what's installed and running.

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| 📖 [CLI Reference](docs/cli.md) | Complete command reference (`sync`, `pack`, `doctor`, `export`, `cleanup`, `check-updates`, `config`) |
| 📖 [Creating Tech Packs](docs/creating-tech-packs.md) | Step-by-step guide to building your first pack |
| 📋 [Tech Pack Schema](docs/techpack-schema.md) | Complete `techpack.yaml` field reference |
| 🏗️ [Architecture](docs/architecture.md) | Internal design, sync flow, safety guarantees, and extension points |
| 🔧 [Troubleshooting](docs/troubleshooting.md) | Common issues and fixes |

---

## 🛠️ Development

```bash
swift build                                            # Build
swift test                                             # Run tests
swift build -c release --arch arm64 --arch x86_64      # Universal binary
```

See [Architecture](docs/architecture.md) for project structure and design decisions.

## 🤝 Contributing

Tech pack ideas and engine improvements are welcome!

1. Fork the repo
2. Create a feature branch
3. Run `swift test`
4. Open a PR

For building new packs, start with [Creating Tech Packs](docs/creating-tech-packs.md).

---

<div align="center">

## 💛 Support

If `mcs` saves you time, consider [sponsoring the project](https://github.com/sponsors/bguidolim).

**MIT License** · Made with ❤️ by [Bruno Guidolim](https://github.com/bguidolim) · [mcs-cli](https://github.com/mcs-cli)

</div>

