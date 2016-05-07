var fs= require('fs');

//Asychronously read
fs.readFile('FirstApp.js',function(err,data){
	if(err)
		console.log(err);
	else
		console.log(data.toString());
});

//Asychronously write
var demodata='my name is abhimanyu singh rathore';
fs.writeFile('demo.txt', demodata, function(err)
	{
	if(err)
		console.log(err);
	else
	console.log('file created successfully');
		
});
