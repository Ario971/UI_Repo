---
title: "I'm trying to post-train AliceAI-Foundation-80B-A3B-Base myself"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wpg4a8/im_trying_to_posttrain/"
date: "2026-09-24"
topic: "Local LLMs"
type: "article"
read: false
summary: "Just wanted to share with someone - don't have much to report yet. I am interested in this new AliceAI model and have been wanting to make a community impact for a while - and releasing an initial agentic version of this model sounds cool. I am training on 3 32gb v100s (which has been fun to get to work, to say the least). What I'm really doing is creatin... (Local summary fallback used.)"
---

Just wanted to share with someone - don't have much to report yet. I am interested in this new AliceAI model and have been wanting to make a community impact for a while - and releasing an initial agentic version of this model sounds cool. I am training on 3 32gb v100s (which has been fun to get to work, to say the least). What I'm really doing is creating a shallow distill of Qwen 3.8 27b and then using reinforcement learning - My initial plan is a SFT with Qwen3.8 27b synthetic data I'm generating targeting long horizon agentic work - then, RL / GRPO with a grader model for a while. I'm considering using a stronger model to generate the training data, but I'm trying to keep this on my local machine only. It's coming along - I can just barely fit the weights and activations on the v100s in qlora. I've built the framework for the SFT data generation for. I don't expect anything amazing but it should be a neat experiment. Also considering using a pre-existing data set for the tune, but I'm more interested in creating my own distillation. Update: it's training! https://preview.redd.it/vx7ybgzbxjrh1.png?width=1329&format=png&auto=webp&s=c0139cb4d30bde7cff1df0ccb2845e0224d01f73 submitted by /u/jjusko20 [link] [comments]
