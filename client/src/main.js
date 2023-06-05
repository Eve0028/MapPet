import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import BootstrapVue from "bootstrap-vue"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
// app.use(BootstrapVue)
app.mount('#app')
