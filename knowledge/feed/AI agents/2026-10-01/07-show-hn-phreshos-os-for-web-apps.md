---
title: "Show HN: PhreshOS – OS for Web Apps"
source: "Hacker News Top + Show HN"
url: "https://github.com/PhreshOS/system"
date: "2026-10-01"
topic: "AI agents"
type: "article"
read: false
summary: "I'd like to share my experience building this system with you. It's an operating system for web applications, and it took me about six months to develop this model. The idea is that every time I build a web tool, I need to design the infrastructure, including authentication and communication. If it's a WebSocket, it's even more complicated; I need another... (Local summary fallback used.)"
---

I'd like to share my experience building this system with you. It's an operating system for web applications, and it took me about six months to develop this model. The idea is that every time I build a web tool, I need to design the infrastructure, including authentication and communication. If it's a WebSocket, it's even more complicated; I need another port for each application. I couldn't find any neutral tool that provided all of this ready-made, allowing me to build my tools directly on top of it. This is where the PhreshOS project began. It's an open-source, neutral platform for any web application, with everything ready-made: authentication, two-way communication without any configuration, and more. Another key feature is that the applications run as Node.js threads, instead of each application using its own Node.js. This means that on a simple server, dozens of applications can run without any problems, unlike if each application had its own Node.js. Furthermore, AI agents can use the services of these applications and interact with the same state displayed by your application's interface, without needing a separate interface of their own. The project and all its associated packages are open source under the MIT license. I welcome all your feedback, both encouraging and critical.
