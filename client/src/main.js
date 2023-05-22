import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import * as Sentry from "@sentry/vue";

const pinia = createPinia()
const app = createApp(App)

// Sentry.init({
//   app,
//   dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
//   integrations: [
//     new Sentry.BrowserTracing({
//       routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//     }),
//   ],
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

// app.config.errorHandler = (err, instance, info) => {
//   // report error to tracking services
// }

app.use(router)
app.use(pinia)
app.mount('#app')
