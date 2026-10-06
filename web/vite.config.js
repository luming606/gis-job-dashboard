import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // GitHub Pages 子路径部署需要相对路径
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        // 拆分大依赖：L7 与 ECharts 各自成块，业务代码改动不重新下载整包
        manualChunks: {
          l7: ['@antv/l7', '@antv/l7-maps'],
          echarts: ['echarts'],
        },
      },
    },
  },
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:3111' },
  },
});
