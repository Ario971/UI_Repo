---
title: "Voice-to-voice chatbot update"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1u5uqsc/voicetovoice_chatbot_update/"
date: "2026-06-14"
topic: "Local LLMs"
type: "article"
read: false
summary: "I've been working on this after hours for a few months continuously improving it. Now at a point where the chatbot is close to real-time (thanks to SSE streaming) and also interruptible while preserving context of what was last said. 100% local and powered by Qwen3.5-397B (Unsloth's UD-Q3_K_XL), Whisper-small STT, and Orpheus Q4_K_XL TTS with a custom SNA... (Local summary fallback used.)"
---

I've been working on this after hours for a few months continuously improving it. Now at a point where the chatbot is close to real-time (thanks to SSE streaming) and also interruptible while preserving context of what was last said. 100% local and powered by Qwen3.5-397B (Unsloth's UD-Q3_K_XL), Whisper-small STT, and Orpheus Q4_K_XL TTS with a custom SNAC decoder on ONNX. VRAM usage holds at 21.3 GB or less leaving decent headroom for compute graphs on a 24 GB GPU. System RAM MoE experts for Qwen occupy about ~150 GB. This is running with bf16 KV cache (Qwen3.5 spazzes out with Q8 KV), at 131,072 tokens. Enough for hours of conversation. GitHub code coming soon - should be able to upload this evening after I'm done with the honey-do list. submitted by /u/Responsible_Fig_1271 [link] [comments]
