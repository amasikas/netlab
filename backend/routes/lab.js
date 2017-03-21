/**
 * Created by saki on 2017/2/5.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index.html');
});

router.get('/api/search', function(req, res, next){
    res.json({'err':0, 'msg': 'test'});
});

module.exports = router;
