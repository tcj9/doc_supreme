---
title: Actions
description: React 19 Actions for async mutations and form handling
---

# React 19 Actions

Actions are a new paradigm in React 19 for handling asynchronous mutations, form submissions, and optimistic updates.

## What are Actions?

In React 19, any function that uses an async transition is called an **Action**. Actions handle:

- Pending states automatically
- Error handling with error boundaries
- Optimistic updates
- Integration with forms via the `action` prop

```tsx
import { useTransition } from 'react'

function UpdateName() {
  const [isPending, startTransition] = useTransition()
  const [name, setName] = useState('')

  function updateName() {
    startTransition(async () => {
      await saveName(name)
    })
  }

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={updateName} disabled={isPending}>
        {isPending ? 'Saving...' : 'Save'}
      </button>
    </div>
  )
}
```

## Form Actions

React 19 extends the HTML `<form>` element to accept an `action` prop:

```tsx
async function createPost(formData: FormData) {
  'use server'
  const title = formData.get('title') as string
  const body = formData.get('body') as string

  await db.posts.create({ title, body })
  redirect('/posts')
}

export default function NewPostPage() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Post title" required />
      <textarea name="body" placeholder="Write your post..." required />
      <button type="submit">Publish</button>
    </form>
  )
}
```

## `useActionState`

`useActionState` manages the state of an action:

```tsx
import { useActionState } from 'react'

interface FormState {
  errors?: { email?: string; password?: string }
  success?: boolean
}

async function signupAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const errors: FormState['errors'] = {}
  if (!email.includes('@')) errors.email = 'Invalid email address'
  if (password.length < 8) errors.password = 'Password must be 8+ characters'

  if (Object.keys(errors).length > 0) {
    return { errors }
  }

  await createUser({ email, password })
  return { success: true }
}

export default function SignupForm() {
  const [state, action, isPending] = useActionState(signupAction, {})

  return (
    <form action={action}>
      <input name="email" type="email" />
      {state.errors?.email && <p>{state.errors.email}</p>}
      <input name="password" type="password" />
      {state.errors?.password && <p>{state.errors.password}</p>}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Creating account...' : 'Sign Up'}
      </button>
    </form>
  )
}
```

## `useFormStatus`

`useFormStatus` must be used inside a component that is a child of a form:

```tsx
import { useFormStatus } from 'react-dom'

function SubmitButton({ label = 'Submit' }: { label?: string }) {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? `${label}...` : label}
    </button>
  )
}
```

## `useOptimistic`

`useOptimistic` provides an optimistic value during async operations:

```tsx
import { useOptimistic } from 'react'

function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useState(initialTodos)
  const [optimisticTodos, setOptimistic] = useOptimistic(
    todos,
    (state, newText: string) => [
      ...state,
      { id: 'temp-' + Date.now(), text: newText, completed: false, optimistic: true }
    ]
  )

  async function addTodo(formData: FormData) {
    const text = formData.get('text') as string
    setOptimistic(text)
    const newTodo = await createTodo(text)
    setTodos(prev => [...prev, newTodo])
  }

  return (
    <div>
      <ul>
        {optimisticTodos.map(todo => (
          <li key={todo.id} style={{ opacity: todo.optimistic ? 0.6 : 1 }}>
            {todo.text}
          </li>
        ))}
      </ul>
      <form action={addTodo}>
        <input name="text" placeholder="New todo..." required />
        <SubmitButton label="Add" />
      </form>
    </div>
  )
}
```

## Server Actions (Next.js)

In Next.js, Server Actions are async functions marked with `'use server'`:

```tsx
// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  const post = await db.posts.create({ title, content, createdAt: new Date() })

  revalidatePath('/posts')
  redirect(`/posts/${post.id}`)
}

export async function deletePost(id: string) {
  await db.posts.delete(id)
  revalidatePath('/posts')
}
```
