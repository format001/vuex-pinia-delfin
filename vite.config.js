import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.vue', '.js'],
    // alias: resolve(__dirname, 'src')
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
      host: true
  }
})
