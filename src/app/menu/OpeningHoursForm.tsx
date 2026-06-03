"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type OpeningHoursFormProps = {
  restaurantId: string;
  currentHours: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
};

export default function OpeningHoursForm({
  restaurantId,
  currentHours,
}: OpeningHoursFormProps) {
  const [hours, setHours] = useState({
    monday: currentHours.monday || "",
    tuesday: currentHours.tuesday || "",
    wednesday: currentHours.wednesday || "",
    thursday: currentHours.thursday || "",
    friday: currentHours.friday || "",
    saturday: currentHours.saturday || "",
    sunday: currentHours.sunday || "",
  });

  const handleChange = (day: keyof typeof hours, value: string) => {
    setHours((prev) => ({
      ...prev,
      [day]: value,
    }));
  };

  const handleSave = async () => {
    const { error } = await supabase
      .from("restaurants")
      .update(hours)
      .eq("id", restaurantId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Öffnungszeiten gespeichert");
  };

  return (
    <div className="bg-white border rounded-2xl p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">
        Öffnungszeiten
      </h2>

      <div className="grid md:grid-cols-2 gap-3">
        <input
          placeholder="Montag z.B. 09:00 - 22:00"
          value={hours.monday}
          onChange={(e) => handleChange("monday", e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          placeholder="Dienstag z.B. 09:00 - 22:00"
          value={hours.tuesday}
          onChange={(e) => handleChange("tuesday", e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          placeholder="Mittwoch z.B. 09:00 - 22:00"
          value={hours.wednesday}
          onChange={(e) => handleChange("wednesday", e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          placeholder="Donnerstag z.B. 09:00 - 22:00"
          value={hours.thursday}
          onChange={(e) => handleChange("thursday", e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          placeholder="Freitag z.B. 09:00 - 23:00"
          value={hours.friday}
          onChange={(e) => handleChange("friday", e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          placeholder="Samstag z.B. 09:00 - 23:00"
          value={hours.saturday}
          onChange={(e) => handleChange("saturday", e.target.value)}
          className="border p-3 rounded-lg"
        />

        <input
          placeholder="Sonntag z.B. Geschlossen"
          value={hours.sunday}
          onChange={(e) => handleChange("sunday", e.target.value)}
          className="border p-3 rounded-lg md:col-span-2"
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