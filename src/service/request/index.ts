// 使用类封装axios
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

// interface HYRequesInterceptors {
//   requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
//   requestInterceptorCatch: (error: any) => any
//   // responseInterceptor:()=>any
//   // responseInterceptorCatch:()
// }
class HYRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use()
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
