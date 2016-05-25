var express = require('express');
var app = express();
var router = express.Router();
var stringify = require('json-stringify-safe');
var Human = require('./api/model/human');




router.get('/listHumans', function (req,res) {
  Human.find(function(err, data) {
     if (err) return console.error(err);
     res.json(data);
   })
});


router.use('/addHumans', function (req,res) {
var humandata= new Human(req.body);
    humandata.save(function(err) {
      if (err) return console.error(err);
      res.json({"success":"true"});
    });

});

router.use('/deleteHumans', function (req,res) {
    Human.remove(req.body,function(err, human) {
        if(!err)
        res.json({"success":"user deleted successfully"});
  });
});

module.exports = router;
