import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// elee05.github.io is a "user site", so it is served from the root ("/")
export default defineConfig({
  plugins: [react()],
  base: '/',
})
