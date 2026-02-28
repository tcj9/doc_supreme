---
title: Videos
description: YouTube Data API v3 Videos resource reference
---

# Videos Resource

The `videos` resource represents a YouTube video.

## Resource Representation

```json
{
  "kind": "youtube#video",
  "etag": "etag",
  "id": "string",
  "snippet": {
    "publishedAt": "datetime",
    "channelId": "string",
    "title": "string",
    "description": "string",
    "thumbnails": {
      "default": { "url": "string", "width": 120, "height": 90 },
      "medium": { "url": "string", "width": 320, "height": 180 },
      "high": { "url": "string", "width": 480, "height": 360 }
    },
    "channelTitle": "string",
    "tags": ["string"],
    "categoryId": "string"
  },
  "statistics": {
    "viewCount": "string",
    "likeCount": "string",
    "commentCount": "string"
  },
  "status": {
    "uploadStatus": "string",
    "privacyStatus": "string",
    "embeddable": true
  }
}
```

## Methods

### `videos.list`

Returns a list of videos matching the API request parameters.

**Endpoint:** `GET https://www.googleapis.com/youtube/v3/videos`

**Quota cost:** 1 unit

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `part` | string | Yes | Comma-separated list of parts: `id`, `snippet`, `contentDetails`, `statistics`, `status` |
| `id` | string | * | Comma-separated list of video IDs (max 50) |
| `chart` | string | * | `mostPopular` |
| `myRating` | string | * | `like` or `dislike` |
| `maxResults` | integer | | Max results (1-50, default 5) |
| `pageToken` | string | | Token for pagination |
| `regionCode` | string | | ISO 3166-1 alpha-2 country code |

#### Example: Get video by ID

```bash
GET https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=dQw4w9WgXcQ&key=YOUR_API_KEY
```

**Response:**

```json
{
  "kind": "youtube#videoListResponse",
  "items": [
    {
      "kind": "youtube#video",
      "id": "dQw4w9WgXcQ",
      "snippet": {
        "publishedAt": "2009-10-25T06:57:33Z",
        "title": "Rick Astley - Never Gonna Give You Up",
        "channelTitle": "Rick Astley"
      },
      "statistics": {
        "viewCount": "1400000000",
        "likeCount": "16000000",
        "commentCount": "2000000"
      }
    }
  ]
}
```

#### JavaScript Example

```javascript
async function getVideoDetails(videoId) {
  const params = new URLSearchParams({
    part: 'snippet,contentDetails,statistics',
    id: videoId,
    key: process.env.YOUTUBE_API_KEY,
  })

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?${params}`
  )

  if (!response.ok) {
    throw new Error(`YouTube API error: ${response.status}`)
  }

  const data = await response.json()
  return data.items[0] ?? null
}
```

### `videos.insert`

Uploads a video to YouTube. **Requires OAuth 2.0.**

**Quota cost:** 1,600 units

```javascript
const response = await youtube.videos.insert({
  part: ['snippet', 'status'],
  requestBody: {
    snippet: {
      title: 'My Awesome Video',
      description: 'Uploaded via the YouTube API',
      categoryId: '22',
    },
    status: {
      privacyStatus: 'public',
    },
  },
  media: {
    mimeType: 'video/mp4',
    body: fs.createReadStream('./video.mp4'),
  },
})
```

### `videos.update`

Updates a video's metadata. **Requires OAuth 2.0.**

**Quota cost:** 50 units

```javascript
await youtube.videos.update({
  part: ['snippet'],
  requestBody: {
    id: 'VIDEO_ID',
    snippet: {
      title: 'Updated Video Title',
      description: 'Updated description',
      categoryId: '22',
    },
  },
})
```

### `videos.delete`

Deletes a video. **Requires OAuth 2.0.**

**Quota cost:** 50 units

```javascript
await youtube.videos.delete({ id: 'VIDEO_ID' })
```

### `videos.rate`

Rates a video. **Requires OAuth 2.0.**

```javascript
await youtube.videos.rate({ id: 'dQw4w9WgXcQ', rating: 'like' })
```
