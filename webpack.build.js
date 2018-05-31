var Webpack = require('webpack')
var Path = require('path')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = [
  // Bmui CSS
  {
    mode: "production",
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
    resolve: {
      alias: {
        'src': Path.resolve(__dirname, 'src')
      }
    },
    plugins: [new ExtractTextWebpackPlugin('bmui.css')]
  },
  // Bmui Vue Conponents
  {
    mode: "production",
    entry: './src/vue/index.js',
    output: {
      path: Path.resolve(__dirname, 'dist/vue'),
      publicPath: './',
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
      'vue': {
        root: 'Vue',
        amd: 'vue',
        commonjs: 'vue',
        commonjs2: 'vue'
      },
    },
    optimization: {
      minimize: false
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  },
  // Bmui Docs
  {
    mode: "production",
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
          use: ['babel-loader']
        },
        {
          test: /\.vue$/,
          use: ['vue-loader']
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
    devtool: 'source-map',
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'src/vue': 'bmui'
    }
  }
]
