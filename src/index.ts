import type { App } from 'vue'
import ProxyButton from '@/components/button/ProxyButton.vue'
import 'element-plus/dist/index.css'

const components = [
  ProxyButton
]

export default {
  install(app: App) {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}
