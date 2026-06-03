import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between px-6 md:px-8 py-5 border-b">
        <h1 className="text-2xl font-bold">QMenu</h1>

        <nav className="flex items-center gap-4">
          <Link href="/login" className="text-gray-700 hover:text-black">
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

      <section className="px-6 py-24 md:py-32 text-center bg-gradient-to-b from-gray-50 to-white">
        <span className="mb-5 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
          Digitale QR-Speisekarte für Restaurants
        </span>

        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          Ihr Menü. Digital. Schnell. Modern.
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Erstellen Sie eine professionelle digitale Speisekarte mit QR-Code,
          Logo, Cover-Bild, Öffnungszeiten, Social Links und Statistiken.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/register"
            className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Jetzt starten
          </Link>

          <Link
            href="/s/qmenu-demo"
            className="border border-black px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Demo ansehen
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Alles für Ihr digitales Menü
          </h2>

          <p className="text-center text-gray-600 mb-12">
            QMenu bietet alles, was Restaurants brauchen, um ihre Speisekarte
            online zu verwalten und per QR-Code zu teilen.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">QR-Code Menü</h3>
              <p className="text-gray-600">
                Erstellen Sie automatisch einen QR-Code für Ihre digitale
                Speisekarte und teilen Sie ihn mit Ihren Gästen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Restaurant Branding
              </h3>
              <p className="text-gray-600">
                Logo, Cover-Bild, Öffnungszeiten und Social-Media-Links für
                einen professionellen Auftritt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">Statistiken</h3>
              <p className="text-gray-600">
                Verfolgen Sie Menü-Aufrufe und QR-Scans direkt im Dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8">
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
                <li>Bis zu 5 Produkte</li>
                <li>QR-Code inklusive</li>
                <li>Basis-Menü</li>
              </ul>

              <Link
                href="/register?plan=free"
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
                <li>Bis zu 50 Produkte</li>
                <li>Logo & Cover-Bild</li>
                <li>Social Links</li>
              </ul>

              <Link
                href="/register?plan=basic"
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
                <li>QR-Scan Statistiken</li>
                <li>Priorisierter Support</li>
              </ul>

              <Link
                href="/register?plan=pro"
                className="block w-full text-center border border-black py-3 rounded-lg"
              >
                Pro wählen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für Ihr digitales Menü?
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Erstellen Sie Ihre Speisekarte in wenigen Minuten und teilen Sie
            sie sofort per QR-Code mit Ihren Gästen.
          </p>

          <Link
            href="/register"
            className="inline-block bg-white text-black px-8 py-4 rounded-xl font-semibold"
          >
            Jetzt kostenlos starten
          </Link>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-gray-500">
        © 2026 QMenu. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}