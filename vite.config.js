const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        shop: resolve(__dirname, 'shop.html'),
        details: resolve(__dirname, 'details.html'),
        booking: resolve(__dirname, 'booking.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogDetail: resolve(__dirname, 'blog-detail.html'),
        b2b: resolve(__dirname, 'b2b.html'),
      },
    },
  },
})
