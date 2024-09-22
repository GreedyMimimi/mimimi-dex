'use client'

import { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useFetchMarketData } from '@/hooks/useFetchMarketData'

export default function Market() {
  const { marketData, error, loading } = useFetchMarketData()

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography>Error: {error}</Typography>

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
        Market
      </Typography>
      {marketData.map((item, index) => (
        <Box key={index} sx={{ marginTop: '1rem' }}>
          <Typography>Base: {item.base}</Typography>
          <Typography>Counter: {item.counter}</Typography>
          <Typography>Base Volume: {item.counterVolume}</Typography>
          <Typography>Last Price: {item.last}</Typography>
          {/* 他の必要なデータをここに表示 */}
        </Box>
      ))}
    </Box>
  )
}
