var Path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var Webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

function getEslintLoader () {
  return {
    loader: 'eslint-loader',
    options: {
      fix: true
    }
  }
}

function getPostcssLoader () {
  return {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }
}

module.exports = {
  mode: "development",
  entry: [
    'babel-polyfill',
    'bootstrap/dist/css/bootstrap.min.css',
    'src/bmui.styl',
    './docs/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          getEslintLoader()
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader',
          getEslintLoader()
        ]
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          getPostcssLoader(),
          {
            loader: 'stylus-loader',
            options: 'resolve url'
          }
        ]
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            include: /node_modules/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            use: [
              'style-loader',
              'css-loader',
              getPostcssLoader()
            ]
          }
        ]
      },
      {
        test: /\.(woff2|woff|png|jpg|jpeg|gif|svg)$/,
        use: ['url-loader']
      },
      {
        test: /\.md$/,
        use: ['raw-loader', 'markdown-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'src': Path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/index.html'
    })
  ]
}
