---
id: "openai/codex"
name: "openai/codex"
url: "https://github.com/openai/codex"
date: "2026-09-22"
source: "GitHub Trending"
category: "github_discovery"
kind: "agent_framework"
compatibility: 94
momentum: 100
risk: 43
integration_effort: 52
expected_gain: 85
composite: 81
replacement_target: ""
related_articles: [{"title":"Show HN: Ax-check.com – Can agents use your product?","date":"2026-09-17","topic":"AI agents","similarity":0.262,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-17/09-show-hn-ax-check-com-can-agents-use-your-product.md"},{"title":"Show HN: Open tool for testing your AI Agents (No LLM)","date":"2026-08-28","topic":"AI agents","similarity":0.262,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-28/06-show-hn-open-tool-for-testing-your-ai-agents-no-llm.md"},{"title":"Show HN: Foremerge – Catch intent conflicts between parallel coding agents","date":"2026-09-21","topic":"AI agents","similarity":0.261,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-09-21/06-show-hn-foremerge-catch-intent-conflicts-between-parallel-coding-agent.md"}]
pros: ["Recently updated (2026-09-22)","Apache-2.0 license","125866 GitHub stars","GitHub Actions/CI detected"]
cons: ["README includes remote script execution pattern","README mentions credentials or API tokens"]
readme_quality: 85
has_ci: true
has_tests: false
setup_steps_count: 5
dependency_files: [{"name":"package.json","summary":"deps prettier; scripts format, format:fix, write-hooks-schema"}]
install_commands: ["npm install -g @openai/codex"]
risk_flags: ["README includes remote script execution pattern","README mentions credentials or API tokens"]
status: "new"
---

# openai/codex

Lightweight coding agent that runs in your terminal

URL: https://github.com/openai/codex

## Why it matters
You saved an article on 2026-09-17 about AI agents; this candidate overlaps with "Show HN: Ax-check.com – Can agents use your product?" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-09-22)
+ Apache-2.0 license
+ 125866 GitHub stars
+ GitHub Actions/CI detected

## Cons
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Repository Inspection
README quality: 85/100
CI detected: yes
Tests mentioned: no
Setup steps estimate: 5

Dependency files:
- package.json: deps prettier; scripts format, format:fix, write-hooks-schema

Install commands found:
- npm install -g @openai/codex

Risk flags:
- README includes remote script execution pattern
- README mentions credentials or API tokens

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<p align="center"><strong>Codex CLI</strong> is a coding agent from OpenAI that runs locally on your computer.
<p align="center">
  <img src="https://github.com/openai/codex/blob/main/.github/codex-cli-splash.png" alt="Codex CLI splash" width="80%" />
</p>
</br>
If you want Codex in your code editor (VS Code, Cursor, Windsurf), <a href="https://developers.openai.com/codex/ide">install in your IDE.</a>
</br>If you want the desktop app experience, run <code>codex app</code> or visit <a href="https://chatgpt.com/codex?app-landing-page=true">the Codex App page</a>.
</br>If you are looking for the <em>cloud-based agent</em> from OpenAI, <strong>Codex Web</strong>, go to <a href="https://chatgpt.com/codex">chatgpt.com/codex</a>.</p>

---

## Quickstart

### Installing and running Codex CLI

Run the following on Mac or Linux to install Codex CLI:

```shell
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Run the following on Windows to install Codex CLI:

```shell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

The standalone installers download from `https://releases.openai.com/codex` by default and fall back to GitHub Releases if a metadata or asset download is unavailable. To force GitHub Releases, set `CODEX_INSTALLER_USE_RELEASES_OPENAI_COM` to `false` (`0` and `no` are also accepted):

```shell
curl -fsSL https://chatgpt.com/codex/install.sh | CODEX_INSTALLER_USE_RELEASES_OPENAI_COM=false sh
```

```powershell
$env:CODEX_INSTALLER_USE_RELEASES_OPENAI_COM='false'; irm https://chatgpt.com/codex/install.ps1 | iex
```

Codex CLI can also be installed via the following package managers:

```shell
# Install using npm
npm install -g @openai/codex
```

```shell
# Install using Homebrew
brew install --cask codex
```

Then simply run `codex` to get started.

<details>
<summary>You can also go to the <a href="https://github.com/openai/codex/releases/latest">latest GitHub Release</a> and download the appropriate binary for your platform.</summary>

Each GitHub Release contains many executables, but in practice, you likely want one of these:

- macOS
  - Apple Silicon/arm64: `codex-aarch64-apple-darwin.tar.gz`
  - x86_64 (older Mac hardware): `codex-x86_64-apple-darwin.tar.gz`
- Linux
  - x86_64: `codex-x86_64-unknown-linux-musl.tar.gz`
  - arm64: `codex-aarch64-unknown-linux-musl.tar.gz`

Each archive contains a single entry with the platform baked into the name (e.g., `codex-x86_64-unknown-linux-musl`), so you likely want to rename it to `codex` after extracting it.

</details>

### Using Codex with your ChatGPT plan

Run `codex` and select **Sign in with ChatGPT**. We recommend signing into your ChatGPT account to use Codex as part of your Plus, Pro, Business, Edu, or Enterprise plan. [Learn more about what's included in your ChatGPT plan](https://help.openai.com/en/articles/11369540-codex-in-chatgpt).

You can also use Codex with an API key, but this requires [additional setup](https://developers.openai.com/codex/auth#sign-in-with-an-api-key).

## Docs

- [**Codex Documentation**](https://developers.openai.com/codex)
- [**Contributing**](./docs/contributing.md)
- [**Installing & building**](./docs/install.md)
- [**Open source fund**](./docs/open-source-fund.md)

This repository is licensed under the [Apache-2.0 License](LICENSE).

