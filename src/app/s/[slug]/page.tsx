import { supabase } from "@/lib/supabase";

type PublicMenuPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PublicMenuPage({ params }: PublicMenuPageProps) {
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

  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <main className="min-h-screen bg-[#f7f4ed] text-gray-950">
      <header className="relative bg-[#111416] text-white">
        <div className="relative h-80 overflow-hidden">
          {restaurant.cover_url ? (
            <img
              src={restaurant.cover_url}
              alt="Cover"
              className="h-full w-full object-cover opacity-70"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-[#111416] to-[#3b2f1a]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#111416] via-black/40 to-black/20" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-10 text-center">
          {restaurant.logo_url && (
            <img
              src={restaurant.logo_url}
              alt={restaurant.name}
              className="mx-auto -mt-20 mb-5 h-32 w-32 rounded-3xl border-4 border-white object-cover bg-white shadow-2xl"
            />
          )}

          <div className="mb-3 text-[#d8aa48] text-sm font-bold tracking-wide">
  Digitale Speisekarte
</div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight break-words">
            {restaurant.name}
          </h1>

          <p className="mt-3 text-white/70">
            Willkommen bei unserer digitalen Speisekarte
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            {restaurant.address && <span>📍 {restaurant.address}</span>}
            {restaurant.phone && <span>☎ {restaurant.phone}</span>}
          </div>

          <div className="mt-6 mx-auto max-w-md rounded-3xl border border-white/10 bg-white/10 p-4 text-left backdrop-blur">
            <h2 className="mb-3 text-center font-bold text-white">
              Öffnungszeiten
            </h2>

            <div className="space-y-2 text-sm text-white/70">
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

      {featuredProducts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 md:px-6 py-10">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-[#9a6b16]">
                Empfehlung des Chefs
              </p>
              <h2 className="text-3xl font-extrabold">
                Beliebte Gerichte
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl border bg-white p-4 shadow-sm"
              >
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="mb-4 h-40 w-full rounded-2xl object-cover"
                  />
                ) : (
                  <div className="mb-4 h-40 w-full rounded-2xl bg-gray-100" />
                )}

                <h3 className="font-extrabold">{product.name}</h3>

                {product.description && (
                  <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                  </p>
                )}

                <p className="mt-3 inline-block rounded-full bg-[#f1e6cf] px-3 py-1 text-sm font-bold text-[#7a5a16]">
                  {product.price}€
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <nav className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 md:px-6 overflow-x-auto">
          <div className="flex gap-3 py-4">
            <a
              href="#all"
              className="whitespace-nowrap rounded-full bg-[#111416] px-4 py-2 text-xs font-semibold text-white"
            >
              Alle
            </a>

            {categories?.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="whitespace-nowrap rounded-full border bg-white px-4 py-2 text-xs font-semibold hover:bg-gray-100"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="all" className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-bold text-[#9a6b16]">
            Frisch zubereitet
          </p>
          <h2 className="text-3xl font-extrabold">Unsere Speisekarte</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#d8aa48]" />
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
                <h3 className="mb-5 text-2xl font-extrabold">
                  {category.name}
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
  {categoryProducts.map((product) => (
    <div
      key={product.id}
      className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {product.image_url ? (
        <img
          src={product.image_url}
          alt={product.name}
          className="h-56 w-full object-cover"
        />
      ) : (
        <div className="flex h-56 items-center justify-center bg-[#f1e6cf] text-5xl">
          🍽️
        </div>
      )}

      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h4 className="text-lg font-extrabold leading-tight break-words">
            {product.name}
          </h4>

          <span className="rounded-full bg-[#f1e6cf] px-4 py-1.5 text-sm font-bold text-[#7a5a16]">
            {Number(product.price).toFixed(2)} €
          </span>
        </div>

        {product.description && (
          <p className="text-sm leading-6 text-gray-500">
            {product.description}
          </p>
        )}

        {product.is_available === false && (
          <div className="mt-4 inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
            Nicht verfügbar
          </div>
        )}
      </div>
    </div>
  ))}
</div>
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="h-24 w-24 md:h-28 md:w-28 shrink-0 rounded-2xl object-cover"
                        />
                      ) : (
                        <div className="h-24 w-24 md:h-28 md:w-28 shrink-0 rounded-2xl bg-gray-100" />
                      )}

                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="min-w-0">
                          <h4 className="text-base md:text-lg font-extrabold break-words">
                            {product.name}
                          </h4>

                          {product.description && (
                            <p className="mt-1 text-sm text-gray-500 break-words">
                              {product.description}
                            </p>
                          )}
                        </div>

                        <span className="self-start whitespace-nowrap rounded-full bg-[#f1e6cf] px-3 py-1 text-sm font-bold text-[#7a5a16]">
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

      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-12">
        <div className="rounded-3xl bg-[#111416] p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">
            Powered by QMenu
          </h2>
          <p className="text-white/70">
            Digitale Speisekarten mit QR-Code für moderne Restaurants.
          </p>
        </div>
      </section>
    </main>
  );
}