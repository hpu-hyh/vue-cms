// 1.区分环境变量方式一:
// export const API_BASE_URL = 'https://coderwhy/org/dev'
// export const API_BASE_URL = 'https://coderwhy/org/prod'

// 2.区分环境变量方式二:
// let API_BASE_URL = ''
// const TIME_OUT = 10000
// if (process.env.NODE_ENV === 'development') {
//   API_BASE_URL = '/api'
// } else if (process.env.NODE_ENV === 'production') {
//   API_BASE_URL = 'http://coderwhy/org/pro'
// } else {
//   API_BASE_URL = 'http://coderwhy/org/test'
// }

// 3.区分环境变量方式三: 加载.env文件
export const API_BASE_URL = process.env.VUE_APP_BASE_URL
export const TIME_OUT = 10000
// export { API_BASE_URL, TIME_OUT }
