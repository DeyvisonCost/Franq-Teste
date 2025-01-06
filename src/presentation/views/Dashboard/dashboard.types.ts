import { z } from 'zod'

import { APIResponseSchema } from '@/presentation/views/Dashboard/dashboard.schema'

export type Currency = {
  name: string
  buy: number
  sell: number | null
  variation: number
}

export type Stock = {
  name: string
  location: string
  points: number
  variation: number
}

export type BitcoinSource = {
  name: string
  format: [string, string]
  last: number
  buy?: number
  sell?: number
  variation: number
}

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
    bitcoin: {
      blockchain_info: BitcoinSource
      coinbase: BitcoinSource
      bitstamp: BitcoinSource
      foxbit: BitcoinSource
      mercadobitcoin: BitcoinSource
    }
  }
  execution_time: number
  from_cache: boolean
}

export type APIResponse = z.infer<typeof APIResponseSchema>
