---
title: "Show HN: Boop – tiny, self-hosted push notifications for your apps built in Go"
source: "Hacker News Show HN"
url: "https://github.com/chrisgreg/boop"
date: "2026-08-28"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN, I built Boop because I wanted application events sent directly to my phone without paying for another service or routing everything through Slack or Telegram. Boop is a small, open-source server paired with an open-source iOS app. The server currently uses around 8 MB of memory on my machine. It’s deliberately not an observability platform or a rep... (Local summary fallback used.)"
---

Hi HN, I built Boop because I wanted application events sent directly to my phone without paying for another service or routing everything through Slack or Telegram. Boop is a small, open-source server paired with an open-source iOS app. The server currently uses around 8 MB of memory on my machine. It’s deliberately not an observability platform or a replacement for Sentry. It receives events from your applications, sends native push notifications, and keeps them in a purpose-built mobile inbox. I use Elixir, so I built an integration for ErrorTracker. ErrorTracker still captures and stores the errors; the plugin sends them to Boop so I can see them on my phone: https://github.com/chrisgreg/boop_error_tracker There’s also a general Elixir client: https://github.com/chrisgreg/boop_ex And a Node client: https://github.com/chrisgreg/boop-node The iOS app can be built and installed locally. I’ve included instructions for configuring private push notifications for your own device, so you don’t need to release anything through the App Store. Although errors were my original use case, Boop can receive any event worth knowing about: failed jobs, deployments, signups, payments, low disk space, or anything else your application can send. Built in Go because I wanted to save memory on my self-hosted machine so Go and Svelte felt like a good combo. Everything is free and open source. It’s early, so I’d especially appreciate feedback on the architecture, setup process, and which integrations would make it useful to others.
