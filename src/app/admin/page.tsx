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
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </main>
    );
  }

  if (!allowed) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Zugriff verweigert</h1>
      </main>
    );
  }

  const freeCount = restaurants.filter(
    (restaurant) => (restaurant.plan || "free").toLowerCase() === "free"
  ).length;

  const basicCount = restaurants.filter(
    (restaurant) => restaurant.plan === "basic"
  ).length;

  const proCount = restaurants.filter(
    (restaurant) => restaurant.plan === "pro"
  ).length;

  const filteredRestaurants = restaurants.filter((restaurant) =>
  restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
  restaurant.slug.toLowerCase().includes(search.toLowerCase()) ||
  (restaurant.plan || "free")
    .toLowerCase()
    .includes(search.toLowerCase())
);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
  <h1 className="text-4xl font-bold">
    QMenu Admin
  </h1>

  <AdminLogoutButton />
</div>

        <div className="grid md:grid-cols-6 gap-4 mb-8">
          <div className="bg-white border rounded-2xl p-5">
            <div className="text-gray-500 text-sm">Restaurants</div>
            <div className="text-3xl font-bold">{restaurants.length}</div>
          </div>

          <div className="bg-white border rounded-2xl p-5">
            <div className="text-gray-500 text-sm">Menu Views</div>
            <div className="text-3xl font-bold">{menuViews}</div>
          </div>

          <div className="bg-white border rounded-2xl p-5">
            <div className="text-gray-500 text-sm">QR Scans</div>
            <div className="text-3xl font-bold">{qrScans}</div>
          </div>

          <div className="bg-white border rounded-2xl p-5">
            <div className="text-gray-500 text-sm">Free</div>
            <div className="text-3xl font-bold">{freeCount}</div>
          </div>

          <div className="bg-white border rounded-2xl p-5">
            <div className="text-gray-500 text-sm">Basic</div>
            <div className="text-3xl font-bold">{basicCount}</div>
          </div>

          <div className="bg-white border rounded-2xl p-5">
            <div className="text-gray-500 text-sm">Pro</div>
            <div className="text-3xl font-bold">{proCount}</div>
          </div>
        </div>

<div className="bg-white border rounded-2xl p-4 mb-4">
  <input
    type="text"
    placeholder="Search restaurant..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border p-3 rounded-lg"
  />
</div>
        <div className="bg-white border rounded-2xl overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Restaurant</th>
                <th className="text-left p-4">Plan</th>
                <th className="text-left p-4">Slug</th>
                <th className="text-left p-4">Created</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRestaurants.map((restaurant) => (
                <tr key={restaurant.id} className="border-t">
                  <td className="p-4">{restaurant.name}</td>
                  <td className="p-4 uppercase">{restaurant.plan || "free"}</td>
                  <td className="p-4">/s/{restaurant.slug}</td>
                  <td className="p-4">
                    {new Date(restaurant.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4">
  <div className="flex gap-2">
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}