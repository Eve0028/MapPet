import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8080,
  },
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/styles/main.scss";
              @import "./src/styles/utils/_variables.scss";
            `
      }
    }
  },
})
