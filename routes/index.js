var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://zhiguo:zhiguowang1207@ds137230.mlab.com:37230/mytasklist_zhiguo', ['testData']);


/* GET home page. */
router.get('/', function(req, res, next) {
    var mcc=parseInt(req.query.Mcc);
    console.log(req.query.Mcc);

    db.testData.find({"MCC":mcc},function(err, info){

        res.render('index', {
            data: info
       });
    });
});

//Get home page of insert.ejs.(insert successfully reminder)
router.get('/insert', function(req, res, next) {
    res.render('insert');
});

//Accept all form information to insert database;
router.post('/insert', function(req, res, next) {
    var task=req.body;
    var date=req.body.Date;
    console.log(parseInt(date));

    db.testData.insert({"Date":date, "MCC":parseInt(req.body.MCC), "ZIP":parseInt(req.body.ZIP),
                        "Volume":parseInt(req.body.Volume), "Effectiverates":req.body.Effectiverates}, function (err, task) {
    });
    db.testData.find({"MCC":1},function(err, info){

        res.render('insert');
    });
});


//Get home page of users.ejs.(delete successfully reminder)
router.get('/users', function(req, res, next) {
    res.render('users');
});


// Accept ID parameter to delete the item;
router.post('/users', function(req, res, next){
    var ID= req.body.id;
    console.log(ID);
    db.testData.remove({"_id":mongojs.ObjectId(ID)});
    res.render('users');
});



module.exports = router;
