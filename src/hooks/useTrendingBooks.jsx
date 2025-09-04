import { useEffect, useState } from 'react'

const BASE_URL = 'https://openlibrary.org/trending'

export const useTrendingBooks = () => {
  const [daily, setDaily] = useState([])
  const [weekly, setWeekly] = useState([])
  const [monthly, setMonthly] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true)

        const [dailyRes, weeklyRes, monthlyRes] = await Promise.all([
          fetch(`${BASE_URL}/daily.json?limit=10`),
          fetch(`${BASE_URL}/weekly.json?limit=10`),
          fetch(`${BASE_URL}/monthly.json?limit=10`),
        ])

        if (!dailyRes.ok || !weeklyRes.ok || !monthlyRes.ok) {
          throw new Error('Failed to fetch trending data')
        }

        const dailyData = await dailyRes.json()
        const weeklyData = await weeklyRes.json()
        const monthlyData = await monthlyRes.json()

        setDaily(dailyData.works || [])
        setWeekly(weeklyData.works || [])
        setMonthly(monthlyData.works || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTrending()
  }, [])

  return { daily, weekly, monthly, loading, error }
}
