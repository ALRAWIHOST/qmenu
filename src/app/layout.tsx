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
  title: "QRMenu – Digitale Speisekarten mit QR-Code",
  description:
    "QRMenu bietet digitale Speisekarten mit QR-Code für Restaurants, Cafés und Food Trucks. Professionell, modern und in wenigen Minuten online.",

  icons: {
    icon: "/favicon.ico",
  },

  keywords: [
    "Digitale Speisekarte",
    "QR Code Menü",
    "Restaurant Menü",
    "Digitales Menü",
    "QR Menü",
    "Restaurant Software",
    "Speisekarte Online",
    "QRMenu",
    "menu-qrcode.de",
  ],

  authors: [
    {
      name: "Mahmoud Alrawi",
    },
  ],

  creator: "QRMenu",
  publisher: "QRMenu",

  openGraph: {
    title: "QRMenu – Digitale Speisekarten mit QR-Code",
    description:
      "Digitale Speisekarten für Restaurants, Cafés und Food Trucks mit QR-Code, Branding und Statistiken.",
    type: "website",
    locale: "de_DE",
    siteName: "QRMenu",
    url: "https://menu-qrcode.de",
  },

  twitter: {
    card: "summary_large_image",
    title: "QRMenu – Digitale Speisekarten mit QR-Code",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}