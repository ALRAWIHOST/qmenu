import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-gray-950">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-extrabold">QMenu</h1>

          <nav className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-700">
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute left-0 bottom-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              Für Restaurants, Cafés und Food Trucks
            </div>

            <h2 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Digitale
              <br />
              Speisekarte
              <br />
              mit QR-Code
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600">
              Erstellen Sie ein modernes Online-Menü mit Logo, Cover-Bild,
              Öffnungszeiten, Social Links, QR-Code und Statistiken.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="rounded-xl bg-black px-8 py-4 text-center font-semibold text-white"
              >
                Kostenlos starten
              </Link>

              <Link
                href="/s/qmenu-demo"
                className="rounded-xl border border-black px-8 py-4 text-center font-semibold text-black"
              >
                Demo ansehen
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm border">
                <div className="text-2xl font-bold">QR</div>
                <div className="text-sm text-gray-500">Code Menü</div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm border">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-gray-500">Online</div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm border">
                <div className="text-2xl font-bold">Live</div>
                <div className="text-sm text-gray-500">Statistiken</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute top-10 h-80 w-80 rounded-full bg-amber-400/30 blur-3xl" />

            <div className="relative rounded-[2.5rem] bg-white p-4 shadow-2xl border">
              <img
                src="/landing/phone.png"
                alt="QMenu Vorschau"
                className="h-[540px] w-[270px] rounded-[2rem] object-cover"
              />

              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-4 shadow-xl border">
                <img
                  src="/landing/qr.png"
                  alt="QR Code"
                  className="h-24 w-24"
                />
                <p className="mt-2 text-center text-sm font-semibold">
                  Scan & Open
                </p>
              </div>

              <div className="absolute -right-8 top-16 rounded-2xl bg-black px-5 py-4 text-white shadow-xl">
                <p className="text-xs text-white/60">Dashboard</p>
                <p className="text-xl font-bold">QR Scans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Alles, was ein digitales Menü braucht
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            QMenu hilft Restaurants, ihre Speisekarte modern zu präsentieren
            und schnell per QR-Code zu teilen.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border bg-[#f8f6f1] p-8">
              <div className="mb-5 text-3xl">📱</div>
              <h3 className="mb-3 text-xl font-bold">Digitales Menü</h3>
              <p className="text-gray-600">
                Kategorien, Produkte, Preise, Bilder und Beschreibungen einfach
                online verwalten.
              </p>
            </div>

            <div className="rounded-3xl border bg-[#f8f6f1] p-8">
              <div className="mb-5 text-3xl">🎨</div>
              <h3 className="mb-3 text-xl font-bold">Restaurant Branding</h3>
              <p className="text-gray-600">
                Logo, Cover-Bild, Öffnungszeiten und Social-Media-Links für
                einen professionellen Auftritt.
              </p>
            </div>

            <div className="rounded-3xl border bg-[#f8f6f1] p-8">
              <div className="mb-5 text-3xl">📊</div>
              <h3 className="mb-3 text-xl font-bold">Statistiken</h3>
              <p className="text-gray-600">
                Menü-Aufrufe und QR-Scans direkt im Dashboard verfolgen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-bold">Preise</h2>

          <p className="mb-12 text-center text-gray-600">
            Starten Sie kostenlos und erweitern Sie später.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <h3 className="mb-2 text-2xl font-bold">Free</h3>
              <p className="mb-6 text-gray-600">Für den Start</p>
              <p className="mb-6 text-4xl font-bold">0€</p>

              <ul className="mb-8 space-y-3 text-gray-600">
                <li>Bis zu 5 Produkte</li>
                <li>QR-Code inklusive</li>
                <li>Basis-Menü</li>
              </ul>

              <Link
                href="/register?plan=free"
                className="block w-full rounded-xl border border-black py-3 text-center font-semibold"
              >
                Kostenlos starten
              </Link>
            </div>

            <div className="relative rounded-3xl border-2 border-black bg-white p-8 shadow-xl">
              <div className="absolute -top-4 left-8 rounded-full bg-black px-4 py-1 text-sm font-semibold text-white">
                Beliebt
              </div>

              <h3 className="mb-2 text-2xl font-bold">Basic</h3>
              <p className="mb-6 text-gray-600">Für kleine Restaurants</p>
              <p className="mb-6 text-4xl font-bold">9€</p>

              <ul className="mb-8 space-y-3 text-gray-600">
                <li>Bis zu 50 Produkte</li>
                <li>Logo & Cover-Bild</li>
                <li>Social Links</li>
              </ul>

              <Link
                href="/register?plan=basic"
                className="block w-full rounded-xl bg-black py-3 text-center font-semibold text-white"
              >
                Jetzt starten
              </Link>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <h3 className="mb-2 text-2xl font-bold">Pro</h3>
              <p className="mb-6 text-gray-600">Für Profis</p>
              <p className="mb-6 text-4xl font-bold">19€</p>

              <ul className="mb-8 space-y-3 text-gray-600">
                <li>Unbegrenzte Produkte</li>
                <li>QR-Scan Statistiken</li>
                <li>Priorisierter Support</li>
              </ul>

              <Link
                href="/register?plan=pro"
                className="block w-full rounded-xl border border-black py-3 text-center font-semibold"
              >
                Pro wählen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-black px-8 py-16 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold">
            Bereit für Ihr digitales Menü?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Erstellen Sie Ihre Speisekarte in wenigen Minuten und teilen Sie
            sie sofort per QR-Code mit Ihren Gästen.
          </p>

          <Link
            href="/register"
            className="inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black"
          >
            Jetzt kostenlos starten
          </Link>
        </div>
      </section>

      <footer className="border-t bg-white py-8 text-center text-gray-500">
        © 2026 QMenu. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}