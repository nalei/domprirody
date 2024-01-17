import { App } from 'vue'
import SFButton from './components/SfButton.vue'
import 'element-plus/dist/index.css'

const components = [
  SFButton
]

export default {
  install(app: App) {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}
