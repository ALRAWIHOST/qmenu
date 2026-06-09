"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const updatePassword = async () => {
    if (!password || password.length < 6) {
      alert("Bitte mindestens 6 Zeichen eingeben");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Passwort wurde erfolgreich geändert.");
    window.location.href = "/login";
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Passwort ändern
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Geben Sie Ihr neues Passwort ein.
        </p>

        <input
          type="password"
          placeholder="Neues Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <button
          onClick={updatePassword}
          disabled={loading}
          className="w-full rounded-lg bg-black p-3 text-white disabled:opacity-50"
        >
          {loading ? "Wird gespeichert..." : "Passwort speichern"}
        </button>
      </div>
    </main>
  );
}