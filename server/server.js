import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';
import favicon from 'serve-favicon';
import webpack from 'webpack';
import bodyParser from 'body-parser';

const config = require('../webpack.config');
const compiler = webpack(config);
const routes = require('./routes/index');

const app = express();
const isDevelopment = app.get('env') !== 'production';
const isTesting = app.get('env') === 'testing'
const server = http.createServer(app);
require('dotenv').config();

app.use(favicon(path.join(__dirname, '../src', 'img', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if (isDevelopment) {
    //logger with morgan
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true, publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));

    app.get('*', (req, res, next) => {
        compiler.outputFileSystem.readFile(path.join(__dirname, '../src/index.html'), (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
}

// view engine setup
app.set('view engine', 'html');
app.engine('html', function (path, options, callback) {
    fs.readFile(path, 'utf-8', callback)
});

// Proxy (https://expressjs.com/en/guide/behind-proxies.html)
app.enable('trust proxy', 'localhost', '66.198.253.199');
app.use(express.static(path.join(__dirname, '../src')));
app.use('/', routes);

// catch error and send to client
app.use(function(err, req, res, next) { // eslint-disable-line no-unused-vars
  res.status(err.status || 500);
  res.send(err)
});

const port = 4040;
if (!isTesting) {
  server.listen(port, function () {
    console.log('Node.js listening on port ' + port + '...'); // eslint-disable-line no-console
  });
}

exports.listen = function(port) {
  console.log('Node.js listening on port ' + port + '...'); // eslint-disable-line no-console
  server.listen(port)
}

exports.close = function() {
  console.log('Node.js closing server') // eslint-disable-line no-console
  server.close()
}

export default server
