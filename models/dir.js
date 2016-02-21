var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var dirSchema = new mongoose.Schema({
	id		:   ObjectId,
	name 	:   String,
	date	:   {type:Date,default:Date.now},
	dir     :   {type:String,default:'/'},
	content :   {type:Array,default:[]}
})
mongoose.model('dirs',dirSchema);