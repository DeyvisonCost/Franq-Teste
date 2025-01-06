import { useCallback, useEffect, useState } from 'react'

import { fetchQuotations } from '@/infra/instances/fetchStocksInstance/fetchQuotationsInstance'
import { APIResponseSchema } from '@/presentation/views/Dashboard/dashboard.schema'
import { ApiResponse } from '@/presentation/views/Dashboard/dashboard.types'

export const useDashboardModel = () => {
  const [quotations, setQuotations] = useState<ApiResponse | null>()

  const getQuotations = useCallback(async () => {
    try {
      const response = await fetchQuotations()

      const validResponse = APIResponseSchema.parse(response)
      setQuotations(validResponse as ApiResponse)
    } catch (err) {}
  }, [])

  useEffect(() => {
    getQuotations()
  }, [getQuotations])

  return {
    quotations,
  }
}
