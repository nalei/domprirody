import type { App } from 'vue'
import { ProxyButton } from '@/components/Button'
import 'element-plus/dist/index.css'

const components = [
  ProxyButton,
]

export default {
  ...components,
  install(app: App) {
    components.forEach(component => {
      app.component(component.name, component)
    })
  },
}
