const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//抽离css文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        splitChunks: {//抽离公共代码
            maxAsyncRequests: 20,//最大异步请求数,默认值5
            maxInitialRequests: 20,//入口点的最大并行请求数,默认值3,即cacheGrops的长度
            cacheGroups: {
                common: {
                    priority: 0,
                    chunks: 'initial',
                    name: 'common',//在html-webpack-plugin中的chunks添加name,则该代码块才加载到html中
                    minSize: 0,
                    minChunks: 2
                },
                vendors: {
                    priority: 2,
                    name: 'lodash',
                    test: /[\\/]node_modules[\\/](lodash)[\\/]/,
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2
                },
                vendors1: {
                    priority:1,
                    name:'jquery',
                    test: /[\\/]node_modules[\\/](jquery)[\\/]/,
                    chunks:'initial',
                    minSize:0,
                    minChunks:2
                }
            }
        }
    },
    plugins:[
        new CleanWebpackPlugin(),//打包之前清除dist文件夹的内容
        new MiniCssExtractPlugin({
            filename: '[name][hash:8].css',//如果写成css[name][hash:8].css 样式中引入的css背景不生效，路径不对
            chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ]
    }
});