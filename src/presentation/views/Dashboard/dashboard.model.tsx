import { useCallback, useEffect, useState } from 'react'

import { fetchQuotations } from '@/infra/instances/fetchStocksInstance/fetchQuotationsInstance'
import { APIResponseSchema } from '@/presentation/views/Dashboard/dashboard.schema'
import { ApiResponse } from '@/presentation/views/Dashboard/dashboard.types'

export const useDashboardModel = () => {
  const [quotations, setQuotations] = useState<ApiResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const getQuotations = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null) 
      const response = await fetchQuotations()
      const validResponse = APIResponseSchema.parse(response)
      setQuotations(validResponse as ApiResponse)
    } catch (err) {
      setError('Erro ao carregar os dados. Tente novamente mais tarde.') // Mensagem de erro genérica
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getQuotations()
  }, [getQuotations])

  return {
    quotations,
    isLoading,
    error
  }
}
