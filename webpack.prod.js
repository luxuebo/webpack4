const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        splitChunks: {//抽离公共代码
            cacheGroups: {
                common:{
                    chunks:'initial',
                    name:'common',//在html-webpack-plugin中的chunks添加name,则该代码块才加载到html中
                    minSize:0,
                    minChunks:2
                },
                vendors: {
                    priority:2,
                    name:'lodash',
                    test: /[\\/]node_modules[\\/](lodash)[\\/]/,
                    chunks:'initial',
                    minSize:0,
                    minChunks:2
                },
                vendors1: {
                    priority:1,
                    name:'jquery',
                    test: /[\\/]node_modules[\\/]/,
                    chunks:'initial',
                    minSize:0,
                    minChunks:2
                }
            }
        }
    }
});