export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-10 py-24 px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
            Vercel Workflow DevKit Demo
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A durable <strong>order-fulfillment</strong> workflow built with{" "}
            <a
              href="https://useworkflow.dev"
              className="underline text-zinc-900 dark:text-zinc-100 hover:text-zinc-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Workflow DevKit
            </a>{" "}
            and Next.js App Router.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Trigger the workflow
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Send a <code className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">POST</code> request to{" "}
            <code className="font-mono text-sm bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/api/workflows/order</code>:
          </p>
          <pre className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 text-sm font-mono overflow-x-auto text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
{`curl -X POST http://localhost:3000/api/workflows/order \\
  -H "content-type: application/json" \\
  -d '{"orderId":"ORD-1001","customerEmail":"user@example.com"}'`}
          </pre>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            What happens
          </h2>
          <ol className="list-decimal list-inside flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
            <li>
              <strong className="text-black dark:text-white">processOrder</strong> – marks the order as processed.
            </li>
            <li>
              <strong className="text-black dark:text-white">sleep 30 s</strong> – suspends durably without consuming compute.
            </li>
            <li>
              <strong className="text-black dark:text-white">sendConfirmationEmail</strong> – sends a shipping confirmation.
            </li>
          </ol>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Key files
          </h2>
          <ul className="flex flex-col gap-1 text-sm font-mono text-zinc-600 dark:text-zinc-400">
            <li>
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">app/workflows/order-fulfillment-workflow.ts</code>
              {" – "}durable workflow definition
            </li>
            <li>
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">app/api/workflows/order/route.ts</code>
              {" – "}API route that starts the workflow
            </li>
            <li>
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">next.config.ts</code>
              {" – "}wrapped with <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">withWorkflow()</code>
            </li>
          </ul>
        </section>

        <div className="flex gap-4 text-sm">
          <a
            href="https://useworkflow.dev"
            className="underline text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Workflow Docs
          </a>
          <a
            href="https://nextjs.org/docs"
            className="underline text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
        </div>
      </main>
    </div>
  );
}
