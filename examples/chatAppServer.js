var net = require('net');

var clients =[];
net.createServer(function(socket){

socket.name= socket.remoteAddress+':'+socket.remotePort;

clients.push(socket);

socket.write('welcome '+socket.name);
broadcast('\n'+socket.name+' is online \n',socket);

socket.on('data',function(data){
broadcast('\n'+socket.name+' > '+data,socket+'\n');
});
socket.on('end',function(){
clients.splice(clients.indexOf(socket),1);
broadcast(socket.name+' is offline \n');

})

function broadcast(message,sender)
{
clients.forEach(function(client)
{
if(client===sender)
return;
client.write(message);
})
process.stdout.write(message);
}

}).listen(9080);
console.log('chat app running at port:9080');