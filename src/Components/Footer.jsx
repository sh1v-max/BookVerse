// Footer.jsx
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-md bg-white/10 border-t border-white/20 p-8 md:p-12 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold text-white">
            <img
              src="https://www.clipartmax.com/png/full/278-2785766_penguin-book-cover-logo.png"
              alt=""
              className="w-12 h-12"
            />
          </div>
          <span className="text-white font-semibold text-lg">BookVerse</span>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="/" className="text-white/80 hover:text-white transition">
            Home
          </a>
          <a
            href="/about"
            className="text-white/80 hover:text-white transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-white/80 hover:text-white transition"
          >
            Contact
          </a>
          <a
            href="/"
            className="text-white/80 hover:text-white transition"
          >
            Privacy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="text-white/70 hover:text-white transition">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} BookVerse. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
