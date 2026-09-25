---
title: "Qwen3.8 27b practical modeling for 3d printing"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1wpet4j/qwen38_27b_practical_modeling_for_3d_printing/"
date: "2026-09-24"
topic: "Local LLMs"
type: "article"
read: false
summary: "I spent the past day and a half trying to get qwen27b to complete some practical work for me. I have a Bambu h2c I have been wanting to get more use out of so thought this would be a fun experiment. I have 27b running on my 5090 and qwen image 2.1 running on a 3080 10gb with comfyui. I had pi build me some skills to use cadquery and comfy. prompt: “Make m... (Local summary fallback used.)"
---

I spent the past day and a half trying to get qwen27b to complete some practical work for me. I have a Bambu h2c I have been wanting to get more use out of so thought this would be a fun experiment. I have 27b running on my 5090 and qwen image 2.1 running on a 3080 10gb with comfyui. I had pi build me some skills to use cadquery and comfy. prompt: “Make me a printable 3d model of a self watering plant pot and a MagSafe phone stand for my iPhone 17. Give me a sheet with top front and 3/4 view renders of each item. Then, use comfy to generate a scene and place the rendered product in the scene. It should look like an advertisement” It’s not perfect but I’m honestly super impressed with the output. The multi view sheet renders having the amount of filament each object would use is a nice touch. The setup is 5090 with ninfer, quasar qat 27b, 590k nvfp4 context, image processing enabled. in comfy I’m using the int8 version of qwen image 2.1. harness was pi with skills it made for cadquery, blender, and comfyUI. My next goal is to be able to give it a series of photos of an object and have it create a faithful 3d model. If it can pull that off it would be great as one of my hobbies is making custom parts for my RC cars. If anyone has played around with 3d creation and printing with localLLM I’d definitely want to hear about what tools you are using I have a feeling my setup is very basic at this moment. submitted by /u/Fragrant_Scale6456 [link] [comments]
