---
title: "Show HN: MetaBrain – A local document memory for AI agents"
source: "Hacker News Top + Show HN"
url: "https://metabrain.eu"
date: "2026-06-02"
topic: "AI agents"
type: "article"
read: false
summary: "Hello there HN I experimented with agentic coding recently and I felt the need to track more contextual data by project. Also I felt the need to be able to go beyond the 1D chat to communicate with agents. So I created a local document memory, that is discoverable by agents themselves. The CLI is designed to be easy to pick up by agents. It allows humans... (Local summary fallback used.)"
---

Hello there HN I experimented with agentic coding recently and I felt the need to track more contextual data by project. Also I felt the need to be able to go beyond the 1D chat to communicate with agents. So I created a local document memory, that is discoverable by agents themselves. The CLI is designed to be easy to pick up by agents. It allows humans to collaborate too by reading / searching / editing documents in the store. I have a Mac native GUI in the review process, I hope it will show up in the App Store soon. You can try it easily, instructions here: https://metabrain.eu/ Here is the GitHub https://github.com/OpenCow42/metaBrain The project is also an experiment for me to build some swift project truly cross platform (Mac / Linux / Windows) It is open-sourced with the same license as LevelDB that I wrapped in swift to do this project. The agents (and humans) can retrieve content quickly with a search, allowing to re-injecting specific knowledge in a specific context during agentic work. It’s funny, I’ve thought of "inference rule base" as something of a derelict idea of the old functional expert systems. Now that I start working with agents I feel more and more the need to go pick previously working solutions dynamically in such a base. I’d be happy to get feedback. Product fit wise, would this be useful to you or is this just me who is happy with it ? Finally I had fun with the compression of documents, it tries ZSTD quick, if it does not compress the data by more than 10 percent it stores data uncompressed, else it does a ZSTD level 9 compression on the data. I picked up this trick form OpenZFS. Thanks
