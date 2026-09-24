---
title: "Show HN: Trader News – Hacker News for Finance"
source: "Hacker News Show HN"
url: "https://news.ycombinator.com/item?id=49828019"
date: "2026-09-24"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hacker News helps me stay in touch with the world of technology without putting in extensive web browsing work, and I love it for that reason. I am interested in financial markets and wanted a “Hacker News for finance”, but Googling produced surprisingly poor results. So I forked the great HN clone, shark [1], and added some market focused twists. The res... (Local summary fallback used.)"
---

Hacker News helps me stay in touch with the world of technology without putting in extensive web browsing work, and I love it for that reason. I am interested in financial markets and wanted a “Hacker News for finance”, but Googling produced surprisingly poor results. So I forked the great HN clone, shark [1], and added some market focused twists. The result is: https://tradernews.fyi Trader News is the Hacker News interface you are familiar with, with a difference. Above the article area is a live feed (up to a ~30 min delay) of market data. I show the major indexes and every company within them. E.g click on Nasdaq-100 to see how the index performing, and then scroll the list of companies and click on META to get more detail on its specific performance (and links to Yahoo Finance + it’s investor relations). This gives you a single place to read finance related articles and stay in touch with the markets. The CSS for Trader News is linked to global market performance. On days when stocks are down, Trader News is red. On days where stocks are up, Trader News is green. I have an agent running a 24 hour cron job to research articles and post them to the site to keep it a stimulating place to read. I will tone this down if user submissions pick up. If there are sources you think I should include, please leave a comment. I also added a basic “chat” panel with polling every 30 seconds for casual market related chat. It’s open source and I’m very interested in feature pull requests. The code is available here: https://github.com/espressoplease/trader-news Public anonymised analytics are available with a 15 min delay here: https://tradernews.fyi/analytics [1] https://github.com/shawwn/sharc
