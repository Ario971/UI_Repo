---
title: "Show HN: Open-Source AI Racing Harness"
source: "Hacker News Top + Show HN"
url: "https://www.elodin.systems/post/elodin-ai-grand-prix-race-sim-harness"
date: "2026-05-27"
topic: "AI agents"
type: "article"
read: false
summary: "Hi I'm Dan from Elodin, making an open source real-time capable flight software simulation. For AI Grand Prix contestants, the wait for the Round 1 virtual qualifier simulation has been grueling. If you’re competing, check out our simulation harness to tide you over, built to match the published competition constraints and message format. It runs against... (Local summary fallback used.)"
---

Hi I'm Dan from Elodin, making an open source real-time capable flight software simulation. For AI Grand Prix contestants, the wait for the Round 1 virtual qualifier simulation has been grueling. If you’re competing, check out our simulation harness to tide you over, built to match the published competition constraints and message format. It runs against real Betaflight, which we learned requires at least 1000 sensor samples per second to run real-time correctly. The competition warranted introducing a new feature to generate the camera sensor directly in the simulation loop. Typically people connect to Unreal or similar game engine to create a camera sensor, which works well but is very heavy. For the simple needs of this challenge, creating sample directly in the loop is very handy and easy to use. Happy to hear your feedback on this! While it's not fancy looking currently, it uses the Rust Bevy game engine, which should allow us to improve the visual fidelity quickly. We all should easily be able to shift our implementation to the published competition sim once it lands. Hope you enjoy and good luck!
