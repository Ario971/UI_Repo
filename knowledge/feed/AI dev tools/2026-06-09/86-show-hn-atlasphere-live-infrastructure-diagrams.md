---
title: "Show HN: Atlasphere – Live Infrastructure Diagrams"
source: "Hacker News Show HN"
url: "https://news.ycombinator.com/item?id=48460286"
date: "2026-06-09"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN. My name is Andrey. On a regular business day, I'm a software engineer working at AWS. Outside of work hours, I spend time on my hobby - writing code. I was once building a pet project that allowed customers to spin up fully synchronized blockchain nodes within just a few minutes. The backend was split into a control plane and a data plane, each wit... (Local summary fallback used.)"
---

Hi HN. My name is Andrey. On a regular business day, I'm a software engineer working at AWS. Outside of work hours, I spend time on my hobby - writing code. I was once building a pet project that allowed customers to spin up fully synchronized blockchain nodes within just a few minutes. The backend was split into a control plane and a data plane, each with its own AWS account. Later I added two more AWS accounts. One for shared RPC nodes. One for the Analytics Service. Since I love to visualize things, I used drawio to visualize the architecture. With time, I noticed a pattern. I'd write some code, add a few lambda functions, update my drawio diagram, write more code, introduce a few more resources, test things, see that everything works fine and go to sleep with a smile on my face. Next week I'd check my diagram, and shockingly, it's missing some of the resources! This kept happening for a few more weeks until I decided to fully abandon the project until my infrastructure diagrams could stay in sync with my cloud account. That's how Atlasphere.io was born. I've been working on it for the past 6 months and I think the product is ready for some feedback :) A few notes: - Atlasphere uses a ReadOnly IAM role to scan your AWS account (my account reaches your account through a trust relationship). - The number of services is currently limited (WIP) - It's a macOS app - It's NOT an Electron app, i use Rust + Webview What am I looking for? All I really need is for someone to try the app and tell me what they like about it and what they absolutely hate about it, haha! The website is https://atlasphere.io/
