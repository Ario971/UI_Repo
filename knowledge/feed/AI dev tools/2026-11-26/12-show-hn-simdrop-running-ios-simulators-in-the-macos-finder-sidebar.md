---
title: "Show HN: SimDrop – Running iOS simulators in the macOS Finder sidebar"
source: "Hacker News Show HN"
url: "https://github.com/rxliuli/sim-drop"
date: "2026-11-26"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN, I made a small macOS utility for my own iOS simulator workflow. I kept running into two annoyances: getting config files in and out of a simulator is clunky (digging into CoreSimulator UUID folders or running simctl), and on the iPhone Duo simulator I couldn't even drag and drop images onto the window at all. SimDrop puts every running iOS simulato... (Local summary fallback used.)"
---

Hi HN, I made a small macOS utility for my own iOS simulator workflow. I kept running into two annoyances: getting config files in and out of a simulator is clunky (digging into CoreSimulator UUID folders or running simctl), and on the iPhone Duo simulator I couldn't even drag and drop images onto the window at all. SimDrop puts every running iOS simulator in Finder's sidebar (under Locations) with two folders: - Downloads/ (Files app > On My iPhone > Downloads) - Photos and Videos/ (the simulator's Photos library) Simulators appear when they boot and disappear when they shut down. Everything is also reachable from the terminal under ~/Library/CloudStorage/SimDrop-SimDrop/. A couple of caveats up front: - Dragging moves files by default (same as iCloud Drive, because it uses File Provider on the startup volume)—hold Option to copy. - macOS 15+ and iOS simulators only (not physical devices). It's free, open source (GPL-3.0), signed and notarized, and installable via Homebrew: brew install --cask rxliuli/tap/sim-drop Just sharing in case others run into the same friction—feedback or PRs welcome!
