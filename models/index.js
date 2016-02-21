var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db,function(err){
	if(err){
		console.log('mongodb connect error');
	}
})
require('./article.js');
require('./dir.js');

exports.article = mongoose.model('articles');
exports.dir = mongoose.model('dirs');