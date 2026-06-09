"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendResetLink = async () => {
    if (!email.trim()) {
      alert("Bitte E-Mail eingeben");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://menu-qrcode.de/update-password",
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Link zum Zurücksetzen wurde gesendet.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#111416] px-6 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white p-8 text-gray-950 shadow-2xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d8aa48] text-2xl font-extrabold text-black">
            QR
          </div>

          <h1 className="text-3xl font-extrabold">Passwort vergessen</h1>

          <p className="mt-2 text-gray-500">
            Geben Sie Ihre E-Mail ein. Wir senden Ihnen einen Link zum
            Zurücksetzen.
          </p>
        </div>

        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-xl border p-4 outline-none focus:border-[#d8aa48]"
        />

        <button
          onClick={sendResetLink}
          disabled={loading}
          className="w-full rounded-xl bg-[#111416] p-4 font-bold text-white hover:bg-black disabled:opacity-50"
        >
          {loading ? "Wird gesendet..." : "Reset-Link senden"}
        </button>

        <Link
          href="/login"
          className="mt-5 block text-center text-sm font-semibold text-gray-500 hover:text-black"
        >
          Zurück zum Login
        </Link>
      </div>
    </main>
  );
}