---
title: "Show HN: Anonymous age verification with passkey-powered encryption"
source: "Hacker News Show HN"
url: "https://loginwithone.com/"
date: "2026-08-19"
topic: "AI dev tools"
type: "article"
read: false
summary: "This project has been kicking around in my head since I first heard about the webauthn PRF extension in early 2024. I've slowly chipped away at it since, and finally got things to a shareable state over the summer thanks to a very fun parental leave. Headed back to work tomorrow, so I figure there's no time like the present. tldr: A client-held encryption... (Local summary fallback used.)"
---

This project has been kicking around in my head since I first heard about the webauthn PRF extension in early 2024. I've slowly chipped away at it since, and finally got things to a shareable state over the summer thanks to a very fun parental leave. Headed back to work tomorrow, so I figure there's no time like the present. tldr: A client-held encryption key derived during passkey authentication encrypts all sensitive user data prior to persistence so that only the user is able to decrypt and reuse that data on their device. This allows short-lived, privacy-preserving age proofs to be issued to requesting applications (18+, no PII shared) without requiring users to re-upload their documents. The SSO user experience is built on top of the OAuth 2.0 Authorization Code Flow. https://loginwithone.com - demo video + high-level architecture + FAQ I also made the parody demo apps from the video public if anyone wants to play around with the user experience: https://demo.brainrot.loginwithone.com https://demo.dgnrt.loginwithone.com https://demo.kirby.loginwithone.com I suspect most will choose to pass on the ID stage for now (no offense taken, doing so is low reward in this context) but if you navigate to https://app.loginwithone.com after onboarding you can demonstrate the passkey-powered encryption on your email via the lock/unlock button. Very open to feedback and happy to answer any questions! I plan to pull the client-side encryption functionality into an open-source typescript library for general use, so any thoughts or suggestions on what you’d like to see out of that interface would be supremely useful. Thanks all, Michael
