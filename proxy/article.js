var article = require('../models').article;
exports.create = function(art){
	return article(art).save(function(err){
		if(err){
			console.log(err);
		}
	});
}
exports.getById = function(id,callback){
	return article.findById(id).exec(callback);
}
exports.getAll = function(callback){
	return article.find().exec(callback);
}
exports.getInLimit = function(limit,callback){
	return article.find().sort({date:'-1'}).limit(limit).exec(callback);
}

exports.delById = function(id){
	return article.remove({_id:id},function(err){
		if(err)console.lod(err);
	});
}
exports.updateById = function(id,art){
	return article.findByIdAndUpdate(id,{
		$set:{
			title : art.title,
			info  : art.info,
			html  : art.html,
			date  : new Date().toString(),
			markDown : art.markDown,
		}
	},function(err){
		if(err)console.log(err);
	});
}