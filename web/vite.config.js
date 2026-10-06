import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // GitHub Pages 子路径部署需要相对路径
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:3111' },
  },
});
