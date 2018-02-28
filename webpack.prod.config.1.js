var Path = require('path')
var Webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    'bmui.css': './src/bmui.styl',
    'vue/index.js': './src/vue/index.js',
  },
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: '[name]',
    publicPath: './'
  },
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // Vue
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      // Stylus
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            "css-loader",
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
        })
      },
      // Assets
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'src': Path.resolve(__dirname, 'src')
    }
  },
  externals: {
    'vue': 'Vue',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextWebpackPlugin("bmui.css"),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
