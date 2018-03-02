var Path = require('path')
var Webpack = require('webpack')

module.exports = {
  entry: {
    'index.build.js': './docs/index.js'
  },
  output: {
    path: Path.resolve(__dirname, 'docs'),
    filename: '[name]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader',
            options: 'resolve url'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'src': Path.resolve(__dirname, 'src')
    }
  },
  devtool: 'source-map',
  externals: {
    'vue': 'Vue',
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
