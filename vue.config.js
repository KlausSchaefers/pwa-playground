const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'docs',
  transpileDependencies: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pwa-playground/'
    : '/'
})
