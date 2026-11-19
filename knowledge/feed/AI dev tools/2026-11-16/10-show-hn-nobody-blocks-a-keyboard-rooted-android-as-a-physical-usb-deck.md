---
title: "Show HN: Nobody blocks a keyboard – Rooted Android as a physical USB Deck"
source: "Hacker News Show HN"
url: "https://github.com/mr-anjaneyam/Emittr"
date: "2026-11-16"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hey HN, I built Emittr because, i frequently deal with air-gapped or locked-down systems where USB storage is disabled and third party software cannot be installed. Nobody blocks a physical keyboard, so i used the Linux Kernel's USB gadget subsystem (ConfigFS at /dev/hidg0) to turn a rooted android phone to a real USB HID Keyboard and mouse. 1. No install... (Local summary fallback used.)"
---

Hey HN, I built Emittr because, i frequently deal with air-gapped or locked-down systems where USB storage is disabled and third party software cannot be installed. Nobody blocks a physical keyboard, so i used the Linux Kernel's USB gadget subsystem (ConfigFS at /dev/hidg0) to turn a rooted android phone to a real USB HID Keyboard and mouse. 1. No installation on target device. It talks to motherboard USB controller, so it works in every locked down OS as well, BIOS, GRUB, etc. 2. Out of band bridge : we don't store passwords or authenticators on rooted phone. Emittr exposes a web UI on LAN, so we can send keystrokes from our main phones. 3. Types long scripts (chatgpt debuggings), SSH keys or passwords at ~1000 WPM without touching the host's clipboard. 4. OS can see this only as a genuine HID keyboard/mouse. Zero host footprint as no drivers, software or background scripts on target machine. 5. Uses USB-IF 0x0238 via on-screen joysticks instead of synthetic Shift + Scroll hacks. Feel free to check the work and try if you have a rooted android handy. GitHub: https://github.com/mr-anjaneyam/Emittr Webpage: https://emittr.srianjaneyam.me/ I'm planning to record and add few demos in various scenarios (Windows, macOS, android, linux, bios) and devices (Phone, PC, TV, STB, Kiosk). Happy to answer any questions and would love to hear your suggestions, feature ideas or edge cases.
