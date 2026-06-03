import { supabase } from "@/lib/supabase";
import AddCategoryForm from "./AddCategoryForm";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import DeleteProductButton from "./DeleteProductButton";
import DeleteCategoryButton from "./DeleteCategoryButton";
import EditCategoryForm from "./EditCategoryForm";
import RestaurantBrandingForm from "./RestaurantBrandingForm";
import OpeningHoursForm from "./OpeningHoursForm";
import SocialLinksForm from "./SocialLinksForm";

type MenuPageProps = {
  searchParams: Promise<{
    restaurantId?: string;
  }>;
};

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const { restaurantId } = await searchParams;

  const { data: restaurant } = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", restaurantId || "")
    .single();

  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .eq("restaurant_id", restaurant?.id || "")
    .order("created_at", { ascending: false });

  const { data: products } = await supabase
    .from("products")
    .select("*, categories(name)")
    .eq("restaurant_id", restaurant?.id || "")
    .order("created_at", { ascending: false });

  if (!restaurant) {
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-4">
            Restaurant nicht gefunden
          </h1>

          <p className="text-gray-600">
            Bitte öffnen Sie die Speisekarte über das Dashboard.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Speisekarte verwalten
        </h1>

        <p className="text-gray-600 mb-8">
          Restaurant: {restaurant.name}
        </p>
        <OpeningHoursForm
  restaurantId={restaurant.id}
  currentHours={{
    monday: restaurant.monday,
    tuesday: restaurant.tuesday,
    wednesday: restaurant.wednesday,
    thursday: restaurant.thursday,
    friday: restaurant.friday,
    saturday: restaurant.saturday,
    sunday: restaurant.sunday,
  }}
/>
<SocialLinksForm
  restaurantId={restaurant.id}
  currentLinks={{
    whatsapp_url: restaurant.whatsapp_url,
    instagram_url: restaurant.instagram_url,
    facebook_url: restaurant.facebook_url,
    tiktok_url: restaurant.tiktok_url,
  }}
/>
        <RestaurantBrandingForm
  restaurantId={restaurant.id}
  currentLogoUrl={restaurant.logo_url || ""}
  currentCoverUrl={restaurant.cover_url || ""}
/>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Kategorien
            </h2>

            <AddCategoryForm restaurantId={restaurant.id} />

            <ul className="space-y-2">
              {categories?.map((category) => (
                <li
                  key={category.id}
                  className="border p-3 rounded-lg flex justify-between items-center"
                >
                  <span>{category.name}</span>

                  <div className="flex gap-2">
                    <EditCategoryForm
                      categoryId={category.id}
                      currentName={category.name}
                    />

                    <DeleteCategoryButton categoryId={category.id} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Produkte
            </h2>

            <AddProductForm
              restaurantId={restaurant.id}
              categories={categories || []}
            />

            <ul className="space-y-3">
              {products?.map((product) => (
                <li key={product.id} className="border p-3 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {product.categories?.name || "Ohne Kategorie"}
                      </p>

                      {product.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {product.description}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="font-bold">
                        {product.price}€
                      </span>

                      <div className="flex gap-2">
                        <EditProductForm
                          productId={product.id}
                          currentName={product.name}
                          currentPrice={product.price}
                          currentDescription={product.description || ""}
                        />

                        <DeleteProductButton productId={product.id} />
                      </div>
                    </div>
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