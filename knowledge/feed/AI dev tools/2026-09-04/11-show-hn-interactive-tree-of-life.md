---
title: "Show HN: Interactive Tree of Life"
source: "Hacker News Show HN"
url: "https://ptree.org/"
date: "2026-09-04"
topic: "AI dev tools"
type: "article"
read: false
summary: "Ptree consolidates of 11 taxonomic trees, both categorical like we used in school (plant, animalia) and phylogenetic (evolutionary descent), with instant crosswalk between them. Across those trees it overlays 41 visual properties (categorical and numerical) assembled from hundreds of biological traits and sources. Color the tree by habitat, nutrition, siz... (Local summary fallback used.)"
---

Ptree consolidates of 11 taxonomic trees, both categorical like we used in school (plant, animalia) and phylogenetic (evolutionary descent), with instant crosswalk between them. Across those trees it overlays 41 visual properties (categorical and numerical) assembled from hundreds of biological traits and sources. Color the tree by habitat, nutrition, size, longevity, even see vertical range of birds and depth of fish visually. The backend is 800 GB of raw data distilled through a 9-step build process that reconciles and links all 11 trees along with hundreds of traits so every node in every tree gets all the properties. Every color and number presented retains and shows its provenance: original wording, citation, and license. The frontend uses a custom Miller column implementation with fold-away gutter, all composited animation (no frameworks, pure DOM mutation). Use +'s to try to confuse it by expanding many branches and it will fold them away and route edges around them. Made by the creator of ptable.com, a popular interactive periodic table website around since 1997.
