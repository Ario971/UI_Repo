---
title: "Show HN: It's now easy to install Linux on an Android Phone – Android2linux"
source: "Hacker News Show HN"
url: "https://github.com/android2linux/android2linux"
date: "2026-11-21"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hey HN! One of my biggest dreams (really) was to have a Linux phone. I tried to install on some phones in the past, even the ones that would be marked as compatible and it was always so difficult that I couldn't really do it. Yesterday I decided to try again, this time using Claude to do most of the work. A couple hours later it runs postmarketOS as my se... (Local summary fallback used.)"
---

Hey HN! One of my biggest dreams (really) was to have a Linux phone. I tried to install on some phones in the past, even the ones that would be marked as compatible and it was always so difficult that I couldn't really do it. Yesterday I decided to try again, this time using Claude to do most of the work. A couple hours later it runs postmarketOS as my second phone: 4G, SMS, a terminal, SSH. It took two fixes. U-Boot didn't recognise my phone model, so I patched 14 bytes of its device-tree match strings. Then the modem wasn't working, because the packaged TFTP server that lends the modem a folder mishandled its file-size queries but an upstream build fixed it. The repo is what came out of it: guides for any phone (but specific just for my xiaomi), an agent skill that follows the same method and safety rules, notes per phone, and web apps reworked for a phone screen (WhatsApp Web for desktop with a one-pane layout). What doesn't work (in this phone of mine): no charger driver yet (slow charging), no cameras, and no banking apps, so I keep an Android at home for those. Whether this works for you depends on your phone having a port. reports through the issue forms help, especially for phones that don't work yet. I think that finally succeeding at having a Linux phone is worth creating a post on HN. I was thinking about a Tell HN but decided to convert the knowledge into a repo so more people can share, discuss, add their phones, new apps, etc. Hope it helps!
