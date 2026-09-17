---
title: "I literally built the Jev architecture one year back and completely open-sourced it with model, dataset and paper"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wihgum/i_literally_built_the_jev_architecture_one_year/"
date: "2026-09-17"
topic: "Local LLMs"
type: "article"
read: false
summary: "Everyone now talks about the architecture that's not auto regressive and does lightning fast probability prediction with a json schema. I worked on this literally one year back in March 2025, published an arxiv paper, pushed the model to huggingface along with the pypi package and training dataset. And then one year later, a frontier lab came, proposing t... (Local summary fallback used.)"
---

Everyone now talks about the architecture that's not auto regressive and does lightning fast probability prediction with a json schema. I worked on this literally one year back in March 2025, published an arxiv paper, pushed the model to huggingface along with the pypi package and training dataset. And then one year later, a frontier lab came, proposing the same idea like literal breakthrough without technical papers, open weights and no open dataset. I posted my approach in this subreddit. Links are. For anyones information the main guiding model is RL not embedding model or LLM Reddit post: https://www.reddit.com/r/LocalLLaMA/s/6eGEwsAz43 Paper: https://arxiv.org/abs/2503.23303 Model: https://huggingface.co/DeepMostInnovations/sales-conversion-model-reinf-learning Dataset: https://huggingface.co/datasets/DeepMostInnovations/saas-sales-conversations Also the second work published in September 2025 was exactly the same one jev proposed now Paper: https://arxiv.org/abs/2510.01237 My model uses PPO over sequence embeddings to output turn-by-turn conversion trajectories (probabilities from 0.0 to 1.0). Jev uses parallel sampling (trained via RLCD) to output confidence distributions and schema choices. It's incredibly frustrating that the thing that you made with months of hard work, sweat and sleepless night is architecturally similar with the vertical use case and don't get the support you deserve because frontier lab build something horizontal. The open-source story in general 🙂 submitted by /u/Nandakishor_ml [link] [comments]
