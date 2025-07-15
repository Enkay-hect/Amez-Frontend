import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuexStore from './stores/index.js'

import './index.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuexStore)

app.mount('#app')
