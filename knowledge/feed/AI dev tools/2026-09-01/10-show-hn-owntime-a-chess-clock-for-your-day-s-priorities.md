---
title: "Show HN: OwnTime – a chess clock for your day's priorities"
source: "Hacker News Show HN"
url: "https://owntime.app/"
date: "2026-09-01"
topic: "AI dev tools"
type: "article"
read: false
summary: "I made OwnTime to balance between competing priorities in my life. The idea is based on two main influences: the concept of \"roles\" from \"The 5 Choices\" (2015), and my repeated failure to effectively implement time blocking due to the necessary flexibility in my role. The app allows you to define time budgets, which are not much more than a few mutually e... (Local summary fallback used.)"
---

I made OwnTime to balance between competing priorities in my life. The idea is based on two main influences: the concept of "roles" from "The 5 Choices" (2015), and my repeated failure to effectively implement time blocking due to the necessary flexibility in my role. The app allows you to define time budgets, which are not much more than a few mutually exclusive countdown timers. The UX is essentially that of a chess clock for an arbitrary number of players with configurable time. The whole point of the app is to kick you out of the running role/priority when its time is up. One feature that was essential for me was AlarmKit alarms, which only became possible last year (>= iOS 26.1). Another was watchOS support, as a natural surface for time-related matters. The current version is strictly focussed. The timers track time allocation during one day. All timers are reset at midnight. I didn't build any statistics - you can export the raw internal SQLite store and make any evaluation or dashboard you want from there. I don't plan to extend the app nor to convert it into a service. All data stays local on your devices (synced between phone and watch locally) and fully open to you. No need for an account or subscription. Thus, I ask for a small one-time fee of $1.99. The website has a short video and rendered preview: https://owntime.app If you want to go straight to the App Store: https://apps.apple.com/app/id6770125662 I look forward to your comments and feedback.
