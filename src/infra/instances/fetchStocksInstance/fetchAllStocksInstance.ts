import { HttpClient } from '@/infra/api/HttpClient'
import { CreateFetchStocksService } from '@/services/fetchStocks/fetchAllStocks'

let homeStocksServiceInstance: CreateFetchStocksService | null = null

export const fetchAllStocksInstance = (): CreateFetchStocksService => {
  if (!homeStocksServiceInstance) {
    const httpClient = HttpClient.create()
    homeStocksServiceInstance = new CreateFetchStocksService(httpClient)
  }
  return homeStocksServiceInstance
}

export const fetchAllStocks = async () => {
  const service = fetchAllStocksInstance()
  return await service.fetchAllStocks()
}
