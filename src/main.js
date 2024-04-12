import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import elementIcon from './plugins/icons';
import piniaPersist from 'pinia-plugin-persist'
import './assets/init.css'
import 'bytemd/dist/index.css'



const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)
app.use(elementIcon)
app.mount('#app')
