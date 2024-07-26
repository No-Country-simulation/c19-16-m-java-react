import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from "vite-plugin-svgr";






// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(),],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@pages': path.resolve(__dirname, 'src/Pages'),
    },
  },

})
