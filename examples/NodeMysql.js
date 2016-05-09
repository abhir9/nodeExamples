var http = require('http');
var mysql = require('mysql');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	var mySqlConnection= mysql.createConnection({
			host:'127.0.0.1',
			port:'3306',
			user:'root',
			password:'root',
			database:'employees'});
	mySqlConnection.query('select * from employees',function(err,rows){
		if(err)
			console.log(err);
		else
			response.write(JSON.stringify(rows));
		response.end();
	});
	mySqlConnection.end();
	mySqlConnection=null;
	
}).listen(9080);

console.log('server running at http://127.0.0.1:9080');