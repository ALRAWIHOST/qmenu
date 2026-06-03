"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Category = {
  id: string;
  name: string;
};

type AddProductFormProps = {
  restaurantId: string;
  categories: Category[];
};

export default function AddProductForm({
  restaurantId,
  categories,
}: AddProductFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleAddProduct = async () => {
    if (!name.trim()) {
      alert("Bitte Produktname eingeben");
      return;
    }

    if (!price.trim()) {
      alert("Bitte Preis eingeben");
      return;
    }

    let imageUrl = "";

    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${restaurantId}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, imageFile);

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      const { data } = supabase.storage
        .from("product-images")
        .getPublicUrl(filePath);

      imageUrl = data.publicUrl;
    }

    const { error } = await supabase.from("products").insert({
      restaurant_id: restaurantId,
      category_id: categoryId || null,
      name,
      price: Number(price),
      description: "",
      image_url: imageUrl,
      is_available: true,
    });

    if (error) {
      alert(error.message);
      return;
    }

    setName("");
    setPrice("");
    setCategoryId("");
    setImageFile(null);
    window.location.reload();
  };

  return (
    <div className="mb-6 space-y-3">
      <input
        type="text"
        placeholder="Produktname"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="number"
        placeholder="Preis"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border p-3 rounded-lg"
      />

      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        className="w-full border p-3 rounded-lg"
      >
        <option value="">Kategorie wählen</option>

        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files?.[0] || null)}
        className="w-full border p-3 rounded-lg"
      />

      <button
        onClick={handleAddProduct}
        className="w-full bg-black text-white px-4 py-3 rounded-lg"
      >
        Produkt hinzufügen
      </button>
    </div>
  );
}