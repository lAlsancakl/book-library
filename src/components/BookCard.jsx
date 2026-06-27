function BookCard({ book, onEdit, onDelete }) {
  const statusStyles = {
    Okundu: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30',
    Okunuyor: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30',
    Okunacak: 'bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/30',
  }

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{book.title}</h3>
          <p className="text-sm text-slate-500">{book.author}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[book.status] || 'bg-slate-500/15 text-slate-300'}`}>
          {book.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
        <span className="rounded-full bg-slate-100 px-3 py-1">{book.genre}</span>
        <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">
          Puan: {book.rating}/10
        </span>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => onEdit(book)}
          className="flex-1 rounded-xl border border-indigo-200 px-3 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
        >
          Düzenle
        </button>
        <button
          type="button"
          onClick={() => onDelete(book.id)}
          className="flex-1 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-rose-500/20 transition hover:from-rose-600 hover:to-rose-700"
        >
          Sil
        </button>
      </div>
    </article>
  )
}

export default BookCard
