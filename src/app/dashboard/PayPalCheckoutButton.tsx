"use client";

type PayPalCheckoutButtonProps = {
  plan: "basic" | "pro";
  restaurantId: string;
};

export default function PayPalCheckoutButton({
  plan,
  restaurantId,
}: PayPalCheckoutButtonProps) {
  const price = plan === "pro" ? "19€" : "9€";

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan,
          restaurantId,
        }),
      });

      const order = await response.json();

      if (!response.ok) {
        alert(order.error || "PayPal API Fehler");
        console.log("PayPal error:", order);
        return;
      }

      console.log("PayPal order:", order);

      const approvalUrl = order.links?.find(
        (link: { rel: string; href: string }) => link.rel === "approve"
      )?.href;

      if (!approvalUrl) {
        alert(JSON.stringify(order, null, 2));
        return;
      }

      window.location.href = approvalUrl;
    } catch (error) {
      console.error(error);
      alert("PayPal Checkout Fehler. Bitte Console prüfen.");
    }
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