var Path = require('path')

module.exports = {
  entry: './docs/index.js',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'index.dev.js'
  },
  devServer: {
    contentBase: Path.resolve(__dirname, 'docs'),
    overlay: true,
    // 允许外部IP访问
    host: '0.0.0.0'
  },
  module: {
    rules: [
      // JS
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
      // Vue
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
      // Stylus
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            // https://github.com/postcss/postcss-loader#sourcemap 如果不提供sourceMap参数，会有一个不友好的warning
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader',
            // https://github.com/shama/stylus-loader/issues/102 stylus官方文档写到import里面的url不会自动更新上下文，需要调用下面参数
            options: 'resolve url'
          }
        ]
      },
      // Assets
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
