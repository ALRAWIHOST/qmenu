"use client";

import { supabase } from "@/lib/supabase";

type UpgradePlanButtonProps = {
  restaurantId: string;
  newPlan: "basic" | "pro";
};

export default function UpgradePlanButton({
  restaurantId,
  newPlan,
}: UpgradePlanButtonProps) {
  const handleUpgrade = async () => {
    const { error } = await supabase
      .from("restaurants")
      .update({ plan: newPlan })
      .eq("id", restaurantId);

    if (error) {
      alert(error.message);
      return;
    }

    window.location.reload();
  };

  return (
    <button
      onClick={handleUpgrade}
      className="border px-4 py-2 rounded-lg"
    >
      Upgrade auf {newPlan.toUpperCase()}
    </button>
  );
}