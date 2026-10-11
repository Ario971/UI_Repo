---
title: "Open-source Mac app that runs EmbeddingGemma 2 locally to search your files by what’s in them"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1x2eeds/opensource_mac_app_that_runs_embeddinggemma_2/"
date: "2026-10-10"
topic: "Local LLMs"
type: "article"
read: false
summary: "DigUp is a free Mac app that runs Google DeepMind’s new EmbeddingGemma 2 locally over your own files. The model puts text, images, audio and video in one space, so you describe what you remember and land on it: “zebra in a video” opens the clip at the moment it shows up “where they talk about sleep” jumps to that minute of a podcast “the clause about pets... (Local summary fallback used.)"
---

DigUp is a free Mac app that runs Google DeepMind’s new EmbeddingGemma 2 locally over your own files. The model puts text, images, audio and video in one space, so you describe what you remember and land on it: “zebra in a video” opens the clip at the moment it shows up “where they talk about sleep” jumps to that minute of a podcast “the clause about pets in the lease” shows the PDF page, your words marked “a dog on the beach” finds the photo, and the same search in Bengali or Arabic finds it too with code search on, code: retry with backoff opens the function in your editor It’s ggml-org’s Q8_0 GGUF (865 MB, downloaded once) on llama.cpp with Metal, inside a native Swift app; no Python. Searching loads only the text encoder (~250 MB) and shows results about a tenth of a second after you stop typing. Indexing peaks under 2 GB, and the helper exits when it’s done. Audio and video of any length go in as 30 s windows and a frame per shot. Everything runs locally; it goes online only for the model download and an update check you can turn off. Free, MIT. Apple Silicon, macOS 14+. Repo & Download (signed and notarized): https://github.com/ARahim3/DigUp I'd really appreciate any feedback on this. submitted by /u/A-Rahim [link] [comments]
