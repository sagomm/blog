var views = require('koa-views');
var serve = require('koa-static');

var config = {};
config.db = 'mongodb://127.0.0.1:27017/wangtao';
config.view = views(__dirname + '/views', {
  map: {
    html: 'jade'
  }
})
config.serve = serve(__dirname + '/public');
module.exports = config;
