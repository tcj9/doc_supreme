---
title: YouTube Data API v3
description: Overview of the YouTube Data API v3
---

# YouTube Data API v3

The YouTube Data API v3 lets you incorporate YouTube functionality into your own application. You can search for content, retrieve metadata about videos, channels, and playlists, manage subscriptions, and more.

## Overview

The YouTube Data API v3 provides access to YouTube data including videos, channels, playlists, and search results. You can use the API to:

- Search for YouTube videos, channels, and playlists
- Retrieve video metadata such as title, description, view count, and duration
- Manage user playlists and subscriptions
- Upload videos to YouTube on behalf of users
- Retrieve live streaming information

## Base URL

All API requests are made to:

```
https://www.googleapis.com/youtube/v3/
```

## Available Resources

| Resource | Description |
|----------|-------------|
| `videos` | Represents a YouTube video |
| `channels` | Represents a YouTube channel |
| `playlists` | Represents a YouTube playlist |
| `playlistItems` | Represents an item in a playlist |
| `search` | Search across videos, channels, and playlists |
| `comments` | Represents a comment on a video or channel |
| `subscriptions` | Represents a channel subscription |
| `captions` | Video captions/subtitles |
| `liveBroadcasts` | YouTube Live broadcasts |

## Quotas

The YouTube Data API uses a quota system to ensure fair use:

| Operation | Quota Cost |
|-----------|-----------|
| Simple read (`list`) | 1 unit |
| `search.list` | 100 units |
| Video upload | 1,600 units |
| Write operation | 50 units |

**Default daily quota:** 10,000 units per project

### Quota Tips

- Use `fields` parameter to request only the data you need
- Implement caching to avoid redundant API calls
- Use `pageToken` for pagination instead of repeated requests

## Response Format

All responses are in JSON format:

```json
{
  "kind": "youtube#videoListResponse",
  "etag": "some_etag_value",
  "nextPageToken": "CAUQAA",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#video",
      "etag": "video_etag",
      "id": "dQw4w9WgXcQ",
      "snippet": {
        "publishedAt": "2009-10-25T06:57:33Z",
        "channelId": "UCuAXFkgsw1L7xaCfnd5JJOw",
        "title": "Video Title",
        "description": "Video description"
      }
    }
  ]
}
```

## Error Responses

```json
{
  "error": {
    "code": 403,
    "message": "The caller does not have permission",
    "errors": [
      {
        "message": "The caller does not have permission",
        "domain": "youtube.quota",
        "reason": "forbidden"
      }
    ]
  }
}
```

### Common Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad Request — Invalid parameter |
| 401 | Unauthorized — Invalid credentials |
| 403 | Forbidden — Quota exceeded or insufficient permissions |
| 404 | Not Found — Resource does not exist |
| 429 | Too Many Requests — Rate limit exceeded |
| 500 | Internal Server Error |

## Getting Started

1. Create a project in [Google Cloud Console](https://console.cloud.google.com)
2. Enable the YouTube Data API v3
3. Create credentials (API key or OAuth 2.0 client)
4. Make your first API call

See the [Authentication guide](./authentication) for detailed setup instructions.
