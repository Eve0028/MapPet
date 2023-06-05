import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8080,

    hmr: {
      host: 'localhost',
    },
    watch: {
      usePolling: true
    }
  },
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/styles/main.scss";
              @import "./src/styles/utils/_variables.scss";
              @import "./src/styles/utils/_mixins.scss";
            `
      }
    }
  },
})
