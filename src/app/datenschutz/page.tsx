export default function DatenschutzPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Datenschutzerklärung
      </h1>

      <div className="space-y-4">
        <p>
          Diese Website verarbeitet personenbezogene Daten
          ausschließlich im Rahmen der gesetzlichen Vorschriften.
        </p>

        <p>
          Verantwortlicher:
          Mahmoud Alrawi
        </p>

        <p>
          Kontakt:
          mahmoud.alrawi@web.de
        </p>

        <p>
          Verwendete Dienste:
          Supabase, PayPal, Vercel.
        </p>
      </div>
    </main>
  );
}