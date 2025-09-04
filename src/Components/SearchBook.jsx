import React, { useState } from 'react'

// bg-img1:'https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg'
// bg-img2: 'https://images.unsplash.com/photo-1722182877533-7378b60bf1e8?fm=jpg'
// bg-img3: 'https://images.unsplash.com/photo-1648061557966-8e30f972f0be?fm=jpg'
// bg-img4: 'https://images.unsplash.com/photo-1677024344965-7639f5651c72?fm=jpg'

const SearchBook = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    onSearch(search)
    setSearch('')
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* main container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-white/20">
            <img
              className="w-12 h-16 sm:w-16 sm:h-20 color-white"
              src="https://www.clipartmax.com/png/full/278-2785766_penguin-book-cover-logo.png"
              alt=""
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
            <span className="text-white">Discover</span>
            <br />
            <span className="text-white">Your Next Adventure</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
            Explore millions of books, find your perfect read, and embark on
            countless literary journeys
          </p>
        </div>

        {/* search */}
        <div className="relative max-w-2xl mx-auto px-4">
          <div
            className={`
            relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border border-white/20
            ${isFocused ? 'ring-2 ring-white/40 bg-white/15' : ''}
            transition-all duration-300 shadow-2xl
          `}
          >
            <form onSubmit={handleSubmit} className="flex items-center">
              <div className="pl-3 sm:pl-4 pr-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search for books, authors, genres..."
                className="
                  flex-1 bg-transparent text-white placeholder-white/60 px-2 sm:px-4 py-3 sm:py-4 md:py-5 
                  text-base sm:text-lg md:text-xl focus:outline-none font-medium
                "
              />

              <button
                type="submit"
                className="
                  group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 
                  bg-white hover:bg-white/90
                  text-black font-semibold rounded-lg sm:rounded-xl
                  transform hover:scale-105 active:scale-95
                  transition-all duration-200 shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-black/40
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
                disabled={!search.trim()}
              >
                <span className="flex items-center gap-2">
                  <span className="hidden xs:inline sm:inline">Search</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 px-2">
            {['Harry Potter', 'Sci-Fi', 'Mystery', 'Romance', 'Biography'].map(
              (term) => (
                <button
                  key={term}
                  onClick={() => {
                    setSearch(term)
                    onSearch(term)
                  }}
                  className="
                  px-2.5 sm:px-3 py-1 text-xs sm:text-sm bg-white/10 hover:bg-white/20 
                  text-white/80 hover:text-white rounded-full
                  border border-white/20 hover:border-white/40
                  transition-all duration-200 backdrop-blur-sm
                "
                >
                  {term}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBook