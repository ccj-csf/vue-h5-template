import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import App from './App.vue'
import { createApp } from 'vue'
import { setupRouter, router } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { setupStore } from '@/store'
import { registerGlobComponents } from '@/components/lazyUseVant'
import { setBaiduAnalytics } from '@/hooks/useBaiduAnalytics'
import '@/styles/index.less'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  registerGlobComponents(app)

  setupRouter(app)

  setupRouterGuard(router)

  setBaiduAnalytics(app)

  app.mount('#app')
}

bootstrap()
