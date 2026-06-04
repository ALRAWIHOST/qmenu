import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <header className="sticky top-0 z-50 bg-[#111416] text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-[#d8aa48]">Q</span>Menu
          </h1>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-white/80 hover:text-white">
              Funktionen
            </a>
            <a href="#preise" className="text-sm font-medium text-white/80 hover:text-white">
              Preise
            </a>
            <Link href="/s/qmenu-demo" className="text-sm font-medium text-white/80 hover:text-white">
              Demo
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-white/80 hover:text-white">
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-[#d8aa48] px-5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-[#e7bd62]"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#fbfaf7]">
        <div className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-[#d8aa48]/20 blur-3xl" />
        <div className="absolute right-24 top-48 hidden h-72 w-72 rounded-full border border-[#d8aa48]/20 lg:block" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
              ✦ Für Restaurants, Cafés und Food Trucks
            </div>

            <h2 className="mb-6 max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Digitale Speisekarte
              <br />
              für moderne
              <br />
              Restaurants
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600">
              Erstellen Sie ein professionelles Online-Menü mit QR-Code,
              Logo, Cover-Bild, Öffnungszeiten, Social Links und Statistiken.
              Einfach, schnell und modern.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="rounded-xl bg-[#d8aa48] px-8 py-4 text-center font-bold text-black shadow-md hover:bg-[#e7bd62]"
              >
                Kostenlos starten →
              </Link>

              <Link
                href="/s/qmenu-demo"
                className="rounded-xl border border-gray-400 bg-white px-8 py-4 text-center font-bold text-black hover:bg-gray-50"
              >
                Demo ansehen ▷
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
              <span>✓ Keine App erforderlich</span>
              <span>✓ In 2 Minuten eingerichtet</span>
              <span>✓ Sofort online</span>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border bg-white shadow-lg">
              <div className="p-5">
                <div className="text-xl font-extrabold">QR-Code</div>
                <div className="text-sm text-gray-500">Menü</div>
              </div>

              <div className="border-l p-5">
                <div className="text-xl font-extrabold">24/7</div>
                <div className="text-sm text-gray-500">Online</div>
              </div>

              <div className="border-l p-5">
                <div className="text-xl font-extrabold">Live</div>
                <div className="text-sm text-gray-500">Statistiken</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute right-4 top-16 h-96 w-96 rounded-full bg-[#d8aa48]/25 blur-3xl" />

            <div className="relative flex items-end gap-6">
              <div className="relative rounded-[3rem] border bg-white p-4 shadow-2xl">
                <img
                  src="/landing/phone-preview.png"
                  alt="QMenu mobile menu preview"
                  className="h-[600px] w-[300px] rounded-[2.4rem] object-cover"
                />

                <div className="absolute -bottom-6 -left-8 rounded-3xl border bg-white p-4 shadow-2xl">
                  <img
                    src="/landing/qr.png"
                    alt="QR Code"
                    className="h-20 w-20"
                  />
                  <p className="mt-2 text-center text-xs font-bold">
                    Scan & Open
                  </p>
                </div>

                <div className="absolute -right-10 top-20 rounded-2xl bg-[#111416] px-5 py-4 text-white shadow-xl">
                  <p className="text-xs text-white/60">Dashboard</p>
                  <p className="text-xl font-extrabold">QR Scans</p>
                </div>
              </div>

              <div className="hidden h-72 w-40 rounded-full bg-[#efe4cf] lg:block" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-extrabold">
            Alles, was Ihr Restaurant braucht
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            QMenu bietet alle Funktionen, die Sie benötigen, um Ihre
            Speisekarte digital zu verwalten und mit Ihren Gästen zu teilen.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                ▦
              </div>
              <h3 className="mb-3 text-xl font-extrabold">QR-Code Menü</h3>
              <p className="text-gray-600">
                Erstellen Sie automatisch einen QR-Code für Ihre digitale
                Speisekarte und teilen Sie ihn mit Ihren Gästen.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                ◉
              </div>
              <h3 className="mb-3 text-xl font-extrabold">
                Restaurant Branding
              </h3>
              <p className="text-gray-600">
                Logo, Cover-Bild, Öffnungszeiten und Social-Media-Links für
                einen professionellen Auftritt.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e6cf] text-2xl">
                ↗
              </div>
              <h3 className="mb-3 text-xl font-extrabold">Statistiken</h3>
              <p className="text-gray-600">
                Verfolgen Sie Menü-Aufrufe und QR-Scans direkt im Dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="preise" className="bg-[#fbfaf7] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-extrabold">
            Faire Preise, voller Möglichkeiten
          </h2>

          <p className="mb-12 text-center text-gray-600">
            Wählen Sie den Plan, der zu Ihrem Restaurant passt.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <h3 className="mb-2 text-2xl font-extrabold">Free</h3>
              <p className="mb-6 text-gray-600">Für den Start</p>
              <p className="mb-6 text-5xl font-extrabold">0€</p>

              <ul className="mb-8 space-y-3 text-gray-600">
                <li>✓ Bis zu 5 Produkte</li>
                <li>✓ QR-Code inklusive</li>
                <li>✓ Basis-Menü</li>
              </ul>

              <Link
                href="/register?plan=free"
                className="block w-full rounded-xl border border-black py-3 text-center font-bold"
              >
                Kostenlos starten
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#111416] p-8 text-white shadow-2xl">
              <div className="absolute right-0 top-0 bg-[#d8aa48] px-8 py-2 text-sm font-bold text-black">
                Beliebt
              </div>

              <h3 className="mb-2 text-2xl font-extrabold">Basic</h3>
              <p className="mb-6 text-white/60">Für kleine Restaurants</p>
              <p className="mb-6 text-5xl font-extrabold">
                9€ <span className="text-base font-medium text-white/60">/ Monat</span>
              </p>

              <ul className="mb-8 space-y-3 text-white/80">
                <li>✓ Bis zu 50 Produkte</li>
                <li>✓ Logo & Cover-Bild</li>
                <li>✓ Social Links</li>
              </ul>

              <Link
                href="/register?plan=basic"
                className="block w-full rounded-xl bg-[#d8aa48] py-3 text-center font-bold text-black hover:bg-[#e7bd62]"
              >
                Jetzt starten
              </Link>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-lg shadow-gray-100">
              <h3 className="mb-2 text-2xl font-extrabold">Pro</h3>
              <p className="mb-6 text-gray-600">Für Profis</p>
              <p className="mb-6 text-5xl font-extrabold">
                19€ <span className="text-base font-medium text-gray-500">/ Monat</span>
              </p>

              <ul className="mb-8 space-y-3 text-gray-600">
                <li>✓ Unbegrenzte Produkte</li>
                <li>✓ QR-Scan Statistiken</li>
                <li>✓ Priorisierter Support</li>
              </ul>

              <Link
                href="/register?plan=pro"
                className="block w-full rounded-xl border border-black py-3 text-center font-bold"
              >
                Pro wählen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-[2rem] bg-[#111416] px-8 py-12 text-white md:flex-row md:px-14">
          <div>
            <h2 className="mb-3 text-3xl font-extrabold">
              Bereit für Ihr digitales Menü?
            </h2>

            <p className="max-w-xl text-white/70">
              Erstellen Sie Ihre Speisekarte in wenigen Minuten und teilen Sie
              sie sofort per QR-Code mit Ihren Gästen.
            </p>
          </div>

          <Link
            href="/register"
            className="rounded-xl bg-[#d8aa48] px-8 py-4 font-bold text-black hover:bg-[#e7bd62]"
          >
            Jetzt kostenlos starten →
          </Link>
        </div>
      </section>

      <footer className="bg-[#111416] px-6 py-12 text-white md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-2xl font-extrabold">
              <span className="text-[#d8aa48]">Q</span>Menu
            </h3>
            <p className="text-sm text-white/60">
              Die einfache und moderne Lösung für digitale Speisekarten mit
              QR-Code.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-bold">Produkt</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Funktionen</p>
              <p>Preise</p>
              <p>Demo</p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-bold">Unternehmen</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Über uns</p>
              <p>Kontakt</p>
              <p>Support</p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-bold">Rechtliches</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Datenschutz</p>
              <p>AGB</p>
              <p>Impressum</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2026 QMenu. Alle Rechte vorbehalten.
        </div>
      </footer>
    </main>
  );
}