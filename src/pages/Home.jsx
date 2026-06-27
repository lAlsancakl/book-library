import { useEffect, useState } from 'react'
import BookForm from '../components/BookForm'
import BookList from '../components/BookList'
import Navbar from '../components/Navbar'

const initialFormState = {
  title: '',
  author: '',
  genre: '',
  rating: '8',
  status: 'Okunacak',
}

const defaultBooks = [
  { id: 1, title: 'Suç ve Ceza', author: 'Fyodor Dostoevsky', genre: 'Roman', rating: 10, status: 'Okundu' },
  { id: 2, title: 'Şeytanın Çırağı', author: 'Mikhail Bulgakov', genre: 'Felsefe', rating: 9, status: 'Okundu' },
  { id: 3, title: 'Yeni Bir Hamlet', author: 'Osamu Dazai', genre: 'Roman', rating: 8, status: 'Okundu' },
  { id: 4, title: 'Savaş Sanatı', author: 'Sun Tzu', genre: 'Strateji', rating: 10, status: 'Okundu' },
  { id: 5, title: 'Hagakure: Saklı Yapraklar', author: 'Yamamoto Tsunetomo', genre: 'Felsefe', rating: 9, status: 'Okundu' },
  { id: 6, title: 'Raşōmon ve Diğer Öyküler', author: 'Ryūnosuke Akutagawa', genre: 'Öykü', rating: 9, status: 'Okundu' },
  { id: 7, title: 'İnsanlığımı Yitirirken', author: 'Osamu Dazai', genre: 'Roman', rating: 8, status: 'Okundu' },
  { id: 8, title: 'Putların Alacakaranlığı', author: 'Friedrich Nietzsche', genre: 'Felsefe', rating: 9, status: 'Okundu' },
  { id: 9, title: 'Martin Eden', author: 'Jack London', genre: 'Roman', rating: 8, status: 'Okunuyor' },
]

function Home() {
  const [books, setBooks] = useState(defaultBooks)
  const [formData, setFormData] = useState(initialFormState)
  const [editingId, setEditingId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    const storedBooks = localStorage.getItem('book-library-books')
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks))
      return
    }

    localStorage.setItem('book-library-books', JSON.stringify(defaultBooks))
  }, [])

  useEffect(() => {
    localStorage.setItem('book-library-books', JSON.stringify(books))
  }, [books])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.title || !formData.author || !formData.genre) {
      return
    }

    if (editingId) {
      setBooks((prev) =>
        prev.map((book) =>
          book.id === editingId ? { ...book, ...formData, rating: Number(formData.rating) } : book,
        ),
      )
      setEditingId(null)
    } else {
      const newBook = {
        id: Date.now(),
        ...formData,
        rating: Number(formData.rating),
      }
      setBooks((prev) => [newBook, ...prev])
    }

    setFormData(initialFormState)
  }

  const handleEdit = (book) => {
    setEditingId(book.id)
    setFormData({
      title: book.title,
      author: book.author,
      genre: book.genre,
      rating: String(book.rating),
      status: book.status,
    })
  }

  const handleDelete = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  const handleCancel = () => {
    setEditingId(null)
    setFormData(initialFormState)
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Navbar />

        <BookForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          editingId={editingId}
          onCancel={handleCancel}
        />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Kitap Listesi</h2>
              <p className="mt-1 text-sm text-slate-500">
                Arama yap, duruma göre filtrele ve kitaplarını yönetin.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Kitap adına göre ara"
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              >
                <option value="all">Tüm durumlar</option>
                <option value="Okunacak">Okunacak</option>
                <option value="Okunuyor">Okunuyor</option>
                <option value="Okundu">Okundu</option>
              </select>
            </div>
          </div>

          <BookList
            books={books}
            onEdit={handleEdit}
            onDelete={handleDelete}
            searchTerm={searchTerm}
            statusFilter={statusFilter}
          />
        </section>
      </div>
    </div>
  )
}

export default Home
