<template>
  <el-button v-bind="$attrs">
    <slot />
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'sf-button',
  components: {
    ElButton
  }
})
</script>
