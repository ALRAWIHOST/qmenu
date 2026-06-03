import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("restaurants")
    .select("*");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Restaurants
      </h1>

      <pre>
        {JSON.stringify({ data, error }, null, 2)}
      </pre>
    </main>
  );
}