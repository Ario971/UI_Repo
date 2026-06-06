---
title: "FYI llamacpp server can hot swap models now-a-days in under 30sec"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1txmg8q/fyi_llamacpp_server_can_hot_swap_models_nowadays/"
date: "2026-06-05"
topic: "Local LLMs"
type: "article"
read: false
summary: "See this question at least a handful of times when browsing new and in the comments, llamacpp has one of the cleaner model hotswap apis now that just works with openwebui and hermes. Bonus: the 2nd model gemma went derp as i was recording this, but the time spent swapping has gotten stupid fast... I remember starting a load and talking a walk while pytorc... (Local summary fallback used.)"
---

See this question at least a handful of times when browsing new and in the comments, llamacpp has one of the cleaner model hotswap apis now that just works with openwebui and hermes. Bonus: the 2nd model gemma went derp as i was recording this, but the time spent swapping has gotten stupid fast... I remember starting a load and talking a walk while pytorch did its thing just a few months back podman run -d \ --name llama-qwen36-router \ --device nvidia.com/gpu=all \ -v /data/models:/root/.cache/huggingface:ro \ -v /data/llama_presets:/presets:ro \ -p 8001:8080 \ --env NVIDIA_VISIBLE_DEVICES=all \ --env GGML_CUDA_P2P=1 \ --env LD_LIBRARY_PATH=/app:/usr/lib64:/usr/local/nvidia/lib64:/usr/local/cuda/lib64 \ --ipc=host \ --restart=unless-stopped \ ghcr.io/ggml-org/llama.cpp:server-cuda13 \ --models-preset /presets/qwen36-models.ini \ --models-max 1 \ --host 0.0.0.0 \ --port 8080 # Or if you build instead of container ./llama-server \ --models-preset /presets/qwen36-models.ini \ --models-max 1 \ --host 0.0.0.0 \ --port 8080 submitted by /u/Chuyito [link] [comments]
