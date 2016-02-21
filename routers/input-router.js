var router = require('koa-router')();
var mainPage = require('../controllers/admin').mainPage;
var article = require('../controllers/articleManger');
var dir = require('../controllers/dirManger');
var bodyParser = require('koa-body')();
var parse = require('co-busboy');
var fs = require('fs'); 
var uuid = require('uuid');
//main-page
router.get('/',mainPage);
router.post('/addDir',bodyParser,dir.addDir);
router.post('/reNameDir',bodyParser,dir.reName);
router.get('/addArt/:id',dir.addArt);
router.get('/delDir/:id',dir.delDir);

router.get('/editArt/:id',article.editArticle);
router.get('/delArt/:id',article.delArticle);

//input.jade
router.post('/createArt',bodyParser,article.createArticle);


// edit.jade
router.post('/updateArt',bodyParser,article.updateArticle);


//for picture upload
router.post('/picture',function*(next){
	if(this.request.is('multipart/*')){
		var parts = parse(this);
		var part;
		while(part = yield parts) {
			var pic_name = uuid.v4() + '.jpg';
			part.pipe(fs.createWriteStream('./public/images/'+pic_name));
		}
	}else{
		return yield next;
	}
	this.redirect('./images/'+pic_name);
});
module.exports = router;