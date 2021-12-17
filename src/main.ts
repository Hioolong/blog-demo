import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Ripple from '@/directives/ripple'
import RippleStepOne from '@/directives/rippleStepOne'
import RippleOverflow from '@/directives/rippleOverflow'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Ripple)
app.use(RippleStepOne)
app.use(RippleOverflow)

app.mount('#app')
