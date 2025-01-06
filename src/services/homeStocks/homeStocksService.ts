import { HttpMethod, IHttpClient } from '@/infra/api/HttpClientContract'
import { APIResponse } from '@/presentation/views/Home/home.types'
import { getEnv } from '@/utils'

export interface ICreateHomeStocksService {
  exec: () => Promise<APIResponse>
}

export class CreateHomeStocksService implements ICreateHomeStocksService {
  constructor(private readonly HttpClient: IHttpClient) {}
  async exec(): Promise<APIResponse> {
    try {
      const responseHomeStocks = await this.HttpClient.sendRequest<APIResponse>({
        method: HttpMethod.GET,
        endpoint: `/finance${getEnv('VITE_SECRET_KEY')}`,
      })

      return responseHomeStocks
    } catch (error) {
      throw new Error('Falha ao obter dados da API.')
    }
  }
}
