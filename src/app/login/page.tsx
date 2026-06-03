export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="E-Mail"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Passwort"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-black text-white p-3 rounded-lg">
          Anmelden
        </button>
      </div>
    </main>
  );
}