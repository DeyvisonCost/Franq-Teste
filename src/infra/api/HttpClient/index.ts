import axios, { AxiosInstance } from 'axios'

import { HttpRequest, HttpStatusCode, IHttpClient } from '@/infra/api/HttpClientContract'
import { getEnv } from '@/utils'

export class HttpClient implements IHttpClient {
  constructor(
    private readonly api: AxiosInstance = axios,
    private baseUrl: string = getEnv('VITE_BASE_URL')
  ) {}

  static create(baseUrl?: string) {
    return new HttpClient(axios, baseUrl || getEnv('VITE_BASE_URL'))
  }

  setBaseUrl(newBaseUrl: string): void {
    this.baseUrl = newBaseUrl
  }

  async sendRequest<TResponse, TBody>(props: HttpRequest<TBody>): Promise<TResponse> {
    const { endpoint, method, body, headers } = props

    const updatedHeaders = {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
      ...headers,
    }

    try {
      const { data } = await this.api.request<TResponse>({
        url: `${this.baseUrl}${endpoint}`,
        method,
        headers: updatedHeaders,
        data: body,
      })

      return data
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const status = err.response?.status || HttpStatusCode.serverError
        const message = err.response?.data || err.message
        throw new Error(`Request error ${status}: ${message}`)
      }
      throw new Error(`Unexpected error: ${(err as Error).message}`)
    }
  }
}
