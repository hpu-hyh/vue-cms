// export interface Result<T> {
//   code: number
//   data: T
// // }
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // interceptors: any
  showLoading?: boolean
  interceptors?: HYRequestInterceptors<T>
}
