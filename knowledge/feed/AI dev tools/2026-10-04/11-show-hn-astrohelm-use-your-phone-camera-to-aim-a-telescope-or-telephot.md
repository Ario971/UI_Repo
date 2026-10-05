---
title: "Show HN: AstroHelm – Use your phone camera to aim a telescope or telephoto lens"
source: "Hacker News Show HN"
url: "https://astrohelm.app/"
date: "2026-10-04"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hello HN! As an amateur astronomer living in New York City, finding objects in the night sky has always been a huge challenge. I thought about using the smartphone's gyroscope and magnetometer, but the accuracy left a lot to be desired. Then I learned about plate solving: given a picture of the sky, we can determine exactly where in the sky the camera was... (Local summary fallback used.)"
---

Hello HN! As an amateur astronomer living in New York City, finding objects in the night sky has always been a huge challenge. I thought about using the smartphone's gyroscope and magnetometer, but the accuracy left a lot to be desired. Then I learned about plate solving: given a picture of the sky, we can determine exactly where in the sky the camera was pointing by identifying the star pattern. This was a much better fit - as long as the phone and the optics are rigidly connected, we can repeatedly photograph the sky and determine the pointing direction with very high accuracy. A lot of work was done to design an algorithm that works reliably with smartphone cameras, which have limited light sensitivity and wider field of view which includes buildings and trees. I experimented a lot with machine learning, and to my surprise, traditional CV methods actually performed better at extracting stars from the image. The result is AstroHelm, an iOS and Android app that helps figure out where your telescope or camera is pointing, and guides you to the object of your choice. Just follow an arrow on screen, and the object will land right in your eyepiece or viewfinder. Everything happens on device, and no internet connection is required. AstroHelm is free to use and comes with beginner-friendly objects selected for each night. Optional one time purchases unlock more objects and advanced features, such as interoperability with other astronomy software. I am also proud to partner with astronomy clubs and organizations to offer free licenses for outreach. I hope AstroHelm can make it a little easier to discover the wonders of the night sky, and I look forward to your feedback!
