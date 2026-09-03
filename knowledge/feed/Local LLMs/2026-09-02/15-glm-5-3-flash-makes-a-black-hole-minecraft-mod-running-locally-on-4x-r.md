---
title: "GLM 5.3 Flash makes a black hole Minecraft mod running locally on 4x RTX PRO 6000 WS"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1w5gk2b/glm_53_flash_makes_a_black_hole_minecraft_mod/"
date: "2026-09-02"
topic: "Local LLMs"
type: "article"
read: false
summary: "saw the post the other day where people said Minecraft clones aren't impressive anymore, because at this point the whole thing might as well be in the training data. so i tried something slightly different, which is asking a local model to write a mod for the real game, using the Fabric API the model is GLM 5.3 Flash (Q4 quant, running on a rented 4x RTX... (Local summary fallback used.)"
---

saw the post the other day where people said Minecraft clones aren't impressive anymore, because at this point the whole thing might as well be in the training data. so i tried something slightly different, which is asking a local model to write a mod for the real game, using the Fabric API the model is GLM 5.3 Flash (Q4 quant, running on a rented 4x RTX PRO 6000 box). this wasn't done in prompt or a loop, i would ask for changes, then review them and i kept going like that until i was happy with the result. the first iteration took around an hour or so, the result was sorta underwhelming, the black hole would spawn, but it was small and barely did structural damage. after that attempt i gave it some reference images(black holes in space, lightning and effects examples). the new result looked better, but i still wanted more impact from it(and also decided to make it a black hole gun, instead of just the black hole item). it took a lot of turns to get to the end result Output tokens 7.6M Time spent ~9 hours Avg. decode speed ~96 tok/s the mod adds a black hole riflle, which when shot spawns the black hole that starts sucking in blocks and has some pretty sick visuals (the light rings that shrink all the way into the black hole and obviously the black hole itself) after which it turns into a huge explosion crater, wiping out quite a few chunks you can get the mod here on github i ran the local model in atomic.chat (i'm on the Atomic team any feedback is appreciated). curious what else people have gotten local models to mod into the game, make sure to share it in the comments submitted by /u/Top-Eye-8104 [link] [comments]
