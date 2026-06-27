const statusOptions = ['Okunacak', 'Okunuyor', 'Okundu']

function BookForm({ formData, onChange, onSubmit, editingId, onCancel }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
          {editingId ? 'Kitabı güncelle' : 'Yeni kitap ekle'}
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Kitap bilgilerini doldurup kütüphanene ekle.
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Kitap Adı
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            placeholder="Ör. Savaş ve Barış"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Yazar
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={onChange}
            placeholder="Ör. Leo Tolstoy"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Tür
          </label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={onChange}
            placeholder="Ör. Roman"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Puan (1-10)
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="10"
            value={formData.rating}
            onChange={onChange}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Durum
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={onChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2 flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            {editingId ? 'Güncelle' : 'Ekle'}
          </button>
          {editingId ? (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              İptal
            </button>
          ) : null}
        </div>
      </form>
    </section>
  )
}

export default BookForm
