const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//抽离css文件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css,会覆盖js的压缩,所以要用terser-webpack-plugin
const TerserJSPlugin = require('terser-webpack-plugin');
module.exports = {
  mode: 'development',//开发模式,和生产production模式
  performance: {
    hints: false
  },
  entry:{
    'main':'./src/main.js'
  },
  output: {
    filename: 'js/[name][hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    open: true,//自动打开浏览器
    port: 3000,
    host:'localhost',
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
      filename: 'css/main.css'
    }),
    new webpack.ProvidePlugin({
      $:'jquery'//在每一个模块中注入jquery,用$来代替
    })
  ],
  externals:{
    // jquery:'$'//jquery如果是外部引入的(例如cdn),通过import 或require到模块中的jquery则不会打包
    },
  module: {
    rules: [
      // {
      //   test:/\.js$/,
      //   exclude:/node_modules/,
      //   use:'eslint-loader',
      //   enforce: 'pre'
      // },
      // { 
      //   test: require.resolve("jquery"), 
      //   loader: "expose-loader?$" 
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }],
              "@babel/plugin-transform-runtime"
            ]
          },

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
        test: /\.(woff|woff2|eto|ttf|otf)$/,
        use: {
          loader:'file-loader',
          options:{
            outputPath:'static/iconfont/'
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader:'url-loader',
          options:{
            limit:200*1024,//图片大于200k时,使用file-loader来产出图片,否则使用base64
            outputPath:'static/img/'
          }
        }
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
        use: 'html-withimg-loader'//在html直接引用图片
      }
    ]
  }
};