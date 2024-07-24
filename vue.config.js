const { defineConfig } = require('@vue/cli-service');
const path = require('path'); // Agrega esta línea

module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
});
