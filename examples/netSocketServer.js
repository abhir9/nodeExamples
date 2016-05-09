var net = require('net');

var netSocket = net.createServer(function(socket){
	  console.log("client connected!!!!");

	socket.on('data',function(data)
	{
		console.log("server receive: " + data.toString("utf8"));
		socket.write(data);
	});
	socket.on('error',function(ex)
	{
		console.log(ex);
	});
}).listen(8090);
