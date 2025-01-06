import { HttpClient } from '@/infra/api/HttpClient'
import { CreateFetchQuotationsService } from '@/services/fetchStocks/fetchQuotations'

let dashboardQuotationsServiceInstance: CreateFetchQuotationsService | null = null

export const fetchQuotationsInstance = (): CreateFetchQuotationsService => {
  if (!dashboardQuotationsServiceInstance) {
    const httpClient = HttpClient.create()
    dashboardQuotationsServiceInstance = new CreateFetchQuotationsService(httpClient)
  }
  return dashboardQuotationsServiceInstance
}

export const fetchQuotations = async () => {
  const service = fetchQuotationsInstance()
  return await service.fetchQuotations()
}
