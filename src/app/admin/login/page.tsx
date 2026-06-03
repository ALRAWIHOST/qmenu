"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Bitte E-Mail und Passwort eingeben");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    const userEmail = data.user?.email;

    if (!userEmail) {
      alert("Benutzer nicht gefunden");
      return;
    }

    const { data: admin } = await supabase
      .from("admins")
      .select("*")
      .eq("email", userEmail)
      .single();

    if (!admin) {
      await supabase.auth.signOut();
      alert("Kein Admin-Zugriff");
      return;
    }

    window.location.href = "/admin";
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md border bg-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-center">Admin Login</h1>

        <p className="text-center text-gray-500 mb-6">
          QMenu Plattform-Verwaltung
        </p>

        <input
          type="email"
          placeholder="Admin E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleAdminLogin}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Admin anmelden
        </button>
      </div>
    </main>
  );
}