import { useCallback, useEffect } from 'react'

import { fetchAllStocks } from '@/infra/instances/fetchStocksInstance/fetchAllStocksInstance'

export const useHomeModel = () => {
  const handleAlert = () => {
    alert('Home')
  }

  const getApi = useCallback(async () => {
    try {
      await fetchAllStocks()
    } catch (err) {}
  }, [])

  useEffect(() => {
    getApi()
  }, [getApi])

  return {
    handleAlert,
  }
}
