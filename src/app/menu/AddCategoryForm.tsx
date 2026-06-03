"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type AddCategoryFormProps = {
  restaurantId: string;
};

export default function AddCategoryForm({
  restaurantId,
}: AddCategoryFormProps) {
  const [name, setName] = useState("");

  const handleAddCategory = async () => {
    if (!name.trim()) {
      alert("Bitte Kategorie-Name eingeben");
      return;
    }

    const { error } = await supabase.from("categories").insert({
      restaurant_id: restaurantId,
      name: name,
    });

    if (error) {
      alert(error.message);
      return;
    }

    setName("");
    window.location.reload();
  };

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Kategorie Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 border p-3 rounded-lg"
      />

      <button
        onClick={handleAddCategory}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Hinzufügen
      </button>
    </div>
  );
}