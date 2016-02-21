var article = require('../proxy').article;
var dir = require('../proxy').dir;

exports.visitArt = function*(){
	var artId = this.params.art;
	var dirId = this.params.dir;
	var _dir;
	var _art;
	yield dir.getById(dirId,function(err,ele){
		if(err){
			console.log(err);
		}else{
			_dir = ele;
		}
	})
	if(_dir){
		yield article.getById(artId,function(err,ele){
			if(err){
				console.log(err);
			}else{
				_art = ele;
			}
		})
		if(_art){
			if(_dir._id.toString() == _art.dir){
				yield this.render(
						'article.jade',{
							title : _art.title,
							dir : _art.dir,
							dir_name : _dir.name,
							info : _art.info,
							html : _art.html
						}
					)
			}else{
				//404
			}
		}else{
			//404
		}
	}else{
		//404
	}
}