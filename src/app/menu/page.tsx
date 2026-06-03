import { supabase } from "@/lib/supabase";
import AddCategoryForm from "./AddCategoryForm";
import AddProductForm from "./AddProductForm";

export default async function MenuPage() {
  const { data: restaurants } = await supabase
    .from("restaurants")
    .select("*")
    .order("created_at", { ascending: false });

  const firstRestaurant = restaurants?.[0];

  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .eq("restaurant_id", firstRestaurant?.id || "")
    .order("created_at", { ascending: false });

  const { data: products } = await supabase
    .from("products")
    .select("*, categories(name)")
    .eq("restaurant_id", firstRestaurant?.id || "")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Speisekarte verwalten
        </h1>

        <p className="text-gray-600 mb-8">
          Restaurant: {firstRestaurant?.name || "Kein Restaurant gefunden"}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Kategorien</h2>

            {firstRestaurant && (
              <AddCategoryForm restaurantId={firstRestaurant.id} />
            )}

            <ul className="space-y-2">
              {categories?.map((category) => (
                <li key={category.id} className="border p-3 rounded-lg">
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Produkte</h2>

            {firstRestaurant && (
              <AddProductForm
                restaurantId={firstRestaurant.id}
                categories={categories || []}
              />
            )}

            <ul className="space-y-3">
              {products?.map((product) => (
                <li key={product.id} className="border p-3 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-500">
                        {product.categories?.name || "Ohne Kategorie"}
                      </p>
                    </div>

                    <span className="font-bold">{product.price}€</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}