var router = require('koa-router')();
var mainPage = require('../controllers/mainPage').visit;
var artV = require('../controllers/visitArticle').visitArt;
var dirV = require('../controllers/visitDir').visitDir;

router.get('/',mainPage);
router.get('/:dir/:art',artV);
router.get('/:dir',dirV);
router.get('/favicon.ico',function*(next){
	return next;
});

module.exports = router;