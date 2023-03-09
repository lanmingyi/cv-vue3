import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 解决[vite] Internal server error: Failed to resolve import
  resolve: {
    alias:{
      '@': path.resolve(__dirname, 'src')
    }
  }
})
