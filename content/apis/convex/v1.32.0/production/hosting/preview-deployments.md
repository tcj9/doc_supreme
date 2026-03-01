# Preview Deployments

Convex preview deployments allow your team to test out backend changes before pushing them to production.

In combination with Vercel Preview Deployments or Netlify Deploy Previews, you can preview both frontend and backend changes together.

Convex preview deployments are in beta

Convex preview deployments<!-- --> <!-- -->are<!-- --> currently a [beta feature](/production/state/.md#beta-features). If you have feedback or feature requests, [let us know on Discord](https://convex.dev/community)!

## Setup[​](#setup "Direct link to Setup")

Follow the [Vercel](/production/hosting/vercel.md#preview-deployments) or [Netlify](/production/hosting/netlify.md#deploy-previews) hosting guide for setting up frontend and backend previews together, as well as details on how Convex preview deployments work.

See `npx convex deploy --help` for all available options for `npx convex deploy`.

## Limits[​](#limits "Direct link to Limits")

Convex preview deployments are automatically cleaned up 5 days (14 days on the Professional Convex plan) after creation, or when a new preview deployment with the same name is created. They can also be manually deleted from the Convex dashboard.

Preview deployments count towards your deployment limit.

When a Convex preview deployment is deleted, the Vercel/Netlify preview link will open and show UI, but will be unable to run any Convex functions since it is pointing at a Convex deployment that no longer exists. In these cases, re-deploying in Vercel/Netlify should produce a link pointing at a new Convex deployment.

Convex allows a single deployment at a time for a given name (Git branch). When pushing updates to an existing branch, the deployment will be deleted, resulting in a preview link unable to run Convex functions, before it is replaced by a new Convex deployment.

Initial data can be set up on a Convex preview deployment by running a function. There are currently no other ways to set up data on a Convex preview deployment -- viewing changes against a copy of production data or importing data from a different Convex deployment is not supported.

Note that if the function call fails, the `deploy` command will fail, but the new preview deployment will have already been provisioned. Best course of action is to fix the issue in the function and redeploy.

Support for preview deployments is a beta feature, so [let us know on Discord](https://convex.dev/community) if you have feedback!
