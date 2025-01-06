import { HttpClient } from '@/infra/api/HttpClient'
import { HttpMethod } from '@/infra/api/HttpClientContract'
import { APIResponse } from '@/presentation/views/Dashboard/dashboard.types'
import { getEnv } from '@/utils'

export interface ICreateFetchQuotationsService {
  fetchQuotations: () => Promise<APIResponse>
}

export class CreateFetchQuotationsService implements ICreateFetchQuotationsService {
  private readonly httpClient: HttpClient

  constructor(httpClient: HttpClient = HttpClient.create()) {
    this.httpClient = httpClient
  }

  async fetchQuotations(): Promise<APIResponse> {
    const customBaseUrl = getEnv('VITE_FINANCE_URL')

    this.httpClient.setBaseUrl(customBaseUrl)

    try {
      const responseDashboardQuotations = await this.httpClient.sendRequest<APIResponse, undefined>({
        method: HttpMethod.GET,
        endpoint: `url`,
        // endpoint: `/quotations${getEnv('VITE_SECRET_KEY')}`,
      })

      return responseDashboardQuotations
    } catch (error) {
      throw new Error('Falha ao obter dados da API.')
    }
  }
}
