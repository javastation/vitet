import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'

const app = createApp(App)
Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
  i.install?.({ app, router })
)
app.use(createPinia())
app.use(router)

app.mount('#app')
