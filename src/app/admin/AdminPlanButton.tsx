"use client";

import { supabase } from "@/lib/supabase";

type AdminPlanButtonProps = {
  restaurantId: string;
  plan: "free" | "basic" | "pro";
};

export default function AdminPlanButton({
  restaurantId,
  plan,
}: AdminPlanButtonProps) {
  const handleUpdate = async () => {
    const { error } = await supabase
      .from("restaurants")
      .update({ plan })
      .eq("id", restaurantId);

    if (error) {
      alert(error.message);
      return;
    }

    alert(`Plan geändert zu ${plan.toUpperCase()}`);

    window.location.reload();
  };

  return (
    <button
      onClick={handleUpdate}
      className="border px-3 py-1 rounded-lg text-xs"
    >
      {plan.toUpperCase()}
    </button>
  );
}