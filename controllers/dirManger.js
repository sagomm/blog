var dir = require('../proxy').dir;

exports.addDir = function*(){
	var body = this.request.body;
	yield dir.create({name:body.name});
	this.redirect('/');
}
exports.addArt = function*(){
	yield this.render('input.jade',{
		title:'添加文章'
	});
}
exports.delDir = function*(){
	yield dir.delById(this.params.id);
	this.redirect('/');
}

exports.updateDir = function*() {
	yield dir.updateById(this.request.body.id,this.request.body);
	this.rederict('/');
}
exports.reName = function*() {
	var body = this.request.body;
	yield dir.updateById(body.id,{
		name:body.name
	});
	this.redirect('/');
}