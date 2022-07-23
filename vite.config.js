import path from 'path'
import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'
import mpa from 'vite-plugin-mpa'

export default defineConfig({
  plugins: [
    FullReload(['index.html', 'src/**/*']),
    mpa(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})