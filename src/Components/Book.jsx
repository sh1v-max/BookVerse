import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Book = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [showFullDescription, setShowFullDescription] = useState(false)

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/works/${id}.json`)
        const data = await res.json()
        setBook(data)
      } catch (err) {
        console.error('Error fetching book details:', err)
      }
    }
    fetchBookDetails()
  }, [id])

  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading book details...</p>
        </div>
      </div>
    )
  }

  const coverUrl = book.covers && book.covers.length > 0
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : 'https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png'

  const description = typeof book.description === 'string' 
    ? book.description 
    : book.description?.value || 'No description available.'

  return (
    <div className="min-h-screen py-6 sm:py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/80 hover:bg-white shadow-md hover:shadow-lg rounded-xl transition-all text-sm sm:text-base font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Search
          </Link>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
          <div className="flex flex-col xl:flex-row">
            {/* Cover Section */}
            <div className="xl:w-1/3 bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 flex flex-col justify-center items-center text-white">
              <div className="relative group">
                <img
                  src={coverUrl}
                  alt={book.title}
                  className="w-64 sm:w-72 lg:w-80 xl:w-full max-w-sm rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="xl:w-2/3 p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {book.title}
                </h1>
                
                {book.authors && (
                  <p className="text-lg sm:text-xl text-gray-600 mb-4">
                    by <span className="font-semibold text-blue-700">
                      {book.authors.map(author => author.name || 'Unknown Author').join(', ')}
                    </span>
                  </p>
                )}

                {/* Metadata Pills */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {book.first_publish_date && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {book.first_publish_date}
                    </span>
                  )}
                  {book.dewey_number && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                      Dewey: {book.dewey_number[0]}
                    </span>
                  )}
                  {book.created && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Added {new Date(book.created.value).getFullYear()}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {description && description !== 'No description available.' && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Description
                  </h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {showFullDescription 
                        ? description 
                        : description.slice(0, 500) + (description.length > 500 ? '...' : '')
                      }
                    </p>
                    {description.length > 500 && (
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                      >
                        {showFullDescription ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Subjects */}
              {book.subjects && book.subjects.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Subjects & Genres
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {book.subjects.slice(0, 15).map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-lime-200 to-white text-black rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all cursor-default"
                      >
                        {subject}
                      </span>
                    ))}
                    {book.subjects.length > 15 && (
                      <span className="px-4 py-2 bg-gray-200 text-gray-600 rounded-full text-sm font-medium">
                        +{book.subjects.length - 15} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Technical Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Technical Info
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Work ID</span>
                      <code className="bg-gray-200 px-2 py-1 rounded text-xs">{book.key.split('/').pop()}</code>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Revision</span>
                      <span>{book.revision || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Last Modified</span>
                      <span>{book.last_modified ? new Date(book.last_modified.value).toLocaleDateString() : 'N/A'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-gray-600">Type</span>
                      <span className="capitalize">{book.type?.key?.split('/').pop() || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                {book.links && book.links.length > 0 && (
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      External Links
                    </h3>
                    <div className="space-y-2">
                      {book.links.map((link, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="font-medium">{link.title || `Link ${idx + 1}`}</span>
                          {link.url && (
                            <a 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 ml-auto"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book