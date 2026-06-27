function Navbar() {
  return (
    <header className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 px-6 py-5 shadow-[0_20px_60px_-25px_rgba(99,102,241,0.45)] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.26),_transparent_52%)]" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-500 to-fuchsia-500 text-2xl shadow-lg shadow-indigo-200">
            📚
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
              Kitap Kütüphanesi
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Book Library</h1>
          </div>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">
          Kütüphaneni düzenle, takip et ve her zaman erişime açık tut.
        </p>
      </div>
    </header>
  )
}

export default Navbar
