---
title: "Show HN: BambooGrid – Open-source web UI for power grid modeling and power flow"
source: "Hacker News Show HN"
url: "https://bamboo.kickstage.com"
date: "2026-07-16"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN, I am co-founder of Kickstage, a software company specializing in solutions for the electrical industry and lately grid operators. We are hiring engineers from different backgrounds, a lot of them software developers with limited experience in the sectors. Deep domain knowledge is key in our industry however, so we are constantly teaching the basics... (Local summary fallback used.)"
---

Hi HN, I am co-founder of Kickstage, a software company specializing in solutions for the electrical industry and lately grid operators. We are hiring engineers from different backgrounds, a lot of them software developers with limited experience in the sectors. Deep domain knowledge is key in our industry however, so we are constantly teaching the basics of power flow analysis, active vs reactive power, transmission line properties etc. With Jupyter notebooks and the Python console only, that's a tedious task and hardly ever led to a deep understanding of the topics. So we built BambooGrid: a web-based editor on top of pandapower, a popular simulation library in our industry. You drag elements like buses, lines, loads generators and transformers onto a canvas, wire them up, set parameters and run power flow. It will print results directly on the canvas, color buses according to their voltages, even allows you to see an interactive admittance matrix. You can try it out without installing anything on https://bamboo.kickstage.com (thanks to our friends at Hostzero who sponsored hosting). Start with one of the included samples or draw your own. Just don't forget to add a slack element. Built on a Python backend (driven by the choice of pandapower mainly) and a React frontend. Fully MIT licensed, so feel free to use and modify to your liking. Even better: Give us feedback - we're extremely open to suggestions how to improve the tool and are glad about every user who learns a bit more about power systems through it. Šime, who built most of this, is also in the thread. We are both happy to answer anything about the implementation or power systems in general.
