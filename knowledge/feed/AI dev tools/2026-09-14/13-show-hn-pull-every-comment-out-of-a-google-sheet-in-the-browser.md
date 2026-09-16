---
title: "Show HN: Pull every comment out of a Google Sheet, in the browser"
source: "Hacker News Show HN"
url: "https://bensunter.com/commentpulse.html"
date: "2026-09-14"
topic: "AI dev tools"
type: "article"
read: false
summary: "I spend a lot of time working in Google sheets. Often, I will collaborate with up to 50 other people in the same workbook. One specific org I worked at had a strong preference for using comment threads in Sheets extensively to ask questions, give feedback, and raise risks. Sheets would regularly get 70+ comment threads across multiple tabs with dozens of... (Local summary fallback used.)"
---

I spend a lot of time working in Google sheets. Often, I will collaborate with up to 50 other people in the same workbook. One specific org I worked at had a strong preference for using comment threads in Sheets extensively to ask questions, give feedback, and raise risks. Sheets would regularly get 70+ comment threads across multiple tabs with dozens of contributing teams. As the owner of the sheet, I wanted a way to document the comments to retain traceability on all of the various conversations. To my surprise, there was no function built into sheets to scrape, count, sort or manage comments at all. I also couldnt find any good third party add-ons to solve the problem. So I built one myself. I discovered that the Drive API gives you the comment text, author and state, but doesnt give the location of the comment which was crucial. Thankfully, the .xlsx export has xl/threadedComments with the cell reference, timestamp, author, resolved flag and parent ID. How it runs: JSZip in the browser, no sign-in, nothing uploaded anywhere. I am in the process of having the app verified to be hosted on Google Workspace Marketplace, but in the mean time the tool is available at: https://github.com/bsunter93/commentpulse
