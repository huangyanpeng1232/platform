import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap3/dist/css/bootstrap.min.css'
import '@/assets/icon/iconfont.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'


let app = createApp(App);
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

