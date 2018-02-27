var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var  db = mongojs('mongodb://zhiguo:zhiguowang1207@ds137230.mlab.com:37230/mytasklist_zhiguo', ['clinfo']);
var db2 = mongojs('mongodb://zhiguo:zhiguowang1207@ds137230.mlab.com:37230/mytasklist_zhiguo', ['effectiverate']);
var db3 = mongojs('mongodb://zhiguo:zhiguowang1207@ds137230.mlab.com:37230/mytasklist_zhiguo', ['mcc']);
var db4 = mongojs('mongodb://zhiguo:zhiguowang1207@ds137230.mlab.com:37230/mytasklist_zhiguo', ['testData']);

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('Submitted Successfully');
});




module.exports = router;
