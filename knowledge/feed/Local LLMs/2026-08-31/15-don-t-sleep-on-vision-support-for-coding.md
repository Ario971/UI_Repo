---
title: "Don't sleep on Vision support for coding!"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1w3vcvh/dont_sleep_on_vision_support_for_coding/"
date: "2026-08-31"
topic: "Local LLMs"
type: "article"
read: false
summary: "Normally, whenever a new model dropped, I always chose the non-vision version just to save VRAM; I though that only use case was when you were the one sending the picture. However, with the release of QWEN 3.8 27B I decided to give it a shot, and it has been one of the best decisions I have made, as this makes the model way more capable for autonomous cod... (Local summary fallback used.)"
---

Normally, whenever a new model dropped, I always chose the non-vision version just to save VRAM; I though that only use case was when you were the one sending the picture. However, with the release of QWEN 3.8 27B I decided to give it a shot, and it has been one of the best decisions I have made, as this makes the model way more capable for autonomous coding. With no vision, the model will try to complete the task and get back to you once it thinks that it is done with no problem. But there are a lot of silent errors that do not get reflected via the code or the tests performed, so you could go back to an error screen or a broken page after getting a confirmation of your request being implemented correctly. On the other side, when I ask something to QWEN with vision support, it will work on it, and then proactively take a screenshot to confirm if everything is right. This has helped numerous times with spotting errors that were missed. The model will continue to reiterate and take screenshots until it gets a visual confirmation of the issue being fixed. Just magnificent. Btw, I currently run my local set up via Hermes with QWEN 3.8 27B (Qwen3.8-27B-UD-Q5_K_XL.) powered by a 5090. submitted by /u/ChemistNo8486 [link] [comments]
