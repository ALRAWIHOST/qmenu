import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | QRMenu",
  description:
    "Kontaktieren Sie das QRMenu Team für Fragen, Support und individuelle Lösungen rund um digitale Speisekarten mit QR-Code.",
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <section className="bg-[#111416] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
            Kontakt
          </div>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Wir helfen Ihnen gerne weiter
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Haben Sie Fragen zu QRMenu? Kontaktieren Sie uns jederzeit.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border bg-white p-10 shadow-lg shadow-gray-100">
            <h2 className="mb-8 text-3xl font-extrabold">
              Kontaktinformationen
            </h2>

            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1e6cf] text-xl">
                  📧
                </div>

                <div>
                  <h3 className="font-bold">E-Mail</h3>
                  <p className="text-gray-600">
                    mahmoud.alrawi@web.de
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1e6cf] text-xl">
                  ⏱
                </div>

                <div>
                  <h3 className="font-bold">Antwortzeit</h3>
                  <p className="text-gray-600">
                    Innerhalb von 24 Stunden
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1e6cf] text-xl">
                  🌍
                </div>

                <div>
                  <h3 className="font-bold">Standort</h3>
                  <p className="text-gray-600">
                    Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#111416] px-8 py-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-extrabold">
              Bereit für Ihr digitales Menü?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-white/70">
              Starten Sie noch heute mit QRMenu und bieten Sie Ihren Gästen
              eine moderne digitale Speisekarte per QR-Code.
            </p>

            <a
              href="mailto:mahmoud.alrawi@web.de"
              className="inline-block rounded-xl bg-[#d8aa48] px-8 py-4 font-bold text-black hover:bg-[#e7bd62]"
            >
              Jetzt Kontakt aufnehmen →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}