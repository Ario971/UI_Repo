---
title: "Show HN: OpenTaxRate – open-source US sales tax rates by street address"
source: "Hacker News Show HN"
url: "https://github.com/equated-org/opentaxrate"
date: "2026-10-28"
topic: "AI dev tools"
type: "article"
read: false
summary: "I built this because I tried many sales tax APIs and the problems were: a) the rates were a black box with no source attached b) lookups resolved by ZIP code. ZIP codes are postal routes, not tax jurisdictions. Stripe's Tax team wrote a good post on this [1]: two houses in Drexel, MO share a city, a ZIP, and nearly a house number, but sit in different cou... (Local summary fallback used.)"
---

I built this because I tried many sales tax APIs and the problems were: a) the rates were a black box with no source attached b) lookups resolved by ZIP code. ZIP codes are postal routes, not tax jurisdictions. Stripe's Tax team wrote a good post on this [1]: two houses in Drexel, MO share a city, a ZIP, and nearly a house number, but sit in different counties with different rates. If your lookup key is the ZIP, you are wrong on those addresses, even when the rate table is accurate. OpenTaxRate resolves the street address instead: - SST member states (24): the quarterly rate + boundary files, street ranges and ZIP+4, not just the rate tables - Non-SST states: a custom adapter for each state, using its DOR's own published tables and boundary files (TX Comptroller, FL DR-15DSS, ALDOR, IDOR, NY Pub 718, California via CDTFA's lookup, etc) - Census TIGER for geometry I tried with multiple open source geocoders you can self-host: Nominatim, Photon and Pelias, as well as proprietary ones (HERE, Geocodio, Mapbox, Google). Proprietary ones have higher accuracy, ~99.3% correct vs. 97.1% with just open source. For comparison: Avalara AvaTax 99.6%, TaxJar 98.2%. Public benchmark set are in the repo and at opentaxrate.com/benchmarks. Rates are just one part of sales tax, but also there's a ton of work in maintaining it as rules change. It doesn't handle exemptions, holidays, and caps. It returns the rate, plus the state's own location and jurisdiction codes for the address, resolved to the address, with its official source attached. MIT licensed, you can self-host with Postgres + PostGIS. [1]: https://stripe.dev/blog/how-we-built-it-jurisdiction-resolut...
