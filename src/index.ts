import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'

export type FetchError = AxiosError | Error

export type FetchConfig = AxiosRequestConfig

export interface IFetcher {
  handleError(error: Error, message?: string): never
  request<T = any>(
    config: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T>
  get<T = any>(
    url: string,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T>
  post<T = any, R = any>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T>
  put<T = any, R = any>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T>
  patch<T = any, R = any>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
}

export default class Fetcher implements IFetcher {
  private readonly service: AxiosInstance

  constructor(
    private readonly config: AxiosRequestConfig | undefined = undefined,
  ) {
    const service = axios.create(this.config)
    this.service = service
  }

  public handleError<T>(error: Error, message?: string): never {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError<T> = error
      if (message) axiosError.message = message
      throw axiosError
    } else {
      if (message) error.message = message
      throw error
    }
  }

  public async request<T = any>(
    config: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.request<T>(config)
      return response.data
    } catch (error) {
      this.handleError(error, errorMessage)
    }
  }

  public async get<T = any>(
    url: string,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.get<T>(url, config)
      return response.data
    } catch (error) {
      this.handleError(error, errorMessage)
    }
  }

  public async post<T = any, R = any>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.post<T>(url, data, config)
      return response.data
    } catch (error) {
      this.handleError(error, errorMessage)
    }
  }

  public async put<T = any, R = any>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.put<T>(url, data, config)
      return response.data
    } catch (error) {
      this.handleError(error, errorMessage)
    }
  }

  public async patch<T = any, R = any>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.patch<T>(url, data, config)
      return response.data
    } catch (error) {
      this.handleError(error, errorMessage)
    }
  }

  public async delete<T = any>(
    url: string,
    config?: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<T> {
    try {
      const response = await this.service.delete<T>(url, config)
      return response.data
    } catch (error) {
      this.handleError(error, errorMessage)
    }
  }
}
