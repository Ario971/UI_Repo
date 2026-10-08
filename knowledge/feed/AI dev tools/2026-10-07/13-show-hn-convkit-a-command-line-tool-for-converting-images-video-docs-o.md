---
title: "Show HN: Convkit – A command line tool for converting images/video/docs offline"
source: "Hacker News Show HN"
url: "https://github.com/shdwfruit/convkit"
date: "2026-10-07"
topic: "AI dev tools"
type: "article"
read: false
summary: "Going to some shady website for file conversions was really annoying me because I had to hope whatever I gave them wasn't saved, and whatever I got back wasn't something \"unexpected.\" So I made convkit, a CLI that does file conversions 100% locally. Run conv in.mp4 out.gif and you get your GIF from the right tool (ffmpeg, ImageMagick, etc.) using settings... (Local summary fallback used.)"
---

Going to some shady website for file conversions was really annoying me because I had to hope whatever I gave them wasn't saved, and whatever I got back wasn't something "unexpected." So I made convkit, a CLI that does file conversions 100% locally. Run conv in.mp4 out.gif and you get your GIF from the right tool (ffmpeg, ImageMagick, etc.) using settings tuned for good output. For example, a GIF's 256 colors are picked from the clip itself instead of ffmpeg's generic palette. And if you've ever had an issue uploading a file that is too large, you can use the --max-size flag: conv clip.mp4 --max-size 10mb It trades resolution, frame rate and bitrate against each other, so you get the best-looking version that still fits. Notes - In early stages (0.3.x) so some issues pop up - You only need the tools for the conversions you use, so video and GIFs only need ffmpeg; LibreOffice, pandoc and Typst are only for documents; Image to Image needs ImageMagick. - Not all features are listed. If you are interested go to the github page! https://github.com/shdwfruit/convkit - If you want any specific conversions, let me know! Thanks for reading!
