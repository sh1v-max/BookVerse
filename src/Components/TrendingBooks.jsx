import React from 'react'
import BookList from './BookList'
import { useTrendingBooks } from '../hooks/useTrendingBooks'

const TrendingBooks = ({ horizontal }) => {
  const { daily, weekly, monthly, loading, error } = useTrendingBooks()

  if (loading)
    return <p className="text-center text-white mt-6">Loading trending...</p>
  if (error) return <p className="text-center text-red-500 mt-6">{error}</p>

  return (
    <div className="px-20 pb-50 2xl:px-80 space-y-10">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Today's Top
        </h2>
        <BookList books={daily} horizontal={horizontal} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Weekly Top
        </h2>
        <BookList books={weekly} horizontal={horizontal} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          Monthly Top
        </h2>
        <BookList books={monthly} horizontal={horizontal} />
      </section>
    </div>
  )
}

export default TrendingBooks
