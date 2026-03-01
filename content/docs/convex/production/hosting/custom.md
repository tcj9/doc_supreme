# Custom Domains & Hosting

## Custom Domains[​](#custom-domains "Direct link to Custom Domains")

You can configure a custom domain, like `api.example.com`, to serve HTTP actions or Convex functions from your Convex deployments. The settings for this feature are accessed through the Deployment Settings page on any of your deployments.

![Add Custom Domain](/assets/images/add_custom_domain-2886f40eb3fd3ab420535fe0e9311908.png)

After you enter a domain, you will be shown which records to set on your DNS provider. Some popular DNS providers that you can use to buy a domain are Cloudflare and GoDaddy. We will verify your domain in the background, and once these records are set, you will see a green checkmark.

When you see that checkmark, your backend will now serve traffic from that domain. The first request may take up to a minute because Convex will have to mint a new SSL certificate.

Reach out to <support@convex.dev> if you have any questions about getting set up!

Custom domains require a Convex Pro plan.

Custom domains<!-- --> <!-- -->require<!-- --> a Convex Pro plan. [Learn more](https://convex.dev/pricing) about our plans or [upgrade](https://dashboard.convex.dev/team/settings/billing).

### Hosting with a Custom Domain[​](#hosting-with-a-custom-domain "Direct link to Hosting with a Custom Domain")

To use a custom domain to serve your Convex functions, there's an additional step: override the `CONVEX_CLOUD_URL` environment variable.

![Override system environment variables](/assets/images/override_system_env_vars-23e3d90ae07a8a7c7937e78fef9e6869.png)

Then re-deploy your project. This may entail clicking "Redeploy" in Vercel or Netlify, or directly running `npx convex deploy --cmd 'npm run build'`. The newly deployed code will access your Convex functions through your custom domain.

The `CONVEX_CLOUD_URL` environment variable is used in several places:

* `npx convex deploy --cmd '...'` sets `CONVEX_URL` (or similarly named) for your frontend to connect websockets and HTTP clients
* In your Convex functions, it is available as `process.env.CONVEX_CLOUD_URL`
* File storage URLs: `ctx.storage.getUrl(id)` and `ctx.storage.generateUploadUrl()`
* Generate an OpenAPI spec with `npx convex function-spec --prod`

You may also override the `CONVEX_SITE_URL` environment variable to be a custom HTTP Action domain.

* In your Convex functions, it is available as `process.env.CONVEX_SITE_URL`
* It may be used for webhooks
* It may be used in `auth.config.ts` as the `issuer` for Convex Auth

## Custom Hosting[​](#custom-hosting "Direct link to Custom Hosting")

If you're using only Convex for backend functionality you can host your web app on any static hosting provider. This guide will use [GitHub Pages](https://pages.github.com/) as an example.

If you're using Next.js or other framework with server functionality you'll need to use a provider that supports it, such as [Netlify](/production/hosting/netlify.md) or [Vercel](/production/hosting/vercel.md). You can still host Next.js statically via a [static export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports).

### Configure your build[​](#configure-your-build "Direct link to Configure your build")

First make sure that you have a working build process.

In this guide we'll set up a local build, but your hosting provider might support a remote build. For example see [Vite's Deploying to GitHub Pages guide](https://vitejs.dev/guide/static-deploy.html#github-pages) which uses GitHub actions.

We'll use Vite and GitHub Pages as an example.

1. Configure `vite.config.mts`:

   vite.config.mts

   TS

   ```
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     build: {
       outDir: "docs",
     },
     base: "/some-repo-name/",
   });
   ```

   The `build.outDir` field specifies where Vite will place the production build, and we use `docs` because that's the directory GitHub Pages allow hosting from.

   The `base` field specifies the URL path under which you'll serve your app, in this case we will serve on `https://<some username>.github.io/<some repo name>`.

### Configure your hosting provider[​](#configure-your-hosting-provider "Direct link to Configure your hosting provider")

With GitHub Pages, you can choose whether you want to include your build output in your main working branch or publish from a separate branch.

Open your repository's GitHub page > *Settings* > *Pages*. Under *Build and deployment* > *Source* choose `Deploy from a branch`.

Under *branch* choose a branch (if you want to use a separate branch, push at least one commit to it first), and the `/docs` folder name. Hit *Save*.

### Build and deploy to Convex and GitHub Pages[​](#build-and-deploy-to-convex-and-github-pages "Direct link to Build and deploy to Convex and GitHub Pages")

To manually deploy to GitHub pages follow these steps:

1. Checkout the branch you chose to publish from
2. Run `npx convex deploy --cmd 'npm run build'` and confirm that you want to push your current backend code to your **production** deployment
3. Commit the build output changes and push to GitHub.

### How it works[​](#how-it-works "Direct link to How it works")

First, `npx convex deploy` runs through these steps:

1. It sets the `VITE_CONVEX_URL` (or similarly named) environment variable to your **production** Convex deployment.
2. It invokes the frontend framework build process, via `npm run build`. The build process reads the environment variable and uses it to point the built site at your **production** deployment.
3. It deploys your backend code, from the `convex` directory, to your **production** deployment.

Afterwards you deploy the built frontend code to your hosting provider. In this case you used Git, but for other providers you might use a different method, such as an old-school FTP request.

You can use `--cmd-url-env-var-name` to customize the variable name used by your frontend code if the `deploy` command cannot infer it, like

```
npx convex deploy --cmd-url-env-var-name CUSTOM_CONVEX_URL --cmd 'npm run build'
```

### Authentication[​](#authentication "Direct link to Authentication")

You will want to configure your [authentication](/auth.md) provider (Clerk, Auth0 or other) to accept your production URL, where your frontend is served.
