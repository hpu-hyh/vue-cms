import type { AxiosRequestConfig, AxiosResponse } from 'axios'
//拦截器
export interface HYRequesInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  Interceptors?: HYRequesInterceptors
}
