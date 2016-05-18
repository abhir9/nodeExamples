// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/Demo", function(err, db) {
  if(!err) {
    console.log("We are connected");
	}
	//console.log("db="+JSON.stringify(db));
	var insertData={
		'name':'dell',
		'location':'india'
	};
	db.collection('company').insert(insertData,function(err,data){
		if(!err)
			console.log('record added successfully'+JSON.stringify(data));
	});
	db.collection('company').insert(insertData,function(err,data){
		if(!err)
			console.log('record added successfully'+JSON.stringify(data));
	});
	
	
});