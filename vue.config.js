const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'docs',
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pwa-playground/'
    : '/'
})
