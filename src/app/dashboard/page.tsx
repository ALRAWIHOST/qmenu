import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function DashboardPage() {
  const { data: restaurants, error } = await supabase
    .from("restaurants")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-8 py-5 flex justify-between">
        <h1 className="text-2xl font-bold">QMenu Dashboard</h1>

        <Link href="/" className="bg-black text-white px-4 py-2 rounded-lg">
          Logout
        </Link>
      </header>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Meine Restaurants</h2>

        {error && (
          <p className="mb-4 text-red-600">
            Fehler: {error.message}
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {restaurants?.map((restaurant) => (
            <div key={restaurant.id} className="bg-white border rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                {restaurant.name}
              </h3>

              <p className="text-gray-600 mb-4">
                /s/{restaurant.slug}
              </p>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="/menu"
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