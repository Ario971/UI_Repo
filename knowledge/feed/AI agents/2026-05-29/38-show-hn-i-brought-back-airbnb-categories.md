---
title: "Show HN: I brought back Airbnb categories"
source: "Hacker News Top + Show HN"
url: "https://www.vibebnb.fyi/"
date: "2026-05-29"
topic: "AI agents"
type: "article"
read: false
summary: "I miss airbnb categories. It was fun and I loved being able to just browse thorugh cool listings. I'm not exactly sure why they removed it. Then, a couple weeks ago, they hit me with some A/B test and I had access to a \"what\" freeform textbox to custom filter results. Now apparently they removed that too. At this point, I wasn't happy - so I decided to lo... (Local summary fallback used.)"
---

I miss airbnb categories. It was fun and I loved being able to just browse thorugh cool listings. I'm not exactly sure why they removed it. Then, a couple weeks ago, they hit me with some A/B test and I had access to a "what" freeform textbox to custom filter results. Now apparently they removed that too. At this point, I wasn't happy - so I decided to look into how to bring it back. I noticed they still use some of the categories pages for SEO. For example: https://www.airbnb.com/united-states/stays/ski-in-ski-out That gave me hope - those filters still existed somewhere. Turns out they were only removed from the UI and the search backend still supports all of them. So after a bit of googling, I figured out how it works. Airbnb's search runs on a GraphQL endpoint you can hit anonymously, and the categories map to params on the search URL that I recovered and verified one by one: - Property types: property_type_id[]=<n> (Chalet=22, Cabin=4, Treehouse=6, Castle=5), still filtering even though the UI hides the options - Category tags: kg_and_tags[]=Tag:<n> — I got the IDs by loading those leftover SEO pages and just looking into the URL for the tag (ski-in/ski-out is Tag:681). The one thing I couldn't bring back was that "what" freeform box - turns out it's a server-side AI feature flag tied to your account, not a hidden param :/ though I have a feeling this one's gonn be coming back anyways So I vibecoded the filters I cared about into this little web app. It just builds a normal Airbnb search URL and opens airbnb.com directly — nothing scraped or stored. Hopefully they bring back categories or somethig similar soon. But in the meantime, I figured I'd share this in case anyone else misses browsing through cool treehouses or mountain chalets
