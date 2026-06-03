import Link from "next/link";

export default function PaymentCancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white border rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">
          Zahlung abgebrochen
        </h1>

        <p className="text-gray-600 mb-6">
          Die Zahlung wurde abgebrochen.
        </p>

        <Link
          href="/dashboard"
          className="bg-black text-white px-6 py-3 rounded-lg inline-block"
        >
          Zurück zum Dashboard
        </Link>
      </div>
    </main>
  );
}