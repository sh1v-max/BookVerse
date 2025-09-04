import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/book/${book.key.split('/').pop()}`}
      className="block bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : 'https://via.placeholder.com/150x200?text=No+Cover'
        }
        alt={book.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4 flex bg-white flex-col justify-between h-30">
        <h2 className="text-lg font-bold text-gray-800 truncate">{book.title}</h2>

        <p className="text-sm text-gray-600 italic">
          {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </p>

        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>Published in: {book.first_publish_year || 'N/A'}</span>
          <span>{book.edition_count || 0} editions</span>
        </div>
      </div>
    </Link>
  )
}

export default BookCard
