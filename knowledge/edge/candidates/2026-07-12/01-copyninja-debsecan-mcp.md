---
id: "copyninja/debsecan-mcp"
name: "copyninja/debsecan-mcp"
url: "https://github.com/copyninja/debsecan-mcp"
date: "2026-07-12"
source: "GitHub Trending"
category: "github_discovery"
kind: "mcp_server"
compatibility: 92
momentum: 53
risk: 24
integration_effort: 64
expected_gain: 87
composite: 73
replacement_target: ""
related_articles: [{"title":"Show HN: AnswerJournal – An MCP server to save and share AI answers","date":"2026-06-23","topic":"AI dev tools","similarity":0.325,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-23/11-show-hn-answerjournal-an-mcp-server-to-save-and-share-ai-answers.md"},{"title":"dingmanjiang/ai-resource-config","date":"2026-06-11","topic":"AI dev tools","similarity":0.305,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI dev tools/2026-06-11/85-dingmanjiang-ai-resource-config.md"},{"title":"Show HN: AwsmAudio – a WebAudio editor with native MCP","date":"2026-06-15","topic":"AI agents","similarity":0.276,"file":"/home/runner/work/UI_Repo/UI_Repo/knowledge/feed/AI agents/2026-06-15/28-show-hn-awsmaudio-a-webaudio-editor-with-native-mcp.md"}]
pros: ["Recently updated (2026-07-12)","GPL-2.0 license","3 GitHub stars","GitHub Actions/CI detected"]
cons: ["Integration may take more than a quick install"]
readme_quality: 100
has_ci: true
has_tests: true
setup_steps_count: 4
dependency_files: [{"name":"pyproject.toml","summary":"python project; deps name, version, description, readme, requires-python, dependencies, httpx, pydantic"}]
install_commands: ["pip install -e .","pip install uvicorn"]
risk_flags: []
status: "new"
---

# copyninja/debsecan-mcp

Debian Security Scanner MCP Server - inspired from debsecan tool

URL: https://github.com/copyninja/debsecan-mcp

## Why it matters
You saved an article on 2026-06-23 about AI dev tools; this candidate overlaps with "Show HN: AnswerJournal – An MCP server to save and share AI answers" and may turn that reading into a practical workflow improvement.

## Pros
+ Recently updated (2026-07-12)
+ GPL-2.0 license
+ 3 GitHub stars
+ GitHub Actions/CI detected

## Cons
- Integration may take more than a quick install

## Repository Inspection
README quality: 100/100
CI detected: yes
Tests mentioned: yes
Setup steps estimate: 4

Dependency files:
- pyproject.toml: python project; deps name, version, description, readme, requires-python, dependencies, httpx, pydantic

Install commands found:
- pip install -e .
- pip install uvicorn

Risk flags:
- none detected

## Install
Nothing runs automatically. Review the upstream README before running any install command.

## README
> [!WARNING]
> **This package has been renamed to [`debvulns`](https://pypi.org/project/debvulns/).**
> `debsecan-mcp 0.1.5` is the final release under this name. Please update your dependency:
> ```
> pip install debvulns
> ```

# debsecan-mcp

[![Tests](https://github.com/copyninja/debsecan-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/copyninja/debsecan-mcp/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/copyninja/debsecan-mcp/branch/main/graph/badge.svg)](https://codecov.io/gh/copyninja/debsecan-mcp)
[![Built with opencode](https://img.shields.io/badge/Built%20with-opencode-5B4BFF.svg)](https://opencode.ai)

A Model Context Protocol (MCP) server for Debian security vulnerability
analysis. This server integrates with AI assistants (like Claude) to provide
vulnerability scanning capabilities for Debian systems.

## Features

- **List Vulnerabilities**: Scan all installed packages on your Debian system
  for known vulnerabilities
- **CVE Research**: Get detailed information about specific CVEs including EPSS
  scores
- **Automatic Suite Detection**: Automatically detects your Debian suite
  (bookworm, trixie, sid, etc.)
- **EPSS Integration**: Enriches vulnerability data with Exploit Prediction
  Scoring System (EPSS) scores

## Installation

```bash
pip install -e .
```

## Usage

### Running the MCP Server

```bash
debsecan-mcp
```

Or with a specific Debian suite:

```bash
DEBSECAN_SUITE=bookworm debsecan-mcp
```

### Command Line Options

```bash
debsecan-mcp --help
```

Options:
- `--transport {stdio,sse,streamable-http}` - Transport mode (default: stdio)
- `--mount-path PATH` - Mount path for HTTP transports (default: /mcp)
- `--host HOST` - Host to bind to for HTTP transport (default: 0.0.0.0)
- `--port PORT` - Port to bind to for HTTP transport (default: 8000)

### Transport Modes

#### STDIO Mode (Default)

Used for direct integration with AI assistants like Claude Desktop or VSCode.

```bash
debsecan-mcp --transport stdio
```

#### HTTP Modes

For HTTP-based access, use `sse` or `streamable-http`:

```bash
# SSE mode
debsecan-mcp --transport sse --port 8080 --mount-path /mcp

# Streamable HTTP mode
debsecan-mcp --transport streamable-http --port 8080 --mount-path /mcp
```

Note: HTTP modes require running behind a web server. See [HTTP Server Setup](#http-server-setup) below.

### HTTP Server Setup

The HTTP transport modes need to be served by a WSGI/ASGI server. Example with uvicorn:

```bash
# Install uvicorn
pip install uvicorn

# Run with stdio transport and wrap with uvicorn
uvicorn debsecan_mcp.main:mcp_app --app-dir src --host 0.0.0.0 --port 8000 --path /mcp
```

Or use the built-in development server:

```bash
# SSE mode
debsecan-mcp --transport sse --host 0.0.0.0 --port 8000 --mount-path /mcp
```

### Standalone CLI Tool (`debvulns`)

The package includes a standalone CLI tool `debvulns` that allows you to scan for vulnerabilities directly from the command line without running the MCP server.

On first run, `debvulns` downloads the vulnerabilities and EPSS data and caches them locally (defaulting to `/var/cache/debvulns` or falling back to `~/.cache/debvulns` if the default path is unwritable). The cache is refreshed automatically if it is older than 24 hours.

#### Running the CLI Tool

```bash
debvulns
```

#### Command Line Options

```bash
debvulns --help
```

Options:
- `-s, --severity {critical,high,medium,low,negligible}` - Filter vulnerabilities by severity. By default, lists all vulnerabilities grouped by severity.
- `-f, --format {json,csv}` - Output format (default: `json`).
- `--sort-by {package,cve}` - Sort vulnerabilities by package name or CVE ID.
- `--suite SUITE` - Debian suite name (e.g., `bookworm`, `sid`). Automatically detected by default.
- `--cache-dir PATH` - Directory to cache fetched and parsed data (default: `/var/cache/debvulns`).
- `--no-cache` - Do not use cached data, force downloading and parsing.
- `--vuln-url URL` - Custom URL or local path for Debian Security Tracker data.
- `--epss-url URL` - Custom URL or local path for EPSS scores data.
- `-v, --verbose` - Enable verbose debug logging (sent to stderr).

#### Examples

**Filter high severity vulnerabilities, sort by CVE, and output in CSV format:**
```bash
debvulns --severity high --sort-by cve --format csv
```

**Run for a specific suite without using cached data:**
```bash
debvulns --suite trixie --no-cache
```

### Available Tools

#### `list_vulnerabilities`

Lists all vulnerabilities affecting the currently installed packages on the
system. Categorises them by severity (critical, high, medium, low, negligible)
and EPSS score.

#### `research_cves`

Provides detailed information for a list of CVE IDs, including:
- Package name
- Urgency level
- EPSS score and percentile
- Whether a fix is available
- Remote exploitability
- Description

## Adding to VSCode

To use this MCP server with VSCode and AI assistants:

1. Open VSCode Settings (JSON):
   - On macOS: `Cmd + Shift + P` → "Preferences: Open Settings (JSON)"
   - On Linux/Windows: `Ctrl + Shift + P` → "Preferences: Open Settings (JSON)"

2. Add the MCP server configuration:

```json
{
  "mcpServers": {
    "debsecan": {
      "command": "debsecan-mcp",
      "args": [],
      "env": {
        "DEBSECAN_SUITE": "bookworm"
      }
    }
  }
}
```

3. Replace `bookworm` with your Debian suite codename (e.g., `trixie`, `sid`, `GENERIC`)

4. Restart VSCode or reload the window

## Adding to opencode

### Option 1: STDIO Mode (Default)

For local usage with opencode, use the default stdio transport:

```json
{
  "mcpServers": {
    "debsecan": {
      "command": "debsecan-mcp",
      "args": ["--transport", "stdio"],
      "env": {
        "DEBSECAN_SUITE": "bookworm"
      }
    }
  }
}
```

### Option 2: HTTP Mode

For remote or containerized setups, you can run the MCP server over HTTP:

1. Start the server:
```bash
debsecan-mcp --transport streamable-http --port 8080 --mount-path /mcp
```

2. Configure opencode to connect via HTTP:
```json
{
  "mcpServers": {
    "debsecan": {
      "url": "http://localhost:8080/mcp"
    }
  }
}
```

Note: HTTP mode requires the MCP client to support HTTP transport.


## How It Works

1. **Package Discovery**: Uses `python-apt` to enumerate all installed packages on the system
2. **Vulnerability Data**: Fetches compressed vulnerability data from the [Debian Security Tracker](https://security-tracker.debian.org/)
3. **EPSS Enrichment**: Downloads EPSS scores from [CISA](https://www.cisa.gov/epss) to prioritize vulnerabilities
4. **Analysis**: Compares installed package versions against vulnerability data using APT version comparison

## Requirements

- Python 3.11+
- Debian-based distribution (Debian, Ubuntu, etc.)
- Network access to download vulnerability data

