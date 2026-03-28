import { NextResponse } from "next/server";
import { start } from "workflow/api";
import { orderFulfillmentWorkflow } from "@/app/workflows/order-fulfillment-workflow";

export async function POST(req: Request) {
  const body = await req.json();

  const { orderId, customerEmail } = body;

  if (!orderId || typeof orderId !== "string") {
    return NextResponse.json(
      { ok: false, error: "orderId is required" },
      { status: 400 },
    );
  }

  if (!customerEmail || typeof customerEmail !== "string") {
    return NextResponse.json(
      { ok: false, error: "customerEmail is required" },
      { status: 400 },
    );
  }

  const result = await start(orderFulfillmentWorkflow, [
    { orderId, customerEmail },
  ]);

  return NextResponse.json({ ok: true, result });
}
