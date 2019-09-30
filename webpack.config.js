const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//抽离css文件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css,会覆盖js的压缩,所以要用terser-webpack-plugin
const TerserJSPlugin = require('terser-webpack-plugin');
module.exports = {
  mode: 'production',//开发模式 development ,和生产 production 模式,开发模式下打包后代码不会压缩
  performance: {
    hints: false
  },
  entry:{
    'index':'./src/js/index.js',
    'other':'./src/js/other.js'
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
      chunkFilter: () => true,//是否压缩js文件,默认true
    }), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '学习webpack',
      template: 'src/views/index.html',
      favicon: './src/static/iconfont/icon_192x192.png',
      minify: {
        removeAttributeQuotes: true,//去掉html标签属性中的引号
        // collapseWhitespace:true //去掉html中的空格
      },
      hash: true,
      filename:'index.html',//如果在加一层文件夹，例如views/index.html 会合html-withimg-loader冲突，导致在html中引入的img的路径不对，从而无法正常显示
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      title: '首页',
      template: 'src/views/other.html',
      minify: {
        removeAttributeQuotes: true,//去掉html标签属性中的引号
        // collapseWhitespace:true //去掉html中的空格
      },
      hash: true,
      filename:'other.html',
      chunks:['other']
    }),
    new MiniCssExtractPlugin({
      filename: '[name][hash:8].css',//如果写成css[name][hash:8].css 样式中引入的css背景不生效，路径不对
      chunkFilename: '[id].css',
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
          loader:'file-loader',
          options:{
            limit:200*1024,//图片大于200k时,使用file-loader来产出图片,否则使用base64
            outputPath:'static/img/',
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