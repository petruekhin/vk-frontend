import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const cssVarsFilePath = path.resolve(__dirname, 'build/css/variables.css')
const cssVarsFileContents = fs.readFileSync(cssVarsFilePath, 'utf-8')

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `@css { ${cssVarsFileContents} }\n`,
      },
    },
  },
})
