const path = require('path')

module.exports = {
  entry: './index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './example' // 用于devServer的静态文件路径
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // 用于devServer导出的路径
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  }
}