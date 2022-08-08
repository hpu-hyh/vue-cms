import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
import { HYRequestConfig, HYRequestInterceptors } from './type'
// import BackColor from 'wangeditor/dist/menus/back-color'

// interface InterceptorHooks {
//   requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
//   requestInterceptorCatch?: (error: any) => any

//   responseInterceptor?: (response: AxiosResponse) => AxiosResponse
//   responseInterceptorCatch?: (error: any) => any
// }

// interface HYRequestConfig extends AxiosRequestConfig {
//   showLoading?: boolean
//   interceptorHooks?: InterceptorHooks
// }

// interface HYData<T> {
//   data: T
//   returnCode: string
//   success: boolean
// }
const DEAFULT_LOADING = true

class HYRequest {
  // config?: AxiosRequestConfig
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance
  instance: AxiosInstance

  constructor(config: HYRequestConfig) {
    // this.config = options
    // this.interceptorHooks = options.interceptorHooks
    // this.showLoading = options.showLoading ?? true
    // this.instance = axios.create(options)

    // this.setupInterceptor()
    this.instance = axios.create(config)

    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据。。。',
            background: 'rgba(0. 0. 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        // const data = res.data
        return res
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: HYRequestConfig<T>): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEAFULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEAFULT_LOADING
          return err
        })
    })
  }
  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}
export default HYRequest
