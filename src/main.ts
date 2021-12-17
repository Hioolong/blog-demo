import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Ripple from '@/directives/ripple'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Ripple)

app.mount('#app')
