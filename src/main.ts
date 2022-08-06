import { createApp } from 'vue'

import { registerApp } from './global'

// import './service/axios_demo' //默认执行里面的的文件

import App from './App.vue'

import router from './router'
import store from './store'
import hyRequest from './service'

const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

hyRequest.request({
  url: '/home',
  method: 'GET'
})
