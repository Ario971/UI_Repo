---
title: "Show HN: Supapool – a Supabase per coding agent in ~400 ms"
source: "Hacker News Top + Show HN"
url: "https://supapool.io/"
date: "2026-07-29"
topic: "AI agents"
type: "article"
read: false
summary: "hi HN, I built supapool.io, an ephemeral full copy of supabase's services that you can spin up in ~400 ms (Auth, postgres, storage, realtime). so if you run multiple coding agents in parallel in different worktrees, they can now have their own copy of supabase without making changes that conflict with eachother. > why not use supabase docker locally? when... (Local summary fallback used.)"
---

hi HN, I built supapool.io, an ephemeral full copy of supabase's services that you can spin up in ~400 ms (Auth, postgres, storage, realtime). so if you run multiple coding agents in parallel in different worktrees, they can now have their own copy of supabase without making changes that conflict with eachother. > why not use supabase docker locally? when I run 3-4 instances locally, my macbook gets hot and sometimes freezes. > why not use supabase branches? branches take minutes to setup, and are designed for persistence. this is expensive, and for a dev environment, it is too slow. > why not use mocks? mocks are bad for agents. i expect agents to test their migrations, SQL against real prod service behavior. agents hallucinate working mocks often. However, upside of mocks is that its faster and runs locally, but with supapool, the upside is less convincing. > how does it work/how is this economically viable? starting supabase in 400ms requires a few things: 1. a pool of ready supabase instances running warm, and colocated with region failover (us-east, us-west, europe-west, asia-southeast) 2. fast autoscaling when pool starts to shrink with microVM/firecracker 3. gutting strong persistence guarantees. dev agents don't need WAL, fsync, PITR, replication. anything for HA on a ephemeral supabase instance is bloat its in beta right now, and i'm using our gcp credits to bankroll this, so its free. the eventual pricing will be something like $/instance second and more cost effective than branching or self hosting/maintaining a supabase cluster. would love to get your feedback if you use supabase, and if you think there's something better that would fit your local coding agent setup. Thanks!
