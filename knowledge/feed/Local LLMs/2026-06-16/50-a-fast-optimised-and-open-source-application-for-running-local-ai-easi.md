---
title: "A fast, optimised, and open source application for running local AI easily (made for Apple Silicon only)"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1u786se/a_fast_optimised_and_open_source_application_for/"
date: "2026-06-16"
topic: "Local LLMs"
type: "article"
read: false
summary: "Hey people, I've been working on a small personal project that I'm gonna be publishing today as open source, AeroLLM. It's a chat application for running local AI (more specific details on \"AI\" below) fast and easily via a nice GUI, and it's optimised for Apple silicon hardware (MLX backend for native silicon inference). AeroLLM supports text to speech, s... (Local summary fallback used.)"
---

Hey people, I've been working on a small personal project that I'm gonna be publishing today as open source, AeroLLM. It's a chat application for running local AI (more specific details on "AI" below) fast and easily via a nice GUI, and it's optimised for Apple silicon hardware (MLX backend for native silicon inference). AeroLLM supports text to speech, speech to text and large language models. Tbh it's not made for bulk transcriptions or bulk audio generation but it can be useful for experimenters and casual users. There isn't much else to say other than it downloads models of your choice straight from Huggingface (gives you recommendations based on your RAM size), it exposes an API endpoint for developers (optional), and it's all in a single app that you can just install and run. Currently, I don't have the means for an Apple Developer membership, so the app isn't notarised. This means that Apple doesn't sign it and it pops up as unsafe (even though it's not, you can see the source code for yourself.) I've given the steps on what you need to do after installing it so that it can run like an Apple signed mac os app. Hope you guys can find it useful. https://github.com/mahiatlinux/aerollm Download DMG from here: https://github.com/mahiatlinux/aerollm/releases/tag/v0.1.0 submitted by /u/mahiatlinux [link] [comments]
