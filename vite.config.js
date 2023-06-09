const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, 'product.html'),
        detail: resolve(__dirname, 'detail.html'),
        booking: resolve(__dirname, 'booking.html'),
        // privatesale: resolve(__dirname, 'privatesale.html'),
      },
    },
  },
})
