var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var port = process.env.PORT||8080;
var logger = require('morgan');
var database = require('./databaseConnection');
var router= require('./route');



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api',router);
var server=app.listen(port,function(){
	console.log('server is listning at '+port);
});
