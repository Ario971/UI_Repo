---
title: "Show HN: Flashpaper – Self-destructing secret sharing with no database"
source: "Hacker News Top + Show HN"
url: "https://flashpaper.app/"
date: "2026-07-28"
topic: "AI agents"
type: "article"
read: false
summary: "Hi everyone! This is my first HN and I’m very new to the scene. My name is Min from Bangkok. At first, I just want to create a dead man's switch for personal use and for fun. then, I think about information that self destruct like a spy movie. after that, I try to come up with the better version of Privnote or Bitwarden with self-destruct and some kind of... (Local summary fallback used.)"
---

Hi everyone! This is my first HN and I’m very new to the scene. My name is Min from Bangkok. At first, I just want to create a dead man's switch for personal use and for fun. then, I think about information that self destruct like a spy movie. after that, I try to come up with the better version of Privnote or Bitwarden with self-destruct and some kind of censoring or blocking download ability. Somehow, end up with this product. :O Flashpaper is for sending any information that would be burned after reading (with counting down timer like Mission Impossible movie ! or after 24 hrs max if not opened) Encryption happens in browser and because the key stays after # in the link; server never sees the key (Zero-knowledge for web use) and— because I’m a newbie. I don’t want to connect to database because I don’t have the money and I want things light and simple. So, that’s why Flashpaper keeps things in RAM-only, no database. For AI Agent side, Flashpaper provides a REST API and an MCP server so agents can create secret links easily in dead-drop style that can be claimed only once. The second claim would get a 404 which means someone already took it. However, for the agent API flow, the server sees the plaintext for a moment before encrypting, so this flow is not zero-knowledge like the web flow. Overall, I think it work quite well for web use, but for agent API use, I am not sure this is enough security. All the limitations are listed in SECURITY.md. Some feedback would be appreciated. I make it open source with MIT license, with honorware policy for Enterprise use, like self-hosted docker. Here is my repo https://github.com/mmmpym/flashpaper and you can try it here https://flashpaper.app Again ! Please feel free to tell me what I missed. Min
