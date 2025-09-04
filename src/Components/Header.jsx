import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/10 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
            <img
              src="https://www.clipartmax.com/png/full/278-2785766_penguin-book-cover-logo.png"
              alt="BookVerse Logo"
              className="w-8 h-10 sm:w-10 sm:h-14 object-contain"
            />
          </div>
          <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl hover:text-gray-200 transition">
            BookVerse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="space-x-4 hidden md:flex">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/trending"
            className="text-white hover:text-gray-200 transition font-medium"
          >
            Trending
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 transition font-medium"
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-white/5 backdrop-blur-lg">
          <nav className="px-4 sm:px-6 py-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-gray-200 transition font-medium py-2"
            >
              Home
            </Link>
            <Link
              to="/trending"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-gray-200 transition font-medium py-2"
            >
              Trending
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-gray-200 transition font-medium py-2"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header