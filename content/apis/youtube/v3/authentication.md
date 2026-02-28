---
title: Authentication
description: OAuth 2.0 and API key authentication for YouTube Data API v3
---

# Authentication

The YouTube Data API v3 supports two types of credentials: API keys for public data and OAuth 2.0 for user data.

## API Keys

Use API keys to access publicly available data without user authorization.

### When to Use API Keys

- Searching for public videos
- Retrieving public video/channel metadata
- Listing public playlists

### Creating an API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select or create a project
3. Navigate to **APIs and Services > Credentials**
4. Click **Create Credentials > API key**
5. Restrict the key to the YouTube Data API

### Using an API Key

```bash
curl "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=dQw4w9WgXcQ&key=YOUR_API_KEY"
```

In JavaScript:

```javascript
const API_KEY = process.env.YOUTUBE_API_KEY

const response = await fetch(
  `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=dQw4w9WgXcQ&key=${API_KEY}`
)
const data = await response.json()
console.log(data.items[0].snippet.title)
```

## OAuth 2.0

Use OAuth 2.0 when your application needs to access private user data or perform actions on behalf of a user.

### When to Use OAuth 2.0

- Uploading videos
- Managing user playlists
- Accessing private videos
- Managing channel settings

### OAuth Scopes

| Scope | Description |
|-------|-------------|
| `https://www.googleapis.com/auth/youtube` | Full access |
| `https://www.googleapis.com/auth/youtube.readonly` | Read-only access |
| `https://www.googleapis.com/auth/youtube.upload` | Upload videos |
| `https://www.googleapis.com/auth/youtube.force-ssl` | HTTPS only, manage videos/comments |

### OAuth 2.0 Flow

#### Step 1: Create OAuth 2.0 Credentials

1. In Google Cloud Console, go to **APIs and Services > Credentials**
2. Click **Create Credentials > OAuth client ID**
3. Choose application type (Web, Desktop, etc.)
4. Add authorized redirect URIs

#### Step 2: Authorization URL

```
https://accounts.google.com/o/oauth2/v2/auth?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_REDIRECT_URI&
  response_type=code&
  scope=https://www.googleapis.com/auth/youtube.readonly&
  access_type=offline
```

#### Step 3: Exchange Code for Tokens

```javascript
async function exchangeCodeForTokens(code) {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: YOUR_CLIENT_ID,
      client_secret: YOUR_CLIENT_SECRET,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: YOUR_REDIRECT_URI,
    }),
  })

  return response.json()
}
```

#### Step 4: Make Authenticated Requests

```javascript
async function getMyChannel(accessToken) {
  const response = await fetch(
    'https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true',
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  )
  return response.json()
}
```

#### Step 5: Refresh Access Tokens

```javascript
async function refreshAccessToken(refreshToken) {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: YOUR_CLIENT_ID,
      client_secret: YOUR_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  })

  const data = await response.json()
  return data.access_token
}
```

## Using the Google API Client Library

```bash
npm install googleapis
```

```javascript
import { google } from 'googleapis'

const oauth2Client = new google.auth.OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URI
)

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/youtube.readonly'],
})

const { tokens } = await oauth2Client.getToken(authCode)
oauth2Client.setCredentials(tokens)

const youtube = google.youtube({ version: 'v3', auth: oauth2Client })
const response = await youtube.channels.list({ part: ['snippet'], mine: true })
```

## Security Best Practices

- **Never expose API keys or OAuth secrets** in client-side code
- Store secrets in environment variables
- Restrict API keys to specific APIs and HTTP referrers
- Request only the OAuth scopes your application actually needs
- Use HTTPS for all redirect URIs
