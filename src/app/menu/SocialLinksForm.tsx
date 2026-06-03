"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type SocialLinksFormProps = {
  restaurantId: string;
  currentLinks: {
    whatsapp_url?: string;
    instagram_url?: string;
    facebook_url?: string;
    tiktok_url?: string;
  };
};

export default function SocialLinksForm({
  restaurantId,
  currentLinks,
}: SocialLinksFormProps) {
  const [links, setLinks] = useState({
    whatsapp_url: currentLinks.whatsapp_url || "",
    instagram_url: currentLinks.instagram_url || "",
    facebook_url: currentLinks.facebook_url || "",
    tiktok_url: currentLinks.tiktok_url || "",
  });

  const handleSave = async () => {
    const { error } = await supabase
      .from("restaurants")
      .update(links)
      .eq("id", restaurantId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Social Links gespeichert");
  };

  return (
    <div className="bg-white border rounded-2xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">
        Social Media Links
      </h2>

      <div className="grid md:grid-cols-2 gap-3">
        <input
          placeholder="WhatsApp Link"
          value={links.whatsapp_url}
          onChange={(e) =>
            setLinks({ ...links, whatsapp_url: e.target.value })
          }
          className="border p-3 rounded-lg"
        />

        <input
          placeholder="Instagram Link"
          value={links.instagram_url}
          onChange={(e) =>
            setLinks({ ...links, instagram_url: e.target.value })
          }
          className="border p-3 rounded-lg"
        />

        <input
          placeholder="Facebook Link"
          value={links.facebook_url}
          onChange={(e) =>
            setLinks({ ...links, facebook_url: e.target.value })
          }
          className="border p-3 rounded-lg"
        />

        <input
          placeholder="TikTok Link"
          value={links.tiktok_url}
          onChange={(e) =>
            setLinks({ ...links, tiktok_url: e.target.value })
          }
          className="border p-3 rounded-lg"
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-4 bg-black text-white px-5 py-3 rounded-lg"
      >
        Speichern
      </button>
    </div>
  );
}