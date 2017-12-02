import express from 'express';
import path from 'path';
import fs from 'fs';
import http from 'http';
import https from 'https';
import forceSSL from 'express-force-ssl';
import favicon from 'serve-favicon';
import webpack from 'webpack';

const config = require('../webpack.config');
const compiler = webpack(config);
const routes = require('./routes/index');

const app = express();
const isDevelopment  = app.get('env') !== "production";
const server = http.createServer(app);

app.use(favicon(path.join(__dirname,'../client','img','favicon.ico')));

if (isDevelopment) {
    //logger with morgan
    //set up webpack middleware
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true, publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));

    app.get("*", (req, res, next) => {
        compiler.outputFileSystem.readFile(path.join(__dirname, '../client/index.html'), (err, result) => {
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
app.engine('html', function (path, options, callbacks) {
    fs.readFile(path, 'utf-8', callback)
});

app.use(express.static(path.join(__dirname, '../client')));
if (!isDevelopment) app.use(forceSSL);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

const port = 51900;
const securePort = 52000;

if (isDevelopment) {
  server.listen(port,  function () {
    console.log('Node.js insecure but listening on port ' + port + '...');
  });
} else {
  const sslOptions = {
    key: fs.readFileSync(path.join(__dirname,'../../ssl','keys','d4949_a7893_0c9e1ac46d6e0e4882754486fda5ab67.key'), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname,'../../ssl','certs','blog_andrewgingrich_com_d4949_a7893_1516368886_394c918cc2a1b0c3b85aa99074f40022.crt'), 'utf-8'),
    ca: fs.readFileSync(path.join(__dirname,'../../ssl','certs','blog_andrewgingrich_com_be4d0_08dd5_1540130279_1ba04fe5b80527780985dc843942140c.crt'), 'utf-8')
  };

  secureServer = https.createServer(sslOptions, app);
  app.use(forceSSL);
  app.set('forceSSLOptions', {
    httpsPort: 52000
  });

  secureServer.listen(securePort,  function () {
    console.log('Node.js listening securely on port ' + port + '...');
  });
}
