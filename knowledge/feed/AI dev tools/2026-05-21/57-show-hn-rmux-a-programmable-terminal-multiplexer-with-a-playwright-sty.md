---
title: "Show HN: Rmux – A programmable terminal multiplexer with a Playwright-style SDK"
source: "Hacker News Show HN"
url: "https://github.com/helvesec/rmux"
date: "2026-05-21"
topic: "AI dev tools"
type: "article"
read: false
summary: "Author here. RMUX started from a frustration: I've used tmux for years and got tired of scraping output with grep and sleeps to automate anything. So I rebuilt the multiplexer from scratch in Rust, with a programmable layer on top. Two surfaces: a tmux-compatible CLI (~90 commands, your keybindings just work), and a typed async Rust SDK on the same daemon... (Local summary fallback used.)"
---

Author here. RMUX started from a frustration: I've used tmux for years and got tired of scraping output with grep and sleeps to automate anything. So I rebuilt the multiplexer from scratch in Rust, with a programmable layer on top. Two surfaces: a tmux-compatible CLI (~90 commands, your keybindings just work), and a typed async Rust SDK on the same daemon — stable pane IDs, structured snapshots, locator-style waits. The idea is Playwright-style automation, but for terminals. Native on Linux, macOS, Windows (real ConPTY, no WSL). Demos and docs at rmux.io. Happy to answer questions about the daemon protocol, ConPTY, or the SDK design.
