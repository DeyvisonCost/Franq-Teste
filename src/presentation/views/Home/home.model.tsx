import { useCallback, useEffect } from 'react'

import axios from 'axios'

import { fetchAllStocks } from '@/infra/instances/fetchStocksInstance/fetchAllStocksInstance'
import { getEnv } from '@/utils'

export const useHomeModel = () => {
  const handleAlert = () => {
    alert('Home')
  }

  const githubTest = async () => {
    const url = getEnv('VITE_GITHUB_URL')

    try {
      const { data } = await axios.get(`${url}/users`)
      // eslint-disable-next-line no-console
      console.log('data ', data)
    } catch (err) {}
  }

  const getApi = useCallback(async () => {
    try {
      const res = await fetchAllStocks()
      // eslint-disable-next-line no-console
      console.log('SDGFDSFG ', res)
    } catch (err) {}
  }, [])

  useEffect(() => {
    githubTest()
  }, [])

  useEffect(() => {
    getApi()
  }, [getApi])

  return {
    handleAlert,
  }
}
