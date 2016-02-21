var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var articleSchema = new mongoose.Schema({
	id		:   ObjectId,
	title   :   String,
	info    :   String,
	date    :   {type:Date,default:Date.now},
	dir     :   String,
	markDown:   String,
	html	:   String
})
mongoose.model('articles',articleSchema);
