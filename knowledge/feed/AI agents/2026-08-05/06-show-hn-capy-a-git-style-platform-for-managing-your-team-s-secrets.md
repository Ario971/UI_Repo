---
title: "Show HN: Capy – A Git-style platform for managing your team's secrets"
source: "Hacker News Top + Show HN"
url: "https://github.com/capysc/capy-cli"
date: "2026-08-05"
topic: "AI agents"
type: "article"
read: false
summary: "Hello HN! We're all spending more and more time making stuff with agents, but I've noticed that one of the things that is the most disconnected from my daily engineering workflow is dealing with secrets and credentials. It often involves a lot of click-ops, copying/pasting, and collaboration, and none of the secrets management products out there have trul... (Local summary fallback used.)"
---

Hello HN! We're all spending more and more time making stuff with agents, but I've noticed that one of the things that is the most disconnected from my daily engineering workflow is dealing with secrets and credentials. It often involves a lot of click-ops, copying/pasting, and collaboration, and none of the secrets management products out there have truly scratched that itch. I built Capy to solve this. It's a secrets manager whose entire frontend is a developer CLI, and I find it extremely ergonomic to use by hand. You also don't need to leave the CLI to sign up for and use it! You can install and authenticate without leaving your terminal (or agent) session. It also has very powerful version management with git-like branching and conflict resolution. You can push a version manifest to source control and have collaborators pull a specific version of the secrets at any point in time. The platform itself is extremely secure. It encrypts your local .env files so they can't be read directly. Upon pushing the values to the service, it encrypts them yet again with a service key. That way neither a compromised local machine nor a compromised service alone will result in a leakage. BTW: Since it was released in April, I've been refining it and have evolved the focus a bit. Originally I was going for more TUI and TTY with guided wizards for doing things like deployments, rotations, and connecting services, but I realize that the real future is in making the product work EXTREMELY well with agents. So the next evolution of is a more satisfying Agent ergonomic, and I have been working on something big next on that front. Curious about your thoughts on the idea, execution, and would appreciate any and all feedback!
