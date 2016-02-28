var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Citation = mongoose.model('Citation');


router.get('/', function(req, res) {
  res.render('index.ejs');
});

router.get('/api/citations', function(req, res, next) {
  
  var arr = [
    {"tag":"ZX29JO","make":"Volvo","year":2005,"color":"Red","state":"OH","violation":2,"location":"There","date":"3/20/2013","time":"10:96","officer":"Barney Fife","unit":6},
    {"tag":"DWQ1W0","make":"Volvo","year":2014,"color":"Black","state":"OH","violation":9,"location":"There","date":"6/3/2014","time":"8:21","officer":"Tubbs","unit":7},
    {"tag":"GDC8K9","make":"Ford","year":2008,"color":"Yellow","state":"OH","violation":3,"location":"Everywhere","date":"6/20/2013","time":"12:23","officer":"Nicolas Angel","unit":9},
    {"tag":"LO064W","make":"Ford","year":2013,"color":"Yellow","state":"OH","violation":10,"location":"There","date":"9/17/2014","time":"22:40","officer":"Sheriff Buford T. Justice","unit":9},
    {"tag":"VJ160E","make":"Mitsubishi","year":2012,"color":"Yellow","state":"OH","violation":5,"location":"Everywhere","date":"12/5/2014","time":"14:73","officer":"Nicolas Angel","unit":10},
    {"tag":"TUKU2G","make":"Ford","year":2009,"color":"Black","state":"OH","violation":3,"location":"Here","date":"1/3/2015","time":"16:85","officer":"Sheriff Buford T. Justice","unit":8},
    {"tag":"ZWJKRP","make":"Volvo","year":2012,"color":"Yellow","state":"OH","violation":4,"location":"Here","date":"3/13/2013","time":"3:29","officer":"Tubbs","unit":7},
    {"tag":"78VNRL","make":"Ford","year":2008,"color":"Blue","state":"OH","violation":2,"location":"Here","date":"9/14/2014","time":"11:78","officer":"Frank Serpico","unit":4},
    {"tag":"UTJYJ3","make":"Mercedes","year":2012,"color":"Red","state":"OH","violation":6,"location":"Here","date":"6/1/2014","time":"18:76","officer":"Frank Serpico","unit":8},
    {"tag":"S7W5L0","make":"Volvo","year":2008,"color":"White","state":"OH","violation":6,"location":"There","date":"5/16/2014","time":"2:97","officer":"Nicolas Angel","unit":6},
    {"tag":"IFRWDA","make":"Saab","year":2010,"color":"Yellow","state":"OH","violation":7,"location":"Everywhere","date":"10/5/2014","time":"22:84","officer":"Barney Fife","unit":3},
    {"tag":"2F1ZLH","make":"Mitsubishi","year":2008,"color":"Blue","state":"OH","violation":7,"location":"There","date":"3/10/2013","time":"12:14","officer":"Crockett","unit":6},
    {"tag":"2JDNHT","make":"Plymouth","year":2007,"color":"Black","state":"OH","violation":1,"location":"Here","date":"2/8/2015","time":"6:87","officer":"Frank Serpico","unit":3}
  ];
  Citation.find({}, function(err, cites) {
    if(err){return console.error(err);}
    cites.forEach(function(cite) {
      arr.push(cite);
    });
  });
  res.json(arr);
});

module.exports = router;
