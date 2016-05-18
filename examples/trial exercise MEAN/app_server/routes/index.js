var express = require('express');
var router = express.Router();
var main= require('../controller/main');
var main2= require('../controller/main2');
router.get('/',main.index);
router.get('/2',main2.index);

module.exports = router;