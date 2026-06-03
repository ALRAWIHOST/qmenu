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
              className="mx-auto -mt-24 mb-6 h-40 w-40 rounded-3xl border-8 border-white object-cover shadow-2xl bg-white"
            />
          )}

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight break-words">
            {restaurant.name}
          </h1>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-gray-600">
            {restaurant.address && <span>📍 {restaurant.address}</span>}
            {restaurant.phone && <span>☎ {restaurant.phone}</span>}
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-6 overflow-x-auto">
          <div className="flex gap-3 py-4">
            <a
              href="#all"
              className="whitespace-nowrap rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
            >
              Alle
            </a>

            {categories?.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold hover:bg-gray-100"
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
                <h3 className="mb-5 text-2xl font-bold">{category.name}</h3>

                <div className="space-y-4">
                  {categoryProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group flex gap-4 rounded-3xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="h-24 w-24 md:h-28 md:w-28 shrink-0 rounded-2xl object-cover"
                        />
                      ) : (
                        <div className="h-24 w-24 md:h-28 md:w-28 shrink-0 rounded-2xl bg-gray-100" />
                      )}

                      <div className="flex min-w-0 flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <div className="min-w-0">
                          <h4 className="text-lg md:text-xl font-bold break-words">
                            {product.name}
                          </h4>

                          {product.description && (
                            <p className="mt-1 text-sm md:text-base text-gray-500 break-words">
                              {product.description}
                            </p>
                          )}
                        </div>

                        <span className="self-start md:self-auto whitespace-nowrap rounded-full bg-emerald-50 px-3 py-1 text-lg font-bold text-emerald-700">
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