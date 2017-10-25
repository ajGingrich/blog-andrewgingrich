import express from 'express';
import path from 'path';
import fs from 'fs';
// var favicon = require('serve-favicon');
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import webpack from 'webpack';

const config = require('../webpack.config');
const compiler = webpack(config);
const routes = require('./routes/index');

const app = express();

// view engine setup
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
    fs.readFile(path, 'utf-8', callback)
});

//set up webpack middleware
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const port = process.env.PORT || 52000;
app.listen(port,  function () {
    console.log('Node.js listening on port ' + port + '...');
});