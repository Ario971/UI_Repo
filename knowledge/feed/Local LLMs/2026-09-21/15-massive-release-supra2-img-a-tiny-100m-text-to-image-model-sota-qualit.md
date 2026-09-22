---
title: "[MASSIVE RELEASE] Supra2-IMG - a tiny 100M text-to-image model - SOTA quality and open release!"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wmftr3/massive_release_supra2img_a_tiny_100m_texttoimage/"
date: "2026-09-21"
topic: "Local LLMs"
type: "article"
read: false
summary: "Hey everyone! It has been quite a while since the last SupraLabs model - but today we've something special for y'all: Supra2-IMG It's a 100M parameter DiT text-to-image model trained entirely from scratch in under 10 hours on a single H100 on Runpod. It can generate state-of-the-art quality images in 256x256 pixels resolution. Samples: https://preview.red... (Local summary fallback used.)"
---

Hey everyone! It has been quite a while since the last SupraLabs model - but today we've something special for y'all: Supra2-IMG It's a 100M parameter DiT text-to-image model trained entirely from scratch in under 10 hours on a single H100 on Runpod. It can generate state-of-the-art quality images in 256x256 pixels resolution. Samples: https://preview.redd.it/9paalvbs4wqh1.png?width=620&format=png&auto=webp&s=ddc7876d187e4c6d349149c75baa210b0219a041 These samples are NOT cherry-picked! Sampling: seed 0, steps 50, cfg 3.0; same settings for every image. If someone here is interested in the prompts, I can give them to you! Feel free to ask! You can also use the model locally on your hardware (~20s for an image on CPU (🤩) and ~2s for an image on GPU): First, run: # Create project directory mkdir Supra2-IMG cd Supra2-IMG # Download the inference script wget https://huggingface.co/SupraLabs/Supra2-IMG/resolve/main/inference.py Then, you can generate images by running: python inference.py --prompt "a sea jellyfish floating in the pitch-black ocean depths" --seed 0 --cfg 3.0 --steps 50 --n 1 --out jellyfish.png Have fun 🤗 🔥 Link to the model on HF: https://huggingface.co/SupraLabs/Supra2-IMG Give us a like and a follow on HF if you want 🤗 ❤️ EVERY feedback is welcome, guys! Feel free to ask any questions! submitted by /u/LH-Tech_AI [link] [comments]
