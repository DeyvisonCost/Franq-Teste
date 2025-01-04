import axios, { AxiosInstance } from 'axios'

export const HttpClient: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
})
