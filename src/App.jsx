import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchBook from './Components/SearchBook'
import BookList from './Components/BookList'
import TrendingBooks from './Components/TrendingBooks'
import Book from './Components/Book'
import useBooks from './hooks/useBooks'
import Header from './Components/Header'
import Footer from './Components/Footer'

export const App = () => {
  const { books, fetchBooks, loading, error } = useBooks() // default 'Harry potter'
  const [searching, setSearching] = useState(false)

  // const fetchBooks = async (key) => {
  //   try {
  //     const res = await fetch(
  //       `https://openlibrary.org/search.json?title=${key}&limit=20`
  //     )
  //     const data = await res.json()
  //     setBooks(data.docs)
  //   } catch (err) {
  //     console.error('Error fetching books:', err)
  //   }
  // }

  // useEffect(() => {
  //   fetchBooks('Harry potter')
  // }, [])

  const handleSearch = async (key) => {
    setSearching(true)
    await fetchBooks(key)
  }

  const clearSearch = () => setSearching(false)

  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Fixed background */}
        <Header/>
        
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1648061557966-8e30f972f0be?fm=jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBook
                  onSearch={handleSearch}
                  onClearSearch={clearSearch} // optional
                />

                {loading && (
                  <p className="text-center text-white mt-6">
                    Loading books...
                  </p>
                )}

                {error && (
                  <p className="text-center text-red-500 mt-6">{error}</p>
                )}

                {searching && books.length > 0 ? (
                  <div className="px-20 pb-50 2xl:px-80 space-y-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-white">
                        🔍 Search Results
                      </h2>
                      <button
                        onClick={clearSearch}
                        className="px-4 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                      >
                        Clear Search
                      </button>
                    </div>
                    <BookList books={books} horizontal />
                  </div>
                ) : (
                  <TrendingBooks horizontal />
                )}
              </>
            }
          />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  )
}
