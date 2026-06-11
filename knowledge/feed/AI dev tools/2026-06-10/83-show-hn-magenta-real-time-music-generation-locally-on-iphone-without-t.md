---
title: "Show HN: Magenta Real-Time Music Generation Locally on iPhone, Without the GPU"
source: "Hacker News Show HN"
url: "https://github.com/mattmireles/magenta-realtime-2-iphone"
date: "2026-06-10"
topic: "AI dev tools"
type: "article"
read: false
summary: "Last Thursday, Deepmind released Magenta Realtime 2 , an open source music generation model. They said it could run on Mac, but not iPhone. As a v̵i̵b̵e̵ ̵c̵o̵d̵i̵n̵g̵ ̵a̵d̵d̵i̵c̵t̵ agentic AI maxxi and person who has melted iPhones before (link at bottom), I took that as a personal challenge and made it my weekend project. On Saturday, I got it to run fo... (Local summary fallback used.)"
---

Last Thursday, Deepmind released Magenta Realtime 2 , an open source music generation model. They said it could run on Mac, but not iPhone. As a v̵i̵b̵e̵ ̵c̵o̵d̵i̵n̵g̵ ̵a̵d̵d̵i̵c̵t̵ agentic AI maxxi and person who has melted iPhones before (link at bottom), I took that as a personal challenge and made it my weekend project. On Saturday, I got it to run for 10min straight on an iPhone 12 Pro from 2020 without melting the phone or - shockingly - touching the GPU. How? I chopped the model up into 5 pieces and set them each to run on different parts of Apple's system on a chip (SoC). My past experience taught me that if you can actually leverage it, the iPhone's NPU is incredibly powerful, and power efficient. If you're doing sustained real-time generation for long periods of time on a device without a fan, you gotta use the neural engine or else you will melt the device. See: https://accelerateordie.com/p/we-melted-iphones-for-science The Apple Neural Engine has a ton of constraints, the main one being that it only accepts fixed shape inputs, and only supports some architectures -- which is why I chopped the model up into pieces. But it works! And I wrote zero lines of code by hand. Back when I was running VC-backed companies, I would have needed a small team of grumpy greybeard engineers to do this and it would have taken 2-6 weeks. Now I can feed my own nerd fetish and do this stuff myself. Next up: I'm building an iPhone app that ties into your heart rate, movement data, location etc to generate a real-time soundtrack to you life. What a time to be alive! update: Demo video of it running on my iPhone 15 Pro: https://x.com/mattmireles/status/2064849702156415214?s=46
