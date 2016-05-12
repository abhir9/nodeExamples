var async= require('async');

async.series([
		function(callback)
		{
			console.log('first step');
			callback(null,'1','2');
		},
		function(callback)
		{
			console.log('second step--> \n\t ');	
			callback(null,'3');
		},
		function(callback)
		{
			finalresult='4';
			console.log('third step--> \n\t finalresult is'+finalresult);
			callback(null,finalresult);
		}
	],
	function(err,result)
	{
		console.log('result is '+result);
	}
);

