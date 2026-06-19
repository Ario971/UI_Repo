---
title: "Show HN: Run Agent Skills with mistral.rs v0.8.10: /v1/skills support and more"
source: "Hacker News Show HN"
url: "https://news.ycombinator.com/item?id=48581792"
date: "2026-06-18"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hey all! I'm the maintainer of mistral.rs. I just landed support for OpenAI-compatible Agent Skills via a /v1/skills endpoint, and it works with local open models. Until now Skills have basically been locked to closed models, and with the ability to have private, local intelligence becoming increasingly important, but this feature allows you to do XYZ wit... (Local summary fallback used.)"
---

Hey all! I'm the maintainer of mistral.rs. I just landed support for OpenAI-compatible Agent Skills via a /v1/skills endpoint, and it works with local open models. Until now Skills have basically been locked to closed models, and with the ability to have private, local intelligence becoming increasingly important, but this feature allows you to do XYZ with local models. It's fully compatible with OpenAI's /v1/skills API, so you can drop mistral.rs into your existing code with minimal difficulty. We support the accompanying tools too: /v1/files or input_file for attaching files to your prompts, and mistral.rs also allows models to send generated files back using the OpenAI-compatible method. It's also easier than ever to try mistral.rs: we are including prebuilt binaries for NVIDIA CUDA, Apple Silicon, and CPU! # Linux/Mac > curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/EricLBuehler/mistral.rs/ma... | sh # Windows > irm https://raw.githubusercontent.com/EricLBuehler/mistral.rs/ma... | iex Then: mistralrs serve --agent --isq 4 -m google/gemma-4-E4B-it Super excited for you to try this out and any feedback! Do you have any suggestions for what you would like to see in the next releases? Check out the GitHub: https://github.com/EricLBuehler/mistral.rs Docs & Quickstart: https://ericlbuehler.github.io/mistral.rs/
