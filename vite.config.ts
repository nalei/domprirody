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
      name: 'domprirody',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        }
      }
    }
  }
})
