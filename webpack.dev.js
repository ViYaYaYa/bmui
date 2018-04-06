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

var complier = Webpack({
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
      }
    ]
  },
  resolve: {
    alias: {
      'src': Path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/index.html'
    })
  ],
  devtool: 'eval-source-map'
})

var server = new WebpackDevServer(complier, {
  contentBase: Path.resolve(__dirname, 'src'),
  overlay: true,
  stats: { colors: true }
})

server.listen(8080)
