var article = require('../proxy').article;
var dir = require('../proxy').dir;

exports.visitDir = function*(){
	var dirId = this.params.dir;
	var data = [];
	var _dir;
	if(dirId){
		yield dir.getById(dirId,function(err,ele){
			_dir = ele;
		})
		if(_dir){
			for(var i = 0;i<_dir.content.length;i++){
				yield article.getById(_dir.content[i],function(err,ele){
					if(ele){
						data.push({
							id:_dir.content[i],
							title:ele.title,
							date:ele.date.toDateString()
						})
					}
				})
			}
			yield this.render('list.jade',{
				dir:_dir,
				artList : data
			})
		}else{
			//404
		}
	}else{
		//404
	}
}