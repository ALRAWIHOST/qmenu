"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type EditProductFormProps = {
  productId: string;
  currentName: string;
  currentPrice: number;
  currentDescription?: string;
};

export default function EditProductForm({
  productId,
  currentName,
  currentPrice,
  currentDescription = "",
}: EditProductFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentName);
  const [price, setPrice] = useState(String(currentPrice));
  const [description, setDescription] = useState(currentDescription);

  const handleUpdate = async () => {
    if (!name.trim()) {
      alert("Bitte Produktname eingeben");
      return;
    }

    if (!price.trim()) {
      alert("Bitte Preis eingeben");
      return;
    }

    const { error } = await supabase
      .from("products")
      .update({
        name,
        price: Number(price),
        description,
      })
      .eq("id", productId);

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
        className="border px-3 py-1 rounded-lg text-sm"
      >
        Bearbeiten
      </button>
    );
  }

  return (
    <div className="mt-3 space-y-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border p-2 rounded-lg"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded-lg"
        rows={3}
      />

      <div className="flex gap-2">
        <button
          onClick={handleUpdate}
          className="bg-black text-white px-3 py-1 rounded-lg text-sm"
        >
          Speichern
        </button>

        <button
          onClick={() => setIsEditing(false)}
          className="border px-3 py-1 rounded-lg text-sm"
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
}