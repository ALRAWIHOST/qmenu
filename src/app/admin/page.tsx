"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import AdminPlanButton from "./AdminPlanButton";
import DeleteRestaurantButton from "./DeleteRestaurantButton";
import AdminLogoutButton from "./AdminLogoutButton";

type Restaurant = {
  id: string;
  name: string;
  slug: string;
  plan?: string;
  created_at: string;
  paypal_subscription_id?: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [menuViews, setMenuViews] = useState(0);
  const [qrScans, setQrScans] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadAdminData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user || !user.email) {
        router.push("/admin/login");
        return;
      }

      const { data: admin } = await supabase
        .from("admins")
        .select("*")
        .eq("email", user.email)
        .single();

      if (!admin) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      setAllowed(true);

      const { data: restaurantData } = await supabase
        .from("restaurants")
        .select("*")
        .order("created_at", { ascending: false });

      const { count: menuViewsCount } = await supabase
        .from("menu_views")
        .select("*", { count: "exact", head: true });

      const { count: qrScansCount } = await supabase
        .from("qr_scans")
        .select("*", { count: "exact", head: true });

      setRestaurants(restaurantData || []);
      setMenuViews(menuViewsCount || 0);
      setQrScans(qrScansCount || 0);
      setLoading(false);
    };

    loadAdminData();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#111416] text-white">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </main>
    );
  }

  if (!allowed) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#111416] text-white">
        <h1 className="text-3xl font-bold">Zugriff verweigert</h1>
      </main>
    );
  }

  const freeCount = restaurants.filter(
    (restaurant) => (restaurant.plan || "free").toLowerCase() === "free"
  ).length;

  const basicCount = restaurants.filter(
    (restaurant) => (restaurant.plan || "free").toLowerCase() === "basic"
  ).length;

  const proCount = restaurants.filter(
    (restaurant) => (restaurant.plan || "free").toLowerCase() === "pro"
  ).length;

  const activeSubscriptions = restaurants.filter(
    (restaurant) => restaurant.paypal_subscription_id
  ).length;

  const expectedMrr = basicCount * 9 + proCount * 19;

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const plan = restaurant.plan || "free";

    return (
      restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.slug.toLowerCase().includes(search.toLowerCase()) ||
      plan.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-gray-950">
      <header className="bg-[#111416] text-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-bold text-[#d8aa48]">
                Plattform Verwaltung
              </p>

              <h1 className="text-4xl font-extrabold">
                QMenu Admin
              </h1>

              <p className="mt-2 text-white/60">
                Übersicht über Restaurants, Pläne, Views, QR-Scans und Umsatz.
              </p>
            </div>

            <AdminLogoutButton />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">Restaurants</div>
              <div className="mt-2 text-4xl font-extrabold">
                {restaurants.length}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">Aktive Abos</div>
              <div className="mt-2 text-4xl font-extrabold">
                {activeSubscriptions}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">MRR erwartet</div>
              <div className="mt-2 text-4xl font-extrabold">
                {expectedMrr}€
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">Traffic</div>
              <div className="mt-2 text-4xl font-extrabold">
                {menuViews + qrScans}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 grid gap-4 md:grid-cols-6">
          <div className="rounded-2xl border bg-white p-5">
            <div className="text-sm text-gray-500">Menu Views</div>
            <div className="text-3xl font-extrabold">{menuViews}</div>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <div className="text-sm text-gray-500">QR Scans</div>
            <div className="text-3xl font-extrabold">{qrScans}</div>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <div className="text-sm text-gray-500">Free</div>
            <div className="text-3xl font-extrabold">{freeCount}</div>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <div className="text-sm text-gray-500">Basic</div>
            <div className="text-3xl font-extrabold">{basicCount}</div>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <div className="text-sm text-gray-500">Pro</div>
            <div className="text-3xl font-extrabold">{proCount}</div>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <div className="text-sm text-gray-500">Conversion</div>
            <div className="text-3xl font-extrabold">
              {restaurants.length > 0
                ? Math.round(
                    ((basicCount + proCount) / restaurants.length) * 100
                  )
                : 0}
              %
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border bg-white p-4">
          <input
            type="text"
            placeholder="Search restaurant, slug or plan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border p-3 outline-none focus:border-[#d8aa48]"
          />
        </div>

        <div className="overflow-x-auto rounded-2xl border bg-white">
          <table className="w-full min-w-[900px]">
            <thead className="bg-[#111416] text-white">
              <tr>
                <th className="p-4 text-left">Restaurant</th>
<th className="p-4 text-left">Plan</th>
<th className="p-4 text-left">Subscription</th>
<th className="p-4 text-left">MRR</th>
<th className="p-4 text-left">Slug</th>
<th className="p-4 text-left">Created</th>
<th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRestaurants.map((restaurant) => {
                const plan = (restaurant.plan || "free").toLowerCase();

                return (
                  <tr key={restaurant.id} className="border-t">
                    <td className="p-4 font-bold">{restaurant.name}</td>

                    <td className="p-4">
                      <span className="rounded-full bg-[#f1e6cf] px-3 py-1 text-xs font-extrabold uppercase text-[#7a5a16]">
                        {plan}
                      </span>
                    </td>

                    <td className="p-4">
  {restaurant.paypal_subscription_id ? (
    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
      Active
    </span>
  ) : (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
      None
    </span>
  )}
</td>

<td className="p-4">
  {plan === "pro" ? (
    <span className="font-extrabold text-emerald-600">
      19€
    </span>
  ) : plan === "basic" ? (
    <span className="font-extrabold text-blue-600">
      9€
    </span>
  ) : (
    <span className="font-bold text-gray-400">
      0€
    </span>
  )}
</td>

<td className="p-4 text-gray-600">
  /s/{restaurant.slug}
</td>

<td className="p-4 text-gray-600">
  {new Date(restaurant.created_at).toLocaleDateString()}
</td>

                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        <AdminPlanButton
                          restaurantId={restaurant.id}
                          plan="free"
                        />

                        <AdminPlanButton
                          restaurantId={restaurant.id}
                          plan="basic"
                        />

                        <AdminPlanButton
                          restaurantId={restaurant.id}
                          plan="pro"
                        />

                        <DeleteRestaurantButton
                          restaurantId={restaurant.id}
                          restaurantName={restaurant.name}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}