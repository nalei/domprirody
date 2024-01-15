import PxyButton from './components/PxyButton.vue'

const version = __UI_VERSION__

const components = [PxyButton]

function install (app) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  PxyButton,
  version,
  install
}
