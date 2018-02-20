var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://zhiguo:zhiguowang1207@ds137230.mlab.com:37230/mytasklist_zhiguo', ['testData']);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
    res.send('Submitted Successfully');
});

router.post("/", function(req, res, next){
    var info = req.body;
    db.testData.insert(info, function(err, result){

        //res.redirect('users')
    });

});







module.exports = router;
