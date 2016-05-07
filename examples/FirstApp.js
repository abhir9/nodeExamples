var http= require('http');

var server= http.createServer(function(req,res){
	
	res.writeHead(200,{'Content-Type':'text/plain'});
//	res.write('data get successfully');
	res.end('data get successfully');

}).listen(8090);
console.log('server running at localhost:8090');