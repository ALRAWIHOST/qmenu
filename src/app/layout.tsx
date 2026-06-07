import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QMenu – Digitale Speisekarten mit QR-Code",
  description:
    "Erstellen Sie professionelle digitale Speisekarten mit QR-Code für Restaurants, Cafés und Food Trucks. Einfach, modern und in wenigen Minuten online.",

  keywords: [
    "Digitale Speisekarte",
    "QR Code Menü",
    "Restaurant Menü",
    "Digitales Menü",
    "QR Menü",
    "Restaurant Software",
    "Speisekarte Online",
    "QMenu",
  ],

  authors: [
    {
      name: "Mahmoud Alrawi",
    },
  ],

  creator: "QMenu",
  publisher: "QMenu",

  openGraph: {
    title: "QMenu – Digitale Speisekarten mit QR-Code",
    description:
      "Digitale Speisekarten für Restaurants, Cafés und Food Trucks mit QR-Code, Branding und Statistiken.",
    type: "website",
    locale: "de_DE",
    siteName: "QMenu",
  },

  twitter: {
    card: "summary_large_image",
    title: "QMenu – Digitale Speisekarten mit QR-Code",
    description:
      "Professionelle digitale Speisekarten für moderne Restaurants.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}