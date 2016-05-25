var mongoose=require('mongoose');
var Schema = require('mongoose').Schema;


var HumanSchema= new Schema(
{
  name:String,
  username:{type:String,required:true},
  password:{type:String,required:true},
  admin:Boolean
});


module.exports = mongoose.model('Human', HumanSchema);
