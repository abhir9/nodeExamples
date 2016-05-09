var events = require('events');
var eventEmitter = new events.EventEmitter();

var data ='abhi';


var ringBell = function ringBell(data)
	{
	console.log('Hi !'+data+' please open the door');
	}

    eventEmitter.on('doorOpen', ringBell);
    eventEmitter.emit('doorOpen','Abhi');	
