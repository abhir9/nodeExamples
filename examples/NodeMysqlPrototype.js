var http = require('http');
var mysql = require('mysql');

var mysqlcls =function(host,port,user,password,database)
{
	this.host=host;
	this.port=port;
	this.user=user;
	this.password=password;
	this.database=database;
	this.connection=null;
};
mysqlcls.prototype=
{
	connect:function()
	{
		this.connection=mysql.createConnection({
			host:this.host,
			port:this.port,
			user:this.user,
			password:this.password,
			database:this.database
		});
	},
	close:function(){
		if(this.connection){
			this.connection.end();
			this.connection=null;
		}
	},
	select: function(query ,callback){
		console.log(query);
		this.connection.query(query,callback);
	}
	
};

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	//response.end('hello world');
	var mySqlObj= new mysqlcls('127.0.0.1',3306,'root','root','employees');
	mySqlObj.connect();
	mySqlObj.connection.query('select * from employees',function(err,rows){
		if(err)
			console.log(err);
		else
			response.write(JSON.stringify(rows));
		response.end();
	});
	mySqlObj.close();
	
}).listen(9080);

console.log('server running at http://127.0.0.1:9080');