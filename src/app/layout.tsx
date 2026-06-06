import type { Metadata } from "next";
import Link from "next/link";
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
  title: "QMenu",
  description: "Digitale Speisekarten mit QR-Code",
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
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} QMenu. Alle Rechte vorbehalten.
            </p>

            <div className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/impressum"
                className="text-gray-600 hover:text-black"
              >
                Impressum
              </Link>

              <Link
                href="/datenschutz"
                className="text-gray-600 hover:text-black"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}