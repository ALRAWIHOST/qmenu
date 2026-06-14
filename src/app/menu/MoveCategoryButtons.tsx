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
    const sortedCategories = [...categories].sort(
      (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
    );

    const currentIndex = sortedCategories.findIndex(
      (item) => item.id === category.id
    );

    if (currentIndex === -1) return;

    const targetIndex =
      direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex < 0 || targetIndex >= sortedCategories.length) return;

    const currentCategory = sortedCategories[currentIndex];
    const targetCategory = sortedCategories[targetIndex];

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
        type="button"
        onClick={() => moveCategory("up")}
        className="rounded-lg border px-2 py-1 text-sm hover:bg-gray-100"
      >
        ↑
      </button>

      <button
        type="button"
        onClick={() => moveCategory("down")}
        className="rounded-lg border px-2 py-1 text-sm hover:bg-gray-100"
      >
        ↓
      </button>
    </div>
  );
}