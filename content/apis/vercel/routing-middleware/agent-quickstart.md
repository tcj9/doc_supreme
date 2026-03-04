---
title: Agent Quickstart
product: vercel
url: /docs/routing-middleware/agent-quickstart
type: conceptual
prerequisites:
  - /docs/routing-middleware
related:
  - /docs/agent-resources/coding-agents/claude-code
  - /docs/agent-resources/coding-agents/cline
  - /docs/routing-middleware/getting-started
  - /docs/routing-middleware/api
  - /docs/functions/runtimes/edge
summary: Learn about agent quickstart on Vercel.
---

# Getting started with Routing Middleware using a coding agent

If you use a coding agent like
[Claude Code](/docs/agent-resources/coding-agents/claude-code),
[Cursor](https://cursor.com), or
[Cline](/docs/agent-resources/coding-agents/cline),
you can set up Routing Middleware by describing what you need instead of
writing the configuration by hand.

For step-by-step manual setup, see the [manual quickstart](/docs/routing-middleware/getting-started).

## Create middleware

Describe the behavior you want and let your agent create the middleware file.
Here are example prompts for common use cases:

### Redirects

```txt filename="Prompt"
Add routing middleware that redirects /old-blog to /blog and
/legacy-docs/* to /docs/*. Use permanent redirects. Only run
on non-static paths.
```

### Authentication

```txt filename="Prompt"
Add routing middleware that checks for an auth token cookie.
If the cookie is missing, redirect to /login. Skip the check
for /login, /api/auth/*, and static assets.
```

### Geolocation

```txt filename="Prompt"
Add routing middleware that reads the user's country from the
x-vercel-ip-country header and rewrites /pricing to
/pricing/eu for European countries or /pricing/us for the US.
```

> **⚠️ Warning:** **Next.js 16 users:** Next.js 16 renamed the middleware file from
> `middleware.ts` to `proxy.ts` and changed the function export from
> `middleware` to `proxy`. When using Next.js 16 or later, use `proxy.ts`
> instead of `middleware.ts`. The proxy function runs on Node.js only (Edge
> runtime is not supported). See the [Next.js proxy
> documentation](https://nextjs.org/docs/app/api-reference/file-conventions/proxy)
> for details.

## Middleware reference

| Detail                                            | Value                                                                                                                       |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **File location**                                 | `middleware.ts` in project root (or `proxy.ts` for Next.js 16+)                                                             |
| **Export**                                        | `export default function middleware(request: Request)` (or `export function proxy` for Next.js 16+)                         |
| **[Config export](/docs/routing-middleware/api)** | `export const config = { matcher: [...] }`                                                                                  |
| **Default runtime**                               | [`edge`](/docs/functions/runtimes/edge) (set `runtime: 'nodejs'` in config for [Node.js](/docs/functions/runtimes/node-js)) |
| **Bun runtime**                                   | Set [`bunVersion`](/docs/project-configuration/vercel-json) in `vercel.json` and `runtime: 'nodejs'` in config              |
| **Request object**                                | Standard `Request` API                                                                                                      |
| **Geo headers**                                   | `x-vercel-ip-country`, `x-vercel-ip-country-region`, `x-vercel-ip-city`                                                     |
| **[Path matching](/docs/routing-middleware/api)** | Supports regex, named params, and wildcards in the `matcher` config                                                         |

## Next steps

- [Routing Middleware API Reference](/docs/routing-middleware/api)
- [Routing Middleware overview](/docs/routing-middleware)


---

[View full sitemap](/docs/sitemap)
