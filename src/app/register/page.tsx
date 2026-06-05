"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState("free");
  const [restaurantName, setRestaurantName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");

    if (plan) {
      setSelectedPlan(plan);
    }
  }, []);

  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleRegister = async () => {
    if (!restaurantName.trim() || !email.trim() || !password.trim()) {
      alert("Bitte alle Felder ausfüllen");
      return;
    }

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      alert(authError.message);
      return;
    }

    const user = authData.user;

    if (!user) {
      alert("Benutzer konnte nicht erstellt werden");
      return;
    }

    const slug = createSlug(restaurantName);

    const { error: restaurantError } = await supabase
      .from("restaurants")
      .insert({
        name: restaurantName,
        slug,
        phone: "",
        address: "",
        user_id: user.id,
        plan: selectedPlan,
      });

    if (restaurantError) {
      alert(restaurantError.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[#111416] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d8aa4830,transparent_35%),radial-gradient(circle_at_bottom_left,#ffffff10,transparent_30%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Link href="/" className="mb-10 inline-block text-3xl font-extrabold">
            <span className="text-[#d8aa48]">Q</span>Menu
          </Link>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight">
            Starten Sie Ihr
            <br />
            digitales Menü
            <br />
            in wenigen Minuten.
          </h1>

          <p className="max-w-lg text-lg leading-8 text-white/70">
            Erstellen Sie Ihr Restaurant-Profil, laden Sie Produkte hoch und
            teilen Sie Ihre Speisekarte sofort per QR-Code mit Ihren Gästen.
          </p>

          <div className="mt-10 grid max-w-lg grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="p-5">
              <div className="text-2xl font-extrabold text-[#d8aa48]">QR</div>
              <div className="text-sm text-white/60">Code Menü</div>
            </div>

            <div className="border-l border-white/10 p-5">
              <div className="text-2xl font-extrabold text-[#d8aa48]">24/7</div>
              <div className="text-sm text-white/60">Online</div>
            </div>

            <div className="border-l border-white/10 p-5">
              <div className="text-2xl font-extrabold text-[#d8aa48]">Live</div>
              <div className="text-sm text-white/60">Stats</div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <Link href="/" className="text-3xl font-extrabold">
              <span className="text-[#d8aa48]">Q</span>Menu
            </Link>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-gray-950 shadow-2xl">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d8aa48] text-2xl font-extrabold text-black">
                Q
              </div>

              <h1 className="text-3xl font-extrabold">Registrieren</h1>

              <p className="mt-2 text-gray-500">
                Erstellen Sie Ihr QMenu Konto
              </p>
            </div>

            <div className="mb-5 rounded-2xl bg-[#f7f4ed] p-4 text-center">
              <p className="text-sm text-gray-600">
                Gewählter Plan
              </p>

              <p className="font-extrabold uppercase text-[#7a5a16]">
                {selectedPlan}
              </p>
            </div>

            <input
              type="text"
              placeholder="Restaurant Name"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              className="mb-4 w-full rounded-xl border p-4 outline-none focus:border-[#d8aa48]"
            />

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
              className="mb-5 w-full rounded-xl border p-4 outline-none focus:border-[#d8aa48]"
            />

            <button
              onClick={handleRegister}
              className="w-full rounded-xl bg-[#111416] p-4 font-bold text-white hover:bg-black"
            >
              Konto erstellen
            </button>

            <p className="mt-6 text-center text-sm text-gray-500">
              Bereits ein Konto?{" "}
              <Link href="/login" className="font-bold text-black">
                Einloggen
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}