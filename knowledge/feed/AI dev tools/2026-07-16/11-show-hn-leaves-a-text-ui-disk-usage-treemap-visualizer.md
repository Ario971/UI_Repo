---
title: "Show HN: Leaves – A text-UI disk usage treemap visualizer"
source: "Hacker News Show HN"
url: "https://github.com/patonw/leaves"
date: "2026-07-16"
topic: "AI dev tools"
type: "article"
read: false
summary: "GUI disk analyzers are great for figuring out what's filling up your laptop/desktop drive. On containers or remote servers, the options are limited to purely text based utilities (e.g. du) or list-centric TUIs (e.g. ncdu) which are usually limited to viewing one directory at a time. I created leaves to fill that gap. Inspired by classic utilities like Win... (Local summary fallback used.)"
---

GUI disk analyzers are great for figuring out what's filling up your laptop/desktop drive. On containers or remote servers, the options are limited to purely text based utilities (e.g. du) or list-centric TUIs (e.g. ncdu) which are usually limited to viewing one directory at a time. I created leaves to fill that gap. Inspired by classic utilities like WinDirStat and KDirStat, it uses a 2-dimensional treemap^1 visualization to show the entire directory hierarchy with proportionally sized rectangles. It's performant enough to handle millions of files, thanks to Rust and multi-threading. However, block characters aren't as suited as pixels for resolving a large number of items. Leaves can show file-type summaries per directory or partition the top-level directories by extension, allowing you to see not only where space is being used, but also how. For instance, I can see the largest chunk of my home directory is taken up by uv caches for python and old Linux ISOs that I could easily re-download if needed. Or in a particular container, +600MB is used by standard Rust documentation and tutorials, and that it is the only location with HTML/JS files, when only the libraries and build tools are needed (note to self: remember to use the minimal profile next time). ^1: https://github.com/shundhammer/qdirstat/blob/master/doc/Tree...
