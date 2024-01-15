<template>
  <q-btn
    :label="label"
    color="primary"
  >
    <slot />
  </q-btn>
</template>

<script>
import { QBtn } from 'quasar'

export default {
  name: 'PxyButton',
  props: {
    label: {
      type: String,
      required: true,
    }
  },
  components: {
    QBtn,
  },
}
</script>
