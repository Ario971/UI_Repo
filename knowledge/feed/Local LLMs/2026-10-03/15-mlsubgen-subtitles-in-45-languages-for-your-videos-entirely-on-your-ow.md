---
title: "mlsubgen — subtitles in 45 languages for your videos, entirely on your own machine"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wwds6i/mlsubgen_subtitles_in_45_languages_for_your/"
date: "2026-10-03"
topic: "Local LLMs"
type: "article"
read: false
summary: "Full disclaimer: I've leaned heavily on Fable to develop this, but I've tested it thoroughly on my own library for a couple of months before putting it on GitHub. I live in Thailand, and it started as a way to get Thai subtitles for Shin-chan for Thai friends and for expat friends with Thai partners. It's grown into a general tool: subtitles in 45 languag... (Local summary fallback used.)"
---

Full disclaimer: I've leaned heavily on Fable to develop this, but I've tested it thoroughly on my own library for a couple of months before putting it on GitHub. I live in Thailand, and it started as a way to get Thai subtitles for Shin-chan for Thai friends and for expat friends with Thai partners. It's grown into a general tool: subtitles in 45 languages, entirely on your own machine. Linux and NVIDIA only, I'm afraid. What it does differently from the usual Whisper wrapper: it detects the language of every stretch of speech rather than per file, so mixed-language material works; it runs two speech recognisers on everything and has a local LLM reconcile them; and it prefers existing human work to machine inference, embedded subtitle tracks are used before the audio is, including OCR of bitmap (PGS) tracks on Blu-ray remuxes, and it only listens when there's nothing to read. Every one of those features has a measured accuracy in the README rather than a claim. I run it on a 24 GB RTX A5000. There are profiles for 16, 12 and 8 GB cards, measured on my card limited to those sizes rather than on those cards themselves, so reports from real ones are the most useful thing you could send me. It wants 16–32 GB of system RAM depending on the profile, and it is storage-hungry (30–65 GB of models), because it picks the model that suits each task and language pair. It's slow when it has to listen, roughly real time per target language on my card, slower on the smaller profiles because the whole aim has been accuracy over speed. When the subtitles already exist in the file it's fast. I'd love people to try it and open issues. submitted by /u/Dodgy_Past [link] [comments]
