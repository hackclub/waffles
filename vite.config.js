import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const root = import.meta.dirname

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        requirements: resolve(root, 'requirements/index.html'),
        gallery: resolve(root, 'gallery/index.html'),
        resources: resolve(root, 'resources/index.html'),
        'get-started': resolve(root, 'get-started/index.html'),
      },
    },
  },
})
