---
title: Manage Vercel Blob Storage
product: vercel
url: /docs/vercel-blob/manage-blob-storage
type: conceptual
prerequisites:
  - /docs/vercel-blob
related:
  - /docs/cli/project-linking
  - /docs/cli/blob
  - /docs/vercel-blob
summary: Learn about manage vercel blob storage on Vercel.
---

# Managing Vercel Blob storage from the CLI

Use this guide to manage Vercel Blob storage from the CLI. You'll create a store, upload and organize files, and handle cleanup.

> **💡 Note:** This guide requires a [linked Vercel project](/docs/cli/project-linking). Run
> `vercel link` in your project directory if you haven't already.

## Quick reference

Use this block when you already know what you're doing and want the full command sequence. Use the steps below for context and checks.

```bash filename="terminal"
# 1. Create a blob store
vercel blob create-store my-blob-store

# 2. Upload files
vercel blob put ./assets/logo.png --pathname images/logo.png
vercel blob put ./data/config.json --content-type application/json

# 3. List blobs
vercel blob list --prefix images/ --limit 20

# 4. Copy a blob
vercel blob copy images/logo.png images/logo-backup.png

# 5. Delete a blob
vercel blob del images/old-logo.png

# 6. Inspect a store
vercel blob get-store <store-id>
```

## 1. Create a blob store

Create a new blob store for your project:

```bash filename="terminal"
vercel blob create-store my-blob-store
```

To specify a region for the store:

```bash filename="terminal"
vercel blob create-store my-blob-store --region iad1
```

## 2. Upload files

Upload a file to a specific path in your blob store:

```bash filename="terminal"
vercel blob put ./assets/logo.png --pathname images/logo.png
```

The CLI infers the content type from the file extension. To set it explicitly:

```bash filename="terminal"
vercel blob put ./data/config.json --content-type application/json
```

To control cache behavior:

```bash filename="terminal"
vercel blob put ./assets/hero.jpg --pathname images/hero.jpg --cache-control-max-age 86400
```

If a file already exists at the target pathname, use `--allow-overwrite` to replace it:

```bash filename="terminal"
vercel blob put ./assets/logo-v2.png --pathname images/logo.png --allow-overwrite
```

To add a random suffix to the filename (useful for avoiding collisions with user uploads):

```bash filename="terminal"
vercel blob put ./uploads/photo.jpg --add-random-suffix
```

## 3. List blobs

List all blobs in your store:

```bash filename="terminal"
vercel blob list
```

Filter by prefix to browse a specific directory:

```bash filename="terminal"
vercel blob list --prefix images/ --limit 20
```

For paginated results, use the cursor from the previous response:

```bash filename="terminal"
vercel blob list --prefix images/ --limit 10 --cursor <cursor-value>
```

## 4. Copy blobs

Copy a blob to a new location within the same store:

```bash filename="terminal"
vercel blob copy images/logo.png images/logo-backup.png
```

This creates a new blob at the destination path without modifying the original.

## 5. Delete blobs

Remove a blob you no longer need:

```bash filename="terminal"
vercel blob del images/old-logo.png
```

## 6. Manage stores

To inspect a store's details:

```bash filename="terminal"
vercel blob get-store <store-id>
```

To remove a store entirely:

```bash filename="terminal"
vercel blob delete-store <store-id>
```

## Related

- [vercel blob](/docs/cli/blob)
- [Vercel Blob overview](/docs/vercel-blob)


---

[View full sitemap](/docs/sitemap)
