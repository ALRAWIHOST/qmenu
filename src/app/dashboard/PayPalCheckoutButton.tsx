"use client";

type PayPalCheckoutButtonProps = {
  plan: "basic" | "pro";
};

export default function PayPalCheckoutButton({
  plan,
}: PayPalCheckoutButtonProps) {
  const price = plan === "pro" ? "19€" : "9€";

  const handleCheckout = async () => {
    const response = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan }),
    });

    const order = await response.json();

    const approvalUrl = order.links?.find(
      (link: { rel: string; href: string }) => link.rel === "approve"
    )?.href;

    if (!approvalUrl) {
      alert("PayPal Checkout konnte nicht gestartet werden.");
      return;
    }

    window.location.href = approvalUrl;
  };

  return (
    <button
      onClick={handleCheckout}
      className="border px-4 py-2 rounded-lg"
    >
      Upgrade auf {plan.toUpperCase()} - {price}
    </button>
  );
}