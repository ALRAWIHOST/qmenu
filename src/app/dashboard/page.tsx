"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import PayPalCheckoutButton from "./PayPalCheckoutButton";

type Restaurant = {
  id: string;
  name: string;
  slug: string;
  plan?: string;
  menuViews?: number;
  qrScans?: number;
  paypal_subscription_id?: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: restaurantData } = await supabase
        .from("restaurants")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      const restaurantsWithStats = await Promise.all(
        (restaurantData || []).map(async (restaurant) => {
          const { count: menuViews } = await supabase
            .from("menu_views")
            .select("*", { count: "exact", head: true })
            .eq("restaurant_id", restaurant.id);

          const { count: qrScans } = await supabase
            .from("qr_scans")
            .select("*", { count: "exact", head: true })
            .eq("restaurant_id", restaurant.id);

          return {
            ...restaurant,
            menuViews: menuViews || 0,
            qrScans: qrScans || 0,
          };
        })
      );

      setRestaurants(restaurantsWithStats);
    };

    loadData();
  }, [router]);

  const handleCancelSubscription = async (restaurantId: string) => {
    const confirmed = confirm(
      "Möchten Sie Ihr Abonnement wirklich kündigen?"
    );

    if (!confirmed) return;

    const response = await fetch("/api/paypal/cancel-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ restaurantId }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || "Kündigung fehlgeschlagen");
      return;
    }

    alert("Abonnement erfolgreich gekündigt.");
    window.location.reload();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const totalViews = restaurants.reduce(
    (sum, restaurant) => sum + (restaurant.menuViews || 0),
    0
  );

  const totalScans = restaurants.reduce(
    (sum, restaurant) => sum + (restaurant.qrScans || 0),
    0
  );

  const paidRestaurants = restaurants.filter((restaurant) => {
    const plan = (restaurant.plan || "free").toLowerCase();
    return plan === "basic" || plan === "pro";
  }).length;

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-gray-950">
      <header className="sticky top-0 z-30 border-b bg-[#111416] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-extrabold">
            <span className="text-[#d8aa48]">Q</span>Menu
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 md:block"
            >
              Website
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-[#d8aa48] px-4 py-2 text-sm font-bold text-black hover:bg-[#e7bd62]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="bg-[#111416] text-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold text-[#d8aa48]">
                Restaurant Dashboard
              </p>

              <h1 className="text-4xl font-extrabold md:text-5xl">
                Meine Restaurants
              </h1>

              <p className="mt-3 max-w-2xl text-white/60">
                Verwalten Sie Ihre digitalen Speisekarten, QR-Codes,
                Statistiken und Abonnements an einem Ort.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-sm text-white/50">Restaurants</p>
              <p className="text-3xl font-extrabold">{restaurants.length}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/50">Menu Views</p>
              <p className="mt-2 text-4xl font-extrabold">{totalViews}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/50">QR Scans</p>
              <p className="mt-2 text-4xl font-extrabold">{totalScans}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/50">Paid Plans</p>
              <p className="mt-2 text-4xl font-extrabold">{paidRestaurants}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {restaurants.length === 0 ? (
          <div className="rounded-3xl border bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-extrabold">
              Noch kein Restaurant vorhanden
            </h2>

            <p className="mt-3 text-gray-500">
              Erstellen Sie Ihr erstes Restaurant, um mit QMenu zu starten.
            </p>

            <Link
              href="/register"
              className="mt-6 inline-block rounded-xl bg-[#111416] px-6 py-3 font-bold text-white"
            >
              Restaurant erstellen
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-2">
            {restaurants.map((restaurant) => {
              const plan = (restaurant.plan || "free").toLowerCase();

              return (
                <div
                  key={restaurant.id}
                  className="overflow-hidden rounded-[2rem] border bg-white shadow-sm"
                >
                  <div className="border-b bg-[#111416] p-6 text-white">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <div className="inline-flex rounded-full bg-[#d8aa48] px-3 py-1 text-xs font-extrabold uppercase text-black">
                            {plan}
                          </div>

                          {(plan === "basic" || plan === "pro") &&
                            restaurant.paypal_subscription_id && (
                              <button
                                onClick={() =>
                                  handleCancelSubscription(restaurant.id)
                                }
                                className="rounded-full border border-red-400 px-3 py-1 text-xs font-bold text-red-300 hover:bg-red-500 hover:text-white"
                              >
                                Abo kündigen
                              </button>
                            )}
                        </div>

                        <h2 className="text-2xl font-extrabold">
                          {restaurant.name}
                        </h2>

                        <p className="mt-2 text-sm text-white/60">
                          /s/{restaurant.slug}
                        </p>
                      </div>

                      <Link
                        href={`/s/${restaurant.slug}`}
                        className="rounded-xl border border-white/20 px-4 py-2 text-sm font-bold hover:bg-white/10"
                      >
                        Vorschau
                      </Link>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-[#f7f4ed] p-5">
                        <p className="text-sm text-gray-500">QR Scans</p>
                        <p className="mt-2 text-3xl font-extrabold">
                          {restaurant.qrScans || 0}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#f7f4ed] p-5">
                        <p className="text-sm text-gray-500">Menu Views</p>
                        <p className="mt-2 text-3xl font-extrabold">
                          {restaurant.menuViews || 0}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6 rounded-2xl border bg-white p-5">
                      <p className="mb-4 text-sm font-bold text-gray-500">
                        Quick Actions
                      </p>

                      <div className="grid gap-3 sm:grid-cols-3">
                        <Link
                          href={`/menu?restaurantId=${restaurant.id}`}
                          className="rounded-xl bg-[#111416] px-4 py-3 text-center text-sm font-bold text-white"
                        >
                          Menü bearbeiten
                        </Link>

                        <Link
                          href="/qr"
                          className="rounded-xl border px-4 py-3 text-center text-sm font-bold"
                        >
                          QR-Code
                        </Link>

                        <Link
                          href={`/s/${restaurant.slug}`}
                          className="rounded-xl border px-4 py-3 text-center text-sm font-bold"
                        >
                          Live Menü
                        </Link>
                      </div>
                    </div>

                    {plan === "free" && (
                      <div className="rounded-2xl bg-[#f7f4ed] p-5">
                        <p className="mb-3 text-sm font-bold">
                          Upgrade für mehr Funktionen
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <PayPalCheckoutButton
                            plan="basic"
                            restaurantId={restaurant.id}
                          />

                          <PayPalCheckoutButton
                            plan="pro"
                            restaurantId={restaurant.id}
                          />
                        </div>
                      </div>
                    )}

                    {plan === "basic" && (
                      <div className="rounded-2xl bg-[#f7f4ed] p-5">
                        <p className="mb-3 text-sm font-bold">
                          Basic Plan aktiv
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {restaurant.paypal_subscription_id ? (
  <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
    Um auf Pro zu wechseln, kündigen Sie zuerst Ihr aktuelles Abo.
  </p>
) : (
  <PayPalCheckoutButton
    plan="pro"
    restaurantId={restaurant.id}
  />
)}
                        </div>
                      </div>
                    )}

                    {plan === "pro" && (
                      <div className="rounded-2xl bg-[#f7f4ed] p-5">
                        <p className="text-sm font-bold text-[#7a5a16]">
                          Pro Plan aktiv
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          Alle Premium-Funktionen sind für dieses Restaurant
                          freigeschaltet.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}