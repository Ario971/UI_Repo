---
title: "Show HN: Put an AI agent on a FaceTime audio/video call (open source, WebRTC)"
source: "Hacker News Top + Show HN"
url: "https://github.com/cherthq/chert-facetime-opensource"
date: "2026-09-16"
topic: "AI agents"
type: "article"
read: false
summary: "Hey everyone, Gary here from Chert (YC P26). We just open-sourced a framework for putting AI agents on FaceTime audio/video calls: https://github.com/cherthq/chert-facetime-opensource . There's also a managed inbound/outbound API if you don't want to run it yourself: https://www.trychert.com/facetime . Demo you can try right now: https://www.trychert.com/... (Local summary fallback used.)"
---

Hey everyone, Gary here from Chert (YC P26). We just open-sourced a framework for putting AI agents on FaceTime audio/video calls: https://github.com/cherthq/chert-facetime-opensource . There's also a managed inbound/outbound API if you don't want to run it yourself: https://www.trychert.com/facetime . Demo you can try right now: https://www.trychert.com/facetime Demo of the BYOR (Bring Your Own Room) feature: https://screen.studio/share/v0KPoTpm Why video, and why FaceTime specifically: An agent that can see and show unlocks things voice and text can’t, such as screen sharing, live coaching, or even just a more immersive experience. But every video agent tool today puts you into either an embedded widget or a Zoom/Google Meet link. Those feel salesy and formal. There’s clearly a missing deployment layer. FaceTime is the opposite. It is the most personal, trusted, and familiar video channel millions of people already use. For WebRTC and video agents to truly become as widespread as VoIP, they need to meet people where they already are. Why it’s hard: FaceTime not only doesn’t have an open API, but it's not even scriptable with AppleScript. We solved this by driving the FaceTime UI programmatically and routing the agent's audio and video through physical loopback machines. It's an early prototype, but we think it's the right bet. Video agents and WebRTC will eventually replace VoIP as the dominant channel of human-agent interaction, and when that happens, they have to meet people where they're already most comfortable. Please try it out and share any feedback or anything interesting you build on FaceTime. All comments welcome!
