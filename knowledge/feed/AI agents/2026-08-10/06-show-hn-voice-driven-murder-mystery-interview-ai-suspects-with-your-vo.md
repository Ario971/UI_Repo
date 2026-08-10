---
title: "Show HN: Voice driven murder mystery, Interview AI suspects with your voice"
source: "Hacker News Top + Show HN"
url: "https://www.whodunnitai.com/"
date: "2026-08-10"
topic: "AI agents"
type: "article"
read: false
summary: "Hey HN! I'm excited to show off this really fun project I put together. I originally built this project 2-3 years ago, AI was already booming at the time, however voice AI agents were still very early. I loved my proof of concept at the time, but wasn't quite happy with it. I recently had the desire to check out the tech again, and know many of you will b... (Local summary fallback used.)"
---

Hey HN! I'm excited to show off this really fun project I put together. I originally built this project 2-3 years ago, AI was already booming at the time, however voice AI agents were still very early. I loved my proof of concept at the time, but wasn't quite happy with it. I recently had the desire to check out the tech again, and know many of you will be interested. Interviews are speech to speech with OpenAI's gpt-realtime-2.1 over WebRTC. This model is... expensive, and because of that, I have to add some amount of restrictions, conversations are tied to a authenticated Clerk user id. I have also added a 30 minute timer because well, I really don't want to go broke while I sleep tonight. Each suspect has a tool they call when you make a direct accusation. It captures who you accused and a faithful list of the evidence you actually stated. A separate gpt-5-mini judge then decides which of the case's required evidence facts you genuinely presented. Paraphrasing counts, vague suspicion and fishing don't. The rest is Next.js, MongoDB, and Clerk. Let me know whether the suspects hold up under a real interrogation.
