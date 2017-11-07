import express from 'express';
import path from 'path';
import fs from 'fs';
import favicon from 'serve-favicon';
import webpack from 'webpack';
import Butter from 'buttercms';
const butter = Butter('e214fff9440099a8267608a6956d4e2ea80c0a37');

butter.post.list({page: 1, page_size: 10})
    .then(function(resp) {
        console.log(resp.data)
    }).catch(function(resp) {
    console.log(resp)
});

const config = require('../webpack.config');
const compiler = webpack(config);
const routes = require('./routes/index');

const app = express();
const isDevelopment  = app.get('env') !== "production";

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