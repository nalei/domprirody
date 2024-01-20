import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    minify: false,
    cssCodeSplit: false,
    lib: {
      name: 'proxy-ui',
      entry: 'src/index.ts',
      fileName: 'index',
    },
    rollupOptions: {
      treeshake: true,
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
