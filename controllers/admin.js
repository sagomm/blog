var art = require('../proxy').article;
var dir = require('../proxy').dir;
exports.mainPage = function* (){
	var _art;
	var _dir;
	yield art.getAll(function(err,ele){
		if(err)console.log(err);
		_art = ele;
	})
	yield dir.getAll(function(err,ele){
		if(err)console.log(err);
		_dir = ele;
	})
	for(var i in _art){
		for(var j in _dir){
			if(_art[i].dir == _dir[j]._id.toString()){
				_art[i].dir = _dir[j].name;
				break;
			}
		}
	}
	yield this.render('admin.jade',{
		title:'后台配置',
		artList:_art,
		dirList:_dir
	})
}