import { useState, useEffect } from 'react'
import { fetchMarketData } from '../services/marketService'

export const useFetchMarketData = () => {
  const [marketData, setMarketData] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMarketData()

        // uniqueBuyersでソート
        data.sort((a: any, b: any) => b.uniqueBuyers - a.uniqueBuyers)

        console.log(data)
        setMarketData(data)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return { marketData, error, loading }
}
