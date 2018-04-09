const config = require('./webpack.config.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

//remove hot loader and hot middleware
config.entry.splice(0, 2);
config.plugins.splice(0, 1);

//delete the public path for react-hot-loader
delete config.output.publicPath;

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
);

config.plugins.push(
  new UglifyJsPlugin({
    uglifyOptions:{
      output: {
        comments: false, // remove comments
      },
      compress: {
        warnings: false, // good for prod apps so users can't peek behind curtain
      }
    },
  }),
);

// make extract plugin only for production??

config.plugins.push(
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.html$/,
    threshold: 0,
    minRatio: 0.6
  })
);

module.exports = config;
