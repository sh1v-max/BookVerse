import { useState, useEffect } from 'react'

const useBooks = (defaultSearch = 'Harry potter') => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchBooks = async (key) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${key}&limit=20`
      )
      const data = await res.json()
      setBooks(data.docs)
    } catch (err) {
      setError(err.message || 'Error fetching books')
    } finally {
      setLoading(false)
    }
  }

  // fetch default books once when hook is first used
  useEffect(() => {
    if (defaultSearch) fetchBooks(defaultSearch)
  }, [defaultSearch])

  return { books, fetchBooks, loading, error }
}

export default useBooks
