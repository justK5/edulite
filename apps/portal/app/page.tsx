export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">EduLite — Portal</h1>
      <p className="opacity-80">Monorepo skeleton siap jalan. Port ini ditetapkan via script dev.</p>
      <ul className="list-disc pl-5">
        <li>ENV contoh ada di <code>.env.example</code></li>
        <li>Health check: <a className="underline" href="/api/health">/api/health</a></li>
      </ul>
    </div>
  );
}
