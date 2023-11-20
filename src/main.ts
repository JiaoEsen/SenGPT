import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import pinia from './store'
import 'amfe-flexible'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
