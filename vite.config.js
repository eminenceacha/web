import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/chat': {
        target: 'http://localhost:5678', // Default n8n local URL. Change if needed.
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/chat/, '/webhook-test/GsjbA-KMb3PnFQxH84580')
      }
    }
  }
})
