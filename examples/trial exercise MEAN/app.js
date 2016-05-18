var express = require('express');
var app = express();
var routes = require('./app_server/routes/index');

app.use('/', routes);
module.exports = app;
/* app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); */