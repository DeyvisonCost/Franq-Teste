import { z } from 'zod'

const currencySchema = z.object({
  name: z.string(),
  buy: z.number(),
  sell: z.number().nullable(),
  variation: z.number(),
})

const stockSchema = z.object({
  name: z.string(),
  location: z.string(),
  points: z.number(),
  variation: z.number(),
})

export const APIResponseSchema = z.object({
  by: z.string(),
  valid_key: z.boolean(),
  results: z.object({
    currencies: z.object({
      source: z.string(),
      USD: currencySchema,
      EUR: currencySchema,
      GBP: currencySchema,
      ARS: currencySchema,
      CAD: currencySchema,
      AUD: currencySchema,
      JPY: currencySchema,
      CNY: currencySchema,
      BTC: currencySchema,
    }),
    stocks: z.object({
      IBOVESPA: stockSchema,
      IFIX: stockSchema,
      NASDAQ: stockSchema,
      DOWJONES: stockSchema,
      CAC: stockSchema,
      NIKKEI: stockSchema,
    }),
    available_sources: z.array(z.string()),
    taxes: z.array(z.any()),
  }),
  execution_time: z.number(),
  from_cache: z.boolean(),
})
