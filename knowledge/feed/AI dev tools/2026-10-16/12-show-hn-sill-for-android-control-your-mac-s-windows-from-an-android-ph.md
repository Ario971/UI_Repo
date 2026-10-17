---
title: "Show HN: Sill for Android – control your Mac's windows from an Android phone"
source: "Hacker News Show HN"
url: "https://github.com/rahimnathwani/sill-android"
date: "2026-10-16"
topic: "AI dev tools"
type: "article"
read: false
summary: "Sill (discussed here: https://news.ycombinator.com/item?id=50112739 ) streams one Mac window, or the whole Desktop, to an iPhone or iPad and lets you control it by touch. It's open source, so I made an Android client for it. It's unofficial and not affiliated with Sill's author: it speaks Sill's existing protocol, so the Mac side is the stock Sill app, un... (Local summary fallback used.)"
---

Sill (discussed here: https://news.ycombinator.com/item?id=50112739 ) streams one Mac window, or the whole Desktop, to an iPhone or iPad and lets you control it by touch. It's open source, so I made an Android client for it. It's unofficial and not affiliated with Sill's author: it speaks Sill's existing protocol, so the Mac side is the stock Sill app, unchanged. Install Sill on the Mac, sideload the APK from Releases onto an Android 11+ phone on the same Wi-Fi, tap your Mac in the list that shows on your phone, then look for the 12-digit code in Sill on your Mac, and type it into the Android app. Then: tap to click, drag to scroll, hold-and-drag to select text or move windows, pinch to zoom the picture on the phone, a Draw toggle for whiteboard apps like tldraw, and a key row with Esc, Tab, Cmd/Ctrl/Option/Shift and arrows. It also works over Tailscale with Sill's Remote Access. All of the code was written by Claude Code, working from Sill's Swift source and its Python test client; I tested it on a Pixel 9 Pro XL. Not done yet: drawing the Mac's pointer, a trackpad mode, clipboard sync, and a Play Store listing (I don't have Play developer account, and new individual Play developer accounts can't publish their first app until they've tested an app with a closed test with 12 testers.) (There's also a separate Android client in draft PR #89 on Sill's repo. This one is a standalone app with an installable APK. I should have checked the issues/PRs before I asked Claude to build this...)
