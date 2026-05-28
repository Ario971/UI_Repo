---
title: "Show HN: Hodor – a 701KB native macOS prompt launcher for AI tools"
source: "Hacker News Show HN"
url: "https://hodor.design"
date: "2026-05-27"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hodor is a tiny macOS app that launches saved AI prompts into any text field — from the screen edge, keyboard shortcut, or keyword such as ;git. I work with different AI tools every day, and had prompts scattered across Raycast snippets, Apple Notes, and Notion — notes that kept getting longer and unmanageable. Raycast snippets are useful, but cumbersome... (Local summary fallback used.)"
---

Hodor is a tiny macOS app that launches saved AI prompts into any text field — from the screen edge, keyboard shortcut, or keyword such as ;git. I work with different AI tools every day, and had prompts scattered across Raycast snippets, Apple Notes, and Notion — notes that kept getting longer and unmanageable. Raycast snippets are useful, but cumbersome to browse and edit. I wanted one local place to save and review them, and one click to paste them into whatever AI tool I'm using. The test I set was whether I could actually stop using Raycast snippets for this. I think I fulfilled my goal. Hodor has been my daily tool for 3 months now. The app is 701 KB — SwiftUI + SwiftData, no web views. Zero network requests anywhere in the code: no analytics, no telemetry, no update checks. You can verify - search the source for URLSession, it's not in code. Runs on macOS 15+, with native Liquid Glass on macOS 26+. Free and open source. GitHub: https://github.com/woody-design/hodor Let me know if you have any suggestions — I'd love to hear how you solved the scattered-prompts problem.
