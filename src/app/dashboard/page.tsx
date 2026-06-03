"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import UpgradePlanButton from "./UpgradePlanButton";

type Restaurant = {
  id: string;
  name: string;
  slug: string;
  plan?: string;
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

      const { data } = await supabase
        .from("restaurants")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      setRestaurants(data || []);
    };

    loadData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-8 py-5 flex justify-between">
        <h1 className="text-2xl font-bold">QMenu Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </header>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">
          Meine Restaurants
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white border rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">
                {restaurant.name}
              </h3>

              <div className="space-y-3 mb-4">
  <div className="flex items-center gap-2">
    <span className="text-sm text-gray-600">
      Plan:
    </span>

    <span className="px-2 py-1 text-xs rounded-full bg-black text-white uppercase">
      {restaurant.plan || "free"}
    </span>
  </div>

  {restaurant.plan === "free" && (
    <div className="flex gap-2">
      <UpgradePlanButton
        restaurantId={restaurant.id}
        newPlan="basic"
      />

      <UpgradePlanButton
        restaurantId={restaurant.id}
        newPlan="pro"
      />
    </div>
  )}

  {restaurant.plan === "basic" && (
    <UpgradePlanButton
      restaurantId={restaurant.id}
      newPlan="pro"
    />
  )}
</div>

              <p className="text-gray-600 mb-4">
                /s/{restaurant.slug}
              </p>

              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/menu?restaurantId=${restaurant.id}`}
                  className="bg-black text-white px-4 py-2 rounded-lg"
                >
                  Menü bearbeiten
                </Link>

                <Link
                  href="/qr"
                  className="border px-4 py-2 rounded-lg"
                >
                  QR
                </Link>

                <Link
                  href={`/s/${restaurant.slug}`}
                  className="border px-4 py-2 rounded-lg"
                >
                  Vorschau
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}