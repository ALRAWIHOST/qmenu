"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PayPalCheckoutButton from "../dashboard/PayPalCheckoutButton";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const restaurantId = searchParams.get("restaurantId");
  const plan = searchParams.get("plan") as "basic" | "pro" | null;

  if (!restaurantId || !plan) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white border rounded-2xl p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Checkout nicht gefunden</h1>

          <Link href="/dashboard" className="text-blue-600 font-semibold">
            Zurück zum Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#111416] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 text-gray-950 shadow-2xl">
        <div className="text-center mb-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d8aa48] text-2xl font-extrabold text-black">
            Q
          </div>

          <h1 className="text-3xl font-extrabold">Checkout</h1>

          <p className="mt-2 text-gray-500">
            Gewählter Plan:{" "}
            <span className="font-bold uppercase text-[#7a5a16]">
              {plan}
            </span>
          </p>
        </div>

        <div className="rounded-2xl bg-[#f7f4ed] p-5 mb-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Jetzt bezahlen mit PayPal</p>

          <PayPalCheckoutButton plan={plan} restaurantId={restaurantId} />
        </div>

        <Link
          href="/dashboard"
          className="block w-full text-center rounded-xl border py-3 font-bold"
        >
          Später bezahlen
        </Link>
      </div>
    </main>
  );
}