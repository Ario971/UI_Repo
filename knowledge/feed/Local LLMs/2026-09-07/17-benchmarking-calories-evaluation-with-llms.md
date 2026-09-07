---
title: "Benchmarking calories evaluation with LLMs"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1w9jmo8/benchmarking_calories_evaluation_with_llms/"
date: "2026-09-07"
topic: "Local LLMs"
type: "article"
read: false
summary: "I wanted a quick calories counter for myself, using LLMs to evaluate the calories from pictures of meals + descriptions. I needed to pick a model so I made a quick benchmark. The setup was: - Nutrition5k photos for photo + calories: https://github.com/google-research-datasets/Nutrition5k - A tool with access to calories information from USDA FoodData Cent... (Local summary fallback used.)"
---

I wanted a quick calories counter for myself, using LLMs to evaluate the calories from pictures of meals + descriptions. I needed to pick a model so I made a quick benchmark. The setup was: - Nutrition5k photos for photo + calories: https://github.com/google-research-datasets/Nutrition5k - A tool with access to calories information from USDA FoodData Central + MEXT - I evaluated models based on how many of the meals they managed to have under 20% of error - All on the same randomly picked 25 meals. Models too big for my machine were run through OpenCode Go/OpenRouter. I've also included Spark 1.3 since it'll supposedly be open weights. Results Model % within 20% Mean bias Median Error Qwen 3.8 27b 16% +64 kcal 148 kcal GLM 5.3 Flash 28% +18 kcal 65 kcal Qwen 3.8 Max 32% -11 kcal 48 kcal Muse Glimmer 30b 32% +25 kcal 92 kcal Qwen 3.8 Flash 36% +2 kcal 91 kcal DeepSeek v4 Flash Vision 40% +52 kcal 65 kcal Muse Spark 1.3 48% -24 kcal 45kcal I know it's not the most scientific benchmark, but it's interesting to see that the order is not really linked to model size. The most interesting for me is how Muse Glimmer 30b trounces Qwen 3.8 27b here. I think it highlights how "the best" model on consumer hardware (~32Gb VRAM) really depends on the task. submitted by /u/mr_tolkien [link] [comments]
