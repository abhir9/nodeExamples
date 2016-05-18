var MongoClient = require('mongodb').MongoClient;
var assert =require('assert');

var url='mongodb://localhost:27017/demo';
MongoClient.connect(url,function(err,db)
{
	assert.equal(null,err);
	console.log('connected to server');
	var insertDocuments = function(db, callback) {
  // Get the documents collection 
  var collection = db.collection('company');
  // Insert some documents 
  collection.insertMany([
    {'name' : 'dell','location' : 'china'}, {'name' : 'dell1','location' : 'china1'}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}
	db.close();
});