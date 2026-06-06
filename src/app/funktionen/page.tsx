export default function FunktionenPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Funktionen</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="border rounded-2xl p-6">
          <h2 className="font-bold mb-3">Digitale Speisekarte</h2>
          <p>Erstellen und verwalten Sie Ihre Menüs online.</p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold mb-3">QR-Code</h2>
          <p>Jedes Restaurant erhält einen eigenen QR-Code.</p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="font-bold mb-3">Statistiken</h2>
          <p>Verfolgen Sie Views und QR-Scans in Echtzeit.</p>
        </div>
      </div>
    </main>
  );
}