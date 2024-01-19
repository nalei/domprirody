import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import '../dist/style.css'
import Ui from '../dist/index'

const app = createApp(App)
app.use(Ui)
app.mount('#app')
