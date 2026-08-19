---
title: "Show HN: macOS data protection keychain for Electron apps"
source: "Hacker News Top + Show HN"
url: "https://github.com/biw/keychain-store"
date: "2026-08-18"
topic: "AI agents"
type: "article"
read: false
summary: "Hey HN, I've been working on Hansel [1] (an encrypted personal data store you can query with agents), and there wasn't a good way to use the modern macOS Data Protection Keychain. Electron's safeStorage [2] uses the legacy file-based keychain, which allows other apps/agents to query it with the `security` CLI. Not great when you have a dozen agents runnin... (Local summary fallback used.)"
---

Hey HN, I've been working on Hansel [1] (an encrypted personal data store you can query with agents), and there wasn't a good way to use the modern macOS Data Protection Keychain. Electron's safeStorage [2] uses the legacy file-based keychain, which allows other apps/agents to query it with the `security` CLI. Not great when you have a dozen agents running in the background! The Data Protection Keychain is nice because it limits access via code-signing access groups and lets you set access rules like Touch ID and/or password. 1: https://hansel.so/ 2. https://www.electronjs.org/docs/latest/api/safe-storage
