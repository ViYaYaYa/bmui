var Path = require('path')
var Webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

Webpack([
  // CSS
  {
    entry: {
      'bmui.css': './src/bmui.styl',
    },
    output: {
      path: Path.resolve(__dirname, 'dist'),
      filename: '[name]',
      publicPath: './'
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          exclude: /node_modules/,
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
    devtool: 'source-map',
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new ExtractTextWebpackPlugin('bmui.css')
    ]
  },
  // Vue
  {
    entry: {
      'index.js': './src/vue/index.js'
    },
    output: {
      path: Path.resolve(__dirname, 'dist/vue'),
      filename: '[name]',
      library: 'bmui',
      libraryTarget: 'umd',
      publicPath: './'
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
  // Docs
  {
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
    }
  }
], function (err, stats) {
  if (err) console.log(err)
})