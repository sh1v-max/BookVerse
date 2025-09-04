import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/book/${book.key.split('/').pop()}`}
      className="block bg-white shadow-md rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
    >
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : 'https://via.placeholder.com/150x200?text=No+Cover'
        }
        alt={book.title}
        className="w-full h-40 sm:h-48 md:h-60 object-cover"
      />

      <div className="p-2 sm:p-3 md:p-4 flex bg-white flex-col justify-between h-20 sm:h-24 md:h-30">
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 truncate leading-tight">
          {book.title}
        </h2>

        <p className="text-xs sm:text-sm text-gray-600 italic truncate">
          {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </p>

        <div className="mt-1 sm:mt-2 flex justify-between text-xs text-gray-500">
          <span className="truncate">
            <span className="hidden sm:inline">Published in: </span>
            {book.first_publish_year || 'N/A'}
          </span>
          <span className="ml-1 flex-shrink-0">
            {book.edition_count || 0} 
            <span className="hidden sm:inline"> editions</span>
            <span className="sm:hidden">ed</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default BookCard