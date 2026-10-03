---
title: "New Architecture from Percepta: Spotlight — separating intelligence from memory, allowing knowledge and skills to grow without changing the model's weights."
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1ww09ab/new_architecture_from_percepta_spotlight/"
date: "2026-10-02"
topic: "Local LLMs"
type: "article"
read: false
summary: "https://www.percepta.ai/blog/can-llms-grow-their-own-capabilities https://www.percepta.ai/blog/spotlight-memory \"Our new architecture, Spotlight, replaces attention with a memory that escapes this trade-off: it is the first architecture to achieve infinitely growing memory without increasing the access cost. Every token reads from and writes to an unbound... (Local summary fallback used.)"
---

https://www.percepta.ai/blog/can-llms-grow-their-own-capabilities https://www.percepta.ai/blog/spotlight-memory "Our new architecture, Spotlight, replaces attention with a memory that escapes this trade-off: it is the first architecture to achieve infinitely growing memory without increasing the access cost. Every token reads from and writes to an unbounded memory, but because the model learns to index individual memory cells, each token only touches a small number at a time. While other sparse architectures fix the fraction of capacity used at each step—a mixture-of-experts model, for instance, always activates the same number of experts out of a fixed set—Spotlight is arbitrarily sparse, touching the same number of cells regardless of how the memory grows. The fraction of memory it uses can shrink as far as we want. Spotlight separates an intelligence module, which performs computation, from memory, which holds knowledge, procedures, and working state. The intelligence module stays the same size, and the weights don't change as memory grows. The memory is writable, and the model itself decides what to load and when to overwrite it, token by token. Because memory can hold skills as well as facts, the model can gain new capabilities without retraining: what it can do is not limited by the size of its intelligence module." submitted by /u/Recoil42 [link] [comments]
