<template>
  <el-button v-bind="props">
    <slot />
  </el-button>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
import type { ButtonType, ButtonSize } from '@/components/Button'

export default defineComponent({
  name: 'proxy-button',
  inheritAttrs: false,
  components: {
    ElButton,
  },
  props: {
    type: {
      type: String as PropType<ButtonType>,
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium',
    },
    circle: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  setup(props) {
    return { props }
  },
})
</script>
