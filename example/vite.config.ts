import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0', // allow external access,
    port: 3000,
    hmr: {
      host: '192.168.10.106',
      port: 3000
    }
  }
});
