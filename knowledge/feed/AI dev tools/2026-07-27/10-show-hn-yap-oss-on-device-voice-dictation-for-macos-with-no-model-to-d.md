---
title: "Show HN: Yap – OSS on-device voice dictation for macOS with no model to download"
source: "Hacker News Show HN"
url: "https://github.com/FrigadeHQ/yap"
date: "2026-07-27"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hey HN! I wanted to share this OSS project I've been working on. It's called Yap and its a small menu-bar app for macOS that does voice to text for any input. You'll set a hotkey, press it, talk, press it again, and the text gets pasted into whatever field you were in. Everything runs locally and never leaves your computer. Fully OSS and MIT licensed. Wit... (Local summary fallback used.)"
---

Hey HN! I wanted to share this OSS project I've been working on. It's called Yap and its a small menu-bar app for macOS that does voice to text for any input. You'll set a hotkey, press it, talk, press it again, and the text gets pasted into whatever field you were in. Everything runs locally and never leaves your computer. Fully OSS and MIT licensed. With macOS 26, Apple recently added two new APIs, SpeechAnalyzer and SpeechTranscriber, that do streaming on-device speech to text using models the OS ships and manages. So the app ships no model of its own and loads nothing before the first word. A recent benchmark put Apple's model slightly ahead of Whisper Small on accuracy and about 3x faster (see: https://news.ycombinator.com/item?id=48894752 ). On Mac, there's really no need anymore to download models or pay for expensive APIs. A lot of existing dictation tools do one of a few things I wanted to avoid with this OSS project. They either: - cost money (for something that's literally built into the OS) - bundle memory-intensive models (e.g. Whisper or Parakeet) - webapps wrapped in Electron - Intel macs straight up don't work - closed source - use third-party APIs that will have access to all your transcripts It's around 3,000 lines of native Swift in a 4 MB app and idles near 60 MB of memory. Audio comes off AVAudioEngine into SpeechAnalyzer with volatile results turned on for the live preview, history is stored in SwiftData. There's no network code in it at all. Repo and a demo available here: https://github.com/FrigadeHQ/yap Happy to answer questions and would love to hear any feature requests!
