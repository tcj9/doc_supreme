---
title: Agent Quickstart
product: vercel
url: /docs/sign-in-with-vercel/agent-quickstart
type: conceptual
prerequisites:
  - /docs/sign-in-with-vercel
related:
  - /docs/agent-resources/coding-agents/claude-code
  - /docs/agent-resources/coding-agents/cline
  - /docs/sign-in-with-vercel/getting-started
  - /docs/sign-in-with-vercel/manage-from-dashboard
  - /docs/sign-in-with-vercel/authorization-server-api
summary: Learn about agent quickstart on Vercel.
---

# Getting started with Sign in with Vercel using a coding agent

If you use a coding agent like
[Claude Code](/docs/agent-resources/coding-agents/claude-code),
[Cursor](https://cursor.com), or
[Cline](/docs/agent-resources/coding-agents/cline),
you can scaffold the full Sign in with Vercel OAuth flow with a single prompt
instead of writing each route and component by hand.

For step-by-step manual setup, see the [manual quickstart](/docs/sign-in-with-vercel/getting-started).

## Before you begin

Complete these steps in the Vercel dashboard before prompting your agent:

1. [Create an App](/docs/sign-in-with-vercel/manage-from-dashboard#create-an-app) from the dashboard
2. [Generate a client secret](/docs/sign-in-with-vercel/manage-from-dashboard#generate-a-client-secret)
3. [Set the authorization callback URL](/docs/sign-in-with-vercel/manage-from-dashboard#configure-the-authorization-callback-url) to `http://localhost:3000/api/auth/callback` for local development
4. [Configure permissions](/docs/sign-in-with-vercel/manage-from-dashboard#configure-the-necessary-permissions) your app needs

Add your credentials to `.env.local`:

```bash filename=".env.local"
NEXT_PUBLIC_VERCEL_APP_CLIENT_ID="your-client-id"
VERCEL_APP_CLIENT_SECRET="your-client-secret"
```

## Scaffold the OAuth flow

Prompt your agent to create the full sign-in flow:

```txt filename="Prompt"
Add Sign in with Vercel to this Next.js App Router project.

- My client ID and secret are in .env.local as
  NEXT_PUBLIC_VERCEL_APP_CLIENT_ID and VERCEL_APP_CLIENT_SECRET
- Create these API routes:
  - app/api/auth/authorize (redirect to Vercel OAuth with PKCE)
  - app/api/auth/callback (exchange code for tokens, set cookies)
  - app/api/auth/signout (revoke token, clear cookies)
- Create a profile page at app/profile that fetches user info
  from https://api.vercel.com/login/oauth/userinfo
- Create SignInWithVercel and SignOut button components
- Use secure cookie settings (httpOnly, sameSite: lax, secure only
  in production)
- Use PKCE with S256 code challenge
- Include state and nonce parameters for CSRF and replay protection
```

Your agent will create the route handlers, components, and profile page.

## Endpoints and authentication

| Detail                    | Value                                                                             |
| ------------------------- | --------------------------------------------------------------------------------- |
| **Authorization URL**     | `https://vercel.com/oauth/authorize`                                              |
| **Token exchange**        | `POST https://api.vercel.com/login/oauth/token`                                   |
| **Token revocation**      | `POST https://api.vercel.com/login/oauth/token/revoke`                            |
| **User info**             | `GET https://api.vercel.com/login/oauth/userinfo`                                 |
| **Token introspection**   | `POST https://api.vercel.com/login/oauth/token/introspect`                        |
| **Recommended scopes**    | `openid email profile offline_access` (`openid` is required, others are optional) |
| **PKCE method**           | `S256`                                                                            |
| **Callback URL format**   | `{origin}/api/auth/callback`                                                      |
| **Client ID env var**     | `NEXT_PUBLIC_VERCEL_APP_CLIENT_ID`                                                |
| **Client secret env var** | `VERCEL_APP_CLIENT_SECRET`                                                        |

## Next steps

- [Authorization Server API reference](/docs/sign-in-with-vercel/authorization-server-api)
- [Tokens reference](/docs/sign-in-with-vercel/tokens)
- [Scopes and permissions](/docs/sign-in-with-vercel/scopes-and-permissions)
- [Consent page customization](/docs/sign-in-with-vercel/consent-page)
- [View the reference app](https://sign-in-with-vercel-reference-app.vercel.app/)


---

[View full sitemap](/docs/sitemap)
