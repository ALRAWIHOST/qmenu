"use client";

import { useState } from "react";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import DeleteProductButton from "./DeleteProductButton";

type Category = {
  id: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  description?: string | null;
  category_id?: string | null;
  categories?: {
    name: string;
  } | null;
};

type ProductsManagerProps = {
  restaurantId: string;
  categories: Category[];
  products: Product[];
};

export default function ProductsManager({
  restaurantId,
  categories,
  products,
}: ProductsManagerProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");

  const filteredProducts =
    selectedCategoryId === "all"
      ? products
      : products.filter((product) => product.category_id === selectedCategoryId);

  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Produkte</h2>

      <AddProductForm restaurantId={restaurantId} categories={categories} />

      <div className="mb-5 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategoryId("all")}
          className={`rounded-lg border px-4 py-2 text-sm font-semibold ${
            selectedCategoryId === "all"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Alle
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategoryId(category.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold ${
              selectedCategoryId === category.id
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <ul className="space-y-3">
        {filteredProducts.length === 0 ? (
          <li className="rounded-lg border p-4 text-sm text-gray-500">
            Keine Produkte in dieser Kategorie.
          </li>
        ) : (
          filteredProducts.map((product) => (
            <li key={product.id} className="border p-3 rounded-lg">
              <div className="flex justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{product.name}</h3>

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
                  <span className="font-bold">{product.price}€</span>

                  <div className="flex gap-2">
                    <EditProductForm
                      productId={product.id}
                      currentName={product.name}
                      currentPrice={product.price}
                      currentDescription={product.description || ""}
                      currentImageUrl={product.image_url || ""}
                    />

                    <DeleteProductButton productId={product.id} />
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}