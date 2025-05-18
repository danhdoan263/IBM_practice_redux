import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    port:3000,
    open:true
  },
  resolve:{
    alias:{
      "@": path.resolve(__dirname,"src"),
      "#": path.resolve(__dirname,"public"),
      "@components": path.resolve(__dirname,"src/Components"),
      "@pages": path.resolve(__dirname,"src/Pages"),
      "@assets": path.resolve(__dirname,"src/assets"),
      "@template": path.resolve(__dirname,"src/Template"),
    }
  }
})
