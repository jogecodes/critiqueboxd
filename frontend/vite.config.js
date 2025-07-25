import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  publicDir: false,
  server: {
    proxy: {
      '/php-backend': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})
