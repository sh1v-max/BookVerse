import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-md bg-white/10 border-t border-white/20 p-4 sm:p-6 md:p-8 lg:p-12 mt-8 sm:mt-10 md:mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold text-white">
            <img
              src="https://www.clipartmax.com/png/full/278-2785766_penguin-book-cover-logo.png"
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
          <span className="text-white font-semibold text-base sm:text-lg">BookVerse</span>
        </div>

        {/* Navigation */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center order-3 sm:order-2">
          <a href="/" className="text-white/80 hover:text-white transition text-sm sm:text-base">
            Home
          </a>
          <a
            href="/about"
            className="text-white/80 hover:text-white transition text-sm sm:text-base"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-white/80 hover:text-white transition text-sm sm:text-base"
          >
            Contact
          </a>
          <a
            href="/"
            className="text-white/80 hover:text-white transition text-sm sm:text-base"
          >
            Privacy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 sm:gap-4 order-2 sm:order-3 flex-shrink-0">
          <a href="#" className="text-white/70 hover:text-white transition">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            <img
              className="w-5 h-5 sm:w-6 sm:h-6"
              src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 text-center text-white/60 text-xs sm:text-sm">
        © {new Date().getFullYear()} BookVerse. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer