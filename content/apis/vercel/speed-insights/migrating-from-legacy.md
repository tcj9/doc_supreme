---
title: Migrating to the latest Speed Insights package
product: vercel
url: /docs/speed-insights/migrating-from-legacy
type: reference
prerequisites:
  - /docs/speed-insights
related:
  - /docs/speed-insights/package
  - /docs/speed-insights/api
  - /docs/speed-insights/metrics
summary: Understand the transition from Speed Insights to the new version – know the differences and how they affect you.
---

# Migrating to the latest Speed Insights package

> **🔒 Permissions Required**: Speed Insights

The new Speed Insights brings a few changes to the UI and the ingestion mechanism. You find a list of changes below and understand how they affect you.

## Changes to the integration

### New package: `@vercel/speed-insights`

Vercel introduced a **package** titled [`@vercel/speed-insights`](/docs/speed-insights/package) as an iteration
from the automatic install process. This shift is intended to offer more flexibility
and broader framework support.

By migrating to the new Speed Insights package, you benefit from the following features:

- **First-Party Ingestion**: Data is processed directly through your own domain, eliminating the third-party domain lookup
- **Enhanced Route Support**: Dynamic route segment is supported in more frameworks such as Next.js `app` router, Nuxt, Remix, and SvelteKit
- **Advanced Customization**: The updated package provides tools for more granular control, such as the ability to [intercept requests](/docs/speed-insights/package#beforesend) and [set sample rates](/docs/speed-insights/package#samplerate) on a project basis

You should become familiar with the `@vercel/speed-insights` [configuration options](/docs/speed-insights/package) and upgrade. However, the [intake API](/docs/speed-insights/api) will still be usable for some time.

### Sample rate

Sample rate configurations have been relocated from team settings to the [@vercel/speed-insights package](/docs/speed-insights/package), providing the capability to [set specific rates](/docs/speed-insights/package#samplerate) for each project.

### First-Party intake

Data ingestion now utilizes a first-party intake during your deployment. Here's how it works:

- The script is now sourced from your own domain at this endpoint: `https://yourdomain.com/_vercel/speed-insights/script.js`.
- Data points are also ingested through your own domain at this endpoint: `https://yourdomain.com/_vercel/speed-insights/vitals`.

With this change, the script becomes less affected by content blockers and performs fewer DNS lookups, resulting in a faster and more reliable experience. It is no longer required to define a [Content Security
Policy](https://developer.mozilla.org/docs/Web/HTTP/CSP) to allow the third-party script.

## Changes to the UI

### Emphasis on P75

Our revamped dashboard emphasizes the 75th percentile, a [recommendation](https://web.dev/articles/defining-core-web-vitals-thresholds#choice_of_percentile) from the Core Web Vitals team.

In other terms, the **score is now determined by the experience of the fastest 75% of your users**.

This percentile was chosen because it represents the performance experienced by the majority of visits and is not significantly affected by outliers.

For deeper insights, it is now possible to view multiple percentiles at once, without affecting the score.

### Updated Scoring Criteria

Speed Insights now uses scoring criteria that are inspired by the improvements found in Lighthouse 10. Below, you'll find a comprehensive comparison of the metrics, thresholds, and their respective weights as per our updated system and its previous iteration.

> **💡 Note:** All previous (prior to the new Speed Insights) and new data points use this
> updated scoring criteria.

**Comparison table between the new and old scoring criteria**

| Metric | Old Thresholds                             | **New Thresholds** | Old Weights    | **New Weights**    |
| ------ | ------------------------------------------ | ------------------ | -------------- | ------------------ |
| RES    | 90~50                                      | 90~50              | Not applicable | Not applicable     |
| FCP    | 0.9~1.6s (Desktop)  2.3~4s (Mobile) | **1.8~3s**         | 20%            | **15%**            |
| LCP    | 1.2~2.4s (Desktop)  2.5~4s (Mobile) | **2.5~4s**         | 35%            | **30%**            |
| INP    | Not applicable                             | **200~500ms**      | -              | **30%**            |
| FID    | 100~300ms                                  | 100~300ms          | 30%            | **Not applicable** |
| CLS    | 0.1~0.25                                   | 0.1~0.25           | 15%            | **25%**            |
| TTFB   | Not applicable                             | 0.8~1.8s           | -              | -                  |

*Changes are highlighted in bold.*

The **CLS** metric is given more weight in the new version,
and the **FID** metric is replaced with **INP**. The **FCP**
and **LCP** metrics now have the same thresholds for both desktop and mobile.

### New Metric: TTFB

We've introduced a new metric, [**Time to First Byte** (TTFB)](/docs/speed-insights/metrics#time-to-first-byte-ttfb), which measures the time taken by the server to respond to the first request. This metric is not included in the score, but it can offer more insights about performance.


---

[View full sitemap](/docs/sitemap)
