<template>
  <el-button
    :type="type"
  >
    <slot />
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'proxy-button',
  inheritAttrs: false,
  components: {
    ElButton
  },
  props: {
    type: {
      type: String,
    }
  },
})
</script>
