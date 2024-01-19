import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths({
      loose: true,
    }),
    dts(),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'proxy-ui',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'vue',
          'element-plus': 'ElementPlus'
        }
      }
    }
  }
})
