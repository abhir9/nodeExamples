var async= require('async');

async.waterfall([
		function(callback)
		{
			console.log('first step');
			callback(null,'1','2');
		},
		function(arg1,arg2,callback)
		{
			console.log('second step--> \n\t arg1'+arg1+'   arg2'+arg2);	
			callback(null,(arg1+arg2));
		},
		function(finalresult,callback)
		{
			console.log('third step--> \n\t finalresult is'+finalresult);
			callback(null,finalresult);
		}
	],
	function(err,result)
	{
		console.log('result is '+result);
	}
);

