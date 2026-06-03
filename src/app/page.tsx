import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <h1 className="text-2xl font-extrabold text-white">QMenu</h1>

          <nav className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-white/80 hover:text-white">
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#050505] text-white">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-32 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80">
              Digitale QR-Speisekarte für Restaurants
            </div>

            <h2 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Ihr Menü.
              <br />
              Digital.
              <br />
              Elegant.
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-white/70">
              Erstellen Sie eine moderne digitale Speisekarte mit QR-Code,
              Branding, Öffnungszeiten, Social Links und Statistiken.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="rounded-xl bg-white px-8 py-4 text-center font-semibold text-black"
              >
                Jetzt starten
              </Link>

              <Link
                href="/s/qmenu-demo"
                className="rounded-xl border border-white/25 px-8 py-4 text-center font-semibold text-white"
              >
                Demo ansehen
              </Link>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 text-sm text-white/60">
              <div>
                <div className="text-2xl font-bold text-white">QR</div>
                Menü
              </div>

              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                Online
              </div>

              <div>
                <div className="text-2xl font-bold text-white">SaaS</div>
                Ready
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute top-16 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative">
              <div className="rounded-[3rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <img
                  src="/landing/phone.png"
                  alt="QMenu mobile menu preview"
                  className="h-[560px] w-[280px] rounded-[2.4rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 rounded-3xl border border-white/10 bg-white p-4 shadow-2xl">
                <img
                  src="/landing/qr.png"
                  alt="QR Code"
                  className="h-28 w-28"
                />
                <p className="mt-2 text-center text-sm font-semibold text-black">
                  Scan & Open
                </p>
              </div>

              <div className="absolute -right-8 top-20 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 shadow-xl backdrop-blur">
                <p className="text-sm text-white/60">Live Analytics</p>
                <p className="text-2xl font-bold text-white">QR Scans</p>
              </div>
            </div>
          </div>
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