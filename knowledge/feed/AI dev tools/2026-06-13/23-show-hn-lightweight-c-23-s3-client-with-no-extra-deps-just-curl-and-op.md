---
title: "Show HN: Lightweight C++23 S3 client with no extra deps (just curl and OpenSSL)"
source: "Hacker News Show HN"
url: "https://github.com/ggcr/s3cpp"
date: "2026-06-13"
topic: "AI dev tools"
type: "article"
read: false
summary: "Attached is my attempt at making a small toy S3 client without any other dependency besides libcurl and OpenSSL. Was tested mainly on MinIO (RIP) locally, so I would expect some bugs when using it against AWS, although I was able to play with it on some open access buckets Be aware that I am not a C++ programmer and this project was indeed done to learn a... (Local summary fallback used.)"
---

Attached is my attempt at making a small toy S3 client without any other dependency besides libcurl and OpenSSL. Was tested mainly on MinIO (RIP) locally, so I would expect some bugs when using it against AWS, although I was able to play with it on some open access buckets Be aware that I am not a C++ programmer and this project was indeed done to learn a bit of C++ myself :') Feedback on any of the code, either on gtest, or the benchmarking section or the core itself is welcome!
