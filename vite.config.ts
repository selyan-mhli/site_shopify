import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.ts'),
        theme: resolve(__dirname, 'src/styles/theme.css'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    minify: 'terser',
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
