---
title: "Show HN: Can a VPN be decentralised.. I think it's the best for homelabs"
source: "Hacker News Show HN"
url: "https://github.com/CLoaKY233/kith"
date: "2026-11-15"
topic: "AI dev tools"
type: "article"
read: false
summary: "Can a VPN be decentralised... I was trying out tailscale for my homelab but I didn't really want a control plane. Tailscale, Headscale and others already do the Controlled VPN extremely well, and I've used them. but every one of them has a control plane that all the devices directly connect to. I wanted something where every device in the network can act... (Local summary fallback used.)"
---

Can a VPN be decentralised... I was trying out tailscale for my homelab but I didn't really want a control plane. Tailscale, Headscale and others already do the Controlled VPN extremely well, and I've used them. but every one of them has a control plane that all the devices directly connect to. I wanted something where every device in the network can act as a self node, and it'll be a Mesh of devices interconnected. Further it also allowed me to keep internal names like nas.home.kith.internal, and exit nodes, relays... it's free and open source (AGPL), written in Rust It really felt useful to me so I just want to know what would make it further helpful? ... Some use cases or if there's a problem it could actually help with, I'd love to hear it and try my best. ps : I used a lot of Claude while building it, so I'm sure there are rough edges I haven't found... bad code, wrong docs, or maybe the wrong approach somewhere. Would love any feedback on it, or anything I should do differently :D
