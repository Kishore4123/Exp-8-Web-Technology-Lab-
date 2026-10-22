import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Exp-8-Web-Technology-Lab-/',
  plugins: [react()],
})
