---
title: React 19.2
description: Overview of React 19.2 and what's new
---

# React 19.2

React 19.2 is the latest stable release of React, bringing significant improvements to performance, developer experience, and new primitives for building modern web applications.

## What's New in React 19

React 19 introduces a complete overhaul of how React interacts with the DOM, server rendering, and state management. Here are the headline features:

### React Compiler
The new React Compiler (previously known as React Forget) automatically memoizes your components and hooks, eliminating the need for manual `useMemo`, `useCallback`, and `React.memo` in most cases. The compiler understands React's semantics and produces highly optimized code.

### Actions
React 19 introduces **Actions** — a new way to handle async mutations and form submissions. Actions integrate with Suspense and error boundaries out of the box, and come with new hooks like `useFormStatus`, `useFormState`, and `useOptimistic`.

### Server Components (Stable)
React Server Components are now stable in React 19. They allow you to render components on the server, reducing the JavaScript sent to the client and enabling direct access to backend resources.

### Document Metadata
React 19 supports rendering `<title>`, `<meta>`, and `<link>` tags directly in your components, and React will automatically hoist them to the `<head>`.

```jsx
function BlogPost({ title }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content="My blog post" />
      <article>...</article>
    </>
  )
}
```

### Asset Loading
New APIs for preloading and loading resources: `preload`, `preinit`, `prefetchDNS`, and `preconnect`.

### `use()` Hook
The new `use()` hook lets you read resources (Promises and Contexts) inside render:

```jsx
import { use } from 'react'

function Component({ promise }) {
  const data = use(promise) // suspends until resolved
  return <div>{data}</div>
}
```

### `ref` as a Prop
Function components can now accept `ref` directly as a prop — no more `forwardRef`:

```jsx
// Before React 19
const Input = forwardRef((props, ref) => <input ref={ref} {...props} />)

// React 19
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />
}
```

### Improved Error Reporting
React 19 significantly improves error messages, providing cleaner stack traces and better descriptions for hydration errors.

## Breaking Changes

- Removed deprecated `ReactDOM.render` (use `createRoot`)
- Removed deprecated `ReactDOM.hydrate` (use `hydrateRoot`)
- Removed `defaultProps` on function components
- `ref` on function components is now a prop, not a separate argument
- Context reads are now via `use(Context)` pattern

## Version History

| Version | Date | Highlights |
|---------|------|-----------|
| 19.2.0 | 2025 | Stability improvements, bug fixes |
| 19.1.0 | 2025 | Performance improvements |
| 19.0.0 | 2024 | Actions, Server Components stable, new hooks |
| 18.3.0 | 2024 | Deprecation warnings for v19 changes |

## Resources

- [Official React Blog](https://react.dev/blog)
- [React 19 Migration Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [React Compiler](https://react.dev/learn/react-compiler)
