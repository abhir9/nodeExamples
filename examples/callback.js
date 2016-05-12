

function evenDoubler(value,callback)
{
	var time= Math.floor(Math.random()*(1000+1));
	if(value%2)
	{
		setTimeout(function(){
			callback(new Error('not even'));
		},time);
	}
	else{
			setTimeout(function(){
			callback(null,value*2,time);
		},time);	
	}
};

for(var i=0;i<10;i++)
{
var call=evenDoubler(i, function(err,result,time){
	if(err)
	{
		console.log('something went wrong : '+
		err.message);
	}
	else{
		console.log('result is :'+result+' in '+time+' sec');
	}
	
});
};