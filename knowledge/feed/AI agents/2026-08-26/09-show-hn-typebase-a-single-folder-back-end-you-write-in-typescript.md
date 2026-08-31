---
title: "Show HN: Typebase – A single-folder back end you write in TypeScript"
source: "Hacker News Top + Show HN"
url: "https://typebase.io"
date: "2026-08-26"
topic: "AI agents"
type: "article"
read: false
summary: "Hey HN! I built Typebase, a library that gives you Convex's DX with Supabase's openness. After trying Supabase I liked how fast it is to spin up a DB and auth, but really didn't like using RLS and SQL for authorization. With Convex I loved how your server \"lives\" in your code, but disliked the DB model and the realtime-first defaults. With Typebase you ju... (Local summary fallback used.)"
---

Hey HN! I built Typebase, a library that gives you Convex's DX with Supabase's openness. After trying Supabase I liked how fast it is to spin up a DB and auth, but really didn't like using RLS and SQL for authorization. With Convex I loved how your server "lives" in your code, but disliked the DB model and the realtime-first defaults. With Typebase you just write TS files inside a typebase/ folder in your existing repo. You can define your DB tables inside a schema.ts file and export server functions that your frontend calls like local functions, fully typed. Auth is built in. Then one CLI command uploads your server to any of the available providers (Vercel, Cloudflare Workers or Deno Deploy for the servera and Neon for the DB), or generates the code so you can deploy it wherever you want. Built on top of oRPC, Drizzle, and better-auth. Happy to answer any questions or feedback!
