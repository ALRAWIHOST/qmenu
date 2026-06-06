import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com";

async function getPayPalAccessToken() {
  const clientId =
    process.env.PAYPAL_CLIENT_ID ||
    process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing PayPal credentials");
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error_description || "PayPal token error");
  }

  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const { restaurantId } = await request.json();

    if (!restaurantId) {
      return NextResponse.json(
        { error: "Missing restaurantId" },
        { status: 400 }
      );
    }

    const { data: restaurant, error: restaurantError } = await supabase
      .from("restaurants")
      .select("id, paypal_subscription_id")
      .eq("id", restaurantId)
      .single();

    if (restaurantError || !restaurant?.paypal_subscription_id) {
      return NextResponse.json(
        { error: "Subscription not found" },
        { status: 404 }
      );
    }

    const accessToken = await getPayPalAccessToken();

    const response = await fetch(
      `${PAYPAL_API_BASE}/v1/billing/subscriptions/${restaurant.paypal_subscription_id}/cancel`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reason: "Cancelled by customer from QMenu dashboard",
        }),
      }
    );

    if (!response.ok) {
      const data = await response.json();

      return NextResponse.json(
        { error: data.message || "PayPal cancellation failed" },
        { status: 500 }
      );
    }

    await supabase
      .from("restaurants")
      .update({
        plan: "free",
        paypal_subscription_id: null,
      })
      .eq("id", restaurantId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Cancel subscription error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Cancel subscription failed",
      },
      { status: 500 }
    );
  }
}