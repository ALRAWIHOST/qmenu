import { supabase } from "@/lib/supabase";

type PublicMenuPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PublicMenuPage({
  params,
}: PublicMenuPageProps) {
  const { slug } = await params;

  const { data: restaurant } = await supabase
    .from("restaurants")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!restaurant) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold">Restaurant nicht gefunden</h1>
      </main>
    );
  }

  await supabase.from("menu_views").insert({
    restaurant_id: restaurant.id,
  });

  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .eq("restaurant_id", restaurant.id)
    .order("created_at", { ascending: true });

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("restaurant_id", restaurant.id)
    .order("created_at", { ascending: true });

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-gray-900">
      <header className="bg-white border-b">
        <div className="relative">
          {restaurant.cover_url ? (
            <img
              src={restaurant.cover_url}
              alt="Cover"
              className="h-72 w-full object-cover"
            />
          ) : (
            <div className="h-72 w-full bg-gradient-to-r from-gray-900 to-gray-700" />
          )}

          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pb-10 text-center">
          {restaurant.logo_url && (
            <img
              src={restaurant.logo_url}
              alt={restaurant.name}
              className="mx-auto -mt-16 mb-5 h-28 w-28 md:h-32 md:w-32 rounded-3xl border-4 border-white object-cover shadow-xl bg-white"
            />
          )}

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight break-words">
            {restaurant.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            {restaurant.address && <span>📍 {restaurant.address}</span>}
            {restaurant.phone && <span>☎ {restaurant.phone}</span>}
          </div>

          <div className="mt-6 mx-auto max-w-md rounded-2xl border bg-white p-4 text-left">
            <h2 className="mb-3 text-center font-bold">
              Öffnungszeiten
            </h2>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Montag</span>
                <span>{restaurant.monday || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span>Dienstag</span>
                <span>{restaurant.tuesday || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span>Mittwoch</span>
                <span>{restaurant.wednesday || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span>Donnerstag</span>
                <span>{restaurant.thursday || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span>Freitag</span>
                <span>{restaurant.friday || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span>Samstag</span>
                <span>{restaurant.saturday || "-"}</span>
              </div>

              <div className="flex justify-between">
                <span>Sonntag</span>
                <span>{restaurant.sunday || "-"}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {restaurant.whatsapp_url && (
              <a
                href={restaurant.whatsapp_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
            )}

            {restaurant.instagram_url && (
              <a
                href={restaurant.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Instagram
              </a>
            )}

            {restaurant.facebook_url && (
              <a
                href={restaurant.facebook_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Facebook
              </a>
            )}

            {restaurant.tiktok_url && (
              <a
                href={restaurant.tiktok_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
              >
                TikTok
              </a>
            )}
          </div>
        </div>
      </header>
            <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-4 md:px-6 overflow-x-auto">
          <div className="flex gap-3 py-4">
            <a
              href="#all"
              className="whitespace-nowrap rounded-full bg-black px-4 py-2 text-xs font-semibold text-white"
            >
              Alle
            </a>

            {categories?.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold hover:bg-gray-100"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="all" className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Unsere Speisekarte</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-black" />
        </div>

        <div className="space-y-12">
          {categories?.map((category) => {
            const categoryProducts =
              products?.filter(
                (product) => product.category_id === category.id
              ) || [];

            if (categoryProducts.length === 0) return null;

            return (
              <div key={category.id} id={category.id}>
                <h3 className="mb-5 text-2xl font-bold">
                  {category.name}
                </h3>

                <div className="space-y-4">
                  {categoryProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group flex gap-3 rounded-3xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-2xl object-cover"
                        />
                      ) : (
                        <div className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-2xl bg-gray-100" />
                      )}

                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="min-w-0">
                          <h4 className="text-base md:text-lg font-bold break-words">
                            {product.name}
                          </h4>

                          {product.description && (
                            <p className="mt-1 text-sm text-gray-500 break-words">
                              {product.description}
                            </p>
                          )}
                        </div>

                        <span className="self-start whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700">
                          {product.price}€
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}