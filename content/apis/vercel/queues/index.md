---
title: Queues
product: vercel
url: /docs/queues
type: conceptual
prerequisites:
  []
related:
  - /docs/workflow
  - /docs/queues/sdk
  - /docs/queues/concepts
  - /docs/queues/poll-mode
  - /docs/queues/observability
summary: Learn about queues on Vercel.
---

# Vercel Queues

> **🔒 Permissions Required**: Vercel Queues

Vercel Queues is a durable event streaming system built for serverless applications. You publish messages to topics, and independent consumer groups process them in parallel with automatic retries, sharding, and delivery guarantees.

Each topic is a durable, append-only log that retains messages until they expire. Messages fan out to every consumer group subscribed to the topic, and new consumer groups can join at any time to replay non-expired history.

Vercel Queues is useful when you need to:

- **Defer expensive work**: Offload tasks like sending emails, generating PDFs, or calling external APIs so your response returns fast.
- **Absorb traffic spikes**: Buffer incoming requests and process them at a controlled rate.
- **Guarantee delivery**: Make sure work completes even if a function crashes or a deployment rolls out.
- **Schedule tasks**: Delay message delivery by up to the retention period.
- **Deduplicate messages**: Use idempotency keys to prevent duplicate processing.
- **Isolate consumers**: Process the same messages in multiple independent pipelines without interference.

Vercel Queues is the lower-level primitive that powers [Vercel Workflow](/docs/workflow). Workflow provides a higher-level SDK with durable steps, sleep, and hooks that makes building multi-step applications more ergonomic. If you need direct control over message publishing, consumption, and routing, use the [Queues SDK](/docs/queues/sdk) directly. If you're building stateful multi-step workflows, start with [Workflow](/docs/workflow).

## Features

- [**Durable delivery**](/docs/queues/concepts): Persist messages with retries and visibility timeouts for reliable processing.
- [**Fan-out consumers**](/docs/queues/concepts): Send one message stream to multiple independent consumer groups without coordination.
- [**Push and poll modes**](/docs/queues/poll-mode): Process on Vercel with push callbacks or run your own workers.
- [**Automatic scaling**](/docs/queues/concepts): Scale producers and consumers without managing partitions or throughput capacity.
- [**SDK and API**](/docs/queues/sdk): Publish and consume with the SDK or HTTP API.
- [**Observability**](/docs/queues/observability): Monitor queue throughput, message age, and consumer performance.

## Resources

**Quickstart**: Set up your first producer and consumer. [Learn more →](/docs/queues/quickstart)

**Concepts**: Learn delivery, retries, durability, and deployment behavior. [Learn more →](/docs/queues/concepts)

**API reference**: Review Queue HTTP endpoints and request/response details. [Learn more →](/docs/queues/api)

**SDK Reference**: Publish, consume, and manage messages with @vercel/queue. [Learn more →](/docs/queues/sdk)

**Poll mode**: Consume messages on your own schedule from any environment. [Learn more →](/docs/queues/poll-mode)

**Observability**: Monitor queue throughput, message age, and consumer performance. [Learn more →](/docs/queues/observability)

**Pricing and limits**: Understand operation billing and service limits. [Learn more →](/docs/queues/pricing)

**Vercel Workflow**: Build durable multi-step workflows on top of Queues. [Learn more →](/docs/workflow)


---

[View full sitemap](/docs/sitemap)
