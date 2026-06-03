"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type RestaurantBrandingFormProps = {
  restaurantId: string;
  currentLogoUrl?: string;
  currentCoverUrl?: string;
};

export default function RestaurantBrandingForm({
  restaurantId,
  currentLogoUrl,
  currentCoverUrl,
}: RestaurantBrandingFormProps) {
  const [logoUrl, setLogoUrl] = useState(currentLogoUrl || "");
  const [coverUrl, setCoverUrl] = useState(currentCoverUrl || "");

  const uploadImage = async (file: File, type: "logo" | "cover") => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${type}-${Date.now()}.${fileExt}`;
    const filePath = `${restaurantId}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("restaurant-images")
      .upload(filePath, file);

    if (uploadError) {
      alert(uploadError.message);
      return;
    }

    const { data } = supabase.storage
      .from("restaurant-images")
      .getPublicUrl(filePath);

    const publicUrl = data.publicUrl;

    const { error } = await supabase
      .from("restaurants")
      .update({
        [type === "logo" ? "logo_url" : "cover_url"]: publicUrl,
      })
      .eq("id", restaurantId);

    if (error) {
      alert(error.message);
      return;
    }

    if (type === "logo") {
      setLogoUrl(publicUrl);
    } else {
      setCoverUrl(publicUrl);
    }

    alert("Bild erfolgreich hochgeladen");
  };

  return (
    <div className="bg-white border rounded-2xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">
        Restaurant Branding
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Logo</h3>

          {logoUrl && (
            <img
              src={logoUrl}
              alt="Restaurant Logo"
              className="h-24 w-24 rounded-xl object-cover border mb-3"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) uploadImage(file, "logo");
            }}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <h3 className="font-semibold mb-2">Cover Image</h3>

          {coverUrl && (
            <img
              src={coverUrl}
              alt="Restaurant Cover"
              className="h-24 w-full rounded-xl object-cover border mb-3"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) uploadImage(file, "cover");
            }}
            className="w-full border p-3 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}