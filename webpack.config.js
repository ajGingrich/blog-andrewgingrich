const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'src/dist'),
        publicPath: '/',
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
            { test: /\.s?css$/, loaders: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader', 'sass-loader'] },
            { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=1000000' }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.template.ejs',
            filename: '../index.html'
        }),
        new Dotenv(),
        new BundleAnalyzerPlugin()
    ]
};
