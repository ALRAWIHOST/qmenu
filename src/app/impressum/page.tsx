export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <section className="bg-[#111416] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
            Rechtliches
          </div>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Impressum
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Angaben gemäß § 5 TMG.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-white p-10 shadow-lg shadow-gray-100">
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              <strong>QMenu</strong>
            </p>

            <p>
              Mahmoud Alrawi
            </p>

            <p>
              Deutschland
            </p>

            <p>
              E-Mail: mahmoud.alrawi@web.de
            </p>

            <p>
              Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:
              Mahmoud Alrawi
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}