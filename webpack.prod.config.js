const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    entry: [ './src/index.js' ],
    output: {
        path: path.join(__dirname, 'src/dist'),
        filename: 'bundle.js'
    },
    resolve: {
      alias: {
        'Containers': path.join(__dirname, 'src/containers'),
        'Components': path.join(__dirname, 'src/components'),
        'actions': path.join(__dirname, 'src/actions'),
        'store': path.join(__dirname, 'src/store')
      },
      extensions: ['.js', '.json'],
      modules: [path.join(__dirname, 'src/'), 'node_modules']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.s?css$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [{ loader: 'css-loader', options: { importLoaders: 1, minimize: true } }, 'postcss-loader', 'sass-loader']
              })
            },
            { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=1000000' }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.template.ejs',
            filename: '../index.html'
        }),
        new ExtractTextPlugin('style.bundle.css'),
        new Dotenv(),
        new UglifyJsPlugin({
          uglifyOptions:{
            output: {
              comments: false, // remove comments
            },
            compress: {
              warnings: false,
            }
          },
        }),
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$/,
          threshold: 0,
          minRatio: 0.8
        })
    ]
};
