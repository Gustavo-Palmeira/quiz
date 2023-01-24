import axios, { AxiosInstance } from 'axios'

export const http: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
})
