// 使用类封装axios
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HYRequesInterceptors, HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance
  Interceptors?: HYRequesInterceptors

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.Interceptors = config.Interceptors
    this.instance.interceptors.request.use(
      this.Interceptors?.requestInterceptor,
      this.Interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.Interceptors?.responseInterceptor,
      this.Interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
