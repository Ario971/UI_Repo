---
title: "Show HN: SpeechCompass – speaker direction for captioning group conversations"
source: "Hacker News Show HN"
url: "https://github.com/google-deepmind/speech-compass/"
date: "2026-07-10"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN! We are excited to finally open-source SpeechCompass (from my time at Google, released with google-deepmind). If you've used live captions in group conversations, you've seen how different voices get mixed up into one wall of text. In our survey of 263 captioning power users, the merging of speakers was a top issue (46%). SpeechCompass (Best Paper A... (Local summary fallback used.)"
---

Hi HN! We are excited to finally open-source SpeechCompass (from my time at Google, released with google-deepmind). If you've used live captions in group conversations, you've seen how different voices get mixed up into one wall of text. In our survey of 263 captioning power users, the merging of speakers was a top issue (46%). SpeechCompass (Best Paper Award @ ACM CHI 2025, paper + video in repo) addresses this by showing the direction of each speaker. Captions are color-coded with an arrow pointing toward where the speech is coming from. We show it on phones with 2+ mics (180°), and release the firmware and hardware for a 4-mic phone case for full 360°. It uses fast time-difference-of-arrival algorithms that can run on small, low-power microcontrollers. It is private by design and runs fully on-device: it uses spatial direction, not voiceprints, and no audio leaves the phone (for direction). The repo has the Android app (prebuilt APK in Releases), the portable C11 DSP library, firmware, and PCB designs, all Apache 2.0. Happy to answer questions and interested in feedback, especially from folks who use captioning daily.
