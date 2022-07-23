import path from 'path'
import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'
import mpa from 'vite-plugin-mpa'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  plugins: [
    FullReload(['index.html', 'src/**/*']),
    mpa(),
    handlebars({
      partialDirectory: path.resolve(__dirname, './src/partials'),
      helpers: {
        ifEquals: (arg1, arg2, options) => (arg1 == arg2) ? options.fn(this) : options.inverse(this),
      },
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})