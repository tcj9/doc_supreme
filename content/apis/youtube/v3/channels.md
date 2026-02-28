---
title: Channels
description: YouTube Data API v3 Channels resource reference
---

# Channels Resource

The `channels` resource represents a YouTube channel.

## `channels.list`

Returns a collection of channel resources matching the request criteria.

**Endpoint:** `GET https://www.googleapis.com/youtube/v3/channels`

**Quota cost:** 1 unit

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `part` | string | Required. Parts: `id`, `snippet`, `contentDetails`, `statistics`, `brandingSettings` |
| `id` | string | Comma-separated channel IDs |
| `mine` | boolean | Returns authenticated user's channel |
| `forHandle` | string | Returns channel with given handle (e.g. `@mkbhd`) |
| `maxResults` | integer | Max results per page (1-50) |
| `pageToken` | string | Pagination token |

### Example: Get channel by handle

```bash
GET https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forHandle=@mkbhd&key=YOUR_API_KEY
```

### Response

```json
{
  "kind": "youtube#channelListResponse",
  "items": [
    {
      "kind": "youtube#channel",
      "id": "UCVHFbw7woebKtP8YZ5LO25Q",
      "snippet": {
        "title": "Marques Brownlee",
        "description": "MKBHD Quality Tech Videos!",
        "customUrl": "@mkbhd",
        "publishedAt": "2009-03-07T00:00:00Z",
        "country": "US"
      },
      "statistics": {
        "viewCount": "4000000000",
        "subscriberCount": "18000000",
        "videoCount": "1500"
      }
    }
  ]
}
```

### JavaScript Example

```javascript
async function getChannelInfo(channelHandle) {
  const params = new URLSearchParams({
    part: 'snippet,statistics,contentDetails',
    forHandle: channelHandle,
    key: process.env.YOUTUBE_API_KEY,
  })

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?${params}`
  )

  const data = await response.json()
  return data.items?.[0] ?? null
}

async function getMyChannel(accessToken) {
  const params = new URLSearchParams({
    part: 'snippet,statistics',
    mine: 'true',
  })

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?${params}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )

  const data = await response.json()
  return data.items?.[0] ?? null
}
```

## `channels.update`

Updates a channel's metadata. **Requires OAuth 2.0.**

**Quota cost:** 50 units

```javascript
await youtube.channels.update({
  part: ['brandingSettings'],
  requestBody: {
    id: 'YOUR_CHANNEL_ID',
    brandingSettings: {
      channel: {
        title: 'My Updated Channel',
        description: 'Updated channel description',
        keywords: 'tech, tutorials, coding',
      }
    }
  }
})
```

## Subscriptions

### Subscribe to a channel

```javascript
await youtube.subscriptions.insert({
  part: ['snippet'],
  requestBody: {
    snippet: {
      resourceId: {
        kind: 'youtube#channel',
        channelId: 'CHANNEL_ID'
      }
    }
  }
})
```

### Check if user subscribes to a channel

```javascript
async function isSubscribed(channelId, accessToken) {
  const params = new URLSearchParams({
    part: 'id',
    forChannelId: channelId,
    mine: 'true',
  })

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/subscriptions?${params}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )

  const data = await response.json()
  return data.pageInfo.totalResults > 0
}
```
