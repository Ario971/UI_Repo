---
title: "Show HN: Bash Runtime for AWS Lambda"
source: "Hacker News Show HN"
url: "https://github.com/interchecks/bash-lambda-runtime"
date: "2026-06-05"
topic: "AI dev tools"
type: "article"
read: false
summary: "Hi HN, I built a Bash runtime for AWS Lambda to make writing glue code simpler and faster. Sometimes, all you need is a bit of `sed`, `awk`, maybe a loop and a few HTTP API calls, and this runtime gives you all the tools to do that. It comes bundled with `jq` and `curl` so you can handle JSON payloads and string together HTTP API calls right out of the bo... (Local summary fallback used.)"
---

Hi HN, I built a Bash runtime for AWS Lambda to make writing glue code simpler and faster. Sometimes, all you need is a bit of `sed`, `awk`, maybe a loop and a few HTTP API calls, and this runtime gives you all the tools to do that. It comes bundled with `jq` and `curl` so you can handle JSON payloads and string together HTTP API calls right out of the box, including calling AWS services with `curl --aws-sigv4`. In keeping with the theme, the Lambda handler contract is also made as simple as practical: read from stdin, write to stdout, return 0 for success and non-0 for error. You can run shell scripts, call binaries (either what's available in `al2023.provided` or you can package your own static binaries with your handler), or a combination of both. If you remember nodding along to Adam Drake's post about how bash and coreutils can be faster than a Hadoop cluster, I hope you give this a whirl and find it useful. The runtime is packaged as a Lambda layer, so it should drop right into your normal AWS infrastructure.
