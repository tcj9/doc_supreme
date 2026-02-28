---
title: Hooks
description: Complete guide to React 19 hooks
---

# React Hooks

Hooks let you use state and other React features in function components. React 19 includes all classic hooks plus exciting new additions.

## useState

`useState` declares a state variable:

```tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  )
}
```

### With TypeScript

```tsx
const [user, setUser] = useState<User | null>(null)
const [items, setItems] = useState<string[]>([])
```

### Lazy Initialization

```tsx
const [state, setState] = useState(() => {
  // Only computed once on mount
  return expensiveComputation()
})
```

## useEffect

`useEffect` lets you synchronize with external systems:

```tsx
import { useState, useEffect } from 'react'

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (!cancelled) setUser(data)
      })

    return () => {
      cancelled = true // Cleanup on unmount
    }
  }, [userId]) // Re-run when userId changes

  return user ? <div>{user.name}</div> : <div>Loading...</div>
}
```

### Effect Rules

- Run after every render (no deps array)
- Run once on mount (empty deps `[]`)
- Run when deps change (with deps `[a, b]`)
- Always return a cleanup function if needed

## useContext

`useContext` subscribes to a React context:

```tsx
import { createContext, useContext, useState } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemedButton() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('Must be inside ThemeProvider')

  return (
    <button
      style={{ background: ctx.theme === 'dark' ? '#333' : '#fff' }}
      onClick={ctx.toggle}
    >
      Toggle Theme
    </button>
  )
}
```

## useRef

`useRef` holds a mutable reference that does not trigger re-renders:

```tsx
import { useRef, useEffect } from 'react'

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play()
  }, [])

  return <video ref={videoRef} src={src} />
}
```

### Storing Mutable Values

```tsx
function Timer() {
  const intervalRef = useRef<number | null>(null)

  function start() {
    intervalRef.current = window.setInterval(() => {
      console.log('tick')
    }, 1000)
  }

  function stop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}
```

## useMemo

`useMemo` caches the result of a calculation:

```tsx
import { useMemo } from 'react'

function FilteredList({ items, filter }: { items: string[]; filter: string }) {
  const filtered = useMemo(
    () => items.filter(item => item.includes(filter)),
    [items, filter] // Only recompute when these change
  )

  return (
    <ul>
      {filtered.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}
```

> **Note:** With React Compiler, you often do not need manual `useMemo`.

## useCallback

`useCallback` caches a function between re-renders:

```tsx
import { useCallback, useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState<string[]>([])

  const addTodo = useCallback((text: string) => {
    setTodos(prev => [...prev, text])
  }, []) // Stable reference

  return <AddTodoForm onAdd={addTodo} />
}
```

## useReducer

`useReducer` manages complex state with a reducer function:

```tsx
import { useReducer } from 'react'

type State = { count: number; step: number }
type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setStep'; step: number }
  | { type: 'reset' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step }
    case 'decrement':
      return { ...state, count: state.count - state.step }
    case 'setStep':
      return { ...state, step: action.step }
    case 'reset':
      return { count: 0, step: 1 }
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <input
        type="number"
        value={state.step}
        onChange={e => dispatch({ type: 'setStep', step: Number(e.target.value) })}
      />
    </div>
  )
}
```

## New in React 19: `use()`

The `use()` hook reads the value of a resource (Promise or Context):

```tsx
import { use, Suspense } from 'react'

// Reading a Promise
function UserName({ userPromise }: { userPromise: Promise<User> }) {
  const user = use(userPromise) // Suspends until resolved
  return <span>{user.name}</span>
}

// Using with Suspense
function App() {
  const userPromise = fetchUser(1)
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <UserName userPromise={userPromise} />
    </Suspense>
  )
}
```

## New in React 19: `useFormStatus`

`useFormStatus` gives you the status of the parent form:

```tsx
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  )
}
```

## New in React 19: `useActionState`

`useActionState` manages action state:

```tsx
import { useActionState } from 'react'

async function submitForm(prevState: State, formData: FormData): Promise<State> {
  const email = formData.get('email') as string
  if (!email.includes('@')) {
    return { error: 'Invalid email address' }
  }
  await saveEmail(email)
  return { success: true }
}

function SignupForm() {
  const [state, action, isPending] = useActionState(submitForm, { error: null })

  return (
    <form action={action}>
      {state.error && <p className="error">{state.error}</p>}
      <input name="email" type="email" />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  )
}
```

## New in React 19: `useOptimistic`

`useOptimistic` shows optimistic state while an async action is in progress:

```tsx
import { useOptimistic } from 'react'

function MessageList({ messages }: { messages: Message[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newText: string) => [
      ...state,
      { id: 'temp', text: newText, sending: true }
    ]
  )

  async function sendMessage(formData: FormData) {
    const text = formData.get('text') as string
    addOptimisticMessage(text)
    await saveToDB(text)
  }

  return (
    <div>
      {optimisticMessages.map(msg => (
        <div key={msg.id} style={{ opacity: msg.sending ? 0.5 : 1 }}>
          {msg.text}
        </div>
      ))}
      <form action={sendMessage}>
        <input name="text" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
```

## Hooks Rules

1. **Only call Hooks at the top level** — not inside loops, conditions, or nested functions
2. **Only call Hooks from React functions** — function components or custom hooks
3. **Custom hooks must start with `use`** — e.g., `useDebounce`, `useFetch`

The exception to rule 1 is the `use()` hook, which can be called conditionally.
