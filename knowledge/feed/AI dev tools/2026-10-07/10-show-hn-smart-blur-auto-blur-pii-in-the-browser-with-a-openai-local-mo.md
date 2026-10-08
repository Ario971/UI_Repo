---
title: "Show HN: Smart Blur – Auto-Blur PII in the Browser, with a OpenAI Local Model"
source: "Hacker News Show HN"
url: "https://smartbuildlabs.com/apps/smart-blur/"
date: "2026-10-07"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi folks, I'm Vicky. I build privacy tools that use local AI, on late nights and weekends. Smart Blur is a Chrome extension that blurs sensitive info on any web page before anyone else sees it. There are already a few tools like this, so why another one? Two reasons: Local AI for unstructured PII. Most existing tools use regex, which handles emails, phone... (Local summary fallback used.)"
---

Hi folks, I'm Vicky. I build privacy tools that use local AI, on late nights and weekends. Smart Blur is a Chrome extension that blurs sensitive info on any web page before anyone else sees it. There are already a few tools like this, so why another one? Two reasons: Local AI for unstructured PII. Most existing tools use regex, which handles emails, phones and card numbers but can't find names or addresses in plain text. Smart Blur runs OpenAI's Privacy Filter (Apache-2.0) locally on WebGPU. The model is a one-time ~810 MB download from Hugging Face, cached in the browser, and it needs WebGPU. Share Shield. It detects when a page starts sharing your screen (Meet, Teams, Zoom web) and turns blurring on in every tab, then turns it off when you stop. To be upfront: pattern blurring (emails, phones, cards, SSNs, IPs, API keys, custom regex), click/draw-to-blur and hiding tab titles are free. The local AI and Share Shield are a paid Pro upgrade. It's Chrome/Edge only, works on web pages only (not desktop apps), and the AI works best on English. No account and no server. The only network calls are the model download and the optional payment, which you can check in DevTools. There's a practice page with fake customer data at smartbuildlabs.com/apps/smart-blur/try/. I'd love to hear where detection misses or over-blurs.
