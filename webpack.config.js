const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//抽离css文件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//会覆盖js的压缩,所以要用terser-webpack-plugin
const TerserJSPlugin = require('terser-webpack-plugin');
module.exports = {
  mode: 'production',
  performance: {
    hints: false
  },
  entry: './src/main.js',
  output: {
    filename: 'index[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,
    port: 3000,
    contentBase: path.join(__dirname, "src"),
    compress: true
  },
  optimization: {
    minimizer: [new TerserJSPlugin({
      chunkFilter: () => false,//是否压缩js文件,默认true
    }), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      template: 'src/views/index.html',
      minify: {
        removeAttributeQuotes: true,//去掉html标签属性中的引号
        // collapseWhitespace:true //去掉html中的空格
      },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
          // plugins: [
          //   ["@babel/plugin-proposal-decorators", { "legacy": true }],
          //   ["@babel/plugin-proposal-class-properties", { "loose": true }]
          // ]
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eto|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.(htm|html)$/i,
        use: 'html-withimg-loader'
      }
    ]
  }
};