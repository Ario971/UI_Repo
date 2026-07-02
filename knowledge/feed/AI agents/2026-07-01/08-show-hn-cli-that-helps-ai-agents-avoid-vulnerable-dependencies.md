---
title: "Show HN: CLI that helps AI agents avoid vulnerable dependencies"
source: "Hacker News Top + Show HN"
url: "https://github.com/clidey/deptrust"
date: "2026-07-01"
topic: "AI agents"
type: "article"
read: false
summary: "deptrust is a CLI that checks package versions for known vulnerabilities across npm, PyPI, crates.io, Go modules, RubyGems, NuGet, Maven, Packagist, pub.dev, CocoaPods, Hex.pm, Hackage, GitHub Actions, and more. It runs locally as a CLI and as an MCP server. It calls public package registry and OSV APIs directly; there is no hosted deptrust service. I bui... (Local summary fallback used.)"
---

deptrust is a CLI that checks package versions for known vulnerabilities across npm, PyPI, crates.io, Go modules, RubyGems, NuGet, Maven, Packagist, pub.dev, CocoaPods, Hex.pm, Hackage, GitHub Actions, and more. It runs locally as a CLI and as an MCP server. It calls public package registry and OSV APIs directly; there is no hosted deptrust service. I built this because AI coding agents kept suggesting outdated or vulnerable package versions. I kept having to manually tell tools like Claude and Codex to use newer, safer versions. deptrust gives the agent a quick way to verify whether a dependency version has known vulnerabilities before it installs or recommends it. You can install it with: 1. pnpx @clidey/deptrust@latest install 2. brew install clidey/tap/deptrust 3. Or directly with go: go install github.com/clidey/deptrust/cmd/deptrust@latest
