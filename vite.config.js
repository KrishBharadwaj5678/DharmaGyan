import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This ensures the app listens on all network interfaces
    port: process.env.PORT || 3000, // Uses the PORT environment variable or defaults to 3000
  },
})
