---
title: "Show HN: Sambaudit, a secrets scanner for SMB shares with a web UI"
source: "Hacker News Show HN"
url: "https://github.com/d-woosley/SambAudit"
date: "2026-07-23"
topic: "AI dev tools"
type: "article"
read: false
summary: "I built this tool from working as a security engineer and pentester for a number of years and felt that the task of searching SMB shares for secrets was far too difficult. I ended up either barely doing it at all or spending far too much time on it. However, I know there is a tone of sensitive info in SMB shares and I could almost always find passwords in... (Local summary fallback used.)"
---

I built this tool from working as a security engineer and pentester for a number of years and felt that the task of searching SMB shares for secrets was far too difficult. I ended up either barely doing it at all or spending far too much time on it. However, I know there is a tone of sensitive info in SMB shares and I could almost always find passwords in PowerShell scripts, SSH keys, keyvaults, or PII when I looked… but the workflow was a pain. This tool is an attempt to solve that pain by having automatically share discovery via LDAP, crawl in parallel, extract file content and text (documents, PDFs, archives, and images with OCR), and run checks for known secrets patters against the results. All the results are then stored in a SQLite DB. All that already existed (albeit a bit fragmented in multiple tools or only paid tools), but this adds a web UI to the process so that you can view files live (with content extracted live time using SMB calls), mark findings as true or false positives, filter for file types to search, and get reports and trends of the results. Please let me know what you think and suggestion for improvements. If you already have a go-to tool for this task, please also feel free to mention that; I’d love to learn what others are using!
