import { sleep } from "workflow";

type OrderInput = {
  orderId: string;
  customerEmail: string;
};

export async function orderFulfillmentWorkflow(input: OrderInput) {
  "use workflow";

  const processed = await processOrder(input.orderId);

  await sleep("30 seconds");

  const emailResult = await sendConfirmationEmail(
    input.orderId,
    input.customerEmail,
  );

  return { processed, emailResult };
}

async function processOrder(orderId: string) {
  "use step";

  return { orderId, status: "processed" as const };
}

async function sendConfirmationEmail(orderId: string, customerEmail: string) {
  "use step";

  return {
    to: customerEmail,
    subject: `Order ${orderId} shipped`,
    ok: true,
  };
}
