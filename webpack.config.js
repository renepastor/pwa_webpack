const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const precss = require('precss');

const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPluginCopy = require('webpack-plugin-copy');

//var ruta_public = "../bulk-api/src/main/resources/"
var ruta_public = "./build/"
//var ruta2 = 'static/';
var ruta2 = '';
module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/only-dev-server',
    'tether',
    'font-awesome/scss/font-awesome.scss',
    './client/app.js'
  ],
  output: {
    path: path.resolve(__dirname, ruta_public+ruta2),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'build/', // Relative directory for base of server
    publicPath: '/',
    inline: true,
    port: process.env.PORT || 3000, // Port Number
    host: '127.0.0.1', // Change to '0.0.0.0' for external facing server
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
      'window.Tether': 'tether',
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    }),
    new ExtractTextPlugin('main.css'),
    new WebpackPluginCopy([
      { from: 'client/sw.js', to: 'sw.js'},
      { from: 'client/cache-polyfill.js', to: 'cache-polyfill.js'},
      { from: 'client/manifest.json', to: 'manifest.json'},
      
      { from: 'client/img/symbolOn.png', to: 'img/symbolOn.png'},
      { from: 'client/img/symbol.png', to: 'img/symbol.png'},
      { from: 'client/img/logo.png', to: 'img/logo.png'},
      { from: 'client/img/logoOn.png', to: 'img/logoOn.png'},
      { from: 'client/img/baner.png', to: 'img/baner.png'},
      { from: 'client/img/user.png', to: 'img/user.png'},
      { from: 'client/img/icon/img192.png', to: 'img/img192.png'},
      { from: 'client/img/img512.png', to: 'img/img512.png'},
      { from: 'client/img/img256.png', to: 'img/img256.png'},
      { from: 'client/img/img128.png', to: 'img/img128.png'},
    ]),
    
    new HtmlWebpackPlugin({
      key: '1231230100000',
      title: 'Sistema BULK',
      name: 'APP BULK',
      author: 'rpmamani@ypfb.gob.bo',
      description: 'Sistema de facturacion',
      template: './client/index.html',
      filename: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins() {
                  // post css plugins, can be exported to postcss.config.js
                  return [
                    precss,
                    autoprefixer
                  ];
                }
              }
            }, {
              loader: 'sass-loader' // compiles SASS to CSS
            }
          ]
        })
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      // font-awesome
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
      },
      // Bootstrap 4
      {
        test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'
      }
    ]
  }
};
