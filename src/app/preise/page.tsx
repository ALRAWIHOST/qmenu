import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preise | QRMenu",
  description:
    "Entdecken Sie die Free-, Basic- und Pro-Pläne von QRMenu für digitale Speisekarten mit QR-Code.",
};

export default function PreisePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <section className="bg-[#111416] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
            Transparente Preise
          </div>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Wählen Sie den passenden Plan
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Starten Sie kostenlos und wechseln Sie jederzeit zu Basic oder Pro.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <h3 className="mb-2 text-2xl font-extrabold">Free</h3>

              <p className="mb-6 text-gray-600">
                Perfekt für den Einstieg
              </p>

              <p className="mb-6 text-5xl font-extrabold">0€</p>

              <ul className="mb-8 space-y-3 text-gray-600">
                <li>✓ Bis zu 5 Produkte</li>
                <li>✓ QR-Code inklusive</li>
                <li>✓ Basis-Menü</li>
              </ul>

              <Link
                href="/register?plan=free"
                className="block w-full rounded-xl border border-black py-3 text-center font-bold"
              >
                Kostenlos starten
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#111416] p-8 text-white shadow-2xl">
              <div className="absolute right-0 top-0 bg-[#d8aa48] px-8 py-2 text-sm font-bold text-black">
                Beliebt
              </div>

              <h3 className="mb-2 text-2xl font-extrabold">Basic</h3>

              <p className="mb-6 text-white/60">
                Für kleine Restaurants
              </p>

              <p className="mb-6 text-5xl font-extrabold">
                9€
                <span className="ml-2 text-base font-medium text-white/60">
                  / Monat
                </span>
              </p>

              <ul className="mb-8 space-y-3 text-white/80">
                <li>✓ Bis zu 50 Produkte</li>
                <li>✓ Logo & Cover-Bild</li>
                <li>✓ Social Links</li>
              </ul>

              <Link
                href="/register?plan=basic"
                className="block w-full rounded-xl bg-[#d8aa48] py-3 text-center font-bold text-black hover:bg-[#e7bd62]"
              >
                Jetzt starten
              </Link>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <h3 className="mb-2 text-2xl font-extrabold">Pro</h3>

              <p className="mb-6 text-gray-600">
                Für Profis
              </p>

              <p className="mb-6 text-5xl font-extrabold">
                19€
                <span className="ml-2 text-base font-medium text-gray-500">
                  / Monat
                </span>
              </p>

              <ul className="mb-8 space-y-3 text-gray-600">
                <li>✓ Unbegrenzte Produkte</li>
                <li>✓ QR-Scan Statistiken</li>
                <li>✓ Priorisierter Support</li>
              </ul>

              <Link
                href="/register?plan=pro"
                className="block w-full rounded-xl border border-black py-3 text-center font-bold"
              >
                Pro wählen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}