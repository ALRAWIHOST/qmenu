import { NextResponse } from "next/server";

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
    const { plan, restaurantId } = await request.json();

    if (!plan || !restaurantId) {
      return NextResponse.json(
        { error: "Missing plan or restaurantId" },
        { status: 400 }
      );
    }

    const planId =
      plan === "pro"
        ? process.env.PAYPAL_PRO_PLAN_ID
        : process.env.PAYPAL_BASIC_PLAN_ID;

    if (!planId) {
      return NextResponse.json(
        { error: "Missing PayPal subscription plan id" },
        { status: 500 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const accessToken = await getPayPalAccessToken();

    const response = await fetch(
      `${PAYPAL_API_BASE}/v1/billing/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan_id: planId,
          custom_id: JSON.stringify({
            plan,
            restaurantId,
          }),
          application_context: {
            brand_name: "QMenu",
            locale: "de-DE",
            user_action: "SUBSCRIBE_NOW",
            return_url: `${baseUrl}/payment/success?plan=${plan}&restaurantId=${restaurantId}`,
            cancel_url: `${baseUrl}/payment/cancel`,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || "PayPal subscription creation failed" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("PayPal create subscription error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "PayPal subscription server error",
      },
      { status: 500 }
    );
  }
}