const config = require('./webpack.config.js');
const webpack = require('webpack');

//remove hot loader and hot middleware
config.entry.splice(0, 2);
config.plugins.splice(0, 1);

//delete the public path for react-hot-loader
delete config.output.publicPath;

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
