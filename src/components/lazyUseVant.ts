import type { App } from 'vue'
import { Button } from 'vant'
const vantComponents = [Button]

export const registerGlobComponents = (app: App) => {
  vantComponents.forEach((components) => {
    app.use(components)
  })
}
