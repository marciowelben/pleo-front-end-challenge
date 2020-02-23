import axios, { Method } from 'axios'
import { API } from 'config/env'

interface IAxiosRequest {
  url: string
  method: Method
  data?: any
  params?: any
  headers?: object
}

async function executeAxiosRequest<T>({
  url,
  method,
  data,
  params,
  headers
}: IAxiosRequest): Promise<[T | null, number, string | null]> {
  try {
    const response = await axios({
      baseURL: API.BASE_URL,
      url,
      headers,
      method,
      data,
      params
    })

    return [response.data as T, response.status, null]
  } catch (error) {
    if (error.response) {
      return [null, error.response.status, error.message]
    }

    return [null, 0, error.message]
  }
}

export default class Http {
  static async get<T>(url: string, params = {}): Promise<[T | null, number, string | null]> {
    return executeAxiosRequest<T>({ url, method: 'GET', params })
  }

  static async post<TData, TResult>(
    url: string,
    data: TData,
    headers?: object
  ): Promise<[TResult | null, number, string | null]> {
    return executeAxiosRequest<TResult>({ url, method: 'POST', data, headers })
  }

  static async put<TData, TResult>(url: string, data: TData): Promise<[TResult | null, number, string | null]> {
    return executeAxiosRequest<TResult>({ url, method: 'PUT', data })
  }

  static async $delete<T>(url: string): Promise<[T | null, number, string | null]> {
    return executeAxiosRequest<T>({ url, method: 'DELETE' })
  }
}
