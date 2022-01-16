const path = require('path')
const resolve = dir => path.join(__dirname, dir);
module.exports = {
    productionSourceMap: false,
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        https: false,
        open: true
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
    }
};
