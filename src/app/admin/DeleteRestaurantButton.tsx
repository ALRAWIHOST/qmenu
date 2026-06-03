"use client";

import { supabase } from "@/lib/supabase";

type DeleteRestaurantButtonProps = {
  restaurantId: string;
  restaurantName: string;
};

export default function DeleteRestaurantButton({
  restaurantId,
  restaurantName,
}: DeleteRestaurantButtonProps) {
  const handleDelete = async () => {
    const confirmDelete = confirm(
      `Möchten Sie "${restaurantName}" wirklich löschen?`
    );

    if (!confirmDelete) return;

    await supabase.from("products").delete().eq("restaurant_id", restaurantId);
    await supabase.from("categories").delete().eq("restaurant_id", restaurantId);
    await supabase.from("menu_views").delete().eq("restaurant_id", restaurantId);
    await supabase.from("qr_scans").delete().eq("restaurant_id", restaurantId);

    const { error } = await supabase
      .from("restaurants")
      .delete()
      .eq("id", restaurantId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Restaurant gelöscht");
    window.location.reload();
  };

  return (
    <button
      onClick={handleDelete}
      className="border border-red-600 text-red-600 px-3 py-1 rounded-lg text-xs"
    >
      DELETE
    </button>
  );
}