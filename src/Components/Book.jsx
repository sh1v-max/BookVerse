import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Book = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/works/${id}.json`)
        const data = await res.json()
        setBook(data)
      } catch (err) {
        console.error('Error fetching book details:', err)
      }
    }
    fetchBookDetails()
  }, [id])

  if (!book) {
    return <p className="mt-10 text-gray-600 text-center">Loading book details...</p>
  }

  const coverUrl = book.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : 'https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png'

  return (
    <div className="flex justify-center mt-40 px-4">
      <div className="max-w-4xl w-full bg-white/80 shadow-xl rounded-xl p-8">
        {/* Back button */}
        <div className="mb-6 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to search
          </Link>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={coverUrl}
            alt={book.title}
            className="w-full md:w-1/3 rounded-lg shadow-md object-cover mx-auto"
          />

          <div className="flex-1 flex flex-col justify-between">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{book.title}</h2>

              {book.description && (
                <p className="text-gray-700 text-xl mb-4 leading-relaxed">
                  {typeof book.description === 'string'
                    ? book.description.slice(0, 300) + '...'
                    : book.description.value.slice(0, 300) + '...'}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mt-4">
              {book.subject_places && book.subject_places.length > 0 && (
                <div>
                  <h3 className="font-semibold">Places</h3>
                  <p>
                    {book.subject_places.length > 6
                      ? book.subject_places.slice(0, 6).join(', ') + '...'
                      : book.subject_places.join(', ')}
                  </p>
                </div>
              )}

              {book.subject_times && (
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p>{book.subject_times.join(', ')}</p>
                </div>
              )}

              {book.subject_people && (
                <div className="md:col-span-2">
                  <h3 className="font-semibold">Characters</h3>
                  <p className="line-clamp-2">
                    {book.subject_people.slice(0, 6).join(', ')}...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Genres */}
        {book.subjects && (
          <div className="mt-6 text-center md:text-left">
            <h3 className="font-semibold mb-2">Genre</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {book.subjects.slice(0, 12).map((subj, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                >
                  {subj}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Book
