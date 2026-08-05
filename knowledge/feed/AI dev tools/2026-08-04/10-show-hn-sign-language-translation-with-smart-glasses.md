---
title: "Show HN: Sign language translation with smart glasses"
source: "Hacker News Show HN"
url: "https://github.com/aadisang/hand-wave"
date: "2026-08-04"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi! I have relatives that speak sign language, and always found it odd that despite unbelievable advances in AI in recent years, the problem still felt somewhat neglected. Especially with the advent of wearable tech; to my knowledge, this is the first project that integrates the meta glasses w/ fingerspelling translation software. As for the technical asp... (Local summary fallback used.)"
---

Hi! I have relatives that speak sign language, and always found it odd that despite unbelievable advances in AI in recent years, the problem still felt somewhat neglected. Especially with the advent of wearable tech; to my knowledge, this is the first project that integrates the meta glasses w/ fingerspelling translation software. As for the technical aspect, I trained a neural net on Google's FSboard dataset modeling a CNN + GRU temporal encoder architecture (trained with CTC), and then decoded the output with CTC beam search and a KenLM language model to solve some of the deficiencies with my model. I've also made it cross-platform (web + iOS, with both web screen sharing and the ability to use non smart-glasses). The project is entirely FOSS. I'm currently working on making the on-device model work cleanly, but unfortunately performance takes a bit of hit on lower-end devices so for now I've opted for hosting the model on Modal. There's so much room for improvement, but I'm happy with this starting point. Let me know what you think, and check out the YouTube demo!
