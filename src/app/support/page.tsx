import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | QRMenu",
  description:
    "Support und Hilfe für QRMenu Kunden. Unterstützung bei QR-Codes, digitalen Speisekarten, Konten und Abonnements.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <section className="bg-[#111416] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
            Support Center
          </div>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Wir sind für Sie da
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Benötigen Sie Hilfe bei Ihrem Restaurant, QR-Code oder
            Abonnement? Unser Support-Team unterstützt Sie schnell und
            zuverlässig.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                🔐
              </div>

              <h2 className="mb-4 text-xl font-extrabold">
                Konto & Login
              </h2>

              <p className="text-gray-600">
                Hilfe bei Anmeldung, Passwort, Kontoverwaltung und
                Sicherheitseinstellungen.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                📱
              </div>

              <h2 className="mb-4 text-xl font-extrabold">
                QR-Code & Menü
              </h2>

              <p className="text-gray-600">
                Unterstützung bei Speisekarten, Produkten, Kategorien und
                QR-Code Problemen.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                💳
              </div>

              <h2 className="mb-4 text-xl font-extrabold">
                Abonnements
              </h2>

              <p className="text-gray-600">
                Fragen zu Free, Basic, Pro und PayPal-Abonnements.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-[#111416] px-8 py-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-extrabold">
              Support kontaktieren
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-white/70">
              Unser Team antwortet normalerweise innerhalb von 24 Stunden
              auf Ihre Anfrage.
            </p>

            <a
              href="mailto:mahmoud.alrawi@web.de"
              className="inline-block rounded-xl bg-[#d8aa48] px-8 py-4 font-bold text-black hover:bg-[#e7bd62]"
            >
              E-Mail senden →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}