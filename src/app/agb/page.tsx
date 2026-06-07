export default function AGBPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <section className="bg-[#111416] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
            Rechtliches
          </div>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Allgemeine Geschäftsbedingungen
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Die wichtigsten Bedingungen für die Nutzung von QMenu.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-white p-10 shadow-lg shadow-gray-100">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="mb-2 text-2xl font-extrabold text-[#151515]">
                1. Geltungsbereich
              </h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung
                der Plattform QMenu.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-extrabold text-[#151515]">
                2. Leistungen
              </h2>
              <p>
                QMenu bietet digitale Speisekarten, QR-Code-Lösungen und
                abonnementbasierte Funktionen für Restaurants an.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-extrabold text-[#151515]">
                3. Preise und Abonnements
              </h2>
              <p>
                Kostenpflichtige Funktionen werden über PayPal-Abonnements
                bereitgestellt. Die aktuellen Preise sind auf der Plattform
                veröffentlicht.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-extrabold text-[#151515]">
                4. Kündigung
              </h2>
              <p>
                Abonnements können jederzeit über das Kundenkonto gekündigt
                werden. Bereits gezahlte Beträge werden nicht rückerstattet,
                soweit gesetzlich zulässig.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-extrabold text-[#151515]">
                5. Haftung
              </h2>
              <p>
                QMenu haftet nur für Schäden, die vorsätzlich oder grob
                fahrlässig verursacht wurden, soweit gesetzlich zulässig.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-extrabold text-[#151515]">
                6. Schlussbestimmungen
              </h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}