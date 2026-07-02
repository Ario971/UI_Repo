---
title: "Show HN: I built a photography weather alert system"
source: "Hacker News Show HN"
url: "https://photosignal.app/"
date: "2026-07-02"
topic: "AI dev tools"
type: "article"
read: false
summary: "hi HN, I'm a landscape photographer by heart and a software developer by trade. I build a web app for automating alerts for photography weather. It is meant to solve the following issues I (and probably others) had: - the need to check multiple weather apps multiple times a day - keeping an eye out for some long range conditions like full moon or moon + a... (Local summary fallback used.)"
---

hi HN, I'm a landscape photographer by heart and a software developer by trade. I build a web app for automating alerts for photography weather. It is meant to solve the following issues I (and probably others) had: - the need to check multiple weather apps multiple times a day - keeping an eye out for some long range conditions like full moon or moon + azimuth - combining several conditions into triggers - notifications/reminders for those triggers At first, I built a POC on my wordpress site. It was useful but hard to maintain, so I built a new one from scratch using C#, EF Core, Postgres, vanilla html/css/js. Current functionality: - tracks locations the user saves, updates forecasts - allows to create alerts of two types: - simple conditions like high clouds > X, low clouds < Y, timing window = around sunrise - smart checks like fog or frost prediction, rain clearing, moonrise at sunset, open horizon - some spatial cloud calculations - moon table (up to 365 days ahead) for long range planning There are some existing apps but I took a different approach. I didn't like the "magic scores" or "awesomeness certainty". Instead, it either triggers or it doesn't and gives you the snapshot. I launched MVP several weeks ago so it is still WIP. I'd appreciate any feedback - UX, usefulness, etc. PhotoSignal is freemium (1 location is free). But for HN, I'm giving a temp trial for all features and more locations. Invite code: HNINVITE Enter the code during registration. The code is active until July 15 and gives 14 days of access after account activation. After that, the account goes back to the free plan (1 location). Signup and email verification are required because it stores locations and sends notifications.
