export default function FAQPage() {
  const faqs = [
    {
      question: "Was ist eine digitale Speisekarte?",
      answer:
        "Eine digitale Speisekarte ist ein Online-Menü, das Gäste über einen QR-Code auf ihrem Smartphone öffnen können.",
    },
    {
      question: "Benötigen Gäste eine App?",
      answer:
        "Nein. Gäste scannen einfach den QR-Code und öffnen die Speisekarte direkt im Browser.",
    },
    {
      question: "Kann ich mein Logo hinzufügen?",
      answer:
        "Ja. Sie können Ihr eigenes Logo und Titelbild hochladen.",
    },
    {
      question: "Wie lange dauert die Einrichtung?",
      answer:
        "Die Einrichtung dauert nur wenige Minuten.",
    },
    {
      question: "Ist QRMenu für Restaurants und Cafés geeignet?",
      answer:
        "Ja. QRMenu eignet sich für Restaurants, Cafés, Bars und Food Trucks.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-5xl font-extrabold">
          Häufig gestellte Fragen
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-6"
            >
              <h2 className="mb-2 text-xl font-bold">
                {faq.question}
              </h2>

              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}