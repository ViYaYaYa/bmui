var Webpack = require('webpack')
var Path = require('path')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

Webpack([
  // Bmui CSS
  {
    entry: {
      'bmui.css': './src/bmui.styl'
    },
    output: {
      path: Path.resolve(__dirname, 'dist'),
      filename: '[name]'
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: ExtractTextWebpackPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  'resolve url': true,
                  'sourceMap': true
                }
              }
            ]
          })
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: './assets/[name].[ext]'
            }
          }
        }
      ]
    },
    devtool: 'source-map',
    plugins: [new ExtractTextWebpackPlugin('bmui.css')]
  },
  // Bmui Vue Conponents
  {
    entry: './src/vue/index.js',
    output: {
      path: Path.resolve(__dirname, 'dist/vue'),
      filename: 'index.js',
      library: 'bmui',
      libraryTarget: 'umd'
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
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '../assets/[name].[ext]'
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
    devtool: 'source-map',
    externals: {
      'vue': 'Vue',
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  },
  // Bmui Docs
  {
    entry: './docs/index.js',
    output: {
      path: Path.resolve(__dirname, 'docs'),
      filename: 'index.build.js'
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
      'src/vue': 'bmui'
    }
  }
], function (err, stats) {
  if (err) {
    console.log(err)
  } else {
    console.log('恭喜你！打包完成，如果你是开发者，请不要忘记在commit前更新package.json的版本号喔')
  }
})
