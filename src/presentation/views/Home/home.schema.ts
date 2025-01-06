import { z } from 'zod'

const currencySchema = z.object({
  name: z.string(),
  buy: z.number(),
  sell: z.number().nullable().default(null),
  variation: z.number(),
})

const stockSchema = z.object({
  name: z.string().default(''),
  location: z.string().default(''),
  points: z.number().default(0),
  variation: z.number().default(0),
})

const taxSchema = z.object({
  date: z.string().default(''),
  cdi: z.number().default(0),
  selic: z.number().default(0),
  daily_factor: z.number().default(0),
  selic_daily: z.number().default(0),
  cdi_daily: z.number().default(0),
})

export const APIResponseSchema = z.object({
  by: z.string().optional().default(''),
  valid_key: z.boolean(),
  results: z.object({
    currencies: z.object({
      source: z.string().default(''),
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
    available_sources: z.array(z.string()).default([]),
    taxes: z.array(taxSchema).optional().default([]),
  }),
  execution_time: z.number().default(0),
  from_cache: z.boolean().default(false),
})

export type ApiResponse = z.infer<typeof APIResponseSchema>
