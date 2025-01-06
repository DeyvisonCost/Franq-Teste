import { z } from 'zod'

import { APIResponseSchema } from '@/presentation/views/Home/home.schema'

export type ApiResponse = {
  by: string
  valid_key: boolean
  results: {
    currencies: {
      source: string
      USD: Currency
      EUR: Currency
      GBP: Currency
      ARS: Currency
      CAD: Currency
      AUD: Currency
      JPY: Currency
      CNY: Currency
      BTC: Currency
    }
    stocks: {
      IBOVESPA: Stock
      IFIX: Stock
      NASDAQ: Stock
      DOWJONES: Stock
      CAC: Stock
      NIKKEI: Stock
    }
    available_sources: string[]
    taxes?: Tax[]
  }
  execution_time: number
  from_cache: boolean
}

type Currency = {
  name: string
  buy: number
  sell: number | null
  variation: number
}

type Stock = {
  name: string
  location: string
  points: number
  variation: number
}

type Tax = {
  date: string
  cdi: number
  selic: number
  daily_factor: number
  selic_daily: number
  cdi_daily: number
}

export type APIResponse = z.infer<typeof APIResponseSchema>
