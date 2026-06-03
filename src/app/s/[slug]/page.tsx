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

  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .eq("restaurant_id", restaurant?.id || "")
    .order("created_at", { ascending: true });

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("restaurant_id", restaurant?.id || "")
    .order("created_at", { ascending: true });

  if (!restaurant) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Restaurant nicht gefunden</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-6 py-8 text-center">
        <h1 className="text-4xl font-bold">{restaurant.name}</h1>
        <p className="text-gray-500 mt-2">{restaurant.address}</p>
      </header>

      <section className="max-w-3xl mx-auto p-6">
        {categories?.map((category) => (
          <div key={category.id} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>

            <div className="space-y-4">
              {products
                ?.filter((product) => product.category_id === category.id)
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border rounded-2xl p-4 flex gap-4"
                  >
                    {product.image_url && (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-24 w-24 rounded-xl object-cover"
                      />
                    )}

                    <div className="flex-1">
                      <div className="flex justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {product.name}
                          </h3>

                          {product.description && (
                            <p className="text-gray-500">
                              {product.description}
                            </p>
                          )}
                        </div>

                        <span className="font-bold whitespace-nowrap">
                          {product.price}€
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}