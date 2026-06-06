import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const event = await request.json();

    const eventType = event.event_type;
    const resource = event.resource;

    const customId = resource?.custom_id;

    if (!customId) {
      return NextResponse.json({ received: true });
    }

    let parsedCustomId: {
      plan?: string;
      restaurantId?: string;
    };

    try {
      parsedCustomId = JSON.parse(customId);
    } catch {
      return NextResponse.json({ received: true });
    }

    const restaurantId = parsedCustomId.restaurantId;
    const plan = parsedCustomId.plan;

    if (!restaurantId) {
      return NextResponse.json({ received: true });
    }

    if (
      eventType === "BILLING.SUBSCRIPTION.CANCELLED" ||
      eventType === "BILLING.SUBSCRIPTION.EXPIRED" ||
      eventType === "BILLING.SUBSCRIPTION.SUSPENDED" ||
      eventType === "BILLING.SUBSCRIPTION.PAYMENT.FAILED"
    ) {
      await supabase
        .from("restaurants")
        .update({
          plan: "free",
        })
        .eq("id", restaurantId);
    }

    if (
      eventType === "BILLING.SUBSCRIPTION.ACTIVATED" ||
      eventType === "BILLING.SUBSCRIPTION.CREATED" ||
      eventType === "BILLING.SUBSCRIPTION.RE-ACTIVATED"
    ) {
      if (plan === "basic" || plan === "pro") {
        await supabase
          .from("restaurants")
          .update({
            plan,
          })
          .eq("id", restaurantId);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("PayPal webhook error:", error);

    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}