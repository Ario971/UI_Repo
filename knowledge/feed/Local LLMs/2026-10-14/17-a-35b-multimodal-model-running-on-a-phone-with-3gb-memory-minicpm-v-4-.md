---
title: "A 35B multimodal model running on a phone with ~3GB memory? MiniCPM-V 4.7 demo is pretty wild"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1x5uwnd/a_35b_multimodal_model_running_on_a_phone_with/"
date: "2026-10-14"
topic: "Local LLMs"
type: "article"
read: false
summary: "Just saw this demo from OpenBMB for MiniCPM-V 4.7 , and the on-device capability is pretty impressive. A 35B-A3B MoE vision-language model running locally on mobile devices is already interesting, but the use cases are what caught my attention: 📷 Reading real-world signs 📄 Understanding complex documents 🧠 Reasoning over visual information 🗺️ Planning... (Local summary fallback used.)"
---

Just saw this demo from OpenBMB for MiniCPM-V 4.7 , and the on-device capability is pretty impressive. A 35B-A3B MoE vision-language model running locally on mobile devices is already interesting, but the use cases are what caught my attention: 📷 Reading real-world signs 📄 Understanding complex documents 🧠 Reasoning over visual information 🗺️ Planning with real-world constraints The key piece seems to be LES (Lookahead Expert Scheduling) — instead of just making the model smaller, they optimize MoE inference by predicting and preloading experts to reduce bottlenecks. They also released a smaller MiniCPM-V 4.7 1B model for more resource-constrained devices. Another interesting addition is Self-Replay Fine-Tuning (SRFT) , which aims to let developers customize the model for specific tasks while keeping general capabilities. The direction is interesting: instead of sending every image/question to the cloud, we're getting closer to having capable multimodal assistants running directly on phones. Links: GitHub: https://github.com/OpenBMB/MiniCPM-V Hugging Face: https://huggingface.co/collections/openbmb SRFT details: https://openbmb.cn/en/blog/self-replay-fine-tuning submitted by /u/Equivalent-Grass-527 [link] [comments]
