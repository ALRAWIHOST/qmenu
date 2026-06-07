export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <section className="bg-[#111416] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
            Datenschutz
          </div>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Datenschutzerklärung
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Informationen zur Verarbeitung personenbezogener Daten.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-white p-10 shadow-lg shadow-gray-100">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="mb-2 text-2xl font-extrabold">
                Verantwortlicher
              </h2>

              <p>
                Mahmoud Alrawi
              </p>

              <p>
                E-Mail: mahmoud.alrawi@web.de
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-extrabold">
                Erhebung von Daten
              </h2>

              <p>
                Bei der Nutzung von QMenu können technische Daten,
                Kontodaten und Nutzungsinformationen verarbeitet werden.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-extrabold">
                Verwendete Dienste
              </h2>

              <p>
                Diese Plattform verwendet unter anderem:
              </p>

              <ul className="mt-3 space-y-2">
                <li>• Supabase</li>
                <li>• PayPal</li>
                <li>• Vercel</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-extrabold">
                Ihre Rechte
              </h2>

              <p>
                Sie haben das Recht auf Auskunft, Berichtigung,
                Löschung und Einschränkung der Verarbeitung Ihrer Daten.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}