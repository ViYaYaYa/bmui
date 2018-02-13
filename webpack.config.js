var Path = require('path')

module.exports = {
  entry: './example/vue-example.js',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'vue-example.js'
  },
  devServer: {
    contentBase: Path.resolve(__dirname, 'example'),
    overlay: true,
    // 允许外部IP访问
    host: '0.0.0.0'
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
      // Stylus使用stylus-loader，postcss-loader，css-loader，style-loader
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            // https://github.com/postcss/postcss-loader#sourcemap 不提供的会有一个不友好的warning
            options: {
              sourceMap: true
            }
          },
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
