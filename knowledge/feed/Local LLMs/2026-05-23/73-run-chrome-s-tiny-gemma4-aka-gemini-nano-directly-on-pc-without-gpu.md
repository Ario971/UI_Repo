---
title: "Run Chrome’s tiny Gemma4 (aka Gemini Nano) directly on PC without GPU"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1tlnqzj/run_chromes_tiny_gemma4_aka_gemini_nano_directly/"
date: "2026-05-23"
topic: "Local LLMs"
type: "article"
read: false
summary: "Everyone remembers that sneaky download of Gemini Nano earlier this month? and if you talk to it, it will happily tell you it’s a Gemma. Since some friends were interested but don’t want to talk to it via dev tools like talking to some poor house elf via a keyhole on a locked door, made a 5 minute vibe coded extension to run it. Nothing required just need... (Local summary fallback used.)"
---

Everyone remembers that sneaky download of Gemini Nano earlier this month? and if you talk to it, it will happily tell you it’s a Gemma. Since some friends were interested but don’t want to talk to it via dev tools like talking to some poor house elf via a keyhole on a locked door, made a 5 minute vibe coded extension to run it. Nothing required just need Google chrome, 16gb RAM, and some disk space. No llama.cpp, no vllm etc. no tinkering (no fun I know). It’s quite fast and smooth, feels like ~20t/s+ on my laptop without gpu. I have no actual information on how fast though. All handled by chrome. It has 9216 tokens available per session, set by chrome. The model is run in chrome fully local. Use case…. Um spelling check so google wont know my spelling sucks ? Quick summary of long internet post? Just cute ? Anyway here is the one click add extension: https://chromewebstore.google.com/detail/dobby/ehinjcinljpggpokocmkbcaedpjdbbbe?authuser=0&hl=en-GB&pli=1 Or if you want to tinker a little and don’t want to call it Dobby(the house elf of chrome) here’s the repo: https://github.com/herryupmay/Dobby submitted by /u/Some-Cauliflower4902 [link] [comments]
