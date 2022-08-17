import { createApp } from 'vue'

import { registerApp } from './global'
import 'normalize.css'
import './assets/css/index.less'

// import './service/axios_demo' //默认执行里面的的文件

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

registerApp(app)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
