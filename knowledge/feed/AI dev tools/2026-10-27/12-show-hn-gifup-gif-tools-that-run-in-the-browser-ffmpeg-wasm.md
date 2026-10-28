---
title: "Show HN: Gifup – GIF tools that run in the browser (ffmpeg.wasm)"
source: "Hacker News Show HN"
url: "https://gifup.com/"
date: "2026-10-27"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN. GIFUP was an avatar and glitter generator I ran from 2007; it made about 1.3M animations before the web moved on. This year I rebuilt the domain as a set of GIF tools where the encoding happens in the tab via ffmpeg.wasm: video to GIF, compress, resize, crop, captions, GIF to MP4, plus presets that fit Discord, Slack, Twitch and WhatsApp limits. No... (Local summary fallback used.)"
---

Hi HN. GIFUP was an avatar and glitter generator I ran from 2007; it made about 1.3M animations before the web moved on. This year I rebuilt the domain as a set of GIF tools where the encoding happens in the tab via ffmpeg.wasm: video to GIF, compress, resize, crop, captions, GIF to MP4, plus presets that fit Discord, Slack, Twitch and WhatsApp limits. Nothing is uploaded. The file is read from disk, FFmpeg runs in WebAssembly, and the result is handed back as a blob. The engine is about 10 MB compressed, fetched once and cached. The core is single-threaded because the threaded build needs COOP/COEP headers, so a 10-second 720p clip takes a few seconds rather than a fraction of one. No size caps, no queue, no account. Two optional server features: "Get a link" hosts a finished file if you want to paste it in a forum, and a WhatsApp sticker page can deliver a sticker to your phone. Both are off until you press the button. The glue code on the page is plain JS; the FFmpeg build is the unmodified @ffmpeg/core 0.12.6 (GPL, libx264 and libx265 included). I would like to hear where it breaks, especially on Safari, and which tool you are missing.
