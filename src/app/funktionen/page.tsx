import Link from "next/link";

export default function FunktionenPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <section className="bg-[#111416] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
            QMenu Funktionen
          </div>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Alles für Ihr digitales Menü
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Verwalten Sie Speisekarten, QR-Codes, Branding und Statistiken
            einfach an einem Ort.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                ▦
              </div>

              <h2 className="mb-3 text-xl font-extrabold">
                Digitale Speisekarte
              </h2>

              <p className="text-gray-600">
                Erstellen Sie ein modernes Online-Menü für Ihr Restaurant,
                Café oder Ihren Food Truck.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                ⌁
              </div>

              <h2 className="mb-3 text-xl font-extrabold">
                QR-Code
              </h2>

              <p className="text-gray-600">
                Teilen Sie Ihre Speisekarte einfach per QR-Code mit Ihren
                Gästen.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                ◉
              </div>

              <h2 className="mb-3 text-xl font-extrabold">
                Branding
              </h2>

              <p className="text-gray-600">
                Logo, Cover-Bild, Öffnungszeiten und Social Links für einen
                professionellen Auftritt.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                ↗
              </div>

              <h2 className="mb-3 text-xl font-extrabold">
                Statistiken
              </h2>

              <p className="text-gray-600">
                Sehen Sie Menü-Aufrufe und QR-Scans direkt in Ihrem Dashboard.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                ✓
              </div>

              <h2 className="mb-3 text-xl font-extrabold">
                Einfache Verwaltung
              </h2>

              <p className="text-gray-600">
                Produkte, Kategorien und Preise jederzeit selbst bearbeiten.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                24
              </div>

              <h2 className="mb-3 text-xl font-extrabold">
                Immer online
              </h2>

              <p className="text-gray-600">
                Ihre digitale Speisekarte ist jederzeit erreichbar, ohne App.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] bg-[#111416] px-8 py-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-extrabold">
              Bereit für Ihr digitales Menü?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-white/70">
              Starten Sie kostenlos und testen Sie QMenu direkt in Ihrem
              Restaurant.
            </p>

            <Link
              href="/register"
              className="inline-block rounded-xl bg-[#d8aa48] px-8 py-4 font-bold text-black hover:bg-[#e7bd62]"
            >
              Kostenlos starten →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}