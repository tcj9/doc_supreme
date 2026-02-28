---
title: Playlists
description: YouTube Data API v3 Playlists and PlaylistItems resources
---

# Playlists Resource

The `playlists` resource represents a YouTube playlist.

## `playlists.list`

Returns a collection of playlists.

**Endpoint:** `GET https://www.googleapis.com/youtube/v3/playlists`

**Quota cost:** 1 unit

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `part` | string | Required. `id`, `snippet`, `contentDetails`, `status` |
| `channelId` | string | Returns playlists for specified channel |
| `id` | string | Comma-separated playlist IDs |
| `mine` | boolean | Returns authenticated user's playlists |
| `maxResults` | integer | Results per page (0-50, default 5) |
| `pageToken` | string | Pagination token |

### Example: Get channel playlists

```bash
GET https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=UCW5YeuERMmlnqo4oq8vwUpg&maxResults=20&key=YOUR_API_KEY
```

### Response

```json
{
  "kind": "youtube#playlistListResponse",
  "nextPageToken": "CAUQAA",
  "pageInfo": { "totalResults": 45, "resultsPerPage": 5 },
  "items": [
    {
      "kind": "youtube#playlist",
      "id": "PLillGF-RfqbY3c2r0htFX5sLmimuyBXqJ",
      "snippet": {
        "title": "JavaScript Tutorials",
        "description": "A collection of JavaScript tutorials",
        "channelTitle": "Traversy Media"
      },
      "contentDetails": { "itemCount": 42 }
    }
  ]
}
```

## `playlists.insert`

Creates a playlist. **Requires OAuth 2.0.**

**Quota cost:** 50 units

```javascript
const response = await youtube.playlists.insert({
  part: ['snippet', 'status'],
  requestBody: {
    snippet: {
      title: 'My Favorites 2024',
      description: 'Videos I love from 2024',
    },
    status: {
      privacyStatus: 'public',
    },
  },
})
console.log('Created playlist:', response.data.id)
```

## `playlists.delete`

Deletes a playlist. **Requires OAuth 2.0.**

```javascript
await youtube.playlists.delete({ id: 'PLAYLIST_ID' })
```

---

# PlaylistItems Resource

## `playlistItems.list`

Returns a collection of playlist items.

**Endpoint:** `GET https://www.googleapis.com/youtube/v3/playlistItems`

**Quota cost:** 1 unit

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `part` | string | Required. `id`, `snippet`, `contentDetails`, `status` |
| `playlistId` | string | Required. The playlist ID |
| `maxResults` | integer | Results per page (0-50, default 5) |
| `pageToken` | string | Pagination token |
| `videoId` | string | Filter by specific video ID |

### JavaScript: Get All Items

```javascript
async function getAllPlaylistItems(playlistId) {
  const items = []
  let pageToken = null

  do {
    const params = new URLSearchParams({
      part: 'snippet,contentDetails',
      playlistId,
      maxResults: '50',
      key: process.env.YOUTUBE_API_KEY,
      ...(pageToken && { pageToken }),
    })

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?${params}`
    )
    const data = await response.json()

    items.push(...data.items)
    pageToken = data.nextPageToken ?? null
  } while (pageToken)

  return items
}
```

## `playlistItems.insert`

Adds a video to a playlist. **Requires OAuth 2.0.**

**Quota cost:** 50 units

```javascript
await youtube.playlistItems.insert({
  part: ['snippet'],
  requestBody: {
    snippet: {
      playlistId: 'PLAYLIST_ID',
      resourceId: {
        kind: 'youtube#video',
        videoId: 'VIDEO_ID',
      },
    },
  },
})
```

## `playlistItems.delete`

Removes an item from a playlist. **Requires OAuth 2.0.**

**Quota cost:** 50 units

```javascript
await youtube.playlistItems.delete({ id: 'PLAYLIST_ITEM_ID' })
```
