import Link from "next/link";

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
            Abonnement? Unser Support hilft Ihnen gerne weiter.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
            <h2 className="mb-4 text-xl font-extrabold">
              Konto & Login
            </h2>

            <p className="text-gray-600">
              Hilfe bei Anmeldung, Passwort und Kontoverwaltung.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
            <h2 className="mb-4 text-xl font-extrabold">
              QR-Code & Menü
            </h2>

            <p className="text-gray-600">
              Unterstützung bei Speisekarten, Produkten und QR-Codes.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
            <h2 className="mb-4 text-xl font-extrabold">
              Abonnements
            </h2>

            <p className="text-gray-600">
              Fragen zu Basic-, Pro- oder PayPal-Abonnements.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] bg-[#111416] px-8 py-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-extrabold">
            Support kontaktieren
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-white/70">
            Unser Team antwortet normalerweise innerhalb von 24 Stunden.
          </p>

          <a
            href="mailto:alrawirepair1@gmail.com"
            className="inline-block rounded-xl bg-[#d8aa48] px-8 py-4 font-bold text-black hover:bg-[#e7bd62]"
          >
            E-Mail senden →
          </a>
        </div>
      </section>
    </main>
  );
}