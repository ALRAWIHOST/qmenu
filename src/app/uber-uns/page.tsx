import Link from "next/link";

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <section className="bg-[#111416] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
            Über QMenu
          </div>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Digitale Menüs für moderne Restaurants
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            QMenu hilft Restaurants, Cafés und Food Trucks dabei, ihre
            Speisekarte professionell per QR-Code online zu präsentieren.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
            <h2 className="mb-4 text-3xl font-extrabold">
              Unsere Mission
            </h2>

            <p className="leading-8 text-gray-600">
              Wir möchten Restaurants eine einfache, bezahlbare und moderne
              Lösung geben, um Speisekarten digital zu verwalten und Gäste
              schneller zu erreichen.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
            <h2 className="mb-4 text-3xl font-extrabold">
              Warum QMenu?
            </h2>

            <p className="leading-8 text-gray-600">
              Keine App, kein kompliziertes System. Restaurant erstellen,
              Produkte hinzufügen, QR-Code teilen und sofort online sein.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] bg-[#111416] px-8 py-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-extrabold">
            Einfach. Modern. Schnell.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/70">
            QMenu wurde entwickelt, um digitale Speisekarten für jedes
            Restaurant zugänglich zu machen.
          </p>

          <Link
            href="/demo"
            className="inline-block rounded-xl bg-[#d8aa48] px-8 py-4 font-bold text-black hover:bg-[#e7bd62]"
          >
            Demo ansehen →
          </Link>
        </div>
      </section>
    </main>
  );
}