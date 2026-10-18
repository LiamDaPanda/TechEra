import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base: the same build works at liamdapanda.github.io/TechEra/ and at the Netlify root.
// The build goes to ../docs, which GitHub Pages and Netlify both serve.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: '../docs', emptyOutDir: true, chunkSizeWarningLimit: 900 },
});
