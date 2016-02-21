var article = require('../proxy').article;
var dir = require('../proxy').dir;
exports.createArticle = function* (){
	var body = this.request.body;
	var _dir;
	yield dir.getById(body.dir,function(err,ele){
		_dir = ele;
	})
	if(_dir){
		var _art = yield article.create(body);
		_dir.content.push(_art._id.toString());
		yield dir.updateById(body.dir,_dir);
		this.body = JSON.stringify({
			statu : 'ok'
		});
	}else{
		this.body = JSON.stringify({
			statu : 'error',
			info  : '没找到这个目录'
		})
	}
}
exports.editArticle = function*() {
	var _art;
	yield article.getById(this.params.id,function(err,ele){
		if(err){
			console.log(err);
		}
		_art = ele;
	})
	yield this.render('edit.jade',{
		title: _art.title,
		info : _art.info,
		markDown : _art.markDown
	})
}
//update article
exports.updateArticle = function*(){
	try{
		var _art = JSON.parse(this.request.body.data);
		var _art_id = this.request.body.id;
	}catch(e){
		console.log(e);
	}
    article.updateById(_art_id,_art);
}
//get article
exports.getArticle = function*(){
	var _ele;
	yield article.getById(this.params.id,function(err,ele){
		if(err)console.log(err);
		_ele = ele;
	});
	yield this.render('edit.jade',{
		title: _ele.title,
		info : _ele.info,
		markDown : _ele.markDown
	})
}	

//  del article by id
exports.delArticle = function*(){
	var _art;
	var _dir;
	var index;
	yield article.getById(this.params.id,function(err,ele){
		_art = ele;
	})
	yield dir.getById(_art.dir,function(err,ele){
		_dir = ele;
		index = _dir.content.indexOf(_art._id.toString());
	});
	if(index != undefined){
		_dir.content.splice(index,1);
		yield dir.updateById(_dir._id.toString(),_dir);
		if(_art){
			yield article.delById(this.params.id);
			this.redirect('/');
		}else{
			this.body = '不存在该文章';
		}
	}else{
		this.body = '没找到它的目录';
	}
}