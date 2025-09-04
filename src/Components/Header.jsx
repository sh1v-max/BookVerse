import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/10 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <img
              src="https://www.clipartmax.com/png/full/278-2785766_penguin-book-cover-logo.png"
              alt="BookVerse Logo"
              className="w-10 h-14 object-contain"
            />
          </div>
          <span className="text-white font-bold text-2xl md:text-3xl hover:text-gray-200 transition">
            BookVerse
          </span>
        </Link>

        {/* Navigation */}
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
      </div>
    </header>
  )
}

export default Header
