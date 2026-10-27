---
title: "Show HN: RPI Pico (RP2040) PIO Emulator Package for Go"
source: "Hacker News Show HN"
url: "https://git.edwardh.dev/pio"
date: "2026-10-26"
topic: "AI dev tools"
type: "article"
read: false
summary: "I have been developing a bus communication protocol for a while using the Raspberry Pi Pico (RP2040)'s programmable IO (PIO) hardware (basically- 8 tiny processors that run assembly programs to manipulate GPIO pins) and I needed some way of testing my programs, as the real hardware is undebuggable. Unfortunately, none of the existing emulators I could fin... (Local summary fallback used.)"
---

I have been developing a bus communication protocol for a while using the Raspberry Pi Pico (RP2040)'s programmable IO (PIO) hardware (basically- 8 tiny processors that run assembly programs to manipulate GPIO pins) and I needed some way of testing my programs, as the real hardware is undebuggable. Unfortunately, none of the existing emulators I could find supported connecting multiple RP2040s together, and they each had a few different missing bits of functionality, so I decided to make my own! My emulator supports running multiple RP2040s electrically connected together, and emulates the whole of their PIO blocks (all 8 processors each), along with all of the more niche inter-processor interactions and GPIO functionality I could possibly find in the datasheet. I built it as a Go package so that it can be used inside of other programs; I intend on using it myself inside a test suite against my in-development protocol. I've spent quite a long time checking and double-checking most of the logic so it is as complete and accurate as I can make it, but if you spot anything amiss, I'd really appreciate the feedback. Thanks for checking it out! Hope it can be useful to other RP2040 users.
