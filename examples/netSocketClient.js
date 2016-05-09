var net = require('net');

var client = new net.Socket();
client.connect(9080,'127.0.0.1',function(){
		console.log('connected');
			client.write('hello' );
})
client.on('data',function(data)
{
	console.log('Recieved Data'+data);
})