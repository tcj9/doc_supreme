---
title: Getting Started
description: Install and set up React 19.2
---

# Getting Started with React 19.2

This guide walks you through setting up a new React 19.2 project from scratch.

## Prerequisites

- Node.js 18.0 or later
- npm 9+ or yarn 4+ or pnpm 8+

## Creating a New Project

### With Vite (Recommended)

Vite is the recommended build tool for new React projects:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
```

### With Next.js

For full-stack applications with server-side rendering:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

### Manual Setup

Install React and ReactDOM:

```bash
npm install react@19 react-dom@19
npm install -D @types/react @types/react-dom typescript
```

## Project Structure

A typical React 19 project with Vite looks like this:

```
my-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Your First Component

Create a simple React component:

```tsx
// src/components/Hello.tsx
interface HelloProps {
  name: string
}

export default function Hello({ name }: HelloProps) {
  return (
    <div className="hello">
      <h1>Hello, {name}!</h1>
      <p>Welcome to React 19.2</p>
    </div>
  )
}
```

Use it in your app:

```tsx
// src/App.tsx
import Hello from './components/Hello'

export default function App() {
  return (
    <main>
      <Hello name="World" />
    </main>
  )
}
```

## Entry Point

```tsx
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

## TypeScript Configuration

For React 19, use this `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Vite Configuration

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## Enabling the React Compiler

Install the compiler babel plugin:

```bash
npm install -D babel-plugin-react-compiler
```

Configure in Vite:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
})
```

## Dev Tools

Install React DevTools browser extension for Chrome or Firefox to inspect component trees, props, state, and performance.

## Next Steps

- Learn about [Hooks](./hooks) for state and side effects
- Explore [Components](./components) patterns
- Understand [Server Components](./server-components)
- Master [Actions](./actions) for data mutations
