"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type EditCategoryFormProps = {
  categoryId: string;
  currentName: string;
};

export default function EditCategoryForm({
  categoryId,
  currentName,
}: EditCategoryFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentName);

  const handleUpdate = async () => {
    if (!name.trim()) {
      alert("Bitte Kategoriename eingeben");
      return;
    }

    const { error } = await supabase
      .from("categories")
      .update({ name })
      .eq("id", categoryId);

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
    <div className="flex gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded-lg"
      />

      <button
        onClick={handleUpdate}
        className="bg-black text-white px-3 py-1 rounded-lg text-sm"
      >
        Speichern
      </button>
    </div>
  );
}