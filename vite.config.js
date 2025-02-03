import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `@import "${path.resolve(__dirname, 'build/css/variables.css')}"`
      }
    }
  }
})
