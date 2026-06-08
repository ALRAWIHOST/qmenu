import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | QRMenu",
  description:
    "Antworten auf häufig gestellte Fragen zu digitalen Speisekarten, QR-Codes, Abonnements und QRMenu.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Was ist QRMenu?",
      answer:
        "QRMenu ist eine Plattform für digitale Speisekarten mit QR-Code für Restaurants, Cafés, Bars und Food Trucks.",
    },
    {
      question: "Benötigen Gäste eine App?",
      answer:
        "Nein. Gäste scannen einfach den QR-Code und öffnen die Speisekarte direkt im Browser.",
    },
    {
      question: "Kann ich mein Logo und Cover-Bild hinzufügen?",
      answer:
        "Ja. Sie können Ihr eigenes Logo, Cover-Bild, Öffnungszeiten und Social Links hinzufügen.",
    },
    {
      question: "Wie schnell ist mein Menü online?",
      answer:
        "In der Regel ist Ihr digitales Menü innerhalb weniger Minuten eingerichtet und sofort online.",
    },
    {
      question: "Kann ich meine Speisekarte selbst bearbeiten?",
      answer:
        "Ja. Produkte, Kategorien, Preise und Beschreibungen können jederzeit im Dashboard geändert werden.",
    },
    {
      question: "Welche Pläne gibt es?",
      answer:
        "QRMenu bietet einen kostenlosen Free-Plan sowie Basic und Pro als monatliche Abonnements.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#151515]">
      <section className="relative overflow-hidden bg-[#111416] px-6 py-20 text-white">
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#d8aa48]/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-emerald-200/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-[#f1e6cf] px-4 py-2 text-sm font-medium text-[#7a5a16]">
            Häufige Fragen
          </div>

          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Fragen zu QRMenu?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Hier finden Sie Antworten zu digitalen Speisekarten, QR-Codes,
            Abonnements und der Einrichtung Ihres Restaurants.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border bg-white p-7 shadow-lg shadow-gray-100"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f1e6cf] text-sm font-extrabold text-[#7a5a16]">
                  {index + 1}
                </div>

                <h2 className="mb-3 text-xl font-extrabold">
                  {faq.question}
                </h2>

                <p className="leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-[2rem] bg-[#111416] p-8 text-white shadow-2xl">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d8aa48] text-2xl font-extrabold text-black">
              QR
            </div>

            <h3 className="mb-4 text-2xl font-extrabold">
              Noch Fragen?
            </h3>

            <p className="mb-6 leading-7 text-white/70">
              Kontaktieren Sie uns, wenn Sie Hilfe bei der Einrichtung oder
              Ihrem QR-Code Menü benötigen.
            </p>

            <Link
              href="/kontakt"
              className="block rounded-xl bg-[#d8aa48] px-6 py-3 text-center font-bold text-black hover:bg-[#e7bd62]"
            >
              Kontakt aufnehmen →
            </Link>

            <Link
              href="/preise"
              className="mt-3 block rounded-xl border border-white/20 px-6 py-3 text-center font-bold text-white hover:bg-white/10"
            >
              Preise ansehen
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}