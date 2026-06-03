"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-black text-white px-4 py-2 rounded-lg"
    >
      Logout
    </button>
  );
}