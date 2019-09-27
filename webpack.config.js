const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.(png|svg|jpg|gif|woff|woff2|eto|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test:/\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test:/\.xml$/,
        use: [
          'xml-loader'
        ]
      },
    ]
  }
};