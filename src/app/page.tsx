import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between px-8 py-5 border-b">
        <h1 className="text-2xl font-bold">QMenu</h1>

        <nav className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-700 hover:text-black"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Register
          </Link>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <span className="mb-5 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
          Für Restaurants, Cafés und Food Trucks
        </span>

        <h2 className="text-6xl font-bold mb-6">QMenu</h2>

        <p className="text-2xl text-gray-600 max-w-3xl mb-8">
          Digitale Speisekarte für Restaurants und Cafés. Erstellen Sie Ihre
          Speisekarte in wenigen Minuten und teilen Sie sie per QR-Code.
        </p>

        <div className="flex gap-4">
          <Link
            href="/register"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg"
          >
            Jetzt starten
          </Link>

          <Link
            href="/s/qmenu-demo"
            className="border border-black px-6 py-3 rounded-lg text-lg"
          >
            Demo ansehen
          </Link>
        </div>

        <div className="mt-10 text-gray-500 text-sm">
          DE Deutsch | EN English | AR العربية
        </div>
      </section>

      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Funktionen</h2>

          <p className="text-center text-gray-600 mb-12">
            Alles, was Sie brauchen, um Ihre Speisekarte online zu verwalten.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">QR-Code</h3>
              <p className="text-gray-600">
                Erstellen Sie automatisch einen QR-Code für Ihre Speisekarte.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Digitale Speisekarte
              </h3>
              <p className="text-gray-600">
                Verwalten Sie Kategorien, Produkte, Preise und Bilder einfach
                online.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Mehrsprachig</h3>
              <p className="text-gray-600">
                Unterstützt Deutsch, Englisch und Arabisch für Ihre Kunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Preise</h2>

          <p className="text-center text-gray-600 mb-12">
            Starten Sie kostenlos und erweitern Sie später.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Für den Start</p>
              <p className="text-4xl font-bold mb-6">0€</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Bis zu 10 Produkte</li>
                <li>QR-Code inklusive</li>
                <li>1 Sprache</li>
              </ul>

              <Link
                href="/register"
                className="block w-full text-center border border-black py-3 rounded-lg"
              >
                Kostenlos starten
              </Link>
            </div>

            <div className="border-2 border-black rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Für kleine Restaurants</p>
              <p className="text-4xl font-bold mb-6">9€</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Bis zu 100 Produkte</li>
                <li>Bilder für Produkte</li>
                <li>Deutsch + Englisch</li>
              </ul>

              <Link
                href="/register"
                className="block w-full text-center bg-black text-white py-3 rounded-lg"
              >
                Jetzt starten
              </Link>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">Für Profis</p>
              <p className="text-4xl font-bold mb-6">19€</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>Unbegrenzte Produkte</li>
                <li>3 Sprachen</li>
                <li>Statistiken und Support</li>
              </ul>

              <Link
                href="/register"
                className="block w-full text-center border border-black py-3 rounded-lg"
              >
                Pro wählen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-gray-500">
        © 2026 QMenu. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}