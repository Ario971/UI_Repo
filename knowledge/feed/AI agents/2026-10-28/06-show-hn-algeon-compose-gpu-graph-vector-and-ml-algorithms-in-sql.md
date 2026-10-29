---
title: "Show HN: Algeon – Compose GPU graph, vector, and ML algorithms in SQL"
source: "Hacker News Top + Show HN"
url: "https://github.com/algeon-dev/algeon"
date: "2026-10-28"
topic: "AI agents"
type: "article"
read: false
summary: "Algeon is a query engine built on Apache DataFusion that exposes NVIDIA's cuGraph, cuVS, and cuML as SQL table functions. It doesn't write its GPU kernels. Instead, it takes what NVIDIA already has and embeds it into DataFusion, so you can call those GPU operations on any arbitrary data, with filter/join/agg using plain SQL. And why would you want that? B... (Local summary fallback used.)"
---

Algeon is a query engine built on Apache DataFusion that exposes NVIDIA's cuGraph, cuVS, and cuML as SQL table functions. It doesn't write its GPU kernels. Instead, it takes what NVIDIA already has and embeds it into DataFusion, so you can call those GPU operations on any arbitrary data, with filter/join/agg using plain SQL. And why would you want that? Because GPU analytics used to require ad-hoc ETL pipelines, Python glue code, and imperative operation calls. That makes it hard to fit into a backend API service, and it isn't flexible enough for frequent exploratory iteration, adapting to different search conditions and data. Think of agents trying to answer complex questions on a datalake, which involves not only relational operations, but also graph/vector/ML analytics. They can now use declarative SQL to test their hypotheses and build the next query based on the previous response, making GPU OLAP an interactive service. Algeon can also be used as a library living inside your backend service, so your query response can be used directly within a single process, saving the transfer cost between the query engine and backend service. I started building Algeon last year. At first, it was cuDF Rust FFI bindings that aimed to bring GPU ETL pipelines into a single backend process, and it worked very well. Then I realized it might be possible to move GPU data science workloads into an OLAP query engine, since the NVIDIA RAPIDS ecosystem and DataFusion are mature. For use cases, architecture design, benchmarks, and more, feel free to check out, any feedback is welcome https://algeon.dev/
