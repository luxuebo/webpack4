const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');

module.exports = merge(base, {
    devtool: 'source-map',//源码映射
    mode: 'development',
    devServer: {
        open: true,//自动打开浏览器
        port: 3000,
        host: 'localhost',
        contentBase: path.join(__dirname, "src"),
        compress: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: { '^/api': '' }
            }
        }
    }
});