---
id: "millionco/react-doctor"
name: "millionco/react-doctor"
url: "https://github.com/millionco/react-doctor"
date: "2026-07-14"
source: "GitHub Search API"
category: "github_discovery"
kind: "agent_framework"
compatibility: 80
momentum: 100
risk: 48
integration_effort: 62
expected_gain: 85
composite: 75
replacement_target: ""
related_articles: [{"title":"Show HN: Skill for your agent to visualize your gbrain and Obsidian","date":"2026-06-13","topic":"AI dev tools","similarity":0.283,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-13/11-show-hn-skill-for-your-agent-to-visualize-your-gbrain-and-obsidian.md"},{"title":"llm011/ethan-agent","date":"2026-06-20","topic":"AI dev tools","similarity":0.263,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-20/93-llm011-ethan-agent.md"},{"title":"Show HN: Reverse-engineering web apps into agent tools","date":"2026-07-09","topic":"AI agents","similarity":0.254,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-07-09/07-show-hn-reverse-engineering-web-apps-into-agent-tools.md"}]
pros: ["Recently updated (2026-07-14)","13714 GitHub stars","GitHub Actions/CI detected","README mentions tests or validation"]
cons: ["License was not clearly detected by GitHub","Integration may take more than a quick install","README mentions telemetry/analytics"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 3
dependency_files: [{"name":"package.json","summary":"deps @changesets/changelog-github, @changesets/cli, @rayhanadev/truffler, @sentry/cli, @types/node, @voidzero-dev/vite-plus-core, commander, cross-env; scripts prepare, dev, build, performance, performance:stress, performance:profile, performance:memory, test"}]
install_commands: ["npx react-doctor@latest","npx react-doctor@latest install","npx react-doctor@latest ci install","npx react-doctor@latest --no-telemetry"]
risk_flags: ["README mentions telemetry/analytics"]
status: "new"
---

# millionco/react-doctor

Your agent writes bad React. This catches it

URL: https://github.com/millionco/react-doctor

## Why it matters
You saved an article on 2026-06-13 about AI dev tools; this candidate overlaps with "Show HN: Skill for your agent to visualize your gbrain and Obsidian" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-14)
+ 13714 GitHub stars
+ GitHub Actions/CI detected
+ README mentions tests or validation

## Cons
- License was not clearly detected by GitHub
- Integration may take more than a quick install
- README mentions telemetry/analytics

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 3

Dependency files:
- package.json: deps @changesets/changelog-github, @changesets/cli, @rayhanadev/truffler, @sentry/cli, @types/node, @voidzero-dev/vite-plus-core, commander, cross-env; scripts prepare, dev, build, performance, performance:stress, performance:profile, performance:memory, test

Install commands found:
- npx react-doctor@latest
- npx react-doctor@latest install
- npx react-doctor@latest ci install
- npx react-doctor@latest --no-telemetry

Risk flags:
- README mentions telemetry/analytics

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/react-doctor-readme-logo-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="./assets/react-doctor-readme-logo-light.svg">
  <img alt="React Doctor" src="./assets/react-doctor-readme-logo-light.svg" width="134" height="36">
</picture>

[![version](https://img.shields.io/npm/v/react-doctor?style=flat&colorA=000000&colorB=000000)](https://npmjs.com/package/react-doctor)
[![downloads](https://img.shields.io/npm/dt/react-doctor.svg?style=flat&colorA=000000&colorB=000000)](https://npmjs.com/package/react-doctor)

Your agent writes bad React, this catches it.

React Doctor deterministically scans your codebase and finds issues across state & effects, performance, architecture, security, and accessibility.

Works for all React frameworks and libraries - Next.js, Vite, TanStack, React Native, Expo, you name it.

[Website →](https://react.doctor/docs)

## Install

### 1. Quick start

Run this at your project root to get an audit.

```bash
npx react-doctor@latest
```

https://github.com/user-attachments/assets/07cc88d9-9589-44c3-aa73-5d603cb1c570

### 2. Install for agents

Once you have an audit, you can install the skill for your coding agent to learn from the issues and fix them in the future.

```bash
npx react-doctor@latest install
```

Works with Claude Code, Cursor, Codex, OpenCode, and many more.

### 3. Run in CI

React Doctor reviews every pull request and reports only the issues your change introduced, not your existing backlog. Set it up with one command:

```bash
npx react-doctor@latest ci install
```

This adds the workflow, scans every pull request, and posts a summary comment. Change the gate, scan scope, and comments anytime with `react-doctor ci config`, and bump the action with `react-doctor ci upgrade`. GitHub Actions is fully supported; GitLab CI gets a gate-only scaffold.

[CI docs →](https://react.doctor/ci)

### 4. Configure rules

You can configure which rules to run and how to run them in `doctor.config.ts`.

[Learn more →](https://react.doctor/docs/configuration/config-files)

### 5. Consume JSON

Use `--json` for stdout or `--json-out <path>` for a file. The default
`schemaVersion: 3` report includes deterministic diagnostic IDs and exact
per-project scan coverage.

[JSON report contract →](./docs/json-report.md)

## Telemetry

The CLI reports crashes, basic run traces, and anonymous usage counters to [Sentry](https://sentry.io/) to help us fix bugs and prioritize work.

We collect:

- Environment: CLI version, platform, Node version
- Invocation: which command, package manager, and run context (whether it's local vs. CI vs. coding agent)
- Project shape: framework, React version, TypeScript, project size (NO file contents)
- Rules fired: rule names and counts only (e.g. `react-doctor/no-array-index-as-key`) (NO code or specific findings)
- De-minified React Doctor CLI stack traces

To opt out, run: `npx react-doctor@latest --no-telemetry`

## Contributing

[Issues welcome!](https://github.com/millionco/react-doctor/issues)

MIT-licensed

