import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "QRMenu",
    short_name: "QRMenu",
    description:
      "Digitale Speisekarten mit QR-Code für Restaurants, Cafés und Food Trucks.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#111416",
    theme_color: "#d8aa48",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}