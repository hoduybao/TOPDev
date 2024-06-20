import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig, HttpProxy } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://www.orichalcos.me',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
