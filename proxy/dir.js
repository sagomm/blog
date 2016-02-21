var dir = require('../models').dir;
/**
 * [for crate dir]
 * @param  {[object]} _dir [object from dir models]
 * @return {[promise]}      [promise]
 */
exports.create = function(_dir){
	return dir(_dir).save();
}
exports.getById = function(id,callback){
	return dir.findById(id).exec(callback);
}
exports.getAll = function(callback){
	return dir.find().exec(callback);
}
exports.delById = function(id){
	return dir.remove({_id:id});
}
exports.updateById = function(id,_dir){
	return dir.findByIdAndUpdate(id,{$set:{
		name : _dir.name,
		date : new Date().toString(),
		content : _dir.content
	}});
}
