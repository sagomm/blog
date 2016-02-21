var app = require('koa')();
var config = require('./config');
var router = require('./input-router');

// define logger
app.use(require('koa-logger')());
//define views
app.use(config.view);
//define static router
app.use(config.serve);
//define router
app.use(router.routes());
// handle listen port
app.listen(80);

