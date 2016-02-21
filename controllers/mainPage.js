var art = require('../proxy').article;
var dir = require('../proxy').dir;

exports.visit = function*(){
	var artList;
	var classList;
	yield art.getInLimit(5,function(err,ele){
		artList = ele;
	})
	yield dir.getAll(function(err,ele){
		classList = ele;
	})
	if(artList && classList){
		yield this.render('index.jade',{
			artList:artList,
			dirList:classList
		})
	}
}