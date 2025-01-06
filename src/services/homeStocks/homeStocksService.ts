import axios from 'axios'

import { APIResponseSchema } from '@/presentation/views/Home/home.schema'
import { APIResponse } from '@/presentation/views/Home/home.types'
import { getEnv } from '@/utils'

export interface ICreateHomeStocksService {
  exec: () => Promise<APIResponse>
}

export class CreateHomeStocksService implements ICreateHomeStocksService {
  async exec(): Promise<APIResponse> {
    const baseUrl = getEnv('VITE_BASE_URL')

    if (!baseUrl) {
      throw new Error('API URL not defined')
    }

    try {
      const { data } = await axios.get(`${baseUrl}/finance`)

      const parsedData = APIResponseSchema.parse(data)

      return parsedData
    } catch (error) {
      throw new Error('Falha ao obter dados da API.')
    }
  }
}
