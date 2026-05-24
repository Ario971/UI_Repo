---
title: "llama.cpp server have built-in native tools (exec_shell, edit_file, etc.)"
source: "r/LocalLLaMA"
url: "https://www.reddit.com/r/LocalLLaMA/comments/1tluma3/llamacpp_server_have_builtin_native_tools_exec/"
date: "2026-05-23"
topic: "Local LLMs"
type: "article"
read: false
summary: "https://preview.redd.it/24uvk7o4sy2h1.png?width=1440&format=png&auto=webp&s=542570e3057b6f44c1e7e8d92130f575fb69cfa2 https://preview.redd.it/l4bbm7o4sy2h1.png?width=1440&format=png&auto=webp&s=3dc0edd978da23fecf81e86a269a06de643247d1 I was messing around with running local models recently, and while digging through the llama.cpp server docs, I noticed thi... (Local summary fallback used.)"
---

https://preview.redd.it/24uvk7o4sy2h1.png?width=1440&format=png&auto=webp&s=542570e3057b6f44c1e7e8d92130f575fb69cfa2 https://preview.redd.it/l4bbm7o4sy2h1.png?width=1440&format=png&auto=webp&s=3dc0edd978da23fecf81e86a269a06de643247d1 I was messing around with running local models recently, and while digging through the llama.cpp server docs, I noticed this experimental flag just sitting right there: --tools TOOL1,TOOL2,... It natively supports read_file , file_glob_search , grep_search , exec_shell_command , write_file , edit_file , apply_diff , and get_datetime . That is a battery of tools that basically turns llama-server into a mini agent harness. You really don't need anything more than your trusty .gguf file and the llama.cpp binary for basic AI assistance in your projects. Note that file operations are relative to folder from which you started the server. There also isn't any security sandboxing yet, like a whitelist of allowed commands or strict denial of file operations outside the original folder. So, be very cautious with what you expose! But still, I'm pretty amazed that llama.cpp is gaining these abilities natively. It completely eliminates the need to rig up MCPs or heavy wrappers just for things like getting the current date/time or reading the contents of a file. submitted by /u/srigi [link] [comments]
