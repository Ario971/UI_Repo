---
title: "Show HN: RePlaya – self-hosted browser session replay with live tailing"
source: "Hacker News Show HN"
url: "https://github.com/s2-streamstore/replaya"
date: "2026-06-02"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN, I'm one of the founders of s2.dev. RePlaya ( https://github.com/s2-streamstore/replaya ) is a self-hosted browser session replay tool using rrweb ( https://github.com/rrweb-io/rrweb ). It occurred to me that a durable stream per session would be a much neater architectural foundation for much of what you'd want from such a tool. As a unique feature... (Local summary fallback used.)"
---

Hi HN, I'm one of the founders of s2.dev. RePlaya ( https://github.com/s2-streamstore/replaya ) is a self-hosted browser session replay tool using rrweb ( https://github.com/rrweb-io/rrweb ). It occurred to me that a durable stream per session would be a much neater architectural foundation for much of what you'd want from such a tool. As a unique feature, it also made live tailing straightforward because the player can read from the same stream the recorder is appending to. The alternative architecture is likely an ingest firehose which is then indexed, with associated complexity and latency. You'd have to string together multiple data systems like a message queue, a metadata database, and blob storage and/or an OLAP database. Here the only dependency is S2, which has an open source version you can self-host called s2-lite ( https://news.ycombinator.com/item?id=46708055 ). How it works: - one S2 stream per browser session - large rrweb events (like a full snapshot) get framed across multiple binary S2 records and reassembled on read - active sessions are tailed with an S2 read session, and bridged to the browser over SSE - session listing relies on stream names encoding reverse timestamps, as S2 returns a lexicographic order listing - relying on fencing tokens so a stopped session can't be written to again by a late recorder - retention and GC are handled via S2 stream config, so no background job needed Curious to hear from folks on the tool or the stream-per-session model!
