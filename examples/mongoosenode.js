// Retrieve
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Connect to the db
mongoose.connect('mongodb://localhost:27017/Demo',function(err){
	if(!err)
		console.log('connected successfull');
	else
		console.log('not connected'+err);
		
});
var userSchema= new Schema({
	name: String,
	username : {type: String, required: true},
	password : {type: String, required: true},
	admin 	 : Boolean,
	created_at: Date,
	updated_at:Date
});

var User= mongoose.model('User',userSchema);
//model.export=User;
