import { hexToAscii } from '@/utils/hexDecoder'

interface BaseTickerData {
  base: string
  base_volume: number
  base_volume_buy: number
  base_volume_sell: number
  counter: string
  counter_volume: number
  counter_volume_buy: number
  counter_volume_sell: number
  date_from: string
  date_to: string
  exchanges: number
  first: number
  high: number
  last: number
  low: number
  trend_interval: number
  unique_buyers: number
  unique_sellers: number
}

interface MarketData {
  base: string
  baseVolume: number
  baseVolumeBuy: number
  baseVolumeSell: number
  counter: string
  counterSymbol: string
  counterVolume: number
  counterVolumeBuy: number
  counterVolumeSell: number
  dateFrom: string
  dateTo: string
  exchanges: number
  first: number
  high: number
  last: number
  low: number
  trendInterval: number
  uniqueBuyers: number
  uniqueSellers: number
}

const getCounterSymbol = (counter: string): string => {
  const counterAddress = counter.split('_')[1]
  return counterAddress.length > 4 ? hexToAscii(counterAddress) : counterAddress
}

export const fetchMarketData = async (): Promise<MarketData[]> => {
  const response = await fetch(
    'https://data.xrplf.org/v1/iou/ticker_data/XRP?interval=1d&min_counter_volume=0.00001'
  )
  if (!response.ok) {
    throw new Error('Failed to fetch market data')
  }
  const data = await response.json()
  return data.map((item: BaseTickerData): MarketData => {
    return {
      base: item.base,
      baseVolume: item.base_volume,
      baseVolumeBuy: item.base_volume_buy,
      baseVolumeSell: item.base_volume_sell,
      counter: item.counter,
      counterSymbol: getCounterSymbol(item.counter),
      counterVolume: item.counter_volume,
      counterVolumeBuy: item.counter_volume_buy,
      counterVolumeSell: item.counter_volume_sell,
      dateFrom: item.date_from,
      dateTo: item.date_to,
      exchanges: item.exchanges,
      first: item.first,
      high: item.high,
      last: item.last,
      low: item.low,
      trendInterval: item.trend_interval,
      uniqueBuyers: item.unique_buyers,
      uniqueSellers: item.unique_sellers,
    }
  })
}
