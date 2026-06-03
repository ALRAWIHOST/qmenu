"use client";

import { supabase } from "@/lib/supabase";

type DeleteProductButtonProps = {
  productId: string;
};

export default function DeleteProductButton({
  productId,
}: DeleteProductButtonProps) {
  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Möchten Sie dieses Produkt wirklich löschen?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", productId);

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