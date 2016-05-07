var fs= require('fs');


//sychronously read
var file = fs.readFileSync('FirstApp.js','utf-8')
{		console.log(file.toString());
};

//sychronously write
var demodata='my name is abhimanyu singh rathore';
var file = fs.writeFileSync('demo.txt',demodata)
{
	stats=fs.lstatSync('./');
if(stats.isDirectory())
console.log('file created successfully');


};
