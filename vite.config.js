import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['.']
    }
  },
  build: {
    cssMinify: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte'],
          styles: ['./src/app.css']
        }
      }
    },
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  optimizeDeps: {
    include: ['svelte'],
    exclude: ['clsx']
  }
});
