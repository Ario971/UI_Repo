---
title: "Show HN: Local meeting notes transcriber, but linuxy"
source: "Hacker News Show HN"
url: "https://github.com/tomelliot/all-ears"
date: "2026-07-29"
topic: "AI dev tools"
type: "article"
read: false
summary: "Granola started clamping down on downloading your notes without paying for a subscription, and I got sick of all the barely maintained GUIs on top of various local models (MacWhisper ). All-Ears is a set of composable tools to transcribe and summarise meetings. - A daemon that records audio sources - `transcribe` to transcribe the audio (with diarisation)... (Local summary fallback used.)"
---

Granola started clamping down on downloading your notes without paying for a subscription, and I got sick of all the barely maintained GUIs on top of various local models (MacWhisper ). All-Ears is a set of composable tools to transcribe and summarise meetings. - A daemon that records audio sources - `transcribe` to transcribe the audio (with diarisation) - `cleanup` to clean the transcription, using known word dictionary - `summarize` to summarise the transcript You can switch out models for transcription or diarization. You can use whatever prompt you want for cleanup and summarization. One feature I'm still working on: There's a browser extension. It automatically starts and stops a meeting transcription when you join a Google meet/zoom/teams in the browser. It extracts the audio streams from each participant, so the transcription engine gets audio for each participant rather than the combined audio. Also it automatically gets their name out of the DOM so the transcript has names assigned automatically. I'd also like a MacOS menu bar icon, and it's built to allow any front-end to hook in, but that's for later. If you like the idea, stars and PRs are welcome.
