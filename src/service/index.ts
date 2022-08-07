// 当前文件夹统一的出口
//封装axios
import HYRequest from './request'

import { API_BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  Interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
