"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function PaymentSuccessPage() {
  const [status, setStatus] = useState("Zahlung wird verarbeitet...");

  useEffect(() => {
    const updatePlan = async () => {
      const params = new URLSearchParams(window.location.search);

      const plan = params.get("plan");
      const restaurantId = params.get("restaurantId");

      // PayPal Subscriptions returns subscription_id
      const subscriptionId =
        params.get("subscription_id") ||
        params.get("subscriptionId") ||
        params.get("ba_token");

      if (!plan || !restaurantId) {
        setStatus("Fehlende Zahlungsdaten.");
        return;
      }

      const updateData: {
        plan: string;
        paypal_subscription_id?: string;
      } = {
        plan,
      };

      if (subscriptionId) {
        updateData.paypal_subscription_id = subscriptionId;
      }

      const { error } = await supabase
        .from("restaurants")
        .update(updateData)
        .eq("id", restaurantId);

      if (error) {
        setStatus(error.message);
        return;
      }

      setStatus(
        `Plan erfolgreich auf ${plan.toUpperCase()} aktualisiert.`
      );
    };

    updatePlan();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#111416] text-white p-6">
      <div className="bg-white rounded-[2rem] p-8 max-w-md w-full text-center text-gray-950 shadow-2xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d8aa48] text-2xl font-extrabold text-black">
          Q
        </div>

        <h1 className="text-3xl font-extrabold mb-4">
          Zahlung erfolgreich
        </h1>

        <p className="text-gray-600 mb-6">{status}</p>

        <Link
          href="/dashboard"
          className="bg-[#111416] text-white px-6 py-3 rounded-xl font-bold inline-block"
        >
          Zurück zum Dashboard
        </Link>
      </div>
    </main>
  );
}