import Link from "next/link";

const categories = [
  "Empfehlungen",
  "Burger",
  "Pizza",
  "Salate",
  "Getränke",
  "Desserts",
];

const products = [
  {
    category: "Empfehlungen",
    name: "Chef Burger Deluxe",
    description: "Rindfleisch, Cheddar, karamellisierte Zwiebeln, Haus-Sauce.",
    price: "12.90",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Empfehlungen",
    name: "Trüffel Pizza",
    description: "Mozzarella, Pilze, Rucola und feines Trüffelöl.",
    price: "14.50",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Empfehlungen",
    name: "Hausgemachte Limonade",
    description: "Frisch, kalt und perfekt zum Menü.",
    price: "4.90",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Burger",
    name: "Classic Burger",
    description: "Rindfleisch, Salat, Tomate, Gurke und QMenu Sauce.",
    price: "9.90",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Burger",
    name: "Chicken Crispy Burger",
    description: "Knuspriges Hähnchen, Coleslaw und Honig-Senf-Sauce.",
    price: "10.90",
    image:
      "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Pizza",
    name: "Pizza Margherita",
    description: "Tomatensauce, Mozzarella und frisches Basilikum.",
    price: "8.50",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Pizza",
    name: "Pizza Diavola",
    description: "Scharfe Salami, Mozzarella, Chili und Tomatensauce.",
    price: "11.90",
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Salate",
    name: "Caesar Salad",
    description: "Römersalat, Parmesan, Croutons und Caesar Dressing.",
    price: "8.90",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Getränke",
    name: "Iced Coffee",
    description: "Kalt servierter Kaffee mit Milch und Eiswürfeln.",
    price: "4.50",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
  },
  {
    category: "Desserts",
    name: "Chocolate Cake",
    description: "Saftiger Schokoladenkuchen mit warmer Schoko-Sauce.",
    price: "5.90",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80",
  },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] text-gray-950">
      <header className="relative bg-[#111416] text-white">
        <div className="relative h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
            alt="Restaurant Demo"
            className="h-full w-full object-cover opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#111416] via-black/40 to-black/20" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-10 text-center">
          <div className="mx-auto -mt-20 mb-5 flex h-32 w-32 items-center justify-center rounded-3xl border-4 border-white bg-[#d8aa48] text-4xl font-extrabold text-black shadow-2xl">
            Q
          </div>

          <div className="mb-3 text-sm font-bold tracking-wide text-[#d8aa48]">
            ★★★★★ 4.9 Bewertung
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            QMenu Demo Restaurant
          </h1>

          <p className="mt-3 text-white/70">
            Scannen. Entdecken. Genießen.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span>📍 Berlin Mitte</span>
            <span>☎ +49 30 123456</span>
            <span>🕒 Heute geöffnet: 09:00 - 23:00</span>
          </div>

          <div className="mt-6 mx-auto max-w-md rounded-3xl border border-white/10 bg-white/10 p-4 text-left backdrop-blur">
            <h2 className="mb-3 text-center font-bold text-white">
              Öffnungszeiten
            </h2>

            <div className="space-y-2 text-sm text-white/70">
              <div className="flex justify-between">
                <span>Montag</span>
                <span>09:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Dienstag</span>
                <span>09:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Mittwoch</span>
                <span>09:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Donnerstag</span>
                <span>09:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Freitag</span>
                <span>09:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Samstag</span>
                <span>10:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sonntag</span>
                <span>Geschlossen</span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white">
              WhatsApp
            </a>

            <a className="rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white">
              Instagram
            </a>

            <a className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              Facebook
            </a>

            <a className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
              TikTok
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <div className="mb-5">
          <p className="text-sm font-bold text-[#9a6b16]">
            Empfehlung des Chefs
          </p>

          <h2 className="text-3xl font-extrabold">Beliebte Gerichte</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.name}
              className="rounded-3xl border bg-white p-4 shadow-sm"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 h-40 w-full rounded-2xl object-cover"
              />

              <h3 className="font-extrabold">{product.name}</h3>

              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>

              <p className="mt-3 inline-block rounded-full bg-[#f1e6cf] px-3 py-1 text-sm font-bold text-[#7a5a16]">
                {product.price}€
              </p>
            </div>
          ))}
        </div>
      </section>

      <nav className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-5xl overflow-x-auto px-4 md:px-6">
          <div className="flex gap-3 py-4">
            <a
              href="#all"
              className="whitespace-nowrap rounded-full bg-[#111416] px-4 py-2 text-xs font-semibold text-white"
            >
              Alle
            </a>

            {categories.map((category) => (
              <a
                key={category}
                href={`#${category}`}
                className="whitespace-nowrap rounded-full border bg-white px-4 py-2 text-xs font-semibold hover:bg-gray-100"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="all" className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <div className="mb-8">
          <p className="text-sm font-bold text-[#9a6b16]">
            Frisch zubereitet
          </p>

          <h2 className="text-3xl font-extrabold">Unsere Speisekarte</h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-[#d8aa48]" />
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const categoryProducts = products.filter(
              (product) => product.category === category
            );

            if (categoryProducts.length === 0) return null;

            return (
              <div key={category} id={category}>
                <h3 className="mb-5 text-2xl font-extrabold">
                  {category}
                </h3>

                <div className="space-y-4">
                  {categoryProducts.map((product) => (
                    <div
                      key={product.name}
                      className="group flex gap-3 rounded-3xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-24 w-24 shrink-0 rounded-2xl object-cover md:h-28 md:w-28"
                      />

                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="min-w-0">
                          <h4 className="break-words text-base font-extrabold md:text-lg">
                            {product.name}
                          </h4>

                          <p className="mt-1 break-words text-sm text-gray-500">
                            {product.description}
                          </p>
                        </div>

                        <span className="self-start whitespace-nowrap rounded-full bg-[#f1e6cf] px-3 py-1 text-sm font-bold text-[#7a5a16]">
                          {product.price}€
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm border">
          <h2 className="mb-6 text-center text-2xl font-extrabold">
            Was Gäste sagen
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[#f7f4ed] p-5">
              <div className="mb-2 text-[#d8aa48]">★★★★★</div>
              <p className="text-sm text-gray-600">
                „Sehr schönes digitales Menü und einfach zu bedienen.“
              </p>
              <p className="mt-3 font-bold">Anna</p>
            </div>

            <div className="rounded-2xl bg-[#f7f4ed] p-5">
              <div className="mb-2 text-[#d8aa48]">★★★★★</div>
              <p className="text-sm text-gray-600">
                „QR-Code gescannt und sofort die Speisekarte gesehen.“
              </p>
              <p className="mt-3 font-bold">Mark</p>
            </div>

            <div className="rounded-2xl bg-[#f7f4ed] p-5">
              <div className="mb-2 text-[#d8aa48]">★★★★★</div>
              <p className="text-sm text-gray-600">
                „Modern, schnell und sehr übersichtlich.“
              </p>
              <p className="mt-3 font-bold">Sara</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl bg-[#111416] p-8 text-center text-white">
          <h2 className="mb-3 text-2xl font-extrabold">
            Powered by QMenu
          </h2>

          <p className="text-white/70">
            Digitale Speisekarten mit QR-Code für moderne Restaurants.
          </p>

          <Link
            href="/register"
            className="mt-6 inline-block rounded-xl bg-[#d8aa48] px-6 py-3 font-bold text-black"
          >
            Eigenes Menü erstellen
          </Link>
        </div>
      </section>
    </main>
  );
}