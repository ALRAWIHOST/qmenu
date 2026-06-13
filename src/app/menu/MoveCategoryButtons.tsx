"use client";

import { supabase } from "@/lib/supabase";

type Category = {
  id: string;
  sort_order: number | null;
};

type MoveCategoryButtonsProps = {
  category: Category;
  categories: Category[];
};

export default function MoveCategoryButtons({
  category,
  categories,
}: MoveCategoryButtonsProps) {
  const moveCategory = async (direction: "up" | "down") => {
    const currentIndex = categories.findIndex((item) => item.id === category.id);

    if (currentIndex === -1) return;

    const targetIndex =
      direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex < 0 || targetIndex >= categories.length) return;

    const currentCategory = categories[currentIndex];
    const targetCategory = categories[targetIndex];

    const currentOrder = currentCategory.sort_order ?? currentIndex;
    const targetOrder = targetCategory.sort_order ?? targetIndex;

    const { error: currentError } = await supabase
      .from("categories")
      .update({ sort_order: targetOrder })
      .eq("id", currentCategory.id);

    if (currentError) {
      alert(currentError.message);
      return;
    }

    const { error: targetError } = await supabase
      .from("categories")
      .update({ sort_order: currentOrder })
      .eq("id", targetCategory.id);

    if (targetError) {
      alert(targetError.message);
      return;
    }

    window.location.reload();
  };

  return (
    <div className="flex gap-1">
      <button
        onClick={() => moveCategory("up")}
        className="rounded-lg border px-2 py-1 text-sm hover:bg-gray-100"
      >
        ↑
      </button>

      <button
        onClick={() => moveCategory("down")}
        className="rounded-lg border px-2 py-1 text-sm hover:bg-gray-100"
      >
        ↓
      </button>
    </div>
  );
}