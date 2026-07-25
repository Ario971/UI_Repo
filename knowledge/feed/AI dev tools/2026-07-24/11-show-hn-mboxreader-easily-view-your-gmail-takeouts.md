---
title: "Show HN: Mboxreader – easily view your Gmail Takeouts"
source: "Hacker News Show HN"
url: "https://mboxreader.com"
date: "2026-07-24"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hey HN, Did you know you can download all your emails (and attachments) from GMail into a .mbox format using Google Takeout ( https://takeout.google.com )? I did this and for the longest time my .mbox backup just sat around. I built a web app that can take an .mbox file and load it into a UI that looks like GMail: threaded conversations, original labels a... (Local summary fallback used.)"
---

Hey HN, Did you know you can download all your emails (and attachments) from GMail into a .mbox format using Google Takeout ( https://takeout.google.com )? I did this and for the longest time my .mbox backup just sat around. I built a web app that can take an .mbox file and load it into a UI that looks like GMail: threaded conversations, original labels and categories, contacts, attachments, and full-text search. The mail never leaves your machine: the upload and parsing happens in a Web Worker in your own browser, and the archive is stored in browser storage on your device. Close the tab and it's wiped. There's no account required to try it out, and if you still don't trust it there's a built-in demo mailbox — no file needed. Try it out at https://mboxreader.com . Let me know if you have any questions or any constructive feedback. Thanks in advance! Pre-emptive FAQs: 1. "If 'no account required' why is there sign up?": I'm curious if there is a "power user" use case that needs support for larger backups and advanced features. But again, there's no need to sign up to try out the app. 2. "Why make it a web app instead of something I can run locally and privately?": There's less friction to try it out as a web app and local setups don't eliminate privacy concerns either.
