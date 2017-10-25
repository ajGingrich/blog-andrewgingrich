const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './client/index.js'
    ],
    output: {
        path: path.join(__dirname, 'client/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.s?css$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.template.ejs',
            filename: '../index.html'
        }),
        new ExtractTextPlugin({
            filename: "./client/styles/style.css",
            disable: process.env.NODE_ENV === "development"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
