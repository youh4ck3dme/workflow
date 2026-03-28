# Workflow – Vercel Workflow DevKit Demo

A [Next.js](https://nextjs.org) App Router project showcasing the [Vercel Workflow DevKit](https://useworkflow.dev) (`workflow` package) with a minimal **order-fulfillment** durable workflow.

## What's Inside

| Path | Description |
|------|-------------|
| `app/workflows/order-fulfillment-workflow.ts` | Durable workflow with two steps (`processOrder`, `sendConfirmationEmail`) separated by a 30-second `sleep` |
| `app/api/workflows/order/route.ts` | `POST /api/workflows/order` – API route that triggers the workflow via `start()` |
| `next.config.ts` | Wrapped with `withWorkflow()` to enable `"use workflow"` / `"use step"` directives |

## Getting Started

### Prerequisites

- Node.js (LTS)
- [pnpm](https://pnpm.io)

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Trigger the workflow

```bash
curl -X POST http://localhost:3000/api/workflows/order \
  -H "content-type: application/json" \
  -d '{"orderId":"ORD-1001","customerEmail":"user@example.com"}'
```

Expected response:

```json
{
  "ok": true,
  "result": { ... }
}
```

## Key Concepts

- **`"use workflow"`** – directive that marks an `async` function as a durable workflow (persists progress, survives restarts).
- **`"use step"`** – directive that marks a function as a step with full Node.js access, automatic retries, and persisted results.
- **`sleep("30 seconds")`** – suspends the workflow without consuming compute resources.
- **`start()`** from `workflow/api` – triggers the workflow asynchronously.

## Learn More

- [Workflow DevKit Documentation](https://useworkflow.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/new)
