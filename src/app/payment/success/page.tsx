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

      if (!plan || !restaurantId) {
        setStatus("Fehlende Zahlungsdaten.");
        return;
      }

      const { error } = await supabase
        .from("restaurants")
        .update({ plan })
        .eq("id", restaurantId);

      if (error) {
        setStatus(error.message);
        return;
      }

      setStatus(`Plan erfolgreich auf ${plan.toUpperCase()} aktualisiert.`);
    };

    updatePlan();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white border rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">
          Zahlung erfolgreich
        </h1>

        <p className="text-gray-600 mb-6">
          {status}
        </p>

        <Link
          href="/dashboard"
          className="bg-black text-white px-6 py-3 rounded-lg inline-block"
        >
          Zurück zum Dashboard
        </Link>
      </div>
    </main>
  );
}