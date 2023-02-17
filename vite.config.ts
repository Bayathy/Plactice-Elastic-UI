import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel:{
      plugins:['@emotion']
    }
  })],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  server:{
    port: 3000
  },
})
