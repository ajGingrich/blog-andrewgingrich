const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'client/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
      alias: {
        'Containers': path.join(__dirname, 'client/containers'),
        'Components': path.join(__dirname, 'client/components'),
        'actions': path.join(__dirname, 'client/actions'),
        'store': path.join(__dirname, 'client/store')
      },
      extensions: ['.js', '.json'],
      modules: [path.join(__dirname, 'client/'), 'node_modules']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.s?css$/, loaders: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader', 'sass-loader'] },
            { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=1000000' }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'client/index.template.ejs',
            filename: '../index.html'
        }),
        new ExtractTextPlugin({
            filename: './client/styles/style.css',
            disable: process.env.NODE_ENV === 'development'
        }),
        new Dotenv()
    ]
};
