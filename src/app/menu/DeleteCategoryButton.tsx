"use client";

import { supabase } from "@/lib/supabase";

type DeleteCategoryButtonProps = {
  categoryId: string;
};

export default function DeleteCategoryButton({
  categoryId,
}: DeleteCategoryButtonProps) {
  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Möchten Sie diese Kategorie wirklich löschen? Produkte bleiben erhalten, aber ohne Kategorie."
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("categories")
      .delete()
      .eq("id", categoryId);

    if (error) {
      alert(error.message);
      return;
    }

    window.location.reload();
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 border border-red-600 px-3 py-1 rounded-lg text-sm"
    >
      Löschen
    </button>
  );
}