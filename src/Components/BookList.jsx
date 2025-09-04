import React, { useRef } from 'react'
import BookCard from './BookCard'

const BookList = ({ books, horizontal }) => {
  const scrollRef = useRef()

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      })
    }
  }

  if (!books || books.length === 0) {
    return <p className="text-center text-white">No books found.</p>
  }

  if (horizontal) {
    return (
      <div className="relative group px-4 sm:px-8 md:px-12">
        <button
          onClick={() => scroll('left')}
          className="absolute -left-2 sm:-left-6 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-transparent text-white text-xl sm:text-2xl md:text-3xl p-2 sm:p-3 rounded-full transform hover:scale-110 hover:-translate-x-[5px] transition-all shadow-lg opacity-70"
        >
          &lt;
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-3 sm:space-x-4 pb-4 scroll-smooth scrollbar-hide"
        >
          {books
            .filter((book) => book.cover_i || book.cover_id)
            .map((book) => (
              <div key={book.key} className="flex-shrink-0 w-32 sm:w-36 md:w-40">
                <BookCard book={book} />
              </div>
            ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute -right-2 sm:-right-6 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-transparent text-white text-xl sm:text-2xl md:text-3xl text-center p-2 sm:p-3 rounded-full transform hover:scale-110 hover:translate-x-[5px] transition-all shadow-lg opacity-70"
        >
          &gt;
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 px-4">
      {books
        .filter((book) => book.cover_i || book.cover_id)
        .map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
    </div>
  )
}

export default BookList