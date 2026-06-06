export default function PreisePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Preise</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="border rounded-2xl p-6">
          <h2 className="text-2xl font-bold">Free</h2>
          <p className="text-4xl font-extrabold my-4">0€</p>
          <p>Grundfunktionen</p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-2xl font-bold">Basic</h2>
          <p className="text-4xl font-extrabold my-4">9€</p>
          <p>Monatlich</p>
        </div>

        <div className="border rounded-2xl p-6">
          <h2 className="text-2xl font-bold">Pro</h2>
          <p className="text-4xl font-extrabold my-4">19€</p>
          <p>Monatlich</p>
        </div>
      </div>
    </main>
  );
}