---
title: "Show HN: Coldframe, a honeypot that poses as a supermarket fridge controller"
source: "Hacker News Top + Show HN"
url: "https://github.com/hedgerow-dev/coldframe"
date: "2026-11-07"
topic: "AI agents"
type: "article"
read: false
summary: "I built Coldframe, a honeypot that pretends to be a supermarket refrigeration controller. Inspired by the events on industrial fridge installations in the past weeks, I wanted to see what people would try against a convincing fake. To learn more about this I built a honeypot that resembled perfectly the Danfoss AK-SM 800A and Dixell XWEB interfaces. Both... (Local summary fallback used.)"
---

I built Coldframe, a honeypot that pretends to be a supermarket refrigeration controller. Inspired by the events on industrial fridge installations in the past weeks, I wanted to see what people would try against a convincing fake. To learn more about this I built a honeypot that resembled perfectly the Danfoss AK-SM 800A and Dixell XWEB interfaces. Both of them are recognized on Shodan as real ones (an not as honeypots). It’s one Python file using only the standard library, and it builds on eppser/danfoss-ak-sm-decoy and public research by Synacktiv, Claroty and Ironhackers. Things that were fun to get right: - Matching real units. I used Shodan records of real devices to match header order, page titles, certificate fields and TLS versions. The Danfoss persona sends nginx headers in the same order as a real AK-SM 800A. The Dixell persona sends no Server header and pads its page to exactly 8,202 bytes. - Recognising exploit attempts. It recognises CVE-2025-41450, the Danfoss “code of the day” login bypass, and records whether the submitted code is correct for today. It also tags attempts targeting three other Danfoss CVEs and the XWEB vulnerabilities. - Letting them in. Default logins open a fake store dashboard with defrost buttons, so you see the second move, not just the first. Nothing behind it is real. Two instances have been live for a day. So far they’ve only seen generic scanners and Shodan’s crawler, which is called refrigerator.census.shodan.io. Feedback welcome, especially from anyone who has seen these devices in the field!
