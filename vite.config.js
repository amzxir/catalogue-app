import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://react-mini-projects-api.classbon.com',
      },
    },
  },
  plugins: [react()],
  base: "/catalogue-app/"
})
