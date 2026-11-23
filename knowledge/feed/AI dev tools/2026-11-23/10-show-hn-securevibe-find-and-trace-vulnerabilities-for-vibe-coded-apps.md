---
title: "Show HN: SecureVibe – Find and trace vulnerabilities for vibe coded apps"
source: "Hacker News Show HN"
url: "https://securevibe-dev.vercel.app/"
date: "2026-11-23"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hello HN, just wanted to share my project that I've been working on the past months, where I noticed the issue that now we ship faster than setting up the requirements for the project. So I thought of building secureVibe to find vulnerabilities in your codebase. Now I have a MVP where it doesn't just scan the code and show random analysis I used Tree-sitt... (Local summary fallback used.)"
---

Hello HN, just wanted to share my project that I've been working on the past months, where I noticed the issue that now we ship faster than setting up the requirements for the project. So I thought of building secureVibe to find vulnerabilities in your codebase. Now I have a MVP where it doesn't just scan the code and show random analysis I used Tree-sitter and AST to understand code context to validate vulnerabilities found as it builds a graph of application routes, handlers and database calls so it helps to determine whether findings are confirmed or likely. Briefly the features: 1- shows all vulnerabilities in your code with code snippets 2-fixing with ai option (optional with your own api key for now) 3- ask the graph feature as you can ask where the attacker can exploit my website or authentication issues (I used graphify as foundation for it ) 4- You can filter vulnerabilities categories (like Cwe, database injection and more) from dashboard and you can download it as html report simple interactive one so you can fix it on your own later. I would love to know your thoughts and feedback to continue on the development on it like some of the problems I faced is benchmarks to validate security rules. With some research I found openssf benchmark so would really appreciate feedback to continue on developing with next phases. It works best with TypeScript
