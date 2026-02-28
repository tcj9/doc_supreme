---
title: Server Components
description: React Server Components and Suspense in React 19
---

# React Server Components

React Server Components (RSC) allow you to render components on the server, sending only HTML to the client for those components.

## Overview

Server Components are the default in frameworks like Next.js 14+. They run **only on the server** and can:

- Access backend resources directly (databases, filesystems, APIs)
- Keep sensitive data off the client
- Reduce JavaScript bundle size significantly
- Stream HTML to the client

```tsx
// This component runs on the server only
async function UserList() {
  const users = await db.query('SELECT * FROM users LIMIT 100')

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

## Server vs Client Components

| Feature | Server Component | Client Component |
|---------|-----------------|-----------------|
| Runs on | Server only | Client (browser) |
| `useState` / `useEffect` | No | Yes |
| Event handlers (`onClick`) | No | Yes |
| Browser APIs | No | Yes |
| Database/filesystem access | Yes | No |
| Async/await in component | Yes | No |
| Reduces bundle size | Yes | No |

## Marking Client Components

Add `'use client'` at the top of a file to make it a Client Component:

```tsx
'use client'

import { useState } from 'react'

export default function LikeButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false)

  async function handleLike() {
    setLiked(!liked)
    await fetch(`/api/posts/${postId}/like`, { method: 'POST' })
  }

  return (
    <button onClick={handleLike}>
      {liked ? 'Liked' : 'Like'}
    </button>
  )
}
```

## Suspense and Streaming

Suspense lets you show a loading state while a component is fetching data:

```tsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <Suspense fallback={<PostListSkeleton />}>
          <PostList />
        </Suspense>
      </div>
      <aside>
        <Suspense fallback={<div>Loading recommendations...</div>}>
          <RecommendedPosts />
        </Suspense>
      </aside>
    </div>
  )
}
```

## Data Fetching Patterns

### Parallel Data Fetching

Avoid waterfalls by fetching in parallel:

```tsx
// Sequential (slow - waterfall)
async function Page() {
  const user = await getUser()
  const posts = await getPosts(user.id)
  return <div>...</div>
}

// Parallel (fast)
async function Page({ userId }: { userId: string }) {
  const [user, posts] = await Promise.all([
    getUser(userId),
    getPosts(userId),
  ])
  return <div>...</div>
}
```

## Server Actions

Server Actions allow server-side mutations directly from Server Components:

```tsx
export default function TodoPage() {
  async function addTodo(formData: FormData) {
    'use server'
    const text = formData.get('text') as string
    await db.todos.insert({ text, done: false })
    revalidatePath('/todos')
  }

  return (
    <form action={addTodo}>
      <input name="text" placeholder="Add todo..." />
      <button type="submit">Add</button>
    </form>
  )
}
```
