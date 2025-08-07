import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'iOS >= 10', 'not IE 11'],
      modernPolyfills: true
    })
  ],
  build: {
    target: 'es2015'
  }
})