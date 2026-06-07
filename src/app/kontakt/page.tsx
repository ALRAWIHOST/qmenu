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
            Haben Sie Fragen zu QMenu? Kontaktieren Sie uns jederzeit.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-white p-10 shadow-lg shadow-gray-100">
          <h2 className="mb-6 text-3xl font-extrabold">
            Kontaktinformationen
          </h2>

          <div className="space-y-4 text-lg">
            <p>
              📧 E-Mail: mahmoud.alrawi@web.de
            </p>

            <p>
              ⏱ Antwortzeit: innerhalb von 24 Stunden
            </p>

            <p>
              🌍 Standort: Deutschland
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}