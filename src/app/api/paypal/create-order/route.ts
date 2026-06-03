import { NextResponse } from "next/server";

const PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com";

async function getPayPalAccessToken() {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
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

  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const { plan } = await request.json();

    const amount = plan === "pro" ? "19.00" : "9.00";

    const accessToken = await getPayPalAccessToken();

    const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            description: `QMenu ${plan.toUpperCase()} Plan`,
            amount: {
              currency_code: "EUR",
              value: amount,
            },
          },
        ],
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "PayPal order creation failed" },
      { status: 500 }
    );
  }
}