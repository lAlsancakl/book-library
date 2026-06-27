import BookCard from './BookCard'

function BookList({ books, onEdit, onDelete, searchTerm, statusFilter }) {
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || book.status === statusFilter

    return matchesSearch && matchesStatus
  })

  if (filteredBooks.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-500">
        <p className="text-lg font-medium">Henüz kitap eklenmedi</p>
        <p className="mt-2 text-sm">Arama veya filtre kriterlerine uygun kitap bulunamadı.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default BookList
