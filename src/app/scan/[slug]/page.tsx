import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

type ScanPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ScanPage({ params }: ScanPageProps) {
  const { slug } = await params;

  const { data: restaurant } = await supabase
    .from("restaurants")
    .select("id, slug")
    .eq("slug", slug)
    .single();

  if (!restaurant) {
    redirect("/");
  }

  await supabase.from("qr_scans").insert({
    restaurant_id: restaurant.id,
  });

  redirect(`/s/${restaurant.slug}`);
}