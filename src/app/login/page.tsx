"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Bitte E-Mail und Passwort eingeben");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
  alert(error.message);
  return;
}

window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <input
          type="email"
          placeholder="E-Mail"
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
          onClick={handleLogin}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Anmelden
        </button>
      </div>
    </main>
  );
}