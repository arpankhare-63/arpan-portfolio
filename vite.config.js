import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/React_portfolio/',   // Add this line
  plugins: [react()],
})
