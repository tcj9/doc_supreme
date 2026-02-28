---
title: Search
description: YouTube Data API v3 Search endpoint reference
---

# Search Resource

The `search` endpoint returns results matching specified query parameters.

## `search.list`

Returns a collection of search results.

**Endpoint:** `GET https://www.googleapis.com/youtube/v3/search`

**Quota cost:** 100 units per request

> **Note:** The `search.list` method costs 100 quota units. Use it sparingly and implement caching.

## Parameters

### Required

| Parameter | Type | Description |
|-----------|------|-------------|
| `part` | string | Must include `snippet` |

### Optional Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `q` | string | Search query |
| `channelId` | string | Restrict results to a specific channel |
| `type` | string | `channel`, `playlist`, `video` (default: all) |
| `maxResults` | integer | Results per page (0-50, default 5) |
| `order` | string | `date`, `rating`, `relevance` (default), `title`, `viewCount` |
| `pageToken` | string | Pagination token |
| `publishedAfter` | datetime | ISO 8601 datetime |
| `publishedBefore` | datetime | ISO 8601 datetime |
| `regionCode` | string | ISO 3166-1 alpha-2 country code |
| `safeSearch` | string | `moderate` (default), `none`, `strict` |
| `videoDuration` | string | `any`, `long` (>20min), `medium` (4-20min), `short` (<4min) |
| `videoEmbeddable` | string | `any`, `true` |
| `eventType` | string | `completed`, `live`, or `upcoming` |

## Examples

### Basic Search

```bash
GET https://www.googleapis.com/youtube/v3/search?part=snippet&q=nextjs+tutorial&type=video&maxResults=10&key=YOUR_API_KEY
```

### Search with Filters

```bash
GET https://www.googleapis.com/youtube/v3/search?part=snippet&q=react+tutorial&type=video&videoDuration=long&order=viewCount&maxResults=10&key=YOUR_API_KEY
```

### Search within a Channel

```bash
GET https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCW5YeuERMmlnqo4oq8vwUpg&q=hooks&type=video&key=YOUR_API_KEY
```

## Response

```json
{
  "kind": "youtube#searchListResponse",
  "nextPageToken": "CAUQAA",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "abc123"
      },
      "snippet": {
        "publishedAt": "2024-01-15T12:00:00Z",
        "channelId": "UCW5YeuERMmlnqo4oq8vwUpg",
        "title": "Next.js 14 Full Tutorial",
        "description": "Learn Next.js 14 App Router from scratch...",
        "channelTitle": "Traversy Media"
      }
    }
  ]
}
```

## JavaScript Implementation

```javascript
async function searchYouTube({ query, maxResults = 10, type = 'video', order = 'relevance' }) {
  const params = new URLSearchParams({
    part: 'snippet',
    q: query,
    type,
    order,
    maxResults: maxResults.toString(),
    key: process.env.YOUTUBE_API_KEY,
  })

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?${params}`
  )

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error.message)
  }

  return response.json()
}

const results = await searchYouTube({
  query: 'typescript tutorial',
  maxResults: 20,
  order: 'viewCount',
})
```

## Rate Limiting and Caching

Since search costs 100 quota units, implement caching:

```javascript
const cache = new Map()
const CACHE_TTL = 1000 * 60 * 10 // 10 minutes

async function cachedSearch(query) {
  const cacheKey = `search:${query}`
  const cached = cache.get(cacheKey)

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data
  }

  const data = await searchYouTube({ query })
  cache.set(cacheKey, { data, timestamp: Date.now() })
  return data
}
```
