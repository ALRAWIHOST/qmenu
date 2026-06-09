"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Bitte E-Mail und Passwort eingeben");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen bg-[#111416] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d8aa4830,transparent_35%),radial-gradient(circle_at_bottom_left,#ffffff10,transparent_30%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Link href="/" className="mb-10 inline-block text-3xl font-extrabold">
            <span className="text-[#d8aa48]">QR</span>Menu
          </Link>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight">
            Willkommen
            <br />
            zurück bei
            <br />
            QRMenu.
          </h1>

          <p className="max-w-lg text-lg leading-8 text-white/70">
            Melden Sie sich an und verwalten Sie Ihre Speisekarte, Produkte,
            QR-Codes, Branding und Statistiken direkt im Dashboard.
          </p>

          <div className="mt-10 grid max-w-lg grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="p-5">
              <div className="text-2xl font-extrabold text-[#d8aa48]">QR</div>
              <div className="text-sm text-white/60">Code Menü</div>
            </div>

            <div className="border-l border-white/10 p-5">
              <div className="text-2xl font-extrabold text-[#d8aa48]">
                24/7
              </div>
              <div className="text-sm text-white/60">Online</div>
            </div>

            <div className="border-l border-white/10 p-5">
              <div className="text-2xl font-extrabold text-[#d8aa48]">
                Live
              </div>
              <div className="text-sm text-white/60">Stats</div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <Link href="/" className="text-3xl font-extrabold">
              <span className="text-[#d8aa48]">QR</span>Menu
            </Link>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-gray-950 shadow-2xl">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d8aa48] text-2xl font-extrabold text-black">
                QR
              </div>

              <h1 className="text-3xl font-extrabold">Login</h1>

              <p className="mt-2 text-gray-500">
                Melden Sie sich in Ihrem Konto an
              </p>
            </div>

            <input
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 w-full rounded-xl border p-4 outline-none focus:border-[#d8aa48]"
            />

            <input
              type="password"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3 w-full rounded-xl border p-4 outline-none focus:border-[#d8aa48]"
            />

            <div className="mb-5 text-right">
              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-gray-500 hover:text-black"
              >
                Passwort vergessen?
              </Link>
            </div>

            <button
              onClick={handleLogin}
              className="w-full rounded-xl bg-[#111416] p-4 font-bold text-white hover:bg-black"
            >
              Anmelden
            </button>

            <p className="mt-6 text-center text-sm text-gray-500">
              Noch kein Konto?{" "}
              <Link href="/register" className="font-bold text-black">
                Registrieren
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}