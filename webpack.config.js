var Path = require('path')

module.exports = {
  entry: './example/vue-example.js',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'vue-example.js'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      // JS使用eslint，babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },
      // Vue使用eslint，vue-loader
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      },
      // Stylus使用stylus-loader，css-loader，style-loader，option的resolve url是官方的漏洞，应该过后会修复
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            // https://github.com/shama/stylus-loader/issues/102 这难道就不算bug吗我的天
            options: 'resolve url'
          }
        ]
      },
      // 图片使用file-loader
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'src': Path.resolve(__dirname, 'src')
    }
  },
  devtool: 'eval-source-map'
}
