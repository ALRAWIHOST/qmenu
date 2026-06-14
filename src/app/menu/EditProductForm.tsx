"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type EditProductFormProps = {
  productId: string;
  currentName: string;
  currentPrice: number;
  currentDescription?: string;
  currentImageUrl?: string;
};

export default function EditProductForm({
  productId,
  currentName,
  currentPrice,
  currentDescription = "",
  currentImageUrl = "",
}: EditProductFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentName);
  const [price, setPrice] = useState(String(currentPrice));
  const [description, setDescription] = useState(currentDescription);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!name.trim()) {
      alert("Bitte Produktname eingeben");
      return;
    }

    if (!price.trim()) {
      alert("Bitte Preis eingeben");
      return;
    }

    setLoading(true);

    let imageUrl = currentImageUrl;

    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${productId}-${Date.now()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, imageFile, {
          upsert: true,
        });

      if (uploadError) {
        setLoading(false);
        alert(uploadError.message);
        return;
      }

      const { data } = supabase.storage
        .from("product-images")
        .getPublicUrl(filePath);

      imageUrl = data.publicUrl;
    }

    const { error } = await supabase
      .from("products")
      .update({
        name: name.trim(),
        price: Number(price),
        description,
        image_url: imageUrl,
      })
      .eq("id", productId);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setIsEditing(false);
    window.location.reload();
  };

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        className="rounded-lg border px-3 py-1 text-sm"
      >
        Bearbeiten
      </button>
    );
  }

  return (
    <div className="mt-3 space-y-2">
      {currentImageUrl && (
        <img
          src={currentImageUrl}
          alt={currentName}
          className="h-24 w-24 rounded-xl object-cover"
        />
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files?.[0] || null)}
        className="w-full rounded-lg border p-2 text-sm"
      />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border p-2"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full rounded-lg border p-2"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-lg border p-2"
        rows={3}
      />

      <div className="flex gap-2">
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="rounded-lg bg-black px-3 py-1 text-sm text-white disabled:opacity-50"
        >
          {loading ? "Speichern..." : "Speichern"}
        </button>

        <button
          onClick={() => setIsEditing(false)}
          className="rounded-lg border px-3 py-1 text-sm"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
}