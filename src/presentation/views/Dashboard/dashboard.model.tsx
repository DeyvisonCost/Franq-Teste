import { useCallback, useEffect } from 'react'

import { fetchQuotations } from '@/infra/instances/fetchStocksInstance/fetchQuotationsInstance'

export const useDashboardModel = () => {
  const handleAlert = () => {
    alert('Dashboard')
  }

  const getApi = useCallback(async () => {
    try {
      await fetchQuotations()
    } catch (err) {}
  }, [])

  useEffect(() => {
    getApi()
  }, [getApi])

  return {
    handleAlert,
  }
}
