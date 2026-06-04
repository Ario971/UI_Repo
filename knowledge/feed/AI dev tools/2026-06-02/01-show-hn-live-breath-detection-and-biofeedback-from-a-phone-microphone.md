---
title: "Show HN: Live breath detection and biofeedback from a phone microphone"
source: "Hacker News Show HN"
url: "https://github.com/shiihaa-app/shiihaa-breath-detection"
date: "2026-06-02"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi everyone, I am Felix, a famliy doctor from ZH, Switzerland. A couple of month ago I started this little project called shii • haa, a breathing app that uses the phone`s microphone for live biofeedback My prior work in emergency medicine and intensive care was closesly linked to breathing, mostly in critical situations... and let me to reevaluate my own... (Local summary fallback used.)"
---

Hi everyone, I am Felix, a famliy doctor from ZH, Switzerland. A couple of month ago I started this little project called shii • haa, a breathing app that uses the phone`s microphone for live biofeedback My prior work in emergency medicine and intensive care was closesly linked to breathing, mostly in critical situations... and let me to reevaluate my own way of breathing. over time one question popped into my mind: can medical knowledge and biofeedback make an app actually promote self-awareness instead of attaching your goals to the award system of the app. it combines signal processing, a breathing state machine and ML. The state machine follows inhale, exhale and transitions in the mic signal. A quality layer rejects noisy or ambiguous windows before signals are used for feedback. All processing is done on-device, no speech or raw audio is uploaded. What I'm trying to avoid is turning breathing into another score or game. The app gives feedback on rhythm, depth and regularity, but the point is more "notice what you are doing" than "perform well". I'd be interested in feedback, especially from people who have worked on signal processing, health UX, or Android/iOS audio issues.
