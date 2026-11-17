---
title: "Trustworthy Numerical Software in the Age of AI: What Would Turing Do?"
source: "arXiv cs.AI/cs.CL/cs.LG"
url: "https://arxiv.org/abs/2611.21570v1"
date: "2026-11-16"
topic: "AI agents"
type: "paper"
read: false
summary: "AI coding agents can now produce numerical software faster than human experts can review it, raising serious concerns about usability and reliability. These and other AI tools are already transforming mathematics and software, and they will soon transform mathematical software. These concerns motivated us to assess AI-generated numerical linear algebra (N... (Local summary fallback used.)"
---

AI coding agents can now produce numerical software faster than human experts can review it, raising serious concerns about usability and reliability. These and other AI tools are already transforming mathematics and software, and they will soon transform mathematical software. These concerns motivated us to assess AI-generated numerical linear algebra (NLA) kernels, which we did through an audit of a recent public GPU QR competition. All five leading kernels passed the competition's accuracy tests, and the winning kernel achieved a 107-fold speedup over the competition's baseline, which calls NVIDIA's QR routine. Yet each failed at least once on new inputs, even those from the competition's generator, under the same checker, while the baseline passed them all. In light of this, we want to develop reusable formalizations of numerical analysis methods, which remain sparsely represented in existing formal libraries. We describe VSCL, our Lean library of mathematical foundations for numerical computing. We also propose VERNA to connect these tasks by using formalized results to guide kernel assessment against explicit specifications. Drawing on Turing's work on rounding-error analysis and program checking, we discuss design principles for developing trustworthy numerical software when direct human checking is impractical.
